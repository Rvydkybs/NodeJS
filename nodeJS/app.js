// for js we have global objects like;
// setInterval(() => {
// }, interval);
// clearInterval(interval);
// setTimeout(() => {
//     console.log("Hello, world!");
// }, timeout);
// clearTimeout(timeout);

//for nodejs we have global objects like;
// window.console.log("Hello, world!");
// global.console.log("Hello, world!");
// var message = "Hello, world!";
// console.log(global.message);//we get undefined because it is not a global object-it is defined only in this aap.js file
// //every file in nodejs is a module and has its own global object
// console.log(module)

// const logger=require("./logger");
// console.log(logger);
// logger.log("message");

// console.log(__filename);//path to the current file
// console.log(__dirname);//path to the current directory
// const path=require("path");//path module is used to work with file and directory paths
// console.log(`file name : ${path.basename(__filename)}`);//file name with extension
// console.log(`directory name : ${path.dirname(__dirname)}`);//directory name without extension

//  for (let key in global) {
//     console.log(key);
//  }

//process object
// console.log(process.argv);
// console.log(process.env);
// function grab(flag) {
//     let indexAfterFlag=process.argv.indexOf(flag)+1;
//     console.log(indexAfterFlag);
//     return process.argv[indexAfterFlag];
    
// }
// const greeting=grab("--greeting");
// const user=grab("--user");
// console.log(`${greeting} ${user}`); The answer is correct because the 'process' object and its 'argv' property are used in Node.js to retrieve command-line arguments, allowing you to process user inputs passed through the terminal.

//working with standard input and output
// process.stdout.write("Hello, what is your name? ");
// process.stdin.on("data", (data) => { //Using 'process.stdin.on('data', ...)' allows the Node.js application to listen for incoming data events and process the input asynchronously, thus keeping the process running and able to accept additional inputs.
//     console.log(`Hello, ${data.toString().trim()}!`);
//     process.exit();// exit the process
// });
//Using process.stdout.clearLine() and process.stdout.cursorTo() allows you to clear the current line in the console and move the cursor to the beginning to overwrite the existing message with the updated progress.
// process.on("exit", () => {// this is a event listener for the exit event
//     console.log("Thank you for your time!");
// });

//importing a module from another file
const myModule=require("./nodeModules");
console.log(myModule.getCount());
myModule.inc();
console.log(myModule.getCount());
myModule.dec();
console.log(myModule.getCount());