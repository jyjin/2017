
let test = (a) => {
    console.log(a,' a.js test')
}

let test1 = (a) => {
    console.log(a, ' === a.js test')

    return '==='
}


exports.test = test;
exports.test1 = test1;