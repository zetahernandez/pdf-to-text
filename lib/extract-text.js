var spawn = require('child_process').spawn;

/**
 * Extract text from pdf using pdftotext external program
 * @param  String  pdf_path absolute path to pdf
 * @param  Object   options  {from: 1, to: 23}
 * @param  Function callback with params (err, output)
 * @return {[type]}            [description]
 */
module.exports.process = function(pdf_path, options, callback) {

  var args = [];
  if (typeof options !== 'function') {

    for (option in options) {
      //puse all provided options to the comand line arguments
      if (!isNaN(options[option]) && option != 'from' && option != 'to') {
        args.push('-' + option)
        args.push(options[option])
      }
    }

    //following two if statements and the from and to options 
    // should be deprecated - instead of from and to f and l should be used
    if (options && options.from && !isNaN(options.from)) {
      args.push('-f');
      args.push(options.from)
    };
    if (options && options.to && !isNaN(options.to)) {
      args.push('-l');
      args.push(options.to)
    };
  } else {
    callback = options;
  }



  args.push('-layout');
  args.push('-enc');
  args.push('UTF-8');
  args.push(pdf_path);
  args.push('-');

  var child = spawn('pdftotext', args);

  var stdout = child.stdout;
  var stderr = child.stderr;
  var output = '';
  var err;

  stdout.setEncoding('utf8');
  stderr.setEncoding('utf8');

  stderr.on('data', function(data) {
    err = true;
    return callback(data, null);
  });

  // buffer the stdout output
  stdout.on('data', function(data) {
    output += data;
  });

  stdout.on('close', function(code) {
    if (err) {
      return;
    }
    if (code) {
      return callback('pdftotext end with code ' + code, null);
    }
    callback(null, output);

  });
};
