'use strict';

const path = require('path');

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
    dir: path.join(appInfo.baseDir, 'client/public'),
  }

  return {
    ...config,
  };
};