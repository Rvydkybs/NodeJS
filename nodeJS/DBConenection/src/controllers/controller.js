import mongoose from 'mongoose';
import { contactSchema } from '../models/model.js';


const Contact=mongoose.model('Contact',contactSchema);

export const createNewContact=async (req,res)=>{
    try{
        const newContact=new Contact(req.body);
        const contact=await newContact.save();
        res.json(contact);
    }catch(err){
        res.status(500).send(err);
    }
};

export const getContacts=async (req,res)=>{
    try{
        const contacts=await Contact.find();
        res.json(contacts);
    }catch(err){
        res.status(500).send(err);
    }
};

export const getContactWithID=async (req,res)=>{
    try{
        const contact=await Contact.findById(req.params.id);
        res.json(contact);
    }catch(err){
        res.status(500).send(err);
    }
};

export const updateContact=async (req,res)=>{
    try{
        const contact=await Contact.findOneAndUpdate({_id:req.params.id},req.body,{new:true});
        res.json(contact);
    }catch(err){
        res.status(500).send(err);
    }
};