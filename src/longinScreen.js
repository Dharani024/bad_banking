import "./App.css";
import { useFormik } from "formik";
//import { useState } from "react";
import { useContext } from "react";
import userContext from "./context"; 
import axios from "axios";

export default function LoginAccount(){
let userCtx=useContext(userContext)

async function handle(){
  const url="https://indianbank-server.herokuapp.com/api/logreg/login"
  await axios.post(url,{
    email:formik.values.email,
    password:formik.values.password
  })
  .then(res=>{
    console.log(res.data);
    localStorage.setItem('x-auth',res.data)
  })
  .catch(error=>{
    alert(error.response.data)
  })
}
 
const formik = useFormik({
   
  initialValues: {
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
      
      <h1><marquee><b>Login Screen</b></marquee></h1>
      
      {/* <img className="image1" src={img} alt="mypic"></img> */}
      


      <form className="forms" onSubmit={formik.handleSubmit}>

       <label className="style">  Email :</label>
       <input  id="email"name="email"type="email"onChange={formik.handleChange}value={formik.values.email}/><br /><br />
       {/* {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div> : null} */}

      <label className="style" htmlFor="Password">Password:</label>
      <input id="password"name="password"type="password"onChange={formik.handleChange}value={formik.values.password}/><br></br><br />
      {/* {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div> : null} */}

      <button type="submit" >LOGIN</button><br />
    </form>
  </div>
  </section>
        </>
    )
}