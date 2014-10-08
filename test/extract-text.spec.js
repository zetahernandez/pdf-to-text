var path = require('path');
var should = require('should');
var extract = require('../lib/extract-text.js');

describe('Extract test', function() {
  var file_name = 'multipage_searchable.pdf';
  var relative_path = path.join('test_data', file_name);
  var pdf_path = path.join(__dirname, relative_path);
  var hash;

  it('should extract text from pdf', function(done) {
    this.timeout(10 * 1000);
    this.slow(5 * 1000);
    extract.process(pdf_path, function(err, data) {
      should.not.exist(err);
      done();
    });
  });
  
  it('should extract text from first page of pdf', function(done) {
    this.timeout(10 * 1000);
    this.slow(5 * 1000);
    extract.process(pdf_path, {
        from: 1,
        to: 1
      },
      function(err, data) {
        should.not.exist(err);
        done();
      });
  });
});