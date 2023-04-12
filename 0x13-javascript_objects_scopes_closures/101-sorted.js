#!/usr/bin/node
const box = require ('./101-data.js').dict;
const secondbox = {};
for (const key in dict) {
  if (secondbox[dict[key]] === undefined) {
    secondbox[dict[key]] = [];
  }
  secondbox[dict[key]].push(key);
}
console.log(secondbox);
