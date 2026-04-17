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
//using the public folder to serve static files
app.use(express.static('public/images'));//if type in the adress /img1.png it will be display our image
app.get('/', (req, res) => {//in this route this data will be recieved
    res.json(data);//send data to the client in json format
});
app.post('/create', (req, res) => {
    const newUser = req.body;
    // data.push(newUser);
    res.send("this is a post request that i created");
});
app.put('/update', (req, res) => {
    const updatedUser = req.body;
    // data.push(updatedUser);
    res.send("this is a put request");
});
app.delete('/delete', (req, res) => {
    const deletedUser = req.body;
    // data.push(deletedUser);
    res.json("this is a delete request");
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(data);
});
//adding data for server
//for creating mock data free: https://www.mockaroo.com/
