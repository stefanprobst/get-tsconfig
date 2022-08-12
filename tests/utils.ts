import path from 'path';
import fs from 'fs/promises';
import { execa } from 'execa';
import type { TsConfigJson } from 'type-fest';

export const tsconfigJson = (
	tsconfig: TsConfigJson,
) => JSON.stringify(
	tsconfig,
	null,
	'\t',
);

const randomId = () => Math.random().toString(36).slice(2);

const tscPath = path.resolve('node_modules/.bin/tsc');

export async function getTscTsconfig(
	cwd: string,
): Promise<TsConfigJson> {
	const tscProcess = await execa(
		tscPath,
		['--showConfig'],
		{ cwd },
	);

	return JSON.parse(tscProcess.stdout);
}

const resolveAttemptPattern = /^(File|Directory) '(.+)' (exist|does not exist).*?(use it as a name resolution result\.)?$/gm;

const resolvedPattern = /successfully resolved to '(.+)'/;

const divider = '='.repeat(8);

async function parseTscResolve(
	stdout: string,
	request: string,
) {
	const logStartIndex = stdout.indexOf(
		'\n',
		stdout.indexOf(`${divider} Resolving module '${request}'`),
	) + 1;

	const logEndIndex = stdout.indexOf(`${divider} Module name `, logStartIndex);
	const resolvedToStartIndex = logEndIndex + divider.length;
	const resolvedToEndIndex = stdout.indexOf(divider, resolvedToStartIndex);

	const resolveLog = stdout.slice(
		logStartIndex,
		logEndIndex,
	);
	const resolvedToMessage = stdout.slice(resolvedToStartIndex, resolvedToEndIndex);
	const resolvedResult = resolvedToMessage.match(resolvedPattern);
	const resolved = resolvedResult?.[1];
	const resolveAttempts = resolveLog.matchAll(resolveAttemptPattern);
	const attempts = Array.from(resolveAttempts).map((
		[, type, filePath, exists, resolved],
	) => ({
		type,
		filePath,
		exists: exists === 'exist',
		resolved: Boolean(resolved),
	}));

	return {
		resolved,
		attempts,
	};
}

export async function getTscResolution(
	request: string,
	fixturePath: string,
) {
	const filePath = path.join(fixturePath, `${randomId()}.ts`);

	await Promise.all([
		fs.writeFile(
			filePath,
			`import '${request}'`,
		),

		// Create empty directory with name so it looks into files in directory
		// fs.mkdir(path.join(fixturePath, request)),
	]);

	const { stdout } = await execa(
		tscPath,
		[
			'--traceResolution',
			'--noEmit',
		],
		{ cwd: fixturePath },
	);

	const parsed = await parseTscResolve(stdout, request);

	await fs.rm(filePath, {
		force: true,
	});

	return parsed;
}
