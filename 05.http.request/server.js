const http = require('http');
const server = http.createServer((req, res)=>{
    console.log('new request coming:')
    console.log('-- req.headers:',req.headers)
    console.log('-- req.type:',req.method)
    console.log('-- req.body:',req.body)

    const ip = res.socket.remoteAddress;
    const port = res.socket.remotePort;

    res.end(`你的IP地址我知道是${ip},还知道你的端口号是${port}`);
})

server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

console.log(`Listening port 5000...`)
server.listen(5000)