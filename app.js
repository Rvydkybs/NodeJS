
function sayName(name) {
    console.log(`Hello, my name is ${name}`);
}

sayName("John");

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

const logger=require("./logger");
console.log(logger);
logger.log("message");


