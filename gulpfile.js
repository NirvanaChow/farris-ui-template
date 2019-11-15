var gulp = require('gulp'); // 引入 gulp
var minifycss = require('gulp-minify-css'); // 引入 gulp-uglify 插件
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
const magicImporter = require('node-sass-magic-importer');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const through2 = require('through2');
// 定义主题
let themeDetail = {};
// 读取Theme配置文件

// gulp.task('somename', function() {
//   var deferred = Q.defer();

//   // 执行异步的操作
//   setTimeout(function() {
//     deferred.resolve();
//   }, 1);

//   return deferred.promise;
// });
/**控制参数 ****************************开始***************/
let srcDir = 'theme/entrance/';
let distDir = 'theme/dist';
let publishDir='publish/default/default/dist'
var argvDirIndex = process.argv.indexOf('--dir');
if (argvDirIndex > -1) {
  srcDir = process.argv[argvDirIndex + 1];
  distDir = srcDir + 'dist';
}
/**控制参数 *******************************结束*****************/
// 清空
gulp.task('clean', function() {
  return gulp.src([distDir + '/*.css']).pipe(clean({ force: true }));
});
// 压缩css
gulp.task('publish:compress', function() {
  // var deferred = Q.defer();
  // task 任务定义，'minjs' 自定义任务名
  return gulp
    .src(distDir + '/*.css') // src 定义任务文件
    .pipe(minifycss()) // .pipe() 链式编码，管道过程执行任务
    .pipe(gulp.dest(publishDir+'/dist')); // dest() 定义成型文件输入地址
  // return deferred.promise;
});
// 清除文件
gulp.task('publish:clean', function() {
  publishDir='publish/'+options.code+'/'+options.type;
  return gulp.src([publishDir+'/*']).pipe(clean({ force: true }));
});
// 拷贝文件
gulp.task('publish:readme', function() {
  return gulp
    .src(['themes/default/README.md', 'themes/default/package.json'])
    .pipe(gulp.dest(publishDir));
});
gulp.task('publish:font', function() {
  return gulp
    .src([
      'theme/assets/farrisicon-extend.ttf',
      'theme/assets/farrisicon.ttf'
    ])
    .pipe(gulp.dest(publishDir+'/dist'));
});
gulp.task('publish:img', function() {
  return gulp.src(['theme/assets/imgs/*']).pipe(gulp.dest(publishDir+'/dist/imgs'));
});


/* kendo  ***********************************************开始****************************/
gulp.task('kendo', () => {
  return (
    gulp
      .src(srcDir + 'kendo.scss')
      .pipe(modifyContent(modifySCSS))
      .pipe(
        sass({
          importer: magicImporter(),
          'output-style': 'expanded',
          precision: 5
        }).on('error', sass.logError)
      )
      //    .pipe(sourcemaps.write({ includeContent: false }))
      //  .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(autoprefixer())
      //.pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(distDir))
  );
});
/* kendo ***********************************************结束****************************/

/* bootstrap ***********************************************开始****************************/
gulp.task('bootstrap', function(param) {
  return (
    gulp
      .src(srcDir + 'bootstrap.scss')
      .pipe(modifyContent(modifySCSS))
      .pipe(
        sass({
          importer: magicImporter(),
          'output-style': 'expanded',
          precision: 5
        }).on('error', sass.logError)
      )
      //  .pipe(sourcemaps.write({ includeContent: false }))
      //  .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(autoprefixer())
      //  .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(distDir))
  );
});
/* bootstrap ***********************************************结束****************************/

