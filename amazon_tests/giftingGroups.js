"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'countGroups' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY related as parameter.
 */

function countGroups(related) {
  // Write your code here
  let saver = {};
  for (let i = 0; i < related.length; i++) {
    let row = related[i];
    for (let j = 0; j < row.length; j++) {
      console.log(i, j);
      if (j != i) {
        console.log(row[j]);
        if (row[j] == 1) {
          saver[i][j] = j;
          console.log(saver);
        }
      }
    }
  }
  return Object.keys(saver).length;
}

let related = ["1100", "1110", "0110", "0001"];

console.log(countGroups(related));
