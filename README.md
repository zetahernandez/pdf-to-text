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

## Tests
=======
To test that your system satisfies the needed dependencies and that module is functioning correctly execute the command in the pdf-to-text module folder
```
cd <project_root>/node_modules/pdf-to-text
npm test
```