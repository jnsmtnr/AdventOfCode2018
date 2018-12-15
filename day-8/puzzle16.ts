export {}

'use strict'

declare function require(path: string): any
const fs = require('fs')

const input = fs.readFileSync('input.txt').toString().split(' ').map(x => Number(x));

function theFunction() {
  const count = input.shift();
  const meta = input.shift();

  if (count) {
      const chtr = [];
      for (let _ = 0; _ < count; _ ++)
          chtr.push(theFunction());
      const metr = [];
      for (let _ = 0; _ < meta; _ ++)
          metr.push(input.shift());

      let ans = 0;
      for (const u of metr) {
          const ix = u - 1;
          if (ix >= 0 && ix < chtr.length)
              ans += chtr[ix];
      }
      return ans;
  } else {
      let ans = 0;
      for (let _ = 0; _ < meta; _ ++)
          ans += input.shift();
      return ans;
  }
}

console.log(theFunction())