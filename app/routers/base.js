const Router = require('koa-router')
const base = new Router()

base.get('/', async ctx => {
    ctx.type = 'json'
    ctx.body = {
      url: 'http://localhost:3000/base'
    }
  })
  .get('/about', async ctx => {
    ctx.type = 'json';
    ctx.body = {
      msg: '成功获取了'
    }
  })

module.exports = base;
