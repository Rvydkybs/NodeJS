// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;

import express from 'express';
import data  from './data/mockData.json' with { type: 'json' };//if you don't import it with type json it will give you an error

const app = express();
const port = 3001;//it can change as you want
app.use(express.json());//parse JSON body (must be before POST routes)
//using the public folder to serve static files
app.use(express.static('public/images'));//if type in the adress /img1.png it will be display our image
app.get('/', (req, res) => {//in this route this data will be recieved
    res.json(data);//send data to the client in json format
});
// app.post('/create', (req, res) => {
//     const newUser = req.body;
//     // data.push(newUser);
//     res.send("this is a post request that i created");
// });
// app.put('/update', (req, res) => {
//     const updatedUser = req.body;
//     // data.push(updatedUser);
//     res.send("this is a put request");
// });
// app.delete('/delete', (req, res) => {
//     const deletedUser = req.body;
//     // data.push(deletedUser);
//     res.json("this is a delete request");
// });
//adding data for server
//for creating mock data free: https://www.mockaroo.com/


//routing params:
// app.get("/class/:id",(request,response)=>{
//     const id = parseInt(request.params.id);
//     const student=data.filter((student)=>student.id===id);
//     // response.send(`this is the class with the student ${student}`);//send is response to the client and displays the message that you typed
//     response.json(student);
// });

//route handlers:
// app.get("/next",(request,response,next)=>{
//     console.log(" next page");
//     next();
// },
// (request,response)=>{
//     console.log("this is the next page");
//     response.send("this is the next page");
// });
// app.get("/next",(request,response)=>{
//     response.redirect("http://www.linkedin.com");
// });
//.json() is used to send data to the client in json format
//.send() is used to send data to the client in text format
//.download() is used to download a file to the client
//.status() is used to send the status code to the client
//.redirect() is used to redirect the client to another page
//.end() is used to end the response
//.sendFile() is used to send a file to the client
//.sendStatus() is used to send the status code to the client
//.sendFile() is used to send a file to the client
//.sendFile() is used to send a file to the client

//route chaining:
// app.get("/redirect",(request,response)=>{
//     response.redirect("http://www.linkedin.com");
// })

// app.route("/class")
// .get((request,response)=>{
//     response.send("this is the get request");
// })
// .post((request,response)=>{
//     response.send("this is the post request");
// }).put((request,response)=>{
//     response.send("this is the put request");
// }).delete((request,response)=>{
//     response.send("this is the delete request");
// });

//middleware:
// app.use((request,response,next)=>{
//     console.log("this is the middleware");
//     next();
// });
// app.get("/middleware",(request,response)=>{
//     response.send("this is the middleware");
// });
//middleware is a function that is used to process the request and response
//built-in middleware:
//express.json() is used to parse the request body in json format
//express.urlencoded() is used to parse the request body in urlencoded format
//express.static() is used to serve static files
//express.json() is used to parse the request body in json format
//express.urlencoded() is used to parse the request body in urlencoded format
//express.static() is used to serve static files
//express.json() is used to parse the request body in json format
//express.urlencoded() is used to parse the request body in urlencoded format
//express.static() is used to serve static files
app.post("/item",(request,response)=>{
    const newItem = request.body;
    console.log(newItem);
    response.send("this is the new item");
});
app.use(express.urlencoded({ extended: true }));//this is a built-in middleware that is used to parse the request body in urlencoded format
app.post("/item",(request,response)=>{
    const newItem = request.body;
    console.log(newItem);
    response.send("this is the new item");
});
app.use(express.static('public/images'));//this is a built-in middleware that is used to serve static files

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});