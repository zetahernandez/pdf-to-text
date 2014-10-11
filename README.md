# PDF-TO-TEXT
pdf-to-text is a tool to extract text from pdf. for the moment not support ocr scannig to extract text only works for searchable pdf files. This package doesn't have nodejs dependencies. 

[![Build Status](https://travis-ci.org/zetahernandez/pdf-to-text.png)](https://travis-ci.org/zetahernandez/pdf-to-text)

## Installation
=======
To install the module.
`npm install pdf-to-text`

You need install the next tools to use this module


- pdftotext
    - pdftotext is used to extract text out of searchable pdf documents
- pdfinfo
    - pdfinfo is used to obtain the info of pdf documents

### OSX
To begin on OSX, first make sure you have the homebrew package manager installed.


**pdftotext** is included as part on the xpdf utilities library. **xpdf** can be installed via homebrew
``` bash
brew install xpdf
```

### Ubuntu

**pdftotext** is included in the **poppler-utils** library. To installer poppler-utils execute
``` bash
apt-get install poppler-utils
```


## Usage
=======

### PDF Info

Obtain info from pdf file
```js
var pdfUtil = require('pdf-to-text');
var pdf_path = "absolute_path/to/pdf_file.pdf";

pdfUtil.info(pdf_path, function(err, info) {
    if (err) throw(err);
    console.log(info);
});
```

It's retrieve an object with the data info from the pdf file

``` json
{ title: 'some title',
  subject: 'TeX output 2003.10.17:1908',
  author: 'Fernando Hernandez',
  creator: 'creator name',
  producer: 'Acrobat Distiller 4.0 for Windows',
  creationdate: 1066428670000,
  moddate: 1066428687000,
  tagged: 'no',
  form: 'none',
  pages: 8,
  encrypted: 'no',
  page_size: '612 x 792 pts (letter)',
  file_size: '28695 bytes',
  optimized: 'yes',
  pdf_version: 1.2 
  }
```

### PDF Text extract

You can extract text by a range of pages given an option object with **from** and **to** properties, or simply omit this option to extract all text from the pdf file

```js
var pdfUtil = require('pdf-to-text');
var pdf_path = "absolute_path/to/pdf_file.pdf";

//option to extract text from page 0 to 10
var option = {from: 0, to: 10};

pdfUtil.pdfToText(upload.path, option, function(err, data) {
  if (err) throw(err);
  console.log(data); //print text    
});

//Omit option to extract all text from the pdf file
pdfUtil.pdfToText(upload.path, function(err, data) {
  if (err) throw(err);
  console.log(data); //print all text    
});
```


## Tests
=======
To test that your system satisfies the needed dependencies and that module is functioning correctly execute the command in the pdf-to-text module folder
```
cd <project_root>/node_modules/pdf-to-text
npm test
```
