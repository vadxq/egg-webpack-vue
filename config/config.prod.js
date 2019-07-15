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

  // production static
  config.static = {
    prefix: '/',
    // dir: path.join(appInfo.baseDir, 'client/public'),
    dir: ENV === 'reactproduction' // 输出路径
    ? path.join(__dirname, './react/public')
    : path.join(__dirname, './client/public'),
  }

  return {
    ...config,
  };
};