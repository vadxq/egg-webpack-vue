'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');

/**
 * @constructor HomeController extends Controller
 */
class HomeController extends Controller {
  async index() {
    console.log(path.join(this.config.static.dir, 'index.html'));
    // await fs.createReadStream(path.join(this.config.static.dir, 'index.html'))
    await this.ctx.render('index.html');
  }
}

module.exports = HomeController;
