"use strict";var be=Object.defineProperty;var r=(e,t)=>be(e,"name",{value:t,configurable:!0});var a=require("path"),M=require("fs"),we=require("module"),ve=require("resolve-pkg-maps");function B(e){return e.startsWith("\\\\?\\")?e:e.replace(/\\/g,"/")}r(B,"slash");const W=r(e=>{const t=M[e];return(i,...n)=>{const s=`${e}:${n.join(":")}`;let l=i==null?void 0:i.get(s);return l===void 0&&(l=Reflect.apply(t,M,n),i==null||i.set(s,l)),l}},"cacheFs"),_=W("existsSync"),Te=W("readFileSync"),I=W("statSync"),ee=r((e,t,i)=>{for(;;){const n=a.posix.join(e,t);if(_(i,n))return n;const s=a.dirname(e);if(s===e)return;e=s}},"findUp"),J=/^\.{1,2}(\/.*)?$/,R=r(e=>{const t=B(e);return J.test(t)?t:`./${t}`},"normalizePath");function Ae(e,t=!1){const i=e.length;let n=0,s="",l=0,o=16,c=0,f=0,k=0,A=0,p=0;function L(u,g){let m=0,y=0;for(;m<u||!g;){let O=e.charCodeAt(n);if(O>=48&&O<=57)y=y*16+O-48;else if(O>=65&&O<=70)y=y*16+O-65+10;else if(O>=97&&O<=102)y=y*16+O-97+10;else break;n++,m++}return m<u&&(y=-1),y}r(L,"scanHexDigits");function v(u){n=u,s="",l=0,o=16,p=0}r(v,"setPosition");function T(){let u=n;if(e.charCodeAt(n)===48)n++;else for(n++;n<e.length&&E(e.charCodeAt(n));)n++;if(n<e.length&&e.charCodeAt(n)===46)if(n++,n<e.length&&E(e.charCodeAt(n)))for(n++;n<e.length&&E(e.charCodeAt(n));)n++;else return p=3,e.substring(u,n);let g=n;if(n<e.length&&(e.charCodeAt(n)===69||e.charCodeAt(n)===101))if(n++,(n<e.length&&e.charCodeAt(n)===43||e.charCodeAt(n)===45)&&n++,n<e.length&&E(e.charCodeAt(n))){for(n++;n<e.length&&E(e.charCodeAt(n));)n++;g=n}else p=3;return e.substring(u,g)}r(T,"scanNumber");function w(){let u="",g=n;for(;;){if(n>=i){u+=e.substring(g,n),p=2;break}const m=e.charCodeAt(n);if(m===34){u+=e.substring(g,n),n++;break}if(m===92){if(u+=e.substring(g,n),n++,n>=i){p=2;break}switch(e.charCodeAt(n++)){case 34:u+='"';break;case 92:u+="\\";break;case 47:u+="/";break;case 98:u+="\b";break;case 102:u+="\f";break;case 110:u+=`
`;break;case 114:u+="\r";break;case 116:u+="	";break;case 117:const O=L(4,!0);O>=0?u+=String.fromCharCode(O):p=4;break;default:p=5}g=n;continue}if(m>=0&&m<=31)if(P(m)){u+=e.substring(g,n),p=2;break}else p=6;n++}return u}r(w,"scanString");function $(){if(s="",p=0,l=n,f=c,A=k,n>=i)return l=i,o=17;let u=e.charCodeAt(n);if(G(u)){do n++,s+=String.fromCharCode(u),u=e.charCodeAt(n);while(G(u));return o=15}if(P(u))return n++,s+=String.fromCharCode(u),u===13&&e.charCodeAt(n)===10&&(n++,s+=`
`),c++,k=n,o=14;switch(u){case 123:return n++,o=1;case 125:return n++,o=2;case 91:return n++,o=3;case 93:return n++,o=4;case 58:return n++,o=6;case 44:return n++,o=5;case 34:return n++,s=w(),o=10;case 47:const g=n-1;if(e.charCodeAt(n+1)===47){for(n+=2;n<i&&!P(e.charCodeAt(n));)n++;return s=e.substring(g,n),o=12}if(e.charCodeAt(n+1)===42){n+=2;const m=i-1;let y=!1;for(;n<m;){const O=e.charCodeAt(n);if(O===42&&e.charCodeAt(n+1)===47){n+=2,y=!0;break}n++,P(O)&&(O===13&&e.charCodeAt(n)===10&&n++,c++,k=n)}return y||(n++,p=1),s=e.substring(g,n),o=13}return s+=String.fromCharCode(u),n++,o=16;case 45:if(s+=String.fromCharCode(u),n++,n===i||!E(e.charCodeAt(n)))return o=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return s+=T(),o=11;default:for(;n<i&&U(u);)n++,u=e.charCodeAt(n);if(l!==n){switch(s=e.substring(l,n),s){case"true":return o=8;case"false":return o=9;case"null":return o=7}return o=16}return s+=String.fromCharCode(u),n++,o=16}}r($,"scanNext");function U(u){if(G(u)||P(u))return!1;switch(u){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}r(U,"isUnknownContentCharacter");function F(){let u;do u=$();while(u>=12&&u<=15);return u}return r(F,"scanNextNonTrivia"),{setPosition:v,getPosition:()=>n,scan:t?F:$,getToken:()=>o,getTokenValue:()=>s,getTokenOffset:()=>l,getTokenLength:()=>n-l,getTokenStartLine:()=>f,getTokenStartCharacter:()=>l-A,getTokenError:()=>p}}r(Ae,"createScanner");function G(e){return e===32||e===9}r(G,"isWhiteSpace");function P(e){return e===10||e===13}r(P,"isLineBreak");function E(e){return e>=48&&e<=57}r(E,"isDigit");var ne;(function(e){e[e.lineFeed=10]="lineFeed",e[e.carriageReturn=13]="carriageReturn",e[e.space=32]="space",e[e._0=48]="_0",e[e._1=49]="_1",e[e._2=50]="_2",e[e._3=51]="_3",e[e._4=52]="_4",e[e._5=53]="_5",e[e._6=54]="_6",e[e._7=55]="_7",e[e._8=56]="_8",e[e._9=57]="_9",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.g=103]="g",e[e.h=104]="h",e[e.i=105]="i",e[e.j=106]="j",e[e.k=107]="k",e[e.l=108]="l",e[e.m=109]="m",e[e.n=110]="n",e[e.o=111]="o",e[e.p=112]="p",e[e.q=113]="q",e[e.r=114]="r",e[e.s=115]="s",e[e.t=116]="t",e[e.u=117]="u",e[e.v=118]="v",e[e.w=119]="w",e[e.x=120]="x",e[e.y=121]="y",e[e.z=122]="z",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.G=71]="G",e[e.H=72]="H",e[e.I=73]="I",e[e.J=74]="J",e[e.K=75]="K",e[e.L=76]="L",e[e.M=77]="M",e[e.N=78]="N",e[e.O=79]="O",e[e.P=80]="P",e[e.Q=81]="Q",e[e.R=82]="R",e[e.S=83]="S",e[e.T=84]="T",e[e.U=85]="U",e[e.V=86]="V",e[e.W=87]="W",e[e.X=88]="X",e[e.Y=89]="Y",e[e.Z=90]="Z",e[e.asterisk=42]="asterisk",e[e.backslash=92]="backslash",e[e.closeBrace=125]="closeBrace",e[e.closeBracket=93]="closeBracket",e[e.colon=58]="colon",e[e.comma=44]="comma",e[e.dot=46]="dot",e[e.doubleQuote=34]="doubleQuote",e[e.minus=45]="minus",e[e.openBrace=123]="openBrace",e[e.openBracket=91]="openBracket",e[e.plus=43]="plus",e[e.slash=47]="slash",e[e.formFeed=12]="formFeed",e[e.tab=9]="tab"})(ne||(ne={})),new Array(20).fill(0).map((e,t)=>" ".repeat(t));const N=200;new Array(N).fill(0).map((e,t)=>`
`+" ".repeat(t)),new Array(N).fill(0).map((e,t)=>"\r"+" ".repeat(t)),new Array(N).fill(0).map((e,t)=>`\r
`+" ".repeat(t)),new Array(N).fill(0).map((e,t)=>`
`+"	".repeat(t)),new Array(N).fill(0).map((e,t)=>"\r"+"	".repeat(t)),new Array(N).fill(0).map((e,t)=>`\r
`+"	".repeat(t));var d;(function(e){e.DEFAULT={allowTrailingComma:!1}})(d||(d={}));function Oe(e,t=[],i=d.DEFAULT){let n=null,s=[];const l=[];function o(f){Array.isArray(s)?s.push(f):n!==null&&(s[n]=f)}return r(o,"onValue"),je(e,{onObjectBegin:()=>{const f={};o(f),l.push(s),s=f,n=null},onObjectProperty:f=>{n=f},onObjectEnd:()=>{s=l.pop()},onArrayBegin:()=>{const f=[];o(f),l.push(s),s=f,n=null},onArrayEnd:()=>{s=l.pop()},onLiteralValue:o,onError:(f,k,A)=>{t.push({error:f,offset:k,length:A})}},i),s[0]}r(Oe,"parse$1");function je(e,t,i=d.DEFAULT){const n=Ae(e,!1),s=[];function l(b){return b?()=>b(n.getTokenOffset(),n.getTokenLength(),n.getTokenStartLine(),n.getTokenStartCharacter()):()=>!0}r(l,"toNoArgVisit");function o(b){return b?()=>b(n.getTokenOffset(),n.getTokenLength(),n.getTokenStartLine(),n.getTokenStartCharacter(),()=>s.slice()):()=>!0}r(o,"toNoArgVisitWithPath");function c(b){return b?j=>b(j,n.getTokenOffset(),n.getTokenLength(),n.getTokenStartLine(),n.getTokenStartCharacter()):()=>!0}r(c,"toOneArgVisit");function f(b){return b?j=>b(j,n.getTokenOffset(),n.getTokenLength(),n.getTokenStartLine(),n.getTokenStartCharacter(),()=>s.slice()):()=>!0}r(f,"toOneArgVisitWithPath");const k=o(t.onObjectBegin),A=f(t.onObjectProperty),p=l(t.onObjectEnd),L=o(t.onArrayBegin),v=l(t.onArrayEnd),T=f(t.onLiteralValue),w=c(t.onSeparator),$=l(t.onComment),U=c(t.onError),F=i&&i.disallowComments,u=i&&i.allowTrailingComma;function g(){for(;;){const b=n.scan();switch(n.getTokenError()){case 4:m(14);break;case 5:m(15);break;case 3:m(13);break;case 1:F||m(11);break;case 2:m(12);break;case 6:m(16);break}switch(b){case 12:case 13:F?m(10):$();break;case 16:m(1);break;case 15:case 14:break;default:return b}}}r(g,"scanNext");function m(b,j=[],C=[]){if(U(b),j.length+C.length>0){let D=n.getToken();for(;D!==17;){if(j.indexOf(D)!==-1){g();break}else if(C.indexOf(D)!==-1)break;D=g()}}}r(m,"handleError");function y(b){const j=n.getTokenValue();return b?T(j):(A(j),s.push(j)),g(),!0}r(y,"parseString");function O(){switch(n.getToken()){case 11:const b=n.getTokenValue();let j=Number(b);isNaN(j)&&(m(2),j=0),T(j);break;case 7:T(null);break;case 8:T(!0);break;case 9:T(!1);break;default:return!1}return g(),!0}r(O,"parseLiteral");function me(){return n.getToken()!==10?(m(3,[],[2,5]),!1):(y(!1),n.getToken()===6?(w(":"),g(),S()||m(4,[],[2,5])):m(5,[],[2,5]),s.pop(),!0)}r(me,"parseProperty");function ge(){k(),g();let b=!1;for(;n.getToken()!==2&&n.getToken()!==17;){if(n.getToken()===5){if(b||m(4,[],[]),w(","),g(),n.getToken()===2&&u)break}else b&&m(6,[],[]);me()||m(4,[],[2,5]),b=!0}return p(),n.getToken()!==2?m(7,[2],[]):g(),!0}r(ge,"parseObject");function ke(){L(),g();let b=!0,j=!1;for(;n.getToken()!==4&&n.getToken()!==17;){if(n.getToken()===5){if(j||m(4,[],[]),w(","),g(),n.getToken()===4&&u)break}else j&&m(6,[],[]);b?(s.push(0),b=!1):s[s.length-1]++,S()||m(4,[],[4,5]),j=!0}return v(),b||s.pop(),n.getToken()!==4?m(8,[4],[]):g(),!0}r(ke,"parseArray");function S(){switch(n.getToken()){case 3:return ke();case 1:return ge();case 10:return y(!0);default:return O()}}return r(S,"parseValue"),g(),n.getToken()===17?i.allowEmptyContent?!0:(m(4,[],[]),!1):S()?(n.getToken()!==17&&m(9,[],[]),!0):(m(4,[],[]),!1)}r(je,"visit");var te;(function(e){e[e.None=0]="None",e[e.UnexpectedEndOfComment=1]="UnexpectedEndOfComment",e[e.UnexpectedEndOfString=2]="UnexpectedEndOfString",e[e.UnexpectedEndOfNumber=3]="UnexpectedEndOfNumber",e[e.InvalidUnicode=4]="InvalidUnicode",e[e.InvalidEscapeCharacter=5]="InvalidEscapeCharacter",e[e.InvalidCharacter=6]="InvalidCharacter"})(te||(te={}));var ie;(function(e){e[e.OpenBraceToken=1]="OpenBraceToken",e[e.CloseBraceToken=2]="CloseBraceToken",e[e.OpenBracketToken=3]="OpenBracketToken",e[e.CloseBracketToken=4]="CloseBracketToken",e[e.CommaToken=5]="CommaToken",e[e.ColonToken=6]="ColonToken",e[e.NullKeyword=7]="NullKeyword",e[e.TrueKeyword=8]="TrueKeyword",e[e.FalseKeyword=9]="FalseKeyword",e[e.StringLiteral=10]="StringLiteral",e[e.NumericLiteral=11]="NumericLiteral",e[e.LineCommentTrivia=12]="LineCommentTrivia",e[e.BlockCommentTrivia=13]="BlockCommentTrivia",e[e.LineBreakTrivia=14]="LineBreakTrivia",e[e.Trivia=15]="Trivia",e[e.Unknown=16]="Unknown",e[e.EOF=17]="EOF"})(ie||(ie={}));const $e=Oe;var se;(function(e){e[e.InvalidSymbol=1]="InvalidSymbol",e[e.InvalidNumberFormat=2]="InvalidNumberFormat",e[e.PropertyNameExpected=3]="PropertyNameExpected",e[e.ValueExpected=4]="ValueExpected",e[e.ColonExpected=5]="ColonExpected",e[e.CommaExpected=6]="CommaExpected",e[e.CloseBraceExpected=7]="CloseBraceExpected",e[e.CloseBracketExpected=8]="CloseBracketExpected",e[e.EndOfFileExpected=9]="EndOfFileExpected",e[e.InvalidCommentToken=10]="InvalidCommentToken",e[e.UnexpectedEndOfComment=11]="UnexpectedEndOfComment",e[e.UnexpectedEndOfString=12]="UnexpectedEndOfString",e[e.UnexpectedEndOfNumber=13]="UnexpectedEndOfNumber",e[e.InvalidUnicode=14]="InvalidUnicode",e[e.InvalidEscapeCharacter=15]="InvalidEscapeCharacter",e[e.InvalidCharacter=16]="InvalidCharacter"})(se||(se={}));const le=r((e,t)=>$e(Te(t,e,"utf8")),"readJsonc"),z=Symbol("implicitBaseUrl"),ye=r(()=>{const{findPnpApi:e}=we;return e&&e(process.cwd())},"getPnpApi"),Q=r((e,t,i,n)=>{const s=`resolveFromPackageJsonPath:${e}:${t}:${i}`;if(n!=null&&n.has(s))return n.get(s);const l=le(e,n);if(!l)return;let o=t||"tsconfig.json";if(!i&&l.exports)try{const[c]=ve.resolveExports(l.exports,t,["require","types"]);o=c}catch{return!1}else!t&&l.tsconfig&&(o=l.tsconfig);return o=a.join(e,"..",o),n==null||n.set(s,o),o},"resolveFromPackageJsonPath"),H="package.json",q="tsconfig.json",Be=r((e,t,i)=>{let n=e;if(e===".."&&(n=a.join(n,q)),e[0]==="."&&(n=a.resolve(t,n)),a.isAbsolute(n)){if(_(i,n)){if(I(i,n).isFile())return n}else if(!n.endsWith(".json")){const v=`${n}.json`;if(_(i,v))return v}return}const[s,...l]=e.split("/"),o=s[0]==="@"?`${s}/${l.shift()}`:s,c=l.join("/"),f=ye();if(f){const{resolveRequest:v}=f;try{if(o===e){const T=v(a.join(o,H),t);if(T){const w=Q(T,c,!1,i);if(w&&_(i,w))return w}}else{let T;try{T=v(e,t,{extensions:[".json"]})}catch{T=v(a.join(e,q),t)}if(T)return T}}catch{}}const k=ee(a.resolve(t),a.join("node_modules",o),i);if(!k||!I(i,k).isDirectory())return;const A=a.join(k,H);if(_(i,A)){const v=Q(A,c,!1,i);if(v===!1)return;if(v&&_(i,v)&&I(i,v).isFile())return v}const p=a.join(k,c),L=p.endsWith(".json");if(!L){const v=`${p}.json`;if(_(i,v))return v}if(_(i,p)){if(I(i,p).isDirectory()){const v=a.join(p,H);if(_(i,v)){const w=Q(v,"",!0,i);if(w&&_(i,w))return w}const T=a.join(p,q);if(_(i,T))return T}else if(L)return p}},"resolveExtendsPath"),K=class K extends Error{};r(K,"TsconfigError");let x=K;const _e=r((e,t,i,n)=>{const s=a.dirname(t),l=Be(e,s,n);if(!l)throw new x(`${a.relative(process.cwd(),t)}: File '${e}' not found.`);if(i.has(l))throw new x(`Circularity detected while resolving configuration: ${l}`);i.add(l);const o=a.dirname(l),c=oe(l,n,i);delete c.references;const{compilerOptions:f}=c;if(f){const k=["baseUrl","outDir"];for(const A of k){const p=f[A];p&&(f[A]=B(a.relative(s,a.join(o,p)))||"./")}}return c.files&&(c.files=c.files.map(k=>B(a.relative(s,a.join(o,k))))),c.include&&(c.include=c.include.map(k=>B(a.relative(s,a.join(o,k))))),c.exclude&&(c.exclude=c.exclude.map(k=>B(a.relative(s,a.join(o,k))))),c},"resolveExtends"),oe=r((e,t,i=new Set)=>{let n;try{n=le(e,t)||{}}catch{throw new x(`Cannot resolve tsconfig at path: ${e}`)}if(typeof n!="object")throw new SyntaxError(`Failed to parse tsconfig at: ${e}`);const s=a.dirname(e);if(n.compilerOptions){const{compilerOptions:l}=n;l.paths&&!l.baseUrl&&(l[z]=s)}if(n.extends){const l=Array.isArray(n.extends)?n.extends:[n.extends];delete n.extends;for(const o of l.reverse()){const c=_e(o,e,new Set(i),t),f={...c,...n,compilerOptions:{...c.compilerOptions,...n.compilerOptions}};c.watchOptions&&(f.watchOptions={...c.watchOptions,...n.watchOptions}),n=f}}if(n.compilerOptions){const{compilerOptions:l}=n,o=["baseUrl","rootDir"];for(const f of o){const k=l[f];if(k){const A=a.resolve(s,k),p=R(a.relative(s,A));l[f]=p}}const{outDir:c}=l;c&&(Array.isArray(n.exclude)||(n.exclude=[]),n.exclude.includes(c)||n.exclude.push(c),l.outDir=R(c))}else n.compilerOptions={};if(n.files&&(n.files=n.files.map(R)),n.include&&(n.include=n.include.map(B)),n.watchOptions){const{watchOptions:l}=n;l.excludeDirectories&&(l.excludeDirectories=l.excludeDirectories.map(o=>B(a.resolve(s,o))))}return n},"_parseTsconfig"),re=r((e,t=new Map)=>oe(e,t),"parseTsconfig"),Le=r((e=process.cwd(),t="tsconfig.json",i=new Map)=>{const n=ee(B(e),t,i);if(!n)return null;const s=re(n,i);return{path:n,config:s}},"getTsconfig"),Ue=/\*/g,ue=r((e,t)=>{const i=e.match(Ue);if(i&&i.length>1)throw new Error(t)},"assertStarCount"),Fe=r(e=>{if(e.includes("*")){const[t,i]=e.split("*");return{prefix:t,suffix:i}}return e},"parsePattern"),Ee=r(({prefix:e,suffix:t},i)=>i.startsWith(e)&&i.endsWith(t),"isPatternMatch"),Ne=r((e,t,i)=>Object.entries(e).map(([n,s])=>(ue(n,`Pattern '${n}' can have at most one '*' character.`),{pattern:Fe(n),substitutions:s.map(l=>{if(ue(l,`Substitution '${l}' in pattern '${n}' can have at most one '*' character.`),!t&&!J.test(l))throw new Error("Non-relative paths are not allowed when 'baseUrl' is not set. Did you forget a leading './'?");return a.resolve(i,l)})})),"parsePaths"),Pe=r(e=>{if(!e.config.compilerOptions)return null;const{baseUrl:t,paths:i}=e.config.compilerOptions,n=z in e.config.compilerOptions&&e.config.compilerOptions[z];if(!t&&!i)return null;const s=a.resolve(a.dirname(e.path),t||n||"."),l=i?Ne(i,t,s):[];return o=>{if(J.test(o))return[];const c=[];for(const p of l){if(p.pattern===o)return p.substitutions.map(B);typeof p.pattern!="string"&&c.push(p)}let f,k=-1;for(const p of c)Ee(p.pattern,o)&&p.pattern.prefix.length>k&&(k=p.pattern.prefix.length,f=p);if(!f)return t?[B(a.join(s,o))]:[];const A=o.slice(f.pattern.prefix.length,o.length-f.pattern.suffix.length);return f.substitutions.map(p=>B(p.replace("*",A)))}},"createPathsMatcher"),ce=r(e=>{let t="";for(let i=0;i<e.length;i+=1){const n=e[i],s=n.toUpperCase();t+=n===s?n.toLowerCase():s}return t},"s"),xe=65,De=97,Ie=r(()=>Math.floor(Math.random()*26),"m"),de=r(e=>Array.from({length:e},()=>String.fromCodePoint(Ie()+(Math.random()>.5?xe:De))).join(""),"S"),he=r((e=M)=>{const t=process.execPath;if(e.existsSync(t))return!e.existsSync(ce(t));const i=`/${de(10)}`;e.writeFileSync(i,"");const n=!e.existsSync(ce(i));return e.unlinkSync(i),n},"l"),{join:h}=a.posix,X={ts:[".ts",".tsx",".d.ts"],cts:[".cts",".d.cts"],mts:[".mts",".d.mts"]},Ve=r(e=>{const t=[...X.ts],i=[...X.cts],n=[...X.mts];return e!=null&&e.allowJs&&(t.push(".js",".jsx"),i.push(".cjs"),n.push(".mjs")),[...t,...i,...n]},"getSupportedExtensions"),Se=r(e=>{const t=[];if(!e)return t;const{outDir:i,declarationDir:n}=e;return i&&t.push(i),n&&t.push(n),t},"getDefaultExcludeSpec"),fe=r(e=>e.replaceAll(/[.*+?^${}()|[\]\\]/g,"\\$&"),"escapeForRegexp"),Me=["node_modules","bower_components","jspm_packages"],Y=`(?!(${Me.join("|")})(/|$))`,We=/(?:^|\/)[^.*?]+$/,pe="**/*",V="[^/]",Z="[^./]",ae=process.platform==="win32",Je=r(({config:e,path:t},i=he())=>{if("extends"in e)throw new Error("tsconfig#extends must be resolved. Use getTsconfig or parseTsconfig to resolve it.");if(!a.isAbsolute(t))throw new Error("The tsconfig path must be absolute");ae&&(t=B(t));const n=a.dirname(t),{files:s,include:l,exclude:o,compilerOptions:c}=e,f=s==null?void 0:s.map(w=>h(n,w)),k=Ve(c),A=i?"":"i",L=(o||Se(c)).map(w=>{const $=h(n,w),U=fe($).replaceAll("\\*\\*/","(.+/)?").replaceAll("\\*",`${V}*`).replaceAll("\\?",V);return new RegExp(`^${U}($|/)`,A)}),v=s||l?l:[pe],T=v?v.map(w=>{let $=h(n,w);We.test($)&&($=h($,pe));const U=fe($).replaceAll("/\\*\\*",`(/${Y}${Z}${V}*)*?`).replaceAll(/(\/)?\\\*/g,(F,u)=>{const g=`(${Z}|(\\.(?!min\\.js$))?)*`;return u?`/${Y}${Z}${g}`:g}).replaceAll(/(\/)?\\\?/g,(F,u)=>{const g=V;return u?`/${Y}${g}`:g});return new RegExp(`^${U}$`,A)}):void 0;return w=>{if(!a.isAbsolute(w))throw new Error("filePath must be absolute");if(ae&&(w=B(w)),f!=null&&f.includes(w))return e;if(!(!k.some($=>w.endsWith($))||L.some($=>$.test(w)))&&T&&T.some($=>$.test(w)))return e}},"createFilesMatcher");exports.createFilesMatcher=Je,exports.createPathsMatcher=Pe,exports.getTsconfig=Le,exports.parseTsconfig=re;
