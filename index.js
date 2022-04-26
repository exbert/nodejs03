const Koa = require('koa');
const router = require('@koa/router')();
const app = module.exports = new Koa();

function getIndex(ctx) {
    ctx.type = 'html';
    ctx.body = `<h1>Welcome to Index Page</h1>`;
}

function getAbout(ctx) {
    ctx.type = 'html';
    ctx.body = `<h1>Welcome to About Page</h1>`;
}

function getContact(ctx) {
    ctx.type = 'html';
    ctx.body = `<h1>Welcome to Contact Page</h1>`;
}

router.get('/index', getIndex)
    .get('/about', getAbout)
    .get('/contact', getContact);

app.use(router.routes());


const port = 3000;

app.listen(port);