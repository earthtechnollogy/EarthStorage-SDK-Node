# EarthStorage SDK Node.js

## Table of Contents

 * [Overview](#overview)
 * [Installation](#installation)
 * [Documentation](#documentation)
 * [License](#license)

## Overview

[EarthStorage](https://console.cloud.earthtechnollogy.com) provides the tools and infrastructure for storing and integrating files into your projects. The SDK for Node.js allows access to EarthStorage services in both browsers (JavaScript) and Node.js servers and cloud.


## Installation

```bash
npm install @earthtechnollogy/earthstorage-sdk --save
```

```bash
yarn add @earthtechnollogy/earthstorage-sdk
```

Now just import:

```js
import EarthStorage from '@earthtechnollogy/earthstorage-sdk'
```


## Documentation

First step is to set the private API Key for the project you want. Remembering that the API Keys for each project can be found on the [EarthCloud Console](https://console.cloud.earthtechnollogy.com).

```js
const storage = new EarthStorage()
storage.setApiKey('x-api-key')
```

Now just start using it. To list the files, the following two possible commands are shown below:

```js
// `folder` variable corresponds to the folder you want to start listing files and subfolders
storage.files.list(folder)
  .then(dir...)
  .cath(error...)
```

If you want a complete listing of all subfolders, use the following command below. Alert, avoid using this command because of the latency and processing power it demands, as it seeks everything at once.

```js
storage.files.listFull(folder)
  .then(dir...)
  .cath(error...)
```

To add a file this is the command:

```js
const file = {
  name: 'string', // file name
  type: 'string', // file type
  folder?: 'string | null', // full path to where the file should be saved
  dataUrl: 'string' // file dataUrl (base64)
}
storage.files.add(file)
  .then(message...)
  .cath(error...)
```


## License

EarthStorage SDK Node.js is licensed under the MIT.
