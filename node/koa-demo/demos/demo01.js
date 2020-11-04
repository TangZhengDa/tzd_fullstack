const Koa = require('Koa')

const app = new Koa()

const main = (ctx) => {
    ctx.response.body = 'hello world'

}
app.use(main)
app.listen(3000, () => {
    console.log('success');
})