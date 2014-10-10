var info = require('./lib/info.js'),
  extract = require('./lib/extract-text.js'),
  fs = require('fs');

function PDF() {
  if (false === (this instanceof PDF)) {
    return new PDF();
  }
}


PDF.prototype.info = function(pdf_path, cb) {

  fs.exists(pdf_path, function(exist) {
    if (!exist) return cb('no file exists at the path you specified');
    info.process(pdf_path, cb);
  });
}
PDF.prototype.pdfToText = function(pdf_path, options, cb) {

  fs.exists(pdf_path, function(exist) {
    if (!exist) return cb('no file exists at the path you specified');
    extract.process(pdf_path, options, cb);
  });
}


module.exports = new PDF();