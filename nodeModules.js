// const path=require("path");
// const util=require("util");
// const v8=require("v8");//v8 module is used to get the heap statistics
// const dirUploads=path.join(__dirname,"www","files","uploads");
// console.log(path.basename(__filename));
// console.log(dirUploads);
// util.log(path.basename(__filename));//logs the time and the message
// util.log(v8.getHeapStatistics());//logs the heap statistics

//collecting info from user with terminal
const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
// rl.question("What is your name? ", (name) => {
//     console.log(`Hello, ${name}!`);
//     rl.close();
// });
// const questions=[
//     "What is your name?",
//     "What is your age?",
//     "What is your email?",
// ];
// function ask(questions,done){
//     const answers=[];
//     const questionAnswered=(answer)=>{
//         answers.push(answer.trim());
//         if(answers.length<questions.length){
//             rl.question(questions[answers.length],questionAnswered);
//         }else{
//            return done(answers);
//         }
//     }
//     rl.question(questions[0],questionAnswered);
// }
// ask(questions,(answers)=>{
//     console.log("Thank you for your answers. ");
//     console.log(answers);
//     process.exit();
// });

//custom modules
let count=0;//we can use it only in this file
const inc=()=>++count;
const dec=()=>--count;
const getCount=()=>count;
module.exports={//now we can use it from other files
    inc,
    dec,
    getCount
};