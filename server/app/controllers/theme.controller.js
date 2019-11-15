#!/usr/bin/env node
var exec = require('child_process').exec;
let commandDir = require('../command/command-dir.js');
var fs = require('fs');
var fileDir = 'generate-theme/';
const async = require('async');
let sourceDir = 'server/app/themes/default/default/';
const themePresetDir = 'server/app/themes/';
var path = require('path'); //解析需要遍历的文件夹
let sourceScssPath = 'theme/entrance/default/';
// 压缩
const compressDir = require('../command/compress-dir');
// 下载
const downloadProgress = require('../command/download-progress-copy');
/**
 * 修改变量
 * 返回生成后的样式内容到前端
 */
exports.changeVariables = function(req, res) {
  exec('cd ' + commandDir, function(err, stdout, stderr) {
    if (err) {
      res.json({ text: err, status: 'error' });
      return;
    }
    const distFileDir = fileDir + req.body['fileDir'] + '/';
    // 获取传递的内容
    const getVariablesContent = createFileContent(req.body['variables']);
    createThemeVariablesFiles(
      getVariablesContent,
      req.body['themeExtend'],
      distFileDir,
      function() {
        exec('gulp changetheme --dir ' + distFileDir, function(
          btError,
          btStdout,
          btStderr
        ) {
          if (btError) throw btError;
          getFileContentFuncs(
            distFileDir + 'dist/farris-all.css',
            function(cssContent) {
              res.json({ text: cssContent, status: 'success' });
            },
            function(error) {
              res.json({ text: error, status: 'error' });
            }
          );
        });
      },
      function(error) {
        res.json({ text: error, status: 'error' });
      }
    );
  });
};
/**
 * 获取变量
 * 待处理：1、json通过css生成
 */
exports.getVariables = function(req, res) {
  // 获取传递的内容
  exec('cd ' + commandDir, function(err, stdout, stderr) {
    if (err) {
      res.json({ text: err, status: 'error' });
      return;
    }
    getFileContentFuncs(
      sourceDir + 'variables.json',
      function(cssdata) {
        res.json({ text: JSON.parse(cssdata), status: 'success' });
      },
      function(error) {
        res.json({ text: error, status: 'error' });
      }
    );
  });
};

/**
 * 获取单独扩展的样式文件
 */
exports.getThemeExtend = function(req, res) {
  // 获取传递的内容
  exec('cd ' + commandDir, function(err, stdout, stderr) {
    if (err) {
      res.json({ text: err, status: 'error' });
      return;
    }
    getFileContentFuncs(
      sourceDir + 'extend.scss',
      function(themeExtend) {
        res.json({ text: themeExtend, status: 'success' });
      },
      function(error) {
        res.json({ text: error, status: 'error' });
      }
    );
  });
};
/**
 * 获取预置的主题变量
 * 待处理：1、json通过css生成
 */
exports.getPresetThemes = function(req, res) {
  // 获取传递的内容
  exec('cd ' + commandDir, function(err, stdout, stderr) {
    if (err) {
      res.json({ text: err, status: 'error' });
      return;
    }

    getFileContentFuncs(
      themePresetDir + 'preset-themes.json',
      function(presetContent) {
        res.json({ text: JSON.parse(presetContent), status: 'success' });
      },
      function(error) {
        res.json({ text: error, status: 'error' });
      }
    );
  });
};
/**
 * 选中预置主题后，变更相关文件夹
 */
exports.selectTheme = function(req, res) {
  exec('cd ' + commandDir, function(err, stdout, stderr) {
    if (err) {
      res.json({ text: err, status: 'error' });
      return;
    }
    // 修改环境变量
    sourceDir =
      'server/app/themes/' +
      (req.body['themeCode']
        ? req.body['themeCode'] + '/' + req.body['themeType']+'/'
        : 'default/default/');

    sourceScssPath =
      'themes/' +
      (req.body['themeCode']
        ? req.body['themeCode'] + '/' + req.body['themeType']+'/'
        : 'default/default');

    res.json({ text: '', status: 'success' });
  });
};
/**
 * 下载主题文件包
 */
