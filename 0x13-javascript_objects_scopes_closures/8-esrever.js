#!/usr/bin/node
exports.esrever = function (list) {
  const esrev = [];
  for (let a = 0; a < list.length; a++) {
    esrev.unshift(list[a]);
  }
  return esrev;
};
