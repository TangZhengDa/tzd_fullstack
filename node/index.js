const http = require('http')
const fs = require('fs')
const { info } = require('console')
const { Socket } = require('dgram')
//搭建一个web服务
var server = http.createServer(function (req, res) {
    if (res.url !== '/favicon.ico') {
        res.writeHead(200, { "Content-type": "text/html" })
        const myreadstream = fs.createReadStream(__dirname + '/views/http_demo.html', 'utf-8')
        myreadstream.pipe(res)
    }
})
var io = require('socket.io')(server)

io.on('connection', function () {//声明一个io的使用
    console.info('一个socket连接成功了')
    socket.on('Link_to_server', (msg) => {
        console.log(`我收到一个问题 ${msg}`)
        //响应客户端

    })
})
server.listen(8080, () => {
    console.log('server is running...');
})