import http from 'node:http'

const server = http.createServer((req, res) => {
  return res.end('@hnascx98')
})

server.listen(3334)