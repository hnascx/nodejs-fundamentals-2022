import http from 'node:http'

const server = http.createServer((req, res) => {
  const { method, url } = req

  console.log(method, url)

  if (method === 'GET' && url === '/users') {
    return res.end('Listagem de usuários')
  }

  if (method === 'POST' && url === '/users') {
    return res.end('Criação de usuários')
  }

  return res.end('@hnascx')
})

server.listen(3334)