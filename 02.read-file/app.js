
let fs = require('fs');
let path = require('path');
let async = require('async');
let exec = require('child_process').exec;

let tableData = [{
    content:'11111111111a',
    toPath:'1.txt'
},{
    content:'22222222222b',
    toPath:'2.txt'
},{
    content:'33333333333c',
    toPath:'3.txt'    
},{
    content:'44444444444d',
    toPath:'4.txt'
},{
    content:'55555555555e',
    toPath:'5.txt'
}]



let fileDisplay = (filePath, arr, cb) => {
    //根据文件路径读取文件，返回文件列表  
    fs.readdir(filePath, function (err, files) {
        console.log(`[fileDisplay INFO] - '${filePath}'目录的文件有：${(files && files.length) ? files : '没有文件'}`)
        if (err) {
            console.warn('[fileDisplay INFO] - 目录不存在')
            cb(arr);
        } else {
            if (!files.length) {
                console.warn(`[fileDisplay INFO] - '${filePath}'目录为空`)
                return cb(arr);
            }
            //遍历读取到的文件列表  
            files.forEach(function (filename, index) {
                //获取当前文件的绝对路径  
                var filedir = path.join(filePath, filename);
                //根据文件路径获取文件信息，返回一个fs.Stats对象  
                fs.stat(filedir, function (eror, stats) {
                    if (eror) {
                        console.warn('获取文件stats失败');
                    } else {
                        var isFile = stats.isFile();//是文件  
                        var isDir = stats.isDirectory();//是文件夹  
                        if (isFile && filedir.indexOf('.bank') == -1) {
                            arr.push(filedir)
                        }
                        if (isDir) {
                            fileDisplay(filedir, arr, cb);//递归，如果是文件夹，就继续遍历该文件夹下面的文件  
                        }
                    }
                    if (index == files.length - 1) {
                        return cb(arr);
                    }
                })
            });
        }
    });
}

// fileDisplay('/Users/jyjin/www.polylink/AAAA/target', [], (arr) => {
//     console.log('--------------------------------------------------');
//     console.log('[fileDisplay INFO] - 该目录下所有文件路径为\n', arr)
// })

let init = ()=>{
    async.every(tableData, (item, cb)=>{
        let _path =  `./target/`;
        let toPath = `${_path}${item.toPath}`
        console.log(item.content)
        myExec(`mkdir -p ${_path}`, () => {
            writeFile(toPath, item.content, cb)
        })
    },(err, result) => {
        console.log(`文件覆盖完成！${result}`)
    })
}

let writeFile = (toPath, fileData, successCallback, errorCallback)=>{
    fs.writeFile(toPath, fileData, (err)=>{
        if(err){
            console.log(`写文件失败 [ERR]:${err}`)
            if(errorCallback) return errorCallback(null, false)
        }
        console.log(`写文件'${toPath}'成功`);
        return successCallback(null, true)
    })
}

let myExec = (cmd, successCallback, errorCallback) => {
    console.log(`执行Linux命令'${cmd}'`)
    exec(cmd, null, (err, stderr, stdout) => {
        if(err){
            console.log(`[ERR]${err}`)
            if(errorCallback) return errorCallback()
        }
        if(stderr){
            console.log(`[WARNING]${stderr}`)
        }
        successCallback();
    })
}

init()