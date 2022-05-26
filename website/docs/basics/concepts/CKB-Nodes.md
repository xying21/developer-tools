---
id: CKBNodes
title: New-- CKB Nodes
---

import useBaseUrl from "@docusaurus/useBaseUrl";

import Link from "@docusaurus/Link";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The CKB nodes used in DApp development are **full nodes** that are the verifiers of the CKB network. A CKB full node verifies new blocks and transactions, relays blocks and transactions, and selects the chain fork on which it agrees.

## Installation Options

There are two options for installing a CKB node:

- **Install a CKB Node by Using Tippy**

  For more information, see <Link to={useBaseUrl('/docs/basics/guides/setupCKBNodes')}>Set Up and Manage CKB Nodes by Using Tippy</Link>.

- **Install a CKB Node by Using the Pre-built Installer Package**

  The pre-built installer package contains the following tools: 

  - **ckb**: The ckb tool is the main tool that initiates configurations, run CKB nodes, synching block data and mining. 

  - **ckb-cli**: ckb-cli is a command line tool that provides the functions of RPC requests, creating CKB addresses, managing wallets, sending transactions, and depositing to Nervos DAO etc.

  For more information on the installation by using the pre-built installer package, see the following guides:

  - <Link to={useBaseUrl('/docs/basics/guides/devchain')}>Run a CKB Dev Blockchain</Link>
  - <Link to={useBaseUrl('/docs/basics/guides/mainnet')}>Run a CKB Mainnet Node</Link>
  - <Link to={useBaseUrl('/docs/basics/guides/testnet')}>Run a CKB Testnet Node</Link>