---
id: tippy
title: Tippy
---
import useBaseUrl from "@docusaurus/useBaseUrl";

import Link from "@docusaurus/Link";

Tippy is a tool to help set up and manage CKB nodes, enabling the installation and launching of a CKB node with a simple click.

The CKB nodes used in the DApp development are **full nodes** that are the verifiers of the CKB network. A CKB full node verifies new blocks and transactions, relays blocks and transactions, and selects the chain fork on which it agrees.

## Set Up and Manage CKB Nodes

Tippy supports to install and manage CKB nodes on all major platforms including Linux, macOS, and Windows.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="ubuntu"
  values={[
    {label: 'Ubuntu 20.04', value: 'ubuntu'},
    {label: 'macOS', value: 'macos'},
    {label: 'Windows 10', value: 'windows'},
  ]}>
<TabItem value="ubuntu"><p><b>Step 1. Download Tippy.</b></p>

<p>Download the <b>tippy-linux-x64.tar.gz</b> file and unzip it. By default, the files are unzipped into the tippy-linux-x64 folder. All versions of Tippy can be found on the <a href="https://github.com/nervosnetwork/tippy/releases"><i class="feather icon-download"></i>Tippy Releases</a> page.</p>

<p><b>Step 2. Make Tippy executable and run Tippy.</b></p>

```bash {1-3}
$ chmod +x ./tippy-linux-x64/Tippy
$ cd tippy-linux-x64
$ ./Tippy
```

<p>If a desktop GUI is installed, double click the Tippy file under the tippy-linux-x64 folder to run Tippy.</p>

<p>A web page on <a>http://localhost:5000/Home</a> will be opened in a browser after the execution or the double click. If the page is not opened, open the browser and type <a>http://localhost:5000/Home</a> in the address field to access the Tippy web UI.</p>

<p><b>Step 3. Create a CKB chain.</b></p>

<p><b>DEV chain</b> is the recommended network for the later examples and CKB starters. For more information about CKB networks, see <Link to={useBaseUrl('/docs/basics/ckbnode#ckb-networks')}>CKB Networks</Link>.</p>
<p>To create a CKB node on <b>DEV chain</b>, click the <b>Launch a CKB devnet instantly</b> button on the home page.</p>

<img src={useBaseUrl("img/tools/tippycreate.png")}/>

<p>To create a CKB node on the <b>other</b> networks, click <b>Create a customized chain</b> to choose the network in the <b>Chain Type</b> dropdown list of the <b>Create Chain</b> form.</p>

<p>The CKB node starts running just after it is created. It can be stopped or restarted on the Tippy <b>Dashboard</b>. Details of blocks and transactions of the chain can be checked on the <b>Blocks</b> and <b>Transactions</b> pages that are visible when the node is started.</p>

<b>Step 4. Shorten DEV chain epoch and block interval.</b>

<p>An epoch is a period of time for a set of blocks. To develop and test transactions with lock period like DAO operations, the <code>genesis_epoch_length</code> and the <code>permanent_difficulty_in_dummy</code> parameters in the <b>dev.toml</b> file can be adjusted to shorten the chain epoch.</p>

<p>The default value for the <code>genesis_epoch_length</code> parameter is 1000 meaning that an epoch is the time for producing 1,000 blocks.</p>

<p>When <code>permanent_difficulty_in_dummy</code> is set to <var>true</var>, all epochs skip the difficulty adjustment. This parameter is typically used in combination with <code>genesis_epoch_length</code>.</p>

:::info

The chain specific configuration files like dev.toml and data files are located in Home/.config/Tippy/chain-<var>number</var>.

:::

<p>To shorten DEV chain epoch and block interval:</p>

<ol><li><p>Stop the DEV chain and delete the data files of the chain.</p><p>$HOME/.config/Tippy/chain-<var>number</var>/data</p><p>$HOME/.config/Tippy/chain-<var>number</var>/indexer-data</p></li><li><p>Modify the value for <code>genesis_epoch_length</code> and <code>permanent_difficulty_in_dummy</code> in the dev.toml file.</p>



```toml title="$HOME/.config/Tippy/chain-number/specs/dev.toml"
genesis_epoch_length = 10  # The unit of meansurement is "block".
permanent_difficulty_in_dummy = true
```

