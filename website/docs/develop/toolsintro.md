---
id: tooling
title: Introduction
sidebar_label: Introduction
---
import useBaseUrl from "@docusaurus/useBaseUrl";

import Link from "@docusaurus/Link";

Tools and frameworks with many of the needed features are provided for developing CKB applications. 

The following is a mind map to show the usage of CKB developer tools.

<img src={useBaseUrl("img/tools/mindmap.png")} width="50%" />

## Recommended Setup

Recommendations for setting up your development environment and which technologies to build your application with.

### Recommended Development Environment Setup

These are the minimum software recommendations for any developer building on Nervos CKB.

* OS: MacOS, Ubuntu Linux, or Windows 10 + WSL2 (Ubuntu)
* IDE: [CKB Studio](https://www.obsidians.io/) or your favorite IDE! 😁
  * [Tutorials](https://medium.com/nervos-ckb-israel/collection-of-ckb-studio-tutorials-9ffd573894)
  * [Video Tutorial: How to Use CKB Studio](https://www.youtube.com/watch?v=lOxXrVIfT2Y)
* [CKB Development Blockchain](https://docs.nervos.org/docs/basics/guides/devchain) - For testing smart contracts and DApps.
* [Docker](https://docs.docker.com/get-docker/) - For smart contract development using Capsule.
* [NPM](https://www.npmjs.com/get-npm) or [Yarn](https://classic.yarnpkg.com/en/docs/install/) - For DApp development using [Lumos](https://github.com/nervosnetwork/lumos) and [PW-SDK](https://github.com/lay2dev/pw-core).
* [Neuron Wallet](https://github.com/nervosnetwork/neuron/releases) or [Portal Wallet](https://ckb.pw/) - For managing Mainnet funds.

### Recommended Development Stack

Usually several tools can be used in combination for an application development. The following are recommended software stacks for application development on Nervos CKB.

- DApp Server Side: [Lumos](https://github.com/nervosnetwork/lumos)+ ckb-cli/CKB SDK + Tippy
- DApp Front-end: [React.js](https://reactjs.org/) + [PW-SDK](https://github.com/lay2dev/pw-core)
- Smart Contracts Development: [Capsule](https://github.com/nervosnetwork/capsule)
- Ethereum DApps Porting to CKB: [Godwoken](https://github.com/nervosnetwork/godwoken)

* Client side DApp wallet support: [PW-Core](https://github.com/lay2dev/pw-core)
  * [Documentation](https://docs.lay2.dev/)
  * [Demo Project: Simplest DApp](https://github.com/lay2dev/simplestdapp)
  * [Video Tutorial: PW-Core Programming Walkthrough (English)](https://www.youtube.com/watch?v=E2AYuRaeP9Q)
  * [Video Tutorial: PW-Core Programming Walkthrough (Chinese)](https://www.youtube.com/watch?v=NmMRM4PoE08)
* DApp Wallet: [PW-SDK](https://github.com/lay2dev/pw-core) + [MetaMask](https://metamask.io/)
* [Nervos Aggron Faucet](https://faucet.nervos.org/): When building on the Aggron Testnet, free testnet CKB can be obtained from this faucet.

## Sample Projects

View functioning example smart contract scripts and DApps.

### Example Scripts

These are smart contract scripts written in C and Rust. For most developers we recommend building scripts in Rust.

* [Simple UDT Type Script (Rust + Capsule)](https://github.com/jjyr/my-sudt)
* [Write an SUDT in Capsule](https://docs.nervos.org/docs/develop/tools/capsule/sudtbycapsule)
* [Simple UDT Type Script (C)](https://github.com/nervosnetwork/ckb-miscellaneous-scripts/blob/master/c/simple_udt.c)
* [Token Sale Lock Script (Rust + Capsule)](https://github.com/jordanmack/token-sale)
  * [Documentation](https://github.com/jordanmack/token-sale/blob/master/README.md)
  * [Video Tutorial: Understanding the Token Sale Lock Script (English)](https://youtu.be/ysUbx4FAKlE)
* [Anyone Can Pay Lock Script (C)](https://github.com/nervosnetwork/ckb-anyone-can-pay/blob/master/c/anyone_can_pay.c)
* [Open Transaction Lock Script (C)](https://github.com/nervosnetwork/ckb-miscellaneous-scripts/blob/master/c/open_transaction.c)
  * [Nervos Talk - Open Transaction Four Part Brainstorm](https://talk.nervos.org/t/open-tx-protocol-brainstorm-1-otx-in-general/4010)
* [Multi-Token Extensible NFT Type Script (Rust + Capsule)](https://github.com/jordanmack/nervos-ckb-nft)

### Example DApps

These are fully functioning DApps which were built using our recommended tooling.

* [Hello Lumos DApp Template](https://github.com/tspoff/hello-lumos)
* [Token Playground (Lumos + PW-SDK)](https://github.com/tspoff/token-playground)
* [Simplest DApp](https://github.com/lay2dev/simplestdapp)
* [Simplest DApp + Synapse](https://github.com/rebase-network/simplestdapp)
  * [Synapse Source](https://github.com/rebase-network/synapse-extension) - A DApp wallet with support for multiple lock types.
  * [Synapse Documentation](https://github.com/rebase-network/synapse-extension/tree/master/docs)
