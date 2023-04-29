const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');
const express = require('express');
//@des get all contact
//router GET /api/contacts
// Access Public

const getContacts =asyncHandler( async(req,res)=>{
    const contacts =await Contact.find()
    res.status(200).json(contacts);
});


//@des create contact
//router POSt /api/contacts
// Access Public

const createContact = asyncHandler( async(req,res)=>{
    console.log("The request is : ",req.body);
    const {name,email,phone} = req.body;

    if(!name || !email || !phone){
        res.status(400);
        throw new Error("all fleids are mandatory");
    }
    const contact = Contact.create({
        name,
        email,
        phone
    })
    res.status(201).json(contact);
});

//@des get contact
//router GET /api/contacts/:id
// Access Public

const getContact =asyncHandler(async(req,res)=>{

    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found")
    }
    res.status(200).json(contact);
});

//@des uppdate contact
//router PUT /api/contacts/:id
// Access Public

const updateContact =asyncHandler( async(req,res)=>{

    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );

    res.status(200).json(updatedContact);
});

//@des delete contact
//router DELETE /api/contacts/:id
// Access Public

const deleteContact =asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }
   await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json(contact);
});
module.exports = {getContacts,createContact,getContact,updateContact,deleteContact};