/* farris 自定义样式 相关 ***********************************************开始****************************/
gulp.task('farris-css', function() {
  return gulp
    .src([
      srcDir + 'override-bootstrap.scss',
      srcDir + 'override-kendo.scss',
      srcDir + 'farris-default.scss'
    ])
    .pipe(modifyContent(modifySCSS))
    .pipe(
      sass({
        importer: magicImporter(),
        'output-style': 'expanded',
        precision: 5
      }).on('error', sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(gulp.dest(distDir + '/temp'));
});

gulp.task('farris-concat', function() {
  return gulp
    .src([
      distDir + '/temp/override-bootstrap.css',
      distDir + '/temp/override-kendo.css',
      distDir + '/temp/farris-default.css'
    ])
    .pipe(concat('farris-default.css'))
    .pipe(gulp.dest(distDir));
});
gulp.task('farris-clean', function() {
  return gulp.src([distDir + '/temp']).pipe(clean({ force: true }));
});
gulp.task('farris', gulp.series('farris-css', 'farris-concat', 'farris-clean'));
/* farris 自定义样式 相关 ***********************************************结束****************************/
gulp.task('all:concat', function() {
  return gulp
    .src([
      distDir + '/bootstrap.css',
      distDir + '/kendo.css',
      'farris-icon/dist/farrisicon.css',
      distDir + '/farris-default.css'
    ])
    .pipe(concat('farris-all.css'))
    .pipe(gulp.dest(distDir));
});

/* farris icon 图标库文件 ***********************************************开始****************************/
gulp.task('farrisicon-css', function(param) {
  return (
    gulp
      .src('farris-icon/entrance/farrisicon.scss')
      //  .pipe(sourcemaps.init())
      .pipe(
        sass({
          importer: magicImporter(),
          'output-style': 'expanded',
          precision: 5
        }).on('error', sass.logError)
      )
      .pipe(minifycss())
      //  .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('farris-icon/dist/'))
  );
});

gulp.task('farrisicon-ttf', function() {
  return gulp
    .src([
      'farris-icon/scss/extend/farrisicon-extend.ttf',
      'farris-icon/scss/farris/farrisicon.ttf',
      'farris-icon/entrance/farrisicon.html'
    ])
    .pipe(gulp.dest('farris-icon/dist'));
});

gulp.task('copy-font-to-assets', function() {
  return gulp
    .src([
      'farris-icon/scss/extend/farrisicon-extend.ttf',
      'farris-icon/scss/farris/farrisicon.ttf'
    ])
    .pipe(gulp.dest('theme/assets'));
});

gulp.task('farrisicon-publish', function() {
  return gulp
    .src(['farris-icon/package.json', 'farris-icon/README.md'])
    .pipe(gulp.dest('farris-icon/dist'));
});

gulp.task('farrisicon-clean', function() {
  return gulp.src(['farris-icon/dist/*']).pipe(clean({ force: true }));
});

// 生成样式
gulp.task(
  'farrisicon',
  gulp.series('farrisicon-clean', 'farrisicon-css', 'farrisicon-ttf')
);
// 发布
gulp.task(
  'farrisicon:publish',
  gulp.series(
    'farrisicon-clean',
    'farrisicon-css',
    'farrisicon-ttf',
    'farrisicon-publish',
    'copy-font-to-assets'
  )
);
/* farris icon 图标库文件 ***********************************************结束****************************/

/**
 * 生成kendo,bootstrap,farris未压缩版样式
 */
gulp.task(
  'all',
  gulp.series(
    'clean',
    'kendo',
    'bootstrap',
    'farris',
    'farrisicon',
    'all:concat'
  )
);

gulp.task(
  'publish',
  gulp.series(
    'all',
    'publish:clean',
    'publish:readme',
    'publish:font',
    'publish:img',
    'publish:compress'
  )
);

/** 整个工程的样式 **********************************************************************************/
gulp.task('docs', function(param) {
  return gulp
    .src('docs/scss/docs.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        importer: magicImporter(),
        'output-style': 'expanded',
        precision: 5
      }).on('error', sass.logError)
    )
    .pipe(sourcemaps.write({ includeContent: false }))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('src/assets/docs'));
});
/**  生成 ****************************************************************************/
// 压缩css
gulp.task('changetheme:compress', function() {
  // var deferred = Q.defer();
  // task 任务定义，'minjs' 自定义任务名
  return gulp
    .src(distDir + '/farris-all.css')
    .pipe(minifycss())
    .pipe(gulp.dest(distDir));
});
gulp.task('changetheme', gulp.series('all', 'changetheme:compress'));

// 自动更新文件
gulp.task('update', function() {
  return gulp
    .src([
      'farris-icon/dist/farrisicon-extend.ttf',
      'farris-icon/dist/farrisicon.ttf',
      distDir + '/farris-all.css'
    ])
    .pipe(gulp.dest('src/assets/themes/default'));
});
// gulp.task('update',function(){
//   gulp.watch(distDir+'/farris-all.css',['update-theme']);
// });

// 2019年8月30日 临时生成文件
gulp.task('listview', function(param) {
  return (
    gulp
      .src('src/assets/templatestyle/templatestyle.scss')
      //  .pipe(sourcemaps.init())
      .pipe(
        sass({
          importer: magicImporter(),
          'output-style': 'expanded',
          precision: 5
        }).on('error', sass.logError)
      )
      //  .pipe(sourcemaps.write({ includeContent: false }))
      //  .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(autoprefixer())
      //  .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('src/assets/templatestyle/'))
  );
});

var minimist = require('minimist');
var fs = require('fs');
var knownOptions = {
  default: {
    code: 'default',
    type: 'default'
  }
};

// var exec = require('child_process').exec;
// gulp.task('test', () => {
//   exec(
//     'gulp getthemes',
//     function() {
//       console.log('xx');
//     },
//     function() {
//       console.log('xx');
//     }
//   );
// });
var options = minimist(process.argv.slice(2), knownOptions);
var baseThemes="themes/";
// 更新
gulp.task('getthemes', () => {
  return gulp.src('themes/setting.json').pipe(
    modifyContent(function(file) {
      var themes = JSON.parse(file.contents);
      themeDetail = findThemeSetting(options.code, themes);
      distDir = themeDetail['dist']+'/' + options.type;
    })
  );
});

// 更新资源
gulp.task('update-theme-assets', () => {
  if (fs.exists(distDir + '/farrisicon.ttf')) {
    return gulp.src('theme/assets/*');
  } else {
    return gulp.src('theme/assets/*').pipe(gulp.dest(distDir));
  }
});
gulp.task('theme', gulp.series('getthemes', 'all', 'update-theme-assets'));

// 修改内容
function modifyContent(detailFunc) {
  return through2.obj(function(chunk, encoding, done) {
    detailFunc(chunk);
    this.push(chunk);
    done();
  });
}

function modifySCSS(chunk) {
  var content = String(chunk.contents);
  var themePath=baseThemes+options.code+'/'+options.type+'/';
  // 追加变量定义
  if(fs.existsSync(themePath+'index.scss')){
    content = "@import '" + themePath + "index.scss';\r\n" + content;
  }
  // 追加扩展定义
  if (chunk['history'][0].indexOf('farris-default.scss') > -1) {
    if(fs.existsSync(themePath+'extend.scss')){
      content+="@import '" + themePath + "extend.scss';\r\n";
    }
  }
  chunk.contents = new Buffer(content);
}

function findThemeSetting(themeName, themes) {
  let findTheme = themes.find(item => item.theme == themeName);
  return findTheme;
}
