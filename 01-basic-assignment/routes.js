const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/' && method === 'GET'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html lang=""><head><title>Basic Node Js</title></head> \ ' +
      '<body><h1>Greeting from server</h1> \ ' +
      '<form action="/create-user" method="post">\ ' +
      '<input type="string" name="username"/><button type="submit">Save</button>\ ' +
      '</form></body></html>')
    return res.end();
  }

  if (url === '/users' && method === 'GET'){
    res.setHeader('Content-Type','text/html');
    res.write('<html lang=""><head><title>Basic Node Js</title></head> \ ' +
      '<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body></html>')
    return res.end();
  }

  if (url === '/create-user' && method === 'POST'){
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
      const username = parseBody.split('=')[1];
      console.log(username);

    })
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  // res.end()
  res.setHeader('Location', '/');
}

module.exports = requestHandler;