const async = require('async');
const _ = require('lodash');


let data = [{
    name: 'jyjin',
    age: 25
}, {
    name: 'jyjin',
    age: 18
}, {
    name: 'tom',
    age: 18
}, {
    name: 'jyjin',
    age: 21
}, {
    name: 'lena',
    age: 26
}, {
    name: 'liuyan',
    age: 25
}, {
    name: 'lena',
    age: 20
}]



let data1 = [{
    name: 'jyjin',
    gender: 0
}, {
    age: 18
}, {
    name: 'lena',
    gender: 1
}]


async.eachOf(data, (item, index, cb) => {
    if (!item.name) return cb(111)
    console.log(item.name)
    cb(null)
}, (err) => {
    console.log(err)
})

// filterData = _.sortBy(data, (item) => item.name);
// console.log('excel数据排序:', filterData);

// let newF = [filterData[0]];
// filterData.map((item, index) => {
//     if (item.name !== newF[newF.length - 1].name) {
//         newF.push(item);
//     }
// })


// let _data = _.cloneDeep(data);
// _data.map((item, index) => {
//     let t = _.find(newF, (distinct) => distinct.name == item.name && distinct.age == item.age);
//     if (t)
//         _.remove(_data, (o)=>{
//             return o.name == t.name && o.age==t.age
//         })
// })

// // let dropData = _.dropWhile(data, (item)=>{
// //     return _.find(newF,(distinct)=>distinct.name == item.name && distinct.age==item.age )!=undefined
// // })


// console.log('excel排序数据:', filterData);
// console.log('excel初始数据:', data);
// console.log('excel数据去重:', newF);
// console.log('excel剔除数据:', _data);


// let originData = [['1001', '562110827537', '路由权限1'],
// ['1004', '111111111111', '路由权限4'],
// ['1007', '', ''],
// ['1005', '111111111111', ''],
// ['1006', '', ''],
// ['1008', '', '路由权限3'],
// ['1003', '111111111111', ''],
// ['1010', '', '路由权限5'],
// ['1001', '562110827537', '路由权限1'],
// ['1002', '', '路由权限7'],
// ['1003', '', '']];

// let filterData = [['1002', '', '路由权限7', ''],
// ['1003', '111111111111', '', ''],
// ['1004', '111111111111', '路由权限4', ''],
// ['1005', '111111111111', '', ''],
// ['1006', '', '', ''],
// ['1007', '', '', ''],
// ['1008', '', '路由权限3', 6],
// ['1010', '', '路由权限5', '']];

// let a = _.slice(filterData, 1, 2)


// console.log('middle filteted data result:', filterData)
// console.log('middle filteted data result:', a)