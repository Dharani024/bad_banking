import "./App.css";
import { useContext } from "react";
import userContext from "./context";
import { useState } from "react";
import axios from 'axios'

export default function Withdrawal() {
  let ctx = useContext(userContext);
  var len = ctx.users.length;
  const [balance, setBalance] = useState(0);
  const [currbal, setCurrBal] = useState(0);
  function cashback(e) {
    setCurrBal(Number(e.target.value));
    e.preventDefault();
  }

  // localStorage.getItem("x-auth",JSON.parse("x-auth"))
  // function handleSubmit(e) {
  //   if(balance<currbal)return alert("you dont have enough balance")
  //   setBalance(balance - currbal);
  //   e.preventDefault();
  // }
    async function handle(){

      let headers={
        'Content-type':'application/json',
        'Accept':'application/json',
        'x-auth':localStorage.getItem('x-auth')
      }
      const url="https://indianbank-server.herokuapp.com/api/logreg/credit"
      await axios.post(url,{
        withdraw:currbal
            },{headers})
      .then(res=>{
        if(res.status===400){
          alert("Something Went Wrong");
        }
        else{
          setBalance(res.data.balance)
  
        }
      })
      .catch(error=>{
        alert(error.response.data)
      })
  }
  // ctx.users[len - 1].bal = balance;
  return (
    <>
      <h1> <marquee>Cashback</marquee></h1>
      <form onSubmit={handle}>
        <label>
          Amount to be withdrawn
          <input type="number" onChange={cashback} />
          <input type="submit" value="Submit" />
        </label>
      </form>
      <h4> Balance is {balance} </h4>
    </>
  );
}
