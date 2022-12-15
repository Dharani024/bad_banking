import Joi from 'joi';

import mongoose from 'mongoose';
// const mongoose = require('mongoose');

const User= mongoose.model('User', new mongoose.Schema({

  name:{
   type:String,
   maxlength:30,
   minlength:6,
  },
 
  password:{
     type: String,
     required: true,   
    
   },
   email: {
     type: String,
     required: true,
     
    
   },
   balance:{
    type:Int,
    required:true
   }
  
    
   }));
 
 
 
 
 function validateUser(user) {
   const schema = {
     name: Joi.string().required(),
     email: Joi.string().min(5).max(50).required(),
     password: Joi.string().min(5).max(50).required(),
     
    
   };
 
   //return Joi.validateUser(user, schema);
 }
 
export {User,validateUser}
//  exports.validate=validateUser;



