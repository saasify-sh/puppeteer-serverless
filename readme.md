# puppeteer-serverless

> [Puppeteer](https://pptr.dev) for AWS Lambda that also works for local development.

<p align="center">
  <a href="https://puppet-master.sh" title="Puppet Master">
    <img src="https://raw.githubusercontent.com/saasify-sh/puppeteer-serverless/master/media/puppeteer-logo.png" alt="Puppeteer Logo" width="200" />
  </a>
</p>

[![NPM](https://img.shields.io/npm/v/puppeteer-serverless.svg)](https://www.npmjs.com/package/puppeteer-serverless) [![Build Status](https://travis-ci.com/saasify-sh/puppeteer-serverless.svg?branch=master)](https://travis-ci.com/saasify-sh/puppeteer-serverless) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```
npm i --save puppeteer-serverless
```

## Usage

Use just like normal puppeteer:

```js
import puppeteer from 'puppeteer-serverless'

const browser = await puppeteer.launch()
const page = await browser.newPage()
```

If `NODE_ENV` is set to `development`, it will use your local install of Chrome located at:

- **MacOS**: `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`
- **win32**: `C:\Program Files (x86)\Google\Chrome\Application\chrome.exe`

## License

MIT © [Saasify](https://saasify.sh)
