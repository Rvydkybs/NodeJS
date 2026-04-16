const fs=require("fs");
// let files=fs.readdirSync("./");//readdirSync is a synchronous function that reads the directory and returns the files in the directory
// console.log(files);
// let ipsum =fs.readFileSync("./ipsum.txt","utf8",(err,ipsum)=>{
//     console.log(ipsum);
//     if(err) throw err;
// });//if we add a file named ipsum.txt we can reach it like that
// console.log(ipsum);

let md=`This is a new file
============
This is a new file
============
* Item 1
* Item 2
* Item 3
============
This is a new file
============
`;

//it is creates a real file on your directory-so you can see it in your directory
// fs.writeFile("./newfile.md",md.trim(),function(err){//trim cuts off the extra spaces
//     console.log("file has been created");
//     if(err) throw err;
//     //appendFileSync is a synchronous function that appends the text to the file
//     fs.appendFileSync("./newfile.md","\nThis is a new line\nThis is a new line\nThis is a new line");
// });

//directory creation-folder creation
// fs.mkdirSync("./newdir",function (err) {//don't have to use syncronous function or error handling 
//     if(err) throw err;
//     console.log("directory has been created");
// });

//rename a file
// fs.rename("./newfile.md","./demo.md",function(err){//if we use sync ,we don't have to use err function
//     if(err) throw err;
//     console.log("file has been renamed");
// });

//delete a file
// fs.unlink("./demo.md",function(err){
//     if(err) throw err;
//     console.log("file has been deleted");
// });

//delete a directory
// fs.rmdir("./newdir",function(err){
//     if(err) throw err;
//     console.log("directory has been deleted");
// });

//move a file
// fs.rename("./demo.md","./newdir/demo.md",function(err){
//     if(err) throw err;
//     console.log("file has been moved");
// });

//copy a file
// fs.copyFile("./demo.md","./newdir/demo.md",function(err){
//     if(err) throw err;
//     console.log("file has been copied");
// });

//read a file
// fs.readFile("./demo.md","utf8",function(err,data){
//     if(err) throw err;
//     console.log(data);
// });

//read a file synchronously
// let data=fs.readFileSync("./demo.md","utf8");
// console.log(data);

//read a file asynchronously