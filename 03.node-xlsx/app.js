var iconv = require('iconv-lite')
var xlsx = require('node-xlsx')
var fs = require('fs');

var data  = fs.readFileSync('./批量导入分机模板.xlsx')
var fileStr = xlsx.parse(data)
console.log(fileStr)
console.log(fileStr[0].data)

