import express from 'express';
import routes from './src/routes/routes.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app=express();
const PORT=8000;

mongoose.Promise=global.Promise;
mongoose.connect("mongodb://localhost:27017/contactDB").then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err);
});

//body parse set up
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/",(req,res)=>{
    res.send("Hello World");
});
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});