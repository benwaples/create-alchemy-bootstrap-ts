#!/usr/bin/env node
const fs = require('fs-extra')
const path = require('path')
const child_process = require('child_process')


const args = process.argv;
const folder = args[args.length - 1];

if(folder !== '.') {
  fs.mkdirSync(folder);
}

fs.copy(`${__dirname}/copyables`, folder, err => {
  if(err) console.log('something went wrong')
  if(folder !== '.') return console.log(`\n ${folder} is ready for coding \n`)
  if(folder === '.') return console.log('\n project files have been placed in this directory \n')
  console.log('\n Happy Coding! \n')
})

child_process.exec("npm i", (error, stdout, stderr) => {
  if(error) console.log('error while installing dependencies')
})