#!/usr/bin/env node
const fs = require('fs');

console.log("Location:", __dirname, __filename)


const fileWriteCallback = (err) => {
  if(err) { return console.log(err); }
  console.log("The file was saved!");
}

fs.writeFile("config/test.json", 'w',
  `{ "text": "Hey there!" }`,
  fileWriteCallback); 