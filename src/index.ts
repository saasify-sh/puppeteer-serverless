import * as puppeteer from 'puppeteer-core';

import { getLaunchOptions } from './options';

export default {
  ...puppeteer,
  launch: async (opts: puppeteer.LaunchOptions) => {
    const serverlessOptions = await getLaunchOptions();
    return puppeteer.launch({ ...opts, ...serverlessOptions });
  }
};
