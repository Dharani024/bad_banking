import express from 'express'
import Bodyparser  from 'body-parser';
import mongoose from 'mongoose';
import cors from "cors";
import logreg from "./router/user.js"

const app= express()
app.use(cors())
app.use(Bodyparser.json())
app.use(Bodyparser.text())
app.use(express.json())
app.use(Bodyparser.urlencoded({extended:true}))

app.use("/api/logreg",logreg)

// mongoose.connect('mongodb://localhost:27017/Banking')
mongoose.connect("mongodb+srv://dharani:12345@cluster0.ixtz5y0.mongodb.net/bank?retryWrites=true&w=majority")
// mongoose.connect('mongodb+srv://dharani:12345@cluster0.ixtz5y0.mongodb.net/banking?retryWrites=true&w=majority')
//mongodb+srv://jobat:<password>@cluster0.ixtz5y0.mongodb.net/?retryWrites=true&w=majority
.then(()=>console.log('db is connected'))
.catch(()=>console.log('cannot connect db'))


app.listen(process.env.PORT || 3000,()=>{
    console.log("server is running on 3000");
})