</li><li><p>Modify the value for <code>value</code> under the <code>miner.workers</code> section  in the <b>ckb-miner.toml</b> file.</p>

<p>The default mining interval is 5,000 milliseconds (5 seconds). That means a new block is generated at intervals of every 5 seconds.</p>

<p>To modify the value in the [miner.workers] section to generate a new block every second (1,000 milliseconds):</p>

```toml title="$HOME/.config/Tippy/chain-number/ckb-miner.toml" {4}
[[miner.workers]]
worker_type = "Dummy"
delay_type = "Constant"
value = 1000
```

</li><li><p>Restart the DEV chain on Tippy Dashboard.</p></li></ol>

</TabItem><TabItem value="macos"><p><b>Step 1. Download Tippy.</b></p>

<p><ul><li>Download the <b>Tippy.dmg</b> file. All versions of Tippy can be found on the <a href="https://github.com/nervosnetwork/tippy/releases"><i class="feather icon-download"></i>Tippy Releases</a> page.</li><li>Open the Tippy.dmg file and drag <b>Tippy.app</b> to the Applications folder.</li></ul></p>

<p><b>Step 2. Run Tippy.</b></p>

<p>Click Tippy.app in the Applications folder to run Tippy.</p>

<p>A web page on <a>http://localhost:5000/Home</a> will be opened in a browser after the execution or the double click. If the page is not opened, open the browser and type <a>http://localhost:5000/Home</a> in the address field to access the Tippy web UI.</p>

<p><b>Step 3. Create a CKB chain.</b></p>

<p><b>DEV chain</b> is the recommended network for the later examples and CKB starters. For more information about CKB networks, see <Link to={useBaseUrl('/docs/basics/ckbnode#ckb-networks')}>CKB Networks</Link>.</p>
<p>To create a CKB node on <b>DEV chain</b>, click the <b>Launch a CKB devnet instantly</b> button on the home page.</p>

<img src={useBaseUrl("img/tools/tippycreate.png")}/>

<p>To create a CKB node on the <b>other</b> networks, click <b>Create a customized chain</b> to choose the network in the <b>Chain Type</b> dropdown list of the <b>Create Chain</b> form.</p>

<p>The CKB node starts running just after it is created. It can be stopped or restarted on the Dashboard. Details of blocks and transactions of the chain can be checked on the Blocks and Transaction pages.</p>

<b>Step 4. Shorten DEV chain epoch and block interval.</b>

<p>An epoch is a period of time for a set of blocks. To develop and test transactions with lock period like DAO operations, the <code>genesis_epoch_length</code> and the <code>permanent_difficulty_in_dummy</code> parameters in the <b>dev.toml</b> file can be adjusted to shorten the chain epoch.</p>

<p>The default value for the <code>genesis_epoch_length</code> parameter is 1000 meaning that an epoch is the time for producing 1,000 blocks.</p>

<p>When <code>permanent_difficulty_in_dummy</code> is set to <var>true</var>, all epochs skip the difficulty adjustment. This parameter is typically used in combination with <code>genesis_epoch_length</code>.</p>

<p>To shorten DEV chain epoch and block interval:</p>

<ol><li><p>Stop the DEV chain and delete the data files of the chain.</p><p>~/Libary/Application Support/Tippy/chain-<var>number</var>/data</p><p>~/Libary/Application Support/Tippy/chain-<var>number</var>/indexer-data</p></li><li><p>Modify the value for <code>genesis_epoch_length</code> and <code>permanent_difficulty_in_dummy</code> in the dev.toml file.</p>



```toml title="~/Libary/Application Support/Tippy/chain-number/specs/dev.toml"
genesis_epoch_length = 10  # The unit of meansurement is "block".
permanent_difficulty_in_dummy = true
```

</li><li><p>Modify the value for <code>value</code> under the <code>miner.workers</code> section  in the <b>ckb-miner.toml</b> file.</p>

<p>The default mining interval is 5,000 milliseconds (5 seconds). That means a new block is generated at intervals of every 5 seconds.</p>

<p>To modify the value in the [miner.workers] section to generate a new block every second (1,000 milliseconds):</p>

