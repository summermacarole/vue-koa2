const Router = require('koa-router')
const router = new Router();
const home = require('./home')
const page = require('./page')
const base = require('./base')

router.use('/home',home.routes(), home.allowedMethods());
router.use('/page',page.routes(), page.allowedMethods())
router.use('/base',base.routes(), base.allowedMethods())
module.exports = router;
