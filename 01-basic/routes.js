const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html lang=""> <head><title>My First Page</title></head> \
    <body><h1>Enter Message</h1>\
    <form action="/message" method="POST"><input name="msg" type="text"/><button type="submit">Send</button></form></body>\
    </html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
      const message = parseBody.split('=')[1];
      console.log(message);
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });

  }

  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html lang=""> <head><title>My First Page</title></head> \
  <body><h1>Hello from server Node.JS</h1></body></html>');
  res.end();
};

// module.exports = requestHandler;

module.exports = {
  handler: requestHandler,
  someText: "Hard Coded Maxsize"
}