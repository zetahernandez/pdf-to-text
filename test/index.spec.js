var path = require('path');
var should = require('should');
var main = require('../index.js');

describe('Index test', function() {
  var file_name = 'multipage_searchable.pdf';
  var relative_path = path.join('test_data', file_name);
  var pdf_path = path.join(__dirname, relative_path);
  var hash;

  it('should extract info from pdf', function(done) {
    this.timeout(10 * 1000);
    this.slow(5 * 1000);
    main.info(pdf_path, function(err, info) {
      should.not.exist(err);
      done();
    });
  });
  it('should extract text from pdf', function(done) {
    this.timeout(10 * 1000);
    this.slow(5 * 1000);
    main.pdfToText(pdf_path, function(err, data) {
      should.not.exist(err);
      done();
    });
  });
});