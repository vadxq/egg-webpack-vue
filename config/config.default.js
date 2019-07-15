'use strict';

const path = require('path');
const ENV = process.env.NODE_ENV

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1562737952231_762';

  // add your middleware config here
  config.middleware = [];

  // view
  config.view = {
    defaultViewEngine: 'static',
    mapping: {
      '.html': 'static',
    },
  }

  // development static
  config.static = {
    prefix: '/',
    // dir: path.join(appInfo.baseDir, 'client/.dist'),
    dir: ENV === 'reactevelopment' // 输出路径
    ? path.join(__dirname, '../react/dist')
    : path.join(__dirname, '../client/.dist'),
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};