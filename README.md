# Welcome to Alchemy Bootstrap, TypeScript Edition!

![create-alchemy-bootstrap-ts](https://media.giphy.com/media/kbOhTzWtB2jFuzQeEf/giphy.gif)
## Introduction
Thanks for giving the create-alchemy-bootstrap-ts project a try :) This was created with the intent to recreate Foundations-I labs in TypeScript.
***
## First Time Users
There are just a few things to note before you start hacking at the keeb:
1. after forking and cloning this repo, `npm i` for the needed dependencies
1. if you don't have TypeScript installed globally, run `npm i -g typescript` in your terminal
1. build your app as normal, but inside the src directory.
1. When you create a new html document, the script tag should have a relative path to the JavaScript file that lives in the public directory. For example, and html file in the root of src would have path such as `../public/app.js`
1. when you are ready to compile your TypeScript into JavaScript and open a page with Live Server, run tsc in your terminal. Or run `tsc -w` to have the compiler watching for changes to ts files.
1. I commented out the reset.css and home.css stylesheets from this page, however they still exist in the styles directory. For any TA's who want to see what new students are experiencing, you'll might want to uncomment that out.
****
## Testing
1. use `example.test.ts` as normal
1. if you decide to rename example.test.ts, also rename: `public/test/<your_new_name>.test.js`.
1. if you would like to add another `<file_name>.test.ts` in `src/test`, go into `public/test/test.js` and add the import there, replacing the `<file_name>.test.ts` with `<file_name>.test.js`
