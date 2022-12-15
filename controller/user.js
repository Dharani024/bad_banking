import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import env from 'dotenv/config'
import user from '../middleware/user.js'
import mongoose from 'mongoose'
import express from 'express'
import User from "../schema/user.js"
//registeration
const regUser=async(req,res)=>{
    
    const saltRounds=10;
    const cryptPass= await  bcrypt.hash(req.body.password,saltRounds)
        var add={
            name:req.body.name,
            email:req.body.email,
            password:cryptPass ,
            }  

//add user in users      
            try {
            const findUser= await User.findOne({email:req.body.email},{})//find email from user in user(db)
            // console.log(findUser)
             if(findUser){
                return res.status(400).send("user already in")
            }
            else{
                var insert=await User.insertMany([add])//insert new user in mca(db)
                
                res.send(insert)
            }
           
            } catch (error) {
                return res.send(error.message)
            }
    
    }
 //login user
const loginUsers=async(req,res)=>{
        const email=req.body.email;
        const pwd=req.body.password
        // console.log(pwd);
        try {
            const logUser=await User.findOne({email:email},{})//find all user using and condition
            // console.log(logUser.password);
        
            if (logUser) {
              const bhash=await  bcrypt.compare(pwd, logUser.password).then(function(result) {
                    if(result) {
                        const token= jwt.sign({_id:logUser._id,isCustomer:logUser.isCustomer,email:logUser.email},process.env.SECRET_KEY)
                        return res.header('x-auth',token).send(token)
                    }
                    else{
                          res.send("incorrect password")
                   }
                });
               
            }
            if(!logUser){
            res.send("email is not valid");
            }
            
        } catch (error) {
            return res.send(error.message)
        }
}

//deposite      

const updateDeposit=async(req,res)=>{
    try {
        let deposit=Number(req.body.deposit)

        let finduser=await User.find({email:req.user.email})
        // console.log(finduser)
        if(!finduser) return res.status(401).send("Please Login your account")
        let newbal=Number(finduser[0].balance)

         console.log(typeof(deposit))
       
            let gettotal=Number(deposit)+newbal
            // let curbal=newbal+deposit
            // console.log(curbal)
            const update=await User.findOneAndUpdate({email:req.user.email},{$set:{deposit:deposit,balance:gettotal}},{new:true})
            return res.send(update)
        
    } catch (error) {
        return res.send(error.message)
    }
}

///widthdraw

const updateWithdraw=async (req,res)=>{ 
    try {
        let deposit=Number(req.body.withdraw)

        let finduser=await User.find({email:req.user.email})
        // console.log(finduser)
        if(!finduser) return res.status(401).send("Please Login your account")
        let newbal=Number(finduser[0].balance)

         console.log(typeof(deposit))
       if(newbal<deposit) return res.status(400).send("insufficient balance")
            let gettotal=newbal-deposit
            // let curbal=newbal+deposit
            // console.log(curbal)
            const update=await User.findOneAndUpdate({email:req.user.email},{$set:{deposit:deposit,balance:gettotal}},{new:true})
            return res.send(update)
        
    } catch (error) {
        return res.send(error.message)
    } 
      }
    //viewQAll
    const ViewAll=(req,res)=>{
        async function Data(){
           
        try{
           const result=await User.find().select('-password')
             return   res.status(200).send(result);
        }
        catch (error) {
          return  res.status(400).send(error.message)
         }
    }
    Data();
    }


export {regUser,loginUsers,updateDeposit,updateWithdraw,ViewAll}