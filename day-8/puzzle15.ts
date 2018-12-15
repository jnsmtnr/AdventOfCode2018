export {}

'use strict'

declare function require(path: string): any
const fs = require('fs')

const input = fs.readFileSync('input.txt').toString().split(' ').map(x => Number(x));

function theFunction() {
    const count = input.shift();
    const meta = input.shift();

    let ans = 0;
    for (let _ = 0; _ < count; _ ++)
        ans += theFunction();

    for (let _ = 0; _ < meta; _ ++)
        ans += input.shift();
    
    return ans;
}

console.log(theFunction())