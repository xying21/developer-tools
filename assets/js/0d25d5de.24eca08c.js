"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5611],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,k=u["".concat(c,".").concat(d)]||u[d]||h[d]||i;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6200:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>l,toc:()=>p,default:()=>u});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"mint-sudt-via-contract",title:"Mint SUDT via Contract"},c=void 0,l={unversionedId:"essays/mint-sudt-via-contract",id:"essays/mint-sudt-via-contract",title:"Mint SUDT via Contract",description:"Authored by Wenchao Hu",source:"@site/docs/essays/mint-sudt-via-contract.md",sourceDirName:"essays",slug:"/essays/mint-sudt-via-contract",permalink:"/developer-tools/docs/essays/mint-sudt-via-contract",tags:[],version:"current",frontMatter:{id:"mint-sudt-via-contract",title:"Mint SUDT via Contract"},sidebar:"Essays",previous:{title:"Integrity Check for CKB Release",permalink:"/developer-tools/docs/essays/integrity-check"},next:{title:"Introduction of PW-lock",permalink:"/developer-tools/docs/essays/pw-lock"}},p=[{value:"SUDT review",id:"sudt-review",children:[],level:2},{value:"lockscript as contract",id:"lockscript-as-contract",children:[],level:2},{value:"simplified ETH bridge",id:"simplified-eth-bridge",children:[],level:2}],h={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Authored by ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/huwenchao"},"Wenchao Hu"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://talk.nervos.org/t/rfc-simple-udt-draft-spec/4333"},"Simple User Defined Tokens(Simple UDT or SUDT)")," is a simple specification which provides a way for dapp developers to issue custom tokens on Nervos CKB."),(0,i.kt)("p",null,"It may be familiar for users to use ",(0,i.kt)("inlineCode",{parentName:"p"},"SECP256K1/blake160")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SECP256K1/multisig")," to guard tokens, just like what we do with CKB. But how can we mint sUDT via contract?"),(0,i.kt)("p",null,"We encountered this problem when we are developing ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/toCKB"},"toCKB"),", a trustless way maps assets on other blockchains to CKB. Here we will share a pattern to do this."),(0,i.kt)("h2",{id:"sudt-review"},"SUDT review"),(0,i.kt)("p",null,"Let's recall the SUDT spec first before we dig into the mint programming pattern."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A SUDT cell in Simple SUDT specification looks like following:")),(0,i.kt)("blockquote",null,(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre"},"data:\n    amount: uint128\ntype:\n    code_hash: simple_udt type script\n    args: owner lock script hash (...)\nlock:\n    <user_defined>\n"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The following rules should be met in a SUDT Cell:")),(0,i.kt)("blockquote",null,(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Simple UDT Rule 1: a SUDT cell must store SUDT amount in the first 16 bytes of cell data segment, the amount should be stored as little endian, 128-bit unsigned integer format. In the case of composable scripts, the SUDT amount must still be located at the initial 16 bytes in the data segment which corresponds to the composed SUDT script"),(0,i.kt)("li",{parentName:"ul"},"Simple UDT Rule 2: the first 32 bytes of the SUDT cell\u2019s type script args must store the lock script hash of owner lock."),(0,i.kt)("li",{parentName:"ul"},"Simple UDT Rule 3: each SUDT must have unique type script, in other words, 2 SUDT cells using the same type script are considered to be the same SUDT."))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"User shall use any lock script as they wish in the SUDT Cell.")),(0,i.kt)("p",null,"You can find more details ",(0,i.kt)("a",{parentName:"p",href:"https://talk.nervos.org/t/rfc-simple-udt-draft-spec/4333"},"here"),"."),(0,i.kt)("p",null,"The owner lock script hash in type args specify the owner. As long as the lock script shows in transaction inputs, we should consider it as ",(0,i.kt)("inlineCode",{parentName:"p"},"owner mode"),". In owner mode, the SUDT script will not check the equality of amount between inputs and outputs, which means we can mint or burn token in this mode."),(0,i.kt)("p",null,"If we use ",(0,i.kt)("inlineCode",{parentName:"p"},"SECP256K1/blake160")," as SUDT type args lockscript, the one who has the associated private key can mint this token."),(0,i.kt)("p",null,"If we use ",(0,i.kt)("inlineCode",{parentName:"p"},"SECP256K1/multisig")," as SUDT type args lockscript, the majority of the committee can mint this token."),(0,i.kt)("p",null,"If we want to mint token via contract, we should translate our contract logic into a lockscript."),(0,i.kt)("h2",{id:"lockscript-as-contract"},"lockscript as contract"),(0,i.kt)("p",null,"On CKB, contracts are scripts which will be run during the transaction."),(0,i.kt)("p",null,"If our business is stateless, we can use a single lockscript to do this.\nFor example, if you want to crate a new token, any one who provides the answer to life, the universe and everything can be the token owner.\nWe can use a lockscript like below as our token args:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"let arg = load_first_witness();\nif arg == 42 {\n    return 0;\n} else {\n    return 1;\n}\n")),(0,i.kt)("p",null,"If you create and publish this token, anyone can compose a transaction, provide ",(0,i.kt)("inlineCode",{parentName:"p"},"42")," as the first witness to enter the owner mode, mint or burn any amount of token as they wish."),(0,i.kt)("p",null,"More often our business logics are associated with some states.\nE.g. in a uniswap like DEX, when someone deposit some liquidity, the contract mint liquidity token, in a cross chain bridge, when someone relay a legal spv proof to the contract, the contract mint the mirror token. How can we achieve this?"),(0,i.kt)("p",null,"We can delegate the verify logic of the lockscript to a typescript, use the cell data as our state and verify the state transfer in the typescript."),(0,i.kt)("p",null,"Let's go through a simple example to see how to do this."),(0,i.kt)("h2",{id:"simplified-eth-bridge"},"simplified ETH bridge"),(0,i.kt)("p",null,"Let's take a simplified ETH bridge as an example.\nWhen someone relays a spv proof which indicates he locks some token into the bridge contract on ETH, we mint the mirror token(we can name it cETH) on CKB."),(0,i.kt)("p",null,"We will need 3 scripts here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A eth-bridge-typescript to handle the spv proof verification logic."),(0,i.kt)("li",{parentName:"ul"},"A eth-bridge-lockscript to be used as SUDT typescript args and delegate the verify logic to eth-bridge typescript."),(0,i.kt)("li",{parentName:"ul"},"A SUDT typescript which represents cETH.")),(0,i.kt)("p",null,"The transaction structure which mints cETH is like below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Inputs:\n    eth-bridge-cell:\n        Type:\n            code: eth-bridge-typescript\n            args: id\n        Lock:\n            code: eth-bridge-lockscript\n            args: eth-bridge-typescript-code-hash\n        Data:\n            eth_light_client_data\n            records: [(block_hash, tx_index)]\n    provide-capacity-cell\n        Type: None\n        Lock: <User Lockscript>\nOutputs:\n    eth-bridge-cell:\n        Type:\n            code: eth-bridge-typescript\n            args: id\n        Lock:\n            code: eth-bridge-lockscript\n            args: eth-bridge-typescript-code-hash\n        Data:\n            eth_light_client_data\n            records: [(block_hash, tx_index)]\n    cETH-token-cell:\n        Type:\n            code: SUDT-typescript\n            args: eth-bridge-lockscript-hash\n            data: amount\n        Lock:\n            <User Lockscript>\nWitnesses:\n    0: eth-spv-proof\n    1: signature to unlock provide-capacity-cell\n")),(0,i.kt)("p",null,"The scripts verify logics below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"eth-bridge-typescript",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ensure the spv proof in associated witness is valid"),(0,i.kt)("li",{parentName:"ul"},"ensure the handled spv proof is recorded in the cell data to avoid using a single proof to mint cETH multiple times."),(0,i.kt)("li",{parentName:"ul"},"ensure the ETH amount locked on Ethereum equals the amount of cETH we mint"))),(0,i.kt)("li",{parentName:"ul"},"eth-bridge-lockscript",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ensure the associated eth-bridge-typescript represents in outputs, then we know the typescript script will be run in the transaction, it makes the logic delegation work")))),(0,i.kt)("p",null,"But we encountered a new problem.\nWe need the eth-bridge-typescript hash as the eth-bridge-lockscript args, then the eth-bridge-lockscript hash as SUDT-typescript args, but we need to know the cETH token script to check the token amount in eth-bridge-typescript. It we locate cETH token typescript by it's script hash, there will be a cycle dependency."),(0,i.kt)("p",null,"We can use ",(0,i.kt)("inlineCode",{parentName:"p"},"load_lockscript_hash")," in eth-bridge-typescript and then check the entire script (which includes code_hash, args and type) part by part instead of cETH token script hash."),(0,i.kt)("p",null,"The pseudocode is like below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"let lockscript_hash = load_lockscript_hash(0, Source::Output);\nfor script in load_output_typescripts {\n    if script.args = lockscript_hash \\\n        && script.code_hash = SUDT_CODE_HASH \\\n        && script.type = 0 {\n        // This is a cETH token cell\n    }\n}\n")),(0,i.kt)("p",null,"You can check the complete demo ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/huwenchao/mint-sudt-demo"},"here"),".\nThe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/huwenchao/mint-sudt-demo/blob/master/tests/src/tests.rs#L8"},"test file")," shows how to construct a mint transaction using this pattern."))}u.isMDXComponent=!0}}]);