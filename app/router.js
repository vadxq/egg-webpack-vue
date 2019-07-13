'use strict';

/**
 * @param {Egg.Application} app - egg appliction
 */
module.exports = app => {
  /**
   * @param {Egg.Application} router - egg router
   * @param {Egg.Application} controller - egg controller
   */
  const { router, controller } = app;
  router.get('/', controller.home.index);
};