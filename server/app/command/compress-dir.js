const compressing = require('compressing');
const os = require('os');
var fs = require('fs');

defaultOption = {
  sourcedir: os.tmpdir(),
  destdir: null,
  onDone: new Function(),
  onError: new Function()
};

function compress(sourcedir, distdir, onError, onDone) {
  const tarStream = new compressing.tar.Stream();
  tarStream.addEntry(sourcedir);
  tarStream
    .pipe(fs.createWriteStream(distdir + '.tar'))
    .on('error', error => {
        onError(error);
    }).on('close',(info)=>{
        onDone(info);
    });
}

module.exports = function(option) {
  let sourcedir = option.sourcedir || defaultOption.sourcedir;
  let distdir = option.destdir || defaultOption.destdir;
  let onError = option.onError || defaultOption.onError;
  let onDone = option.onDone || defaultOption.onDone;
  return compress(sourcedir, distdir, onError, onDone);
};
