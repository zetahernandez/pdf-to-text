var path = require('path');
var should = require('should');
var info = require('../lib/info.js');

describe('Info test', function() {
  var file_name = 'multipage_searchable.pdf';
  var relative_path = path.join('test_data', file_name);
  var pdf_path = path.join(__dirname, relative_path);
  var hash;

  it('should extract info from pdf', function(done) {
    this.timeout(10 * 1000);
    this.slow(5 * 1000);
    info.process(pdf_path, function(err, info) {
      should.not.exist(err);

      info.should.have.property('title');
      info.should.have.property('subject');
      info.should.have.property('author');
      info.should.have.property('creator');
      info.should.have.property('producer');
      info.should.have.property('creationdate');
      info.should.have.property('moddate');
      info.should.have.property('tagged');
      info.should.have.property('pages');
      info.should.have.property('encrypted');
      info.should.have.property('page_size');
      info.should.have.property('mediabox');
      info.should.have.property('cropbox');
      info.should.have.property('bleedbox');
      info.should.have.property('file_size');
      info.should.have.property('optimized');
      info.should.have.property('pdf_version');

      done();
    });
  });
});