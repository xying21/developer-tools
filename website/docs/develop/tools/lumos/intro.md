---
id: intro
title: What is Lumos?
sidebar_label: Lumos
---
import useBaseUrl from "@docusaurus/useBaseUrl";

import Link from "@docusaurus/Link";

Lumos is an open-source framework that was developed for building Nervos CKB DApps. 

> Lumos enables to free DApp developers from most of the hassles for dealing with CKB. So the developers can focus on the specific logic in the DApps.

## How It Works?

The [CKB programming model](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0002-ckb/0002-ckb.md#4-programming-model) divides CKB DApps into two functional components: **computation** and **verification**.

DApps built with Lumos can run in the Node.js environment and perform *off-chain computations*. These DApps poll the block information from the CKB network, index cells locally, and provide cells for queries and transactions.

<!--For more information, see <Link to={useBaseUrl('/docs/tools/lumos/introduction/lumoscomponents')}>Lumos Components</Link>.-->

<img src={useBaseUrl("img/tools/lumoshow.svg")}  width="70%"/>

Figure 1 Architecture of a CKB DApp Built with Lumos

## Stable Version

<img src="https://img.shields.io/badge/%40ckb--lumos-v0.17.0--rc10-brightgreen"/>

## Contact & Support

- Create a [GitHub issue](https://github.com/nervosnetwork/lumos/issues) for bug reports, feature requests, or questions.
- Star ⭐️ Lumos on [GitHub](https://github.com/nervosnetwork/lumos) to support the project!

## References

| Resource                                                | Link                                                         |
| ------------------------------------------------------- | ------------------------------------------------------------ |
| Nervos&nbsp;Document&nbsp;Website                       | https://docs.nervos.org/                                     |
| API&nbsp;Documentation                                  | https://nervosnetwork.github.io/lumos/api/globals.html       |
| Source&nbsp;Code                                        | https://github.com/nervosnetwork/lumos                       |
| Introduction&nbsp;to&nbsp;Lumos&nbsp;via&nbsp;NervosDAO | https://docs.nervos.org/docs/labs/lumos-nervosdao            |
| Video&nbsp;Lectures                                     | <ul><li>[Dapps with CKB Workshop - Lecture 3: Dapps with Lumos (Chinese + English Subtitles)](https://youtu.be/TJ2bnSFUpPQ)</li><li>[Dapps with CKB Workshop - Lecture 4: Dapp Architecture with Lumos (English)](https://youtu.be/9U23hrzCAiM)</li><li>[Dapps On CKB: Building A Liquidable DAO workshop](https://github.com/RetricSu/liquidable-dao-dapp/blob/master)</li></ul> |
| Address&nbsp;Conversion&nbsp;Tools                      | https://nervosnetwork.github.io/lumos/tools/address-conversion |

