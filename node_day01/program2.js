//Reading & Writing file synchronously.

const readline = require('readline');
const fs = require('fs');

let textIn = fs.readFileSync('./node_day01/file', 'utf-8');
console.log(textIn);

let constant = `Data read from input.txt: ${textIn}. \nData create ${new Date()}`

fs.writeFileSync('./node_day01/input.txt', constant);