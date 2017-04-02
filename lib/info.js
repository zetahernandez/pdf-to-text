var spawn = require('child_process').spawn;
/**
 * Extract info for pdf using pdfinfo external program
 * and parse the result to object
 *
 * @param  String  pdf_path absolute path to pdf
 * @param  Function callback with params (err, output)
 * @return void
 */
module.exports.process = function(pdf_path, callback) {
  var child = spawn('pdfinfo', ['-box', pdf_path]);

  var stdout = child.stdout;
  var stderr = child.stderr;
  var output = '';

  stdout.setEncoding('utf8');
  stderr.setEncoding('utf8');

  stderr.on('data', function(data) {
    console.log('data ' + data)
    return callback(data, null);
  });

  // buffer the stdout output
  stdout.on('data', function(data) {
    output += data;
  });

  stdout.on('close', function(code) {
    if (code) {
      return callback('pdfinfo end with code ' + code, null);
    }
    output = convertOutputToObject(output);
    callback(null, output);
  });
};
/**
 * convert output to object key value
 * @param  String output
 *
 * @return Object key value
 */
function convertOutputToObject(output) {
  var result = {};
  //split by line
  var lines = output.split(/\n/g);
  for (var i = 0; i < lines.length; i++) {
    //split by first ":"
    var line = lines[i].split(':');

    if (line.length < 2) continue;

    var key = line[0].trim().toLowerCase().replace(/ /g, "_");
    var value = "";
    for (var j = 1; j < line.length; j++) {
      if (j + 1 < line.length) {
        value += line[j].trim() + ":";
      } else {
        value += line[j].trim();
      }

    }
    if (value !== "" && !isNaN(value)) {
      value = parseFloat(value);
    } else if (value !== "" && !isNaN(Date.parse(value))) {
      value = Date.parse(value);
    }
    result[key] = value;
  }
  return result;
}
