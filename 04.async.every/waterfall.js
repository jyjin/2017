const async = require('async');


async.waterfall([(cb) => {
    setTimeout(()=>{
        // cb(null, 'jyjin')
        cb('run error')
    },100)
}, (name, cb) => {
    console.log('name:',name);
    setTimeout(()=>{
        cb(null, 18)
    },200)
}, (age, cb) => {
    console.log('age:',age)
}], (err, result) => {
    if(err){
        console.error('[ERR]', err);
    }
    console.log('All functions run, result:', result)
})