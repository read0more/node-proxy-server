const express = require('express');
const https = require('https');
const fs = require('fs');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const httpPort = 80;
const httpsPort = 443;
let targetDomain = process.argv[2];
if (!targetDomain) {
  throw new Error('Please input target domain');
}

const options = {
  key: fs.readFileSync('./cert.key'),
  cert: fs.readFileSync('./cert.crt'),
};

const proxyOptions = {
  target: targetDomain,
  changeOrigin: true,
  cookieDomainRewrite: 'localhost',
};

app.use('/', createProxyMiddleware(proxyOptions));

app.listen(httpPort, () => {
  console.log(`Example app listening on port ${httpPort}`);
});

https.createServer(options, app).listen(httpsPort, () => {
  console.log(`HTTPS server started on port ${httpsPort}`);
});
