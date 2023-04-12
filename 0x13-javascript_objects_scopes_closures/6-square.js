#!/usr/bin/node
const Sqr1 = require('./5-square.js');

module.exports = class Square extends Sqr1 {
  charPrint (c) {
    if (c === undefined) {
      this.print();
    } else {
      for (let a = 0; a < this.width; a++) {
        console.log(c.repeat(this.height));
      }
    }
  }
};
