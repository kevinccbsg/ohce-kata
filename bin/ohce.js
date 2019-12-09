#!/usr/bin/env node
const readline = require('readline');
const init = require('..');

const { greet, processor } = init(process.argv);

greet();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', processor);
