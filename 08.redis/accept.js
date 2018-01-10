
const redisEvent = require('./redisEvent')

let client = redisEvent.pub();
client.subscribe('a', (err, msg) => {
    if(err){
        console.log('[ERR]')
    }
    console.log('msg:', msg)
})

client.publish('a', 'hello')