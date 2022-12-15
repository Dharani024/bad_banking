import express from 'express'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import env from 'dotenv/config'

function user(req,res,next){
    if (req.user.isCustomer ===true){
        next()
    }
    else{
        return res.status(403).send('assess denied')
    }
}
export default user