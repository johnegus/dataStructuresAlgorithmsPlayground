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
 * Complete the 'processLogs' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY logs
 *  2. INTEGER threshold
 */

function processLogs(logs, threshold) {
  // Write your code here
  let newArray = [];
  let object = {};
  logs.forEach((log) => {
    let logArray = log.split(" ");
    newArray.push(logArray);
  });
  newArray.forEach((log) => {
    if (log[0] !== log[1]) {
      if (!object[log[0]]) {
        object[log[0]] = 1;
      } else {
        object[log[0]]++;
      }
      if (!object[log[1]]) {
        object[log[1]] = 1;
      } else {
        object[log[1]]++;
      }
    } else {
      if (!object[log[0]]) {
        object[log[0]] = 1;
      } else {
        object[log[0]]++;
      }
    }
  });
  let finalArray = [];
  Object.entries(object).forEach(([key, value]) => {
    if (value >= threshold) {
      finalArray.push(key);
    }
  });
  return finalArray;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const logsCount = parseInt(readLine().trim(), 10);

  let logs = [];

  for (let i = 0; i < logsCount; i++) {
    const logsItem = readLine();
    logs.push(logsItem);
  }

  const threshold = parseInt(readLine().trim(), 10);

  const result = processLogs(logs, threshold);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
