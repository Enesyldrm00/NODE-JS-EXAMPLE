const Koa = require('koa');
const app = new Koa();

const port = 3000;

app.use(async (ctx) => {
  const url = ctx.path;
  ctx.type = 'text/html; charset=utf-8';

  if (url === '/' || url === '/index') {
    ctx.body = '<h1>İndex sayfasına hoşgeldiniz</h1>';
  } else if (url === '/hakkimda') {
    ctx.body = '<h1>Hakkımda sayfasına hoşgeldiniz</h1>';
  } else if (url === '/iletisim') {
    ctx.body = '<h1>İletişim sayfasına hoşgeldiniz</h1>';
  } else {
    ctx.status = 404;
    ctx.body = '<h1>404 - Sayfa Bulunamadı</h1>';
  }
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor...`);
});