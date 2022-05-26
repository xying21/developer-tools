"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2332],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,k=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4346:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>l,toc:()=>d,default:()=>u});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],c={id:"dependencies",title:"Script dependencies"},s=void 0,l={unversionedId:"essays/dependencies",id:"essays/dependencies",title:"Script dependencies",description:"Deploy a VM and run code on the VM",source:"@site/docs/essays/dependencies.md",sourceDirName:"essays",slug:"/essays/dependencies",permalink:"/developer-tools/docs/essays/dependencies",tags:[],version:"current",frontMatter:{id:"dependencies",title:"Script dependencies"},sidebar:"Essays",previous:{title:"The General Workflow for Constructing a Transaction",permalink:"/developer-tools/docs/essays/rules"},next:{title:"Introduction to CKB Studio",permalink:"/developer-tools/docs/essays/introduction-to-ckb-studio"}},d=[{value:"Deploy a VM and run code on the VM",id:"deploy-a-vm-and-run-code-on-the-vm",children:[],level:2},{value:"Dynamic linking",id:"dynamic-linking",children:[],level:2},{value:"How dependencies work",id:"how-dependencies-work",children:[],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"deploy-a-vm-and-run-code-on-the-vm"},"Deploy a VM and run code on the VM"),(0,o.kt)("p",null,"Since we are working with a virtualized mini computer in CKB VM, there\u2019s nothing stopping us from embedding another VM as a CKB script that runs on CKB VM and in this article we will explore this VM on top of VM path. "),(0,o.kt)("p",null,"Through this method, we can have JavaScript on CKB via duktape, Ruby on CKB via mruby, we can even have Bitcoin Script or EVM on chain if we just compile those VMs and store them as scripts on CKB. This compatibility ensures CKB VM can both help to preserve legacy code and build a diversified ecosystem. "),(0,o.kt)("p",null,"All languages should are treated equal on CKB, giving freedom to blockchain contract developers to build on top of CKB however they feel is best."),(0,o.kt)("p",null,"To use duktape on CKB, first you need to compile duktape itself into a RISC-V executable binary:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git clone https://github.com/xxuejie/ckb-duktape\n$ cd ckb-duktape\n$ git submodule init\n$ git submodule update\n$ sudo docker run --rm -it -v `pwd`:/code nervos/ckb-riscv-gnu-toolchain:xenial bash\nroot@0d31cad7a539:~# cd /code\nroot@0d31cad7a539:/code# make\nriscv64-unknown-elf-gcc -Os -DCKB_NO_MMU -D__riscv_soft_float -D__riscv_float_abi_soft -Iduktape -Ic -Wall -Werror c/entry.c -c -o build/entry.o\nriscv64-unknown-elf-gcc -Os -DCKB_NO_MMU -D__riscv_soft_float -D__riscv_float_abi_soft -Iduktape -Ic -Wall -Werror duktape/duktape.c -c -o build/duktape.o\nriscv64-unknown-elf-gcc build/entry.o build/duktape.o -o build/duktape -lm -Wl,-static -fdata-sections -ffunction-sections -Wl,--gc-sections -Wl,-s\nroot@0d31cad7a539:/code# exit\nexit\n$ ls build/duktape\nbuild/duktape*\n")),(0,o.kt)("p",null,"Here we use the ruby SDK to interact with CKB, please refer to the official ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-sdk-ruby/blob/develop/README.md"},"README")," for how to set it up. Then deploy the duktape script code in a CKB cell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'pry(main)> data = File.read("../ckb-duktape/build/duktape")\npry(main)> duktape_data.bytesize\n=> 269064\npry(main)> duktape_tx_hash = wallet.send_capacity(wallet.address, CKB::Utils.byte_to_shannon(280000), CKB::Utils.bin_to_hex(duktape_data))\npry(main)> duktape_data_hash = CKB::Blake2b.hexdigest(duktape_data)\npry(main)> duktape_cell_dep = CKB::Types::CellDep.new(out_point: CKB::Types::OutPoint.new(tx_hash: duktape_tx_hash, index: 0))\n')),(0,o.kt)("p",null,"The duktape script code now requires one argument: the JavaScript source you want to execute"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'pry(main)> duktape_hello_type_script = CKB::Types::Script.new(code_hash: duktape_data_hash, args: CKB::Utils.bin_to_hex("CKB.debug(\\"I\'m running in JS!\\")"))\n')),(0,o.kt)("p",null,"Notice that with a different argument, you can create a different duktape powered type script for a different use case:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'pry(main)> duktape_hello_type_script = CKB::Types::Script.new(code_hash: duktape_data_hash, args: CKB::Utils.bin_to_hex("var a = 1;\\nvar b = a + 2;"))\n')),(0,o.kt)("p",null,"This echoes the differences mentioned above on script code vs script: here duktape serves as script code providing a JavaScript engine, while a different script leveraging duktape script code serves a different function on chain."),(0,o.kt)("p",null,"Now we can create a cell with the duktape type script attached:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'pry(main)> tx = wallet.generate_tx(wallet2.address, CKB::Utils.byte_to_shannon(200))\npry(main)> tx.cell_deps.push(duktape_out_point.dup)\npry(main)> tx.outputs.type = duktape_hello_type_script.dup\npry(main)> tx.witnesses[0] = "0x"\npry(main)> tx = tx.sign(wallet.key, api.compute_transaction_hash(tx))\npry(main)> api.send_transaction(tx)\n=> "0x2e4d3aab4284bc52fc6f07df66e7c8fc0e236916b8a8b8417abb2a2c60824028"\n')),(0,o.kt)("p",null,"We can see that the script executes successfully and if you have the ckb-script module\u2019s log level set to debug in your ckb.toml file, you will also notice the following log:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2019-07-15 05:59:13.551 +00:00 http.worker8 DEBUG ckb-script  script group: c35b9fed5fc0dd6eaef5a918cd7a4e4b77ea93398bece4d4572b67a474874641 DEBUG OUTPUT: I'm running in JS!\n")),(0,o.kt)("p",null,"Now you have successfully deployed a JavaScript engine on CKB, and have also run JavaScript-based script on CKB! Feel free to try any JavaScript code you want here."),(0,o.kt)("h2",{id:"dynamic-linking"},"Dynamic linking"),(0,o.kt)("p",null,"There are two dynamic linking functions implemented in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-c-stdlib/blob/693c58163fe37d6abd326c537447260a846375f0/ckb_dlfcn.h#L94"},"nervosnetwork/ckb-c-stdlib"),", which are ",(0,o.kt)("inlineCode",{parentName:"p"},"ckb_dlopen()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ckb_dlsym()"),". "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ckb_dlopen()"),' loads the dynamic library from a cell by its data hash and returns an opaque "handle" for the dynamic library. ',(0,o.kt)("inlineCode",{parentName:"p"},"ckb_dlsym()"),' takes a "handle" of a dynamic library returned by ',(0,o.kt)("inlineCode",{parentName:"p"},"ckb_dlopen()")," and the symbol name, and returns the address where that symbol is loaded into memory. "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-miscellaneous-scripts/blob/5b06297d4451ee1fb496fb48625481b26386de78/c/or.c#L86-L98"},"nervosnetwork/ckb-miscellaneous-scripts")," has a simple example for using these two functions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"int ckb_dlopen(const uint8_t *dep_cell_data_hash, uint8_t *aligned_addr,\n               size_t aligned_size, void **handle, size_t *consumed_size);\n\nvoid *ckb_dlsym(void *handle, const char *symbol);\n")),(0,o.kt)("h2",{id:"how-dependencies-work"},"How dependencies work"),(0,o.kt)("p",null,"There are two different dependency fields in the transaction data structure: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/0022-transaction-structure.md#code-locating"},(0,o.kt)("inlineCode",{parentName:"a"},"cell_deps"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/0022-transaction-structure.md#header-deps"},(0,o.kt)("inlineCode",{parentName:"a"},"header_deps")),".  "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cell_deps")," allow scripts in the transaction to access (read-only) referenced live cells. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"header_deps")," allow scripts in the transaction to access (read-only) data of referenced past block headers of the blockchain. "),(0,o.kt)("p",null,"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/0022-transaction-structure.md"},"CKB Transaction Structure RFC")," for more details."))}u.isMDXComponent=!0}}]);