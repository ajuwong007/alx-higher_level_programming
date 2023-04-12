#!/usr/bin/node
module.exports = class Rectangle {
  constructor (h, w) {
    if (h > 0 && w > 0) {
      this.height = h;
      this.width = w;
    }
  }
  print () {
    for (let a = 0; a < this.height; a++) {
      console.log('X'.repeat(this.width));
    }
  }
  rotate () {
    const temp = this.height;    
    this.height = this.width;
    this.width = temp;
  }
  double () {
    this.height *= 2;
    this.width *= 2;
  }
};
