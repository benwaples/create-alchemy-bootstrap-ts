#!/usr/bin/env node
const fs = require('fs-extra')
const path = require('path')
const child_process = require('child_process')

function makeProjectFolder(folder) {return folder !== '.'}

const args = process.args;
const folder = ars[args.length - 1];

if(makeProjectFolder(folder)) {
  fs.mkdirSync(folder);
}

fs.copy(`${__dirname}/copyables`, folder, err => {
  if(err) console.log('something went wrong')
  if(makeProjectFolder(folder)) return console.log(`\n ${folder} is ready for coding \n`)
  if(!makeProjectFolder(folder)) return console.log('\n project files have been placed in this directory \n')
})
