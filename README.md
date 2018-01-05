# jsdoc2js-loader

[![License](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)](https://github.com/au-re/jsdoc2js-loader/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/jsdoc2js-loader)
[![dependencies Status](https://david-dm.org/au-re/jsdoc2js-loader/status.svg?style=flat-square)](https://david-dm.org/au-re/jsdoc2js-loader)

📖📥📦 Loads jsdoc descriptions as javascript objects

Simple webpack loader using [jsdoc-api](https://github.com/jsdoc2md/jsdoc-api).

## Installation
```
npm i -D jsdoc2js-loader
```

## Example Usage

_myFile.js_
```javascript
/**
 * add two numbers
 *
 * @param {number} a - some number
 * @param {number} b - another number
 * @returns {number} - a + b
 */
function demo(a, b) {
  return a + b;
}
```

Load the documentation description like so:
```javascript
const docs = require(!!raw-loader!jsdoc2js!myFile.js);
console.log(JSON.stringify(docs, null, 2));
[
  {
    "comment": "/**\n * add two numbers\n *\n * @param {number} a - some number\n * @param {number} b - another number\n * @returns {number} - a + b\n */",
    "meta": {
      "range": [
        132,
        171
      ],
      "filename": "vgbattkh3xi2tilrkq5j1l.js",
      "lineno": 8,
      "path": "/tmp",
      "code": {
        "id": "astnode100000001",
        "name": "demo",
        "type": "FunctionDeclaration",
        "paramnames": [
          "a",
          "b"
        ]
      }
    },
    "description": "add two numbers",
    "params": [
      {
        "type": {
          "names": [
            "number"
          ]
        },
        "description": "some number",
        "name": "a"
      },
      {
        "type": {
          "names": [
            "number"
          ]
        },
        "description": "another number",
        "name": "b"
      }
    ],
    "returns": [
      {
        "type": {
          "names": [
            "number"
          ]
        },
        "description": "- a + b"
      }
    ],
    "name": "demo",
    "longname": "demo",
    "kind": "function",
    "scope": "global"
  },
  {
    "kind": "package",
    "longname": "package:undefined",
    "files": [
      "/tmp/vgbattkh3xi2tilrkq5j1l.js"
    ]
  }
]
```
