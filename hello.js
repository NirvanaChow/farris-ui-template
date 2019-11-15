#!/usr/bin/env node
var name = process.argv[2];
var exec = require('child_process').exec;
var fs = require('fs');
var fileDir = 'generate-theme/' + formatDateTime() + '/';
const async = require('async');
var path = require('path'); //解析需要遍历的文件夹
var sourceScssPath = 'theme/entrance';
var child = exec(
  'cd E:\\代码类\\Try_Farris_Theme\\online\\farris-theme',
  function(cdErr, cdStdout, cdStderr) {
    if (cdErr) throw cdErr;
    console.log(cdStdout);
    // fs.writeFileSync(
    //   'generate-theme/change.scss',
    //   '$farris-checkbox-size: 1rem;',
    //   function(err) {
    //     if (err) {
    //       console.error(err);
    //       return;
    //     }

    //     // res.json({ text: data, status: 'success' });
    //   }
    // );
    createThemeVariablesFiles('$farris-checkbox-size: 1rem;');
    // fileDisplay('theme/entrance');
  }
);
function beforeCreateTheme(filePath) {
  //根据文件路径读取文件，返回文件列表
}

/**
 * 文件夹
 */
function formatDateTime() {
  var date = new Date();
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = date.getDate();
  d = d < 10 ? '0' + d : d;
  var h = date.getHours();
  h = h < 10 ? '0' + h : h;
  var minute = date.getMinutes();
  minute = minute < 10 ? '0' + minute : minute;
  var second = date.getSeconds();
  second = second < 10 ? '0' + second : second;
  return y + '-' + m + '-' + d + '-' + h + '-' + minute + '-' + second;
}
/**
 * 按照顺序创建文件
 * 依次创建文件
 */
function createThemeVariablesFiles(variables) {
  const result = [
    {
      name: 'variables.scss',
      content: variables
    }
  ];
  fs.readdir(sourceScssPath, function(readDirFileError, files) {
    if (readDirFileError) {
      console.warn(readDirFileError);
    } else {
      //遍历读取到的文件列表
      files.forEach(function(filename) {
        if (filename.lastIndexOf('.scss') > -1) {
          let temp_obj = {
            name: filename,
            content: `
            @import './variables.scss';
            @import '${sourceScssPath}/${filename}';
            `
          };
          result.push(temp_obj);

          console.log(result);
        }
      });

      //创建文件夹
      fs.mkdirSync(fileDir);
      // 顺序创建文件
      async.each(
        result,
        function(fileDetail, callback) {
          fs.writeFile(
            fileDir + fileDetail['name'],
            fileDetail['content'],
            function(createFileError) {
              if (createFileError) {
                console.log(createFileError);
              }
              callback(createFileError);
            }
          );
        },
        function(createFilesError) {
          if (createFilesError) {
            console.log(createFilesError);
          } else {
            //所有的文件都创建成功，开始执行命令
            exec('gulp bootstrap --dir ' + fileDir, function(
              btError,
              btStdout,
              btStderr
            ) {
              if (btError) throw btError;
              let rs = fs.createReadStream(fileDir + 'dist/bootstrap.css', {
                highWaterMark: 1
              });
              let dataArray = [];
              let resultString = '';
              rs.on('data', function(chunk) {
                //chunk是buffer类型
                dataArray.push(chunk);
              });
              rs.on('end', function(chunk) {
                resultString = Buffer.concat(dataArray).toString();
                console.log('读取成功' + resultString);
              });
              rs.on('error', function(err) {
                console.log(err + '读取文件异常');
              });
            });
          }
        }
      );
    }
  });

  /*读取文件 */
  /*let fs=require("fs");
// 第一个参数，读取文件的路径
//第二个参数 highWaterMark 最高水位线,默认最多读取64K
//读取的类容都是buffer类型
//返回的结果是一个可读流的实例,是非流动模式---我们最后要转为流动模式
// 转流动模式需要on事件监测
let rs=fs.createReadStream('./1.txt',{highWaterMark:1})
//在内部不断触发rs.emit('data',数据)；data不能更改,留动模式开启后，数据会疯狂触发data事件
let arr=[];
rs.on('data',function (chunk) {  //chunk是buffer类型
    arr.push(chunk);
})
//监听文件读取完毕，会自动触发一次end事件，没有读取完是不会触发的
//Buffer.concat合并小buffer
rs.on('end',function (chunk) {
    
    console.log( Buffer.concat(arr).toString());
})
// 监听错误
rs.on('error',function (err) {
    console.log(err);
})*/
  // rs.resume() 恢复读取
  // rs.pause()  暂停读取
  //这两个都控制是否继续触发data事件

  // fs.exists(path, function (exists) {
  //     if(exists){
  //       // 删除
  //     }else{
  //       fs.mkdir(fileDir, function (mkdirError) {
  //           // 创建文件夹错误
  //           if(mkdirError){
  //             return false;
  //           }

  //       });
  //     }
  // }
}
