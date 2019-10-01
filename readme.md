# puppeteer-serverless

> [puppeteer](https://pptr.dev) for both serverless functions and development

## Install

```
npm i puppeteer-serverless
```

## Usage

Use just like normal puppeteer

```js
import puppeteer from 'puppeteer-serverless';

const browser = await puppeteer.launch();
const page = await browser.newPage();
```

If `NODE_ENV` is set to `development`, it will use your local install of chrome, located at:

- **MacOS**: `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`
- **win32**: `C:\Program Files (x86)\Google\Chrome\Application\chrome.exe`

## License

MIT © [Saasify](https://saasify.sh)
