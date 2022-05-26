---
id: workflow
title: Workflow
---
import useBaseUrl from "@docusaurus/useBaseUrl";

import Link from "@docusaurus/Link";

The development of a DApp generally follows the following basic steps:

1. Prepare the basic skills:

   - The basic knowledge on Nervos CKB. For more information, see [Nervos CKB Basics](https://docs.nervos.org/docs/basics/introduction).

   - The knowledge of CKB Data Model. For more information, see [Nervos CKB Reference](https://docs.nervos.org/docs/reference/introduction) and [CKB Data Structure](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md).

   - Programming skills of Node.js projects for desktop applications or server applications.

2. <p>Set up the development environment.

   For more information, see <Link to={useBaseUrl('/docs/tools/lumos/preparation/setupsystem')}>Set Up the Development Environment</Link>.</p>

4. <p>Create CKB accounts for the development and testing.

   For more information, see <Link to={useBaseUrl('/docs/tools/lumos/preparation/createaccount')}>Create Accounts</Link>.</p>

5. <p>Initialize a project and add Lumos packages as dependencies to the project.

   For more information about how to add Lumos packages to a project, see <Link to={useBaseUrl('/docs/tools/lumos/guides/installlumos')}>Install Lumos Packages</Link>.</p>

5. <p>Establish the connection to the CKB network by setting up the config manager and the Lumos indexer.<br/>
   For more information about how to set up the config manager, see <Link to={useBaseUrl('/docs/tools/lumos/guides/config')}>Set Up the Config Manger</Link>.
   
   
   For more information about how to set up the Lumos indexer, see <Link to={useBaseUrl('/docs/tools/lumos/guides/indexer')}>Set Up the Lumos Indexer</Link>.</p>
   
7. <p>Program the DApp functions by using Lumos to deal with user queries and transaction requests.

   For more information about the usage of Lumos, see the sections in the Guides and Examples.</p>

