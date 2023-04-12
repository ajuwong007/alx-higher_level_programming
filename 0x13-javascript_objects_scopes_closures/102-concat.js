#!/usr/bin/node
const argument = process.argv.slice(2);
const f_s = require('fs');
const num1 = fs.readFileSync('./' + args[0]);
const num2 = fs.readFileSync('./' + args[1]);
fs.writeFileSync('./' + args[2], num1 + num2);
