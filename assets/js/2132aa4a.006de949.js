"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8933],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=l,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6644:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>c,toc:()=>d,default:()=>p});var a=t(7462),l=t(3366),r=(t(7294),t(3905)),i=["components"],o={id:"capsule-dynamic-loading-tutorial",title:"Dynamic Loading in Capsule"},s=void 0,c={unversionedId:"develop/tools/capsule/capsule-dynamic-loading-tutorial",id:"develop/tools/capsule/capsule-dynamic-loading-tutorial",title:"Dynamic Loading in Capsule",description:"Introduction",source:"@site/docs/develop/tools/capsule/capsule-dynamic-loading.md",sourceDirName:"develop/tools/capsule",slug:"/develop/tools/capsule/capsule-dynamic-loading-tutorial",permalink:"/developer-tools/docs/develop/tools/capsule/capsule-dynamic-loading-tutorial",tags:[],version:"current",frontMatter:{id:"capsule-dynamic-loading-tutorial",title:"Dynamic Loading in Capsule"}},d=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Setup the develop environment",id:"setup-the-develop-environment",children:[{value:"Install capsule",id:"install-capsule",children:[],level:3},{value:"Create a project",id:"create-a-project",children:[],level:3},{value:"Make a shared library",id:"make-a-shared-library",children:[],level:3}],level:2},{value:"Dynamic loading",id:"dynamic-loading",children:[],level:2},{value:"Testing",id:"testing",children:[],level:2},{value:"Other resources",id:"other-resources",children:[],level:2}],u={toc:d};function p(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Many contracts have a demand for cryptography primitives. In contracts written in Rust, we can easily integrate a cryptography library by adding it as a dependency. But it is not efficient; first, it increases the binary size of the contract; we need to spend more coins to deploy the contract. Second, each contract may include duplicated libraries; it is a waste of the on-chain space."),(0,r.kt)("p",null,"We introduce the dynamic loading mechanism to solve this problem:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A shared library can be loaded in different programming languages"),(0,r.kt)("li",{parentName:"ul"},"Using dynamic loading can significantly reduce the contract binary size."),(0,r.kt)("li",{parentName:"ul"},"Using shared libraries increases the utility of the on-chain space.")),(0,r.kt)("p",null,"Starting from the ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.6")," version, ",(0,r.kt)("inlineCode",{parentName:"p"},"ckb-std")," introduces the ",(0,r.kt)("a",{parentName:"p",href:"https://nervosnetwork.github.io/ckb-std/riscv64imac-unknown-none-elf/doc/ckb_std/dynamic_loading/index.html"},"dynamic loading module"),", which provides a high-level interface to dynamically loading libraries from on-chain cells."),(0,r.kt)("p",null,"In this tutorial, we build an example shared library in C, and try to dynamically load the shared library from a contract written in Rust."),(0,r.kt)("p",null,"If you run into an issue on this tutorial you can ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/capsule"},"create a new issue")," or contact us on ",(0,r.kt)("a",{parentName:"p",href:"https://talk.nervos.org/"},"Nervos talk")," or ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/n6tx7uC"},"Discord"),". "),(0,r.kt)("h2",{id:"setup-the-develop-environment"},"Setup the develop environment"),(0,r.kt)("h3",{id:"install-capsule"},"Install capsule"),(0,r.kt)("p",null,"To use capsule, you need ",(0,r.kt)("inlineCode",{parentName:"p"},"docker"),". It is recommended to install the latest version:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Install docker"))),(0,r.kt)("p",null,"Note: The current user must have permission to manage Docker instances. (How to manage Docker as a non-root user)","[https://docs.docker.com/engine/install/linux-postinstall/]","."),(0,r.kt)("p",null,"Now you can proceed to install capsule, It is recommended to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/capsule/releases/tag/v0.2.0"},"download the binary")),(0,r.kt)("p",null,"Or you can install from source:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cargo install capsule --git https://github.com/nervosnetwork/capsule.git --tag v0.2.0\n")),(0,r.kt)("p",null,"Then check if it works with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"capsule check\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"(click here to view response)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"------------------------------\ndocker    installed\nckb-cli    installed\n------------------------------\n"))),(0,r.kt)("h3",{id:"create-a-project"},"Create a project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"capsule new dynamic-loading-demo\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"(click here to view response)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'New project "dynamic-loading-demo"\nCreated file "capsule.toml"\nCreated file "deployment.toml"\nCreated file "README.md"\nCreated file "Cargo.toml"\nCreated file ".gitignore"\nCreated "/home/jjy/workspace/dynamic-loading-demo"\n     Created binary (application) `dynamic-loading-demo` package\nCreated contract "dynamic-loading-demo"\nCreated tests\n     Created library `tests` package\nDone\n'))),(0,r.kt)("h3",{id:"make-a-shared-library"},"Make a shared library"),(0,r.kt)("p",null,"We create a directory to put our C code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd dynamic-loading-demo\nmkdir shared-lib\n")),(0,r.kt)("p",null,"We define two functions in our shared library. The ",(0,r.kt)("inlineCode",{parentName:"p"},"visibility")," attribute tells the compiler to export the following symbol to the shared library."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'// shared-lib/shared-lib.c\n\ntypedef unsigned long size_t;\n\n__attribute__((visibility("default"))) int\nplus_42(size_t num) {\n  return 42 + num;\n}\n\n__attribute__((visibility("default"))) char *\nfoo() {\n  return "foo";\n}\n')),(0,r.kt)("p",null,"We need the RISC-V gnu toolchain to compile the source. Fortunately, we can set up the compiling environment with Docker:"),(0,r.kt)("p",null,"Create the ",(0,r.kt)("inlineCode",{parentName:"p"},"share-lib/Makefile")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'TARGET := riscv64-unknown-linux-gnu\nCC := $(TARGET)-gcc\nLD := $(TARGET)-gcc\nOBJCOPY := $(TARGET)-objcopy\nCFLAGS := -fPIC -O3 -nostdinc -nostdlib -nostartfiles -fvisibility=hidden -I deps/ckb-c-stdlib -I deps/ckb-c-stdlib/libc -I deps -I deps/molecule -I c -I build -I deps/secp256k1/src -I deps/secp256k1 -Wall -Werror -Wno-nonnull -Wno-nonnull-compare -Wno-unused-function -g\nLDFLAGS := -Wl,-static -fdata-sections -ffunction-sections -Wl,--gc-sections\n\n# docker pull nervos/ckb-riscv-gnu-toolchain:gnu-bionic-20191012\nBUILDER_DOCKER := nervos/ckb-riscv-gnu-toolchain@sha256:aae8a3f79705f67d505d1f1d5ddc694a4fd537ed1c7e9622420a470d59ba2ec3\n\nall-via-docker:\n    docker run --rm -v `pwd`:/code ${BUILDER_DOCKER} bash -c "cd /code && make shared-lib.so"\n\nshared-lib.so: shared-lib.c\n    $(CC) $(CFLAGS) $(LDFLAGS) -shared -o $@ $<\n    $(OBJCOPY) --only-keep-debug $@ $@.debug\n    $(OBJCOPY) --strip-debug --strip-all $@\n\n')),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"make all-via-docker")," to compile the ",(0,r.kt)("inlineCode",{parentName:"p"},"shared-lib.so"),"."),(0,r.kt)("h2",{id:"dynamic-loading"},"Dynamic loading"),(0,r.kt)("p",null,"We use ",(0,r.kt)("a",{parentName:"p",href:"https://nervosnetwork.github.io/ckb-std/riscv64imac-unknown-none-elf/doc/ckb_std/dynamic_loading/struct.CKBDLContext.html#method.load"},"CKBDLContext::load")," to load a library. To use this function, we need to know the ",(0,r.kt)("inlineCode",{parentName:"p"},"data_hash")," of the target shared library."),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"build.rs")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"touch contracts/dynamic-loading-demo/build.rs\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"build.rs")," (aka build scripts) execute on the building stage, ",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/reference/build-scripts.html"},"see details")," , in ",(0,r.kt)("inlineCode",{parentName:"p"},"build.rs")," we compute the ",(0,r.kt)("inlineCode",{parentName:"p"},"data_hash")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"shared.so")," and put the result into a constant variable."),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"blake2b")," crate as build dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[build-dependencies]\nblake2b-rs = "0.1.5"\n')),(0,r.kt)("p",null,"Write the constant ",(0,r.kt)("inlineCode",{parentName:"p"},"CODE_HASH_SHARED_LIB")," to file ",(0,r.kt)("inlineCode",{parentName:"p"},"code_hashes.rs"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'pub use blake2b_rs::{Blake2b, Blake2bBuilder};\n\nuse std::{\n    fs::File,\n    io::{BufWriter, Read, Write},\n    path::Path,\n};\n\nconst BUF_SIZE: usize = 8 * 1024;\nconst CKB_HASH_PERSONALIZATION: &[u8] = b"ckb-default-hash";\n\nfn main() {\n    let out_path = Path::new("src").join("code_hashes.rs");\n    let mut out_file = BufWriter::new(File::create(&out_path).expect("create code_hashes.rs"));\n\n    let name = "shared-lib";\n    let path = format!("../../shared-lib/{}.so", name);\n\n    let mut buf = [0u8; BUF_SIZE];\n\n    // build hash\n    let mut blake2b = new_blake2b();\n    let mut fd = File::open(&path).expect("open file");\n    loop {\n        let read_bytes = fd.read(&mut buf).expect("read file");\n        if read_bytes > 0 {\n            blake2b.update(&buf[..read_bytes]);\n        } else {\n            break;\n        }\n    }\n\n    let mut hash = [0u8; 32];\n    blake2b.finalize(&mut hash);\n\n    write!(\n        &mut out_file,\n        "pub const {}: [u8; 32] = {:?};\\n",\n        format!("CODE_HASH_{}", name.to_uppercase().replace("-", "_")),\n        hash\n    )\n        .expect("write to code_hashes.rs");\n}\n\npub fn new_blake2b() -> Blake2b {\n    Blake2bBuilder::new(32)\n        .personal(CKB_HASH_PERSONALIZATION)\n        .build()\n}\n\n')),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"capsule build"),", the file ",(0,r.kt)("inlineCode",{parentName:"p"},"src/code_hashes.rs")," will be generated."),(0,r.kt)("p",null,"We define the module ",(0,r.kt)("inlineCode",{parentName:"p"},"code_hashes")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"lib.rs"),". Then add the dynamic loading code to the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'mod code_hashes;\nuse code_hashes::CODE_HASH_SHARED_LIB;\nuse ckb_std::dynamic_loading::{CKBDLContext, Symbol};\n\n//...\n\n// Create a DL context with 64K buffer.\nlet mut context = CKBDLContext::<[u8; 64 * 1024]>::new();\n// Load library\nlet lib = context.load(&CODE_HASH_SHARED_LIB).expect("load shared lib");\n\n// get symbols\nunsafe {\n    type Plus42 = unsafe extern "C" fn(n: usize) -> usize;\n    let plus_42: Symbol<Plus42> = lib.get(b"plus_42").expect("find plus_42");\n    assert_eq!(plus_42(13), 13 + 42);\n\n    type Foo = unsafe extern "C" fn() -> *const u8;\n    let foo: Symbol<Foo> = lib.get(b"foo").expect("find foo");\n    let ptr = foo();\n    let mut buf = [0u8; 3];\n    buf.as_mut_ptr().copy_from(ptr, buf.len());\n    assert_eq!(&buf[..], b"foo");\n}\n')),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"capsule build")," to make sure the contract can be built without errors."),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"We need to deploy the ",(0,r.kt)("inlineCode",{parentName:"p"},"shared-lib.so")," to a cell, then reference the cell in the testing transaction.\nOpen ",(0,r.kt)("inlineCode",{parentName:"p"},"tests/src/tests.rs"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use std::fs::File;\nuse std::io::Read;\n// ...\n// deploy shared library\nlet shared_lib_bin = {\n    let mut buf = Vec::new();\n    File::open("../shared-lib/shared-lib.so")\n        .unwrap()\n        .read_to_end(&mut buf)\n        .expect("read code");\n    Bytes::from(buf)\n};\nlet shared_lib_out_point = context.deploy_cell(shared_lib_bin);\nlet shared_lib_dep = CellDep::new_builder().out_point(shared_lib_out_point).build();\n\n// ...\n// build transaction\nlet tx = TransactionBuilder::default()\n    .input(input)\n    .outputs(outputs)\n    .outputs_data(outputs_data.pack())\n    .cell_dep(lock_script_dep)\n    // reference to shared library cell\n    .cell_dep(shared_lib_dep)\n    .build();\n')),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"capsule test"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"(click here to view response)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"running 1 test\nconsume cycles: 1808802\ntest tests::test_basic ... ok\n\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\n\n   Doc-tests tests\n\nrunning 0 tests\n\ntest result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\n\n"))),(0,r.kt)("h2",{id:"other-resources"},"Other resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jjyr/ckb-dynamic-loading-demo"},"Full code")),(0,r.kt)("li",{parentName:"ul"},"Basic usage of capsule: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.nervos.org/docs/labs/sudtbycapsule"},"Write a SUDT script by Capsule")),(0,r.kt)("li",{parentName:"ul"},"Secp256k1 dynamic loading example: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/jjyr/ckb-dynamic-loading-secp256k1"},"ckb-dynamic-loading-secp256k1"))))}p.isMDXComponent=!0}}]);