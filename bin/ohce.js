#!/usr/bin/env node
const readline = require('readline');
const { procesor } = require('..');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', procesor);