```toml title="~/Libary/Application Support/Tippy/chain-number/ckb-miner.toml" {4}
[[miner.workers]]
worker_type = "Dummy"
delay_type = "Constant"
value = 1000
```

</li><li><p>Restart the DEV chain on Tippy Dashboard.</p></li></ol>

</TabItem>

<TabItem value="windows"><p><b>Step 1. Download Tippy.</b></p>

<p>Download the <b>tippy-win-x64.zip</b> file and unzip the file. By default, the files are unzipped into the tippy-win-x64 folder. All versions can be found on the <a href="https://github.com/nervosnetwork/tippy/releases"><i class="feather icon-download"></i>Tippy Releases</a> page.</p>

<p><b>Step 2. Run Tippy.</b></p><p>Double click the Tippy.exe file under the tippy-win-x64 folder to run Tippy.</p>

<p>A web page on <a>http://localhost:5000/Home</a> will be opened in a browser after the double click. If the page is not opened, open the browser and type <a>http://localhost:5000/Home</a> in the address field to access the Tippy web UI.</p>

<p><b>Step 3. Create a CKB chain.</b></p>
<p><b>DEV chain</b> is the recommended network for the later examples and CKB starters. For more information about CKB networks, see <Link to={useBaseUrl('/docs/basics/ckbnode#ckb-networks')}>CKB Networks</Link>.</p>
<p>To create a CKB node on <b>DEV chain</b>, click the <b>Launch a CKB devnet instantly</b> button on the home page.</p>

<img src={useBaseUrl("img/tools/tippycreate.png")}/>

<p>To create a CKB node on the <b>other</b> networks, click <b>Create a customized chain</b> to choose the network in the <b>Chain Type</b> dropdown list of the <b>Create Chain</b> form.</p>

<p>The CKB node starts running just after it is created. It can be stopped or restarted on the Dashboard. Details of blocks and transactions of the chain can be checked on the Blocks and Transaction pages.</p>

<b>Step 4. Shorten DEV chain epoch and block interval.</b>

<p>An epoch is a period of time for a set of blocks. To develop and test transactions with lock period like DAO operations, the <code>genesis_epoch_length</code> and the <code>permanent_difficulty_in_dummy</code> parameters in the <b>dev.toml</b> file can be adjusted to shorten the chain epoch.</p>

<p>The default value for the <code>genesis_epoch_length</code> parameter is 1000 meaning that an epoch is the time for producing 1,000 blocks.</p>

<p>When <code>permanent_difficulty_in_dummy</code> is set to <var>true</var>, all epochs skip the difficulty adjustment. This parameter is typically used in combination with <code>genesis_epoch_length</code>.</p>

:::info

The chain specific configuration files and data files are located in C:/Users/<var>username</var>/AppData/Roaming/Tippy/chain-<var>number</var>. 

:::

<p>To shorten DEV chain epoch and block interval:</p>

<ol><li><p>Stop the DEV chain and delete the data files of the chain.</p><p>C:/Users/<var>username</var>/AppData/Roaming/Tippy/chain-<var>number</var>/data</p><p>C:/Users/<var>username</var>/AppData/Roaming/Tippy/chain-<var>number</var>/indexer-data</p></li><li><p>Modify the value for <code>genesis_epoch_length</code> and <code>permanent_difficulty_in_dummy</code> in the dev.toml file.</p>


```toml title="C:/Users/username/AppData/Roaming/Tippy/chain-number/specs/dev.toml"
genesis_epoch_length = 10  # The unit of meansurement is "block".
permanent_difficulty_in_dummy = true
```

</li><li><p>Modify the value for <code>value</code> under the <code>miner.workers</code> section  in the <b>ckb-miner.toml</b> file.</p>

<p>The default mining interval is 5,000 milliseconds (5 seconds). That means a new block is generated at intervals of every 5 seconds.</p>

<p>To modify the value in the [miner.workers] section to generate a new block every second (1,000 milliseconds):</p>

```toml title="C:/Users/username/AppData/Roaming/Tippy/chain-number/ckb-miner.toml" {4}
[[miner.workers]]
worker_type = "Dummy"
delay_type = "Constant"
value = 1000
```

</li><li><p>Restart the DEV chain on Tippy Dashboard.</p></li></ol>

</TabItem>
</Tabs>
