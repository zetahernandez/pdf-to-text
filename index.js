var info = require('./lib/info.js'),
  extract = require('./lib/extract-text.js'),
  fs = require('fs');


module.exports.info = function(pdf_path, cb) {

  fs.exists(pdf_path, function(exist) {
    if (!exist) return cb('no file exists at the path you specified');
    info.process(pdf_path, cb);
  });
}
module.exports.pdfToText = function(pdf_path, options, cb) {

  fs.exists(pdf_path, function(exist) {
    if (!exist) return cb('no file exists at the path you specified');
    extract.process(pdf_path, options, cb);
  });
}