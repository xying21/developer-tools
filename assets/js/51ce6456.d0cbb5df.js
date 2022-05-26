"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=p(n),h=a,d=k["".concat(s,".").concat(h)]||k[h]||m[h]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1100:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>c,toc:()=>m,default:()=>h});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(4996),l=["components"],s={id:"imtoken",title:"imToken & imKey"},p=void 0,c={unversionedId:"basics/guides/crypto wallets/imtoken",id:"basics/guides/crypto wallets/imtoken",title:"imToken & imKey",description:"imToken",source:"@site/docs/basics/guides/crypto wallets/imToken.md",sourceDirName:"basics/guides/crypto wallets",slug:"/basics/guides/crypto wallets/imtoken",permalink:"/developer-tools/docs/basics/guides/crypto wallets/imtoken",tags:[],version:"current",frontMatter:{id:"imtoken",title:"imToken & imKey"},sidebar:"Basics",previous:{title:"Neuron Wallet",permalink:"/developer-tools/docs/basics/guides/crypto wallets/neuron"},next:{title:"SafePal",permalink:"/developer-tools/docs/basics/guides/crypto wallets/safepal"}},m=[{value:"imToken",id:"imtoken",children:[{value:"Transfer CKB",id:"transfer-ckb",children:[],level:3},{value:"Receive CKB",id:"receive-ckb",children:[],level:3}],level:2},{value:"A Word to Note",id:"a-word-to-note",children:[],level:2},{value:"imKey",id:"imkey",children:[],level:2},{value:"Troubleshooting",id:"troubleshooting",children:[],level:2}],k={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"imtoken"},"imToken"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"imToken")," is a mobile wallet that supports encrypted assets on multiple chains."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download and install ",(0,o.kt)("a",{parentName:"p",href:"https://token.im"},"imToken."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open imToken, click ",(0,o.kt)("strong",{parentName:"p"},"Create Identity")," and confirm ",(0,o.kt)("strong",{parentName:"p"},"Terms of Service"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the identity name and the password to create an account. "),(0,o.kt)("img",{src:(0,i.Z)("img/wallet/imtoken_01.png"),width:"30%"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Confirm")," to add the default coins (ETH, BTC, and ATOM) or choose other coins, such as CKB."),(0,o.kt)("img",{src:(0,i.Z)("img/wallet/imtoken_02.png"),width:"30%"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Backup Wallet")," under ",(0,o.kt)("strong",{parentName:"p"},"Manage your identity wallet")," to back up the mnemonic phrase. "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Note"),": Never give the phrase away; otherwise, your coins will be at risk. "),(0,o.kt)("p",{parentName:"li"},"The mnemonic phrase consists of 12 random words. Write them down in a safe place by order. These mnemonic words are required when restoring the wallet. Once the words have been written down, select ",(0,o.kt)("strong",{parentName:"p"},"Confirmed Backup"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Confirm the phrase has been well noted. Choose the word in the correct order, and click ",(0,o.kt)("strong",{parentName:"p"},"Next"),". Now the wallet has been successfully configured."))),(0,o.kt)("h3",{id:"transfer-ckb"},"Transfer CKB"),(0,o.kt)("p",null,"To transfer CKB:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"CKB")," to enter the CKB Wallet. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the CKB balance that is visible under the Assets section. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Send")," to transfer CKB. "),(0,o.kt)("img",{src:(0,i.Z)("img/wallet/imtoken_03.jpeg"),width:"30%"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill in the address of the recipient and the desired transfer amount."),(0,o.kt)("img",{src:(0,i.Z)("img/wallet/imtoken_04.jpg"),width:"30%"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the wallet password, then the payment details will be shown."),(0,o.kt)("img",{src:(0,i.Z)("img/wallet/imtoken_05.jpg"),width:"30%"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once the payment is confirmed, the transaction will be broadcast to the network. Click on ",(0,o.kt)("strong",{parentName:"p"},"Query Details")," to see the on-chain confirmation status of the transaction. The on-chain information can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.nervos.org/"},"Nervos Explorer"),"."),(0,o.kt)("img",{src:(0,i.Z)("img/wallet/imtoken_06.jpg"),width:"30%"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"It takes 24 blocks for a transaction to be confirmed."),(0,o.kt)("img",{src:(0,i.Z)("img/wallet/imtoken_07.jpg"),width:"30%"}))),(0,o.kt)("h3",{id:"receive-ckb"},"Receive CKB"),(0,o.kt)("p",null,"To receive CKB:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"CKB")," to enter the CKB Wallet.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the CKB balance that is visible under the ",(0,o.kt)("strong",{parentName:"p"},"Assets")," section.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Receive"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The QR code and wallet address will appear on the ",(0,o.kt)("strong",{parentName:"p"},"Receive")," page. If both parties are using imToken, simply show the QR code to the sender to receive payment."),(0,o.kt)("img",{src:(0,i.Z)("img/wallet/imtoken_08.JPG"),width:"30%"}))),(0,o.kt)("h2",{id:"a-word-to-note"},"A Word to Note"),(0,o.kt)("p",null,"As the unique Cell model of CKB, there are several things to be aware of for CKB transfers. CKB has a ",(0,o.kt)("strong",{parentName:"p"},"minimum")," transfer amount of ",(0,o.kt)("strong",{parentName:"p"},"61")," CKBs, which means that the transfer amount ",(0,o.kt)("strong",{parentName:"p"},"cannot be less than")," 61 CKBs ",(0,o.kt)("strong",{parentName:"p"},"excluding")," the fee or miner fee."),(0,o.kt)("p",null,"There is no problem transferring all CKBs from the account. In the case of a partial transfer of CKB, if the account balance is less than 61 CKBs, it is impossible to make any future transfers. If the balance is equal to 61, transfers will also be impossible. For an account balance less than 61, the wallet will indicate that the transfer does not meet the required amount or will directly report an error when transferring. Due to the minimum transfer amount requirement, ensure that the account balance is at least 62 CKBs so that the full amount can be transferred the next time. "),(0,o.kt)("h2",{id:"imkey"},"imKey"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"imKey")," is a hardware wallet, or cold wallet. The imKey is used to protect privkeys and other confidential data of the user. imKey is integrated with the CC EAL 6+ security chip, fully compatible with all imToken 2.0 supported digital assets such as BTC, ETH, COSMOS and EROS. For more details and usage processes, see ",(0,o.kt)("a",{parentName:"p",href:"https://support.imkey.im/hc/en-us"},"imkey support"),"."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"Network connection issue is a common cause for data sync failure, such as the problem that withdrawn asset is unreceived in imToken."),(0,o.kt)("p",null,"Try the following process to solve the problem:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Upgrade imToken to the latest version."),(0,o.kt)("li",{parentName:"ol"},"Set up a VPN on the phone."),(0,o.kt)("li",{parentName:"ol"},"If it still doesn't work out, go to My Profile -> Settings -> Network Detection to check the network connection. Copy the detected information and send it to the imToken support team.")))}h.isMDXComponent=!0}}]);