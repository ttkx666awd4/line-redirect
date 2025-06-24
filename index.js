const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 根據IP返回不同LINE客服網址
app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  let lineUrl = 'https://page.line.me/default';

  if (ip.startsWith('1.')) {
    lineUrl = 'https://page.line.me/support1';
  } else if (ip.startsWith('2.')) {
    lineUrl = 'https://page.line.me/support2';
  }
  res.redirect(lineUrl);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});