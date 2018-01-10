
let show = (msg) => {
    console.log(msg)
}

// const request = require('request');
const http = require('http');
// show('Buffer:',Buffer);
// show(`request:${request}`)
// show(`http:${http.request}`)

const postData = JSON.stringify({
    'msg': 'Hello World!'
});

const opt = {
    hostname: '127.0.0.1',
    port: 5000,
    path: '/api/test',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    },
    timeout:100
}

let req = http.request(opt, (res) => {
    // show(`res:${res}`);
    // show(`status:${res.statusCode}`)
    // show(`header:${res.headers}`)
    res.setEncoding('utf8');

    res.on('data', (result) => {
        show(`body:${result}`);
    })

    res.on('end', () => {
        // show(`args:${arguments}`)
    })

    res.on('timeout',()=>{
        show('response timeout...')
    })
})

req.setTimeout(opt.timeout,()=>{
    show(`request timeout...`)
    req.abort();
})

req.on('error', (e) => {
    show(`problem with request:${e.message}`);
})


// write data to request body
req.write(postData);
req.end();


