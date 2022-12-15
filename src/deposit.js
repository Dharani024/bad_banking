import "./App.css";
import { useContext } from "react";
import userContext from "./context";
import { useState } from "react";
import axios from 'axios'


export default function Deposit() {
  
  const [balance, setBalance] = useState(0);
  const [currbal, setCurrBal] = useState(0);

  

  // function handleSubmit(e) {
  //   // setBalance(balance + currbal);
  //   e.preventDefault();
  // }

  async function handle(){
    let headers={
      'Content-type':'application/json',
      'Accept':'application/json',
      'x-auth':localStorage.getItem('x-auth')
    }
    const url="https://indianbank-server.herokuapp.com/api/logreg/deposit"
    await axios.put(url,{
      deposit:currbal,
       balance:currbal
    },{headers})
    .then(res=>{
      if(res.status===400){
        alert("Something Went Wrong");
      }
      else{
        console.log(currbal)
        setBalance(res.data.balance)

      }
    })
    .catch(error=>{
      alert(error.response.data)
    })
   
  }

  return (
    <>
      <h1><marquee><b>Deposit</b></marquee></h1>
      <form>
        <label>
          Amount to be deposit
          <input type="number"  onChange={(e)=>setCurrBal(e.target.value)} />
          <input type="submit" onClick={handle} value="Submit" />
        </label>
      </form>
      <h4> Balance is {balance} </h4>
    </>
  );
}
