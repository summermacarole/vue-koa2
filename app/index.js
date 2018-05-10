const Koa = require('koa')
const app = new Koa()
const convert=require('koa-convert')
const cors=require('koa-cors')
const router = require('./routers')
app.use(convert(cors()));
app.use(router.routes(), router.allowedMethods())

app.listen(3000)
