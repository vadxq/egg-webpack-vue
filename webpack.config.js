'use strict';

// const commConfig = require('./build/webpack.comm');
const devConfig = require('./build/webpack.dev');
const proConfig = require('./build/webpack.pro');
const reactDevConfig = require('./build/webpack.react.dev');
const reactProConfig = require('./build/webpack.react.pro');
// const merge = require('webpack-merge');

module.exports = mode => {
  if (mode === 'vueproduction') {
    return proConfig;
  } else if (mode === 'reactproduction') {
    return reactProConfig;
  } else if (mode === 'vuedevelopment') {
    return devConfig;
  } else if (mode === 'reactdevelopment') {
    return reactDevConfig;
  }
}