exports.downloadTheme = function(req, res) {
  exec('cd ' + commandDir, function(err, stdout, stderr) {
    if (err) {
      res.json({ text: err, status: 'error' });
      return;
    }
    compressThenDownload(req.params.themefolder, res);
    let curThemeFolder = 'generate-theme/' + req.params.themefolder;
    // 判断当前主题是否已经生成过了
    const hasCreated = fs.existsSync(curThemeFolder);
    if (hasCreated) {
      // 执行压缩和下载
      compressThenDownload(req.params.themefolder, res);
    } else {
      // 获取主题
      getFileContentFuncs(
        sourceDir + 'variables.json',
        function(cssdata) {
          // 自定义样式文件
          getFileContentFuncs(
            sourceDir + 'theme-extend.scss',
            function(themeExtend) {
              //
              const getVariablesContent = createFileContent(
                JSON.parse(cssdata)
              );
              // 生成主题
              const distFileDir = fileDir + req.params.themefolder + '/';
              createThemeVariablesFiles(
                getVariablesContent,
                themeExtend,
                distFileDir,
                function() {
                  // 生成样式文件
                  exec('gulp changetheme --dir ' + distFileDir, function(
                    btError,
                    btStdout,
                    btStderr
                  ) {
                    if (btError) throw btError;
                    // 开始压缩
                    compressThenDownload(req.params.themefolder, res);
                  });
                },
                function(error) {
                  res.json({ text: '下载文件失败' + error, status: 'error' });
                }
              );
            },
            function(error) {
              res.json({ text: '下载文件失败' + error, status: 'error' });
            }
          );
        },
        function(error) {
          res.json({ text: '下载文件失败' + error, status: 'error' });
        }
      );
    }
  });
};

exports.testFunc = function(req, res) {
  exec('cd ' + commandDir, function(err, stdout, stderr) {
    // // 实现文件下载
    // // var fileName = req.params.fileName;
    // const filePath = 'generate-theme/test.txt';
    // var stats = fs.statSync(filePath);
    // if (stats.isFile()) {
    //   console.log(stats.size);
    //   res.setHeader({
    //     'Content-Type': 'application/octet-stream',
    //     'Content-Disposition': 'attachment; filename=test.txt',
    //     'Content-Length': stats.size
    //   });
    //   fs.createReadStream(filePath).pipe(res);
    // } else {
    //   res.end(404);
    // }
    res.download('generate-theme/test.txt');
  });
};

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
function createThemeVariablesFiles(
  variables,
  themeExtendContent,
  distFileDir,
  successCallback,
  errorCallback
) {
  const result = [
    {
      name: 'variables.scss',
      content: variables
    },
    {
      name: 'theme-extend.scss',
      content: themeExtendContent
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
          if (filename.lastIndexOf('farris-default') > -1) {
            temp_obj.content += "@import './theme-extend.scss'";
          }
          result.push(temp_obj);
        }
      });
      //创建文件夹
      fs.mkdirSync(distFileDir);
      // 顺序创建文件
      async.each(
        result,
        function(fileDetail, callback) {
          fs.writeFile(
            distFileDir + fileDetail['name'],
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
            errorCallback(createFilesError);
          } else {
            // 所有的文件都创建成功，开始执行命令
            successCallback();
          }
        }
      );
    }
  });
}

/**处理结果数据 */
function createFileContent(data = []) {
  let result = [];
  data.forEach(item => {
    item.variables.forEach(varDefine => {
      // 分组分割
      if (varDefine['type'] == 'group') {
        result.push('// ' + varDefine['text']);
      } else {
        result.push(varDefine['name'] + ':' + varDefine['value'] + '!default;');
      }
    });
  });
  return result.join('\n');
}
/**
 * 读取文件
 * @param {*} filePath
 * @param {*} successCallback
 * @param {*} errorCallback
 */
function getFileContentFuncs(filePath, successCallback, errorCallback) {
  let rs = fs.createReadStream(filePath, {
    highWaterMark: 1
  });
  let dataArray = [];
  let result = '';
  rs.on('data', function(chunk) {
    //chunk是buffer类型
    dataArray.push(chunk);
  });
  rs.on('end', function(chunk) {
    result = Buffer.concat(dataArray).toString();
    if (successCallback) {
      successCallback(result);
    }
  });
  rs.on('error', function(err) {
    if (errorCallback) {
      errorCallback(err);
    }
  });
}
/**
 * 压缩文件夹后，下载文件夹
 * @param {*} themefolder
 * @param {*} response
 */
function compressThenDownload(themefolder, response) {
  // const defaultOption = {
  //   sourcedir: 'generate-theme/' + themefolder,
  //   destdir: 'generate-theme/download/' + themefolder,
  //   onDone: info => {
  //     response.download('generate-theme/download/' + themefolder + '.tar');
  //   },
  //   onError: info => {
  //     response.json({ text: '压缩失败' + info });
  //   }
  // };
  const defaultOption = {
    sourcedir: 'E:\\代码类\\Try_Farris_Theme\\farris-theme-ng7\\farris-theme-ng7\\themes\\default',
    destdir: 'generate-theme/download/主题default类型default',
    onDone: info => {
      response.download('generate-theme/download/主题default类型default.tar');
    },
    onError: info => {
      response.json({ text: '压缩失败' + info });
    }
  };
  var cpDir = compressDir(defaultOption);
}
