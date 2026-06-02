import mongoose from 'mongoose';

export const contactSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:false,
    },
    company:{
        type:String,
        required:false,
    },
    phone:{
        type:String,
        required:false,
    },
    created_date:{
        type:Date,
        default:Date.now,
    },
});