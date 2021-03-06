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
  if(folder !== '.') {
    console.log(`\n ${folder} is ready, now installing dependencies \n`)
    child_process.exec(`cd ${folder} && npm i`)
    return console.log('\n dependencies are installed \n')
  }
  if(folder === '.') {
    console.log('\n project files have been placed in this directory, installing dependencies \n')
    child_process.exec('npm i')
    return console.log('\n dependencies are installed \n')
  }
  console.log('\n Happy Coding! \n')
})

