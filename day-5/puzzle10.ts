export {}

'use strict'

declare function require(path: string): any;
const fs = require('fs');

let polymer = fs.readFileSync('input.txt', 'utf-8');