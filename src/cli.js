#!/usr/bin/env node

const [,, ... args] = process.argv

console.log(`Hello world ${args}`);

const Settings = require("../config/test.json")

console.log("SETTINGS: ", Settings.text);