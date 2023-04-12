#!/usr/bin/node
exports.nOccurences = function (list, searchElement) {
  let times = 0;
  for (const a in list) {
    if (list[a] === searchElement) {
      times++;
    }
  }
  return times;
};
