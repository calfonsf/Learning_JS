const http = require('node:http')

const server = http.createServer((req, res) => {
    console.log('request')
    res.end('Hola mundo')
})

server.listen(8000, () => {
    console.log('server listening on http://localhost:8000')
})