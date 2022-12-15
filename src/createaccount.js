import "./App.css";
import { useFormik } from "formik";
//import { useState } from "react";
import { useContext } from "react";
 import userContext from "./context"; 
import axios from "axios";
import {useNavigate} from 'react-router-dom'

export default function Create(){ 
  const navigate=useNavigate() 
let userCtx=useContext(userContext)

async function handle(){
  const url="https://indianbank-server.herokuapp.com/api/logreg/register"
  await axios.post(url,{
    name:formik.values.name,
    email:formik.values.email,
    password:formik.values.password
  })
  .then(res=>{
    if(res.status===400){
      alert("Something Went Wrong");
    }
    else navigate('/loginscreen')
  })
  .catch(error=>{
    alert(error.response.data)
  })
}

const formik = useFormik({
   
  initialValues: {
      name:"",
      email: "",
      password:"",
      balance:0
    },

    onSubmit: (values) => {
      alert("done")
      handle()
      userCtx.users.push(values)
      console.log(values)
    },

    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if(!values.password) errors.password="Required"
      return errors;
    }
  });


  
    return(
        <>
        <section id="account">
       
        
      <div className="clr">
      
      <h1><marquee><b>Create Account</b></marquee></h1>
      
      {/* <img className="image1" src={img} alt="mypic"></img> */}
      


      <form className="forms" onSubmit={formik.handleSubmit}>
       <label className="style">Name : </label>
       <input  id="name"name="name"type="text"onChange={formik.handleChange}value={formik.values.name}/><br /><br />

       <label className="style">  Email :</label>
       <input  id="email"name="email"type="email"onChange={formik.handleChange}value={formik.values.email}/><br /><br />
       {/* {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div> : null} */}

      <label className="style" htmlFor="Password">Password:</label>
      <input id="password"name="password"type="password"onChange={formik.handleChange}value={formik.values.password}/><br></br><br />
      {/* {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div> : null} */}

      <button type="submit" >Create Account</button><br />
    </form>
  </div>
  </section>
        </>
    )
    }