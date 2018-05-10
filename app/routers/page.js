const Router = require('koa-router')
const page = new Router()

page.get('/', async ctx => {
  ctx.body = "page /"
})

module.exports = page;

