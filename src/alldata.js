import "./App.css";
import userContext from "./context";
import {useContext,useEffect,useState} from 'react';
import axios from "axios";

export default function Alldata() {
let ctx = useContext(userContext);
const [data,setData]=useState([]);
 const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      'Accept': 'application/json',
          'Content-Type': 'application/json',
         
    }
  };
 async function Getall() {
    
    const url = "https://indianbank-server.herokuapp.com/api/logreg/viewall";
    axios
      .get(url,config
      )
      
      .then((res) => {
       
        console.log(res.data)
		setData(res.data)
       
      })
      .catch((error) => {
        console.log(error.response.data);
          
        })
      
  }
  useEffect(()=>{
	Getall();
  },[])
  

  return (
 < >
     <h1><marquee><b>All Data</b></marquee></h1>
    <th className="alldata">
      <td>
      {/* Data
      {JSON.stringify(ctx.users)} */}
      <table >
		 <tbody>
      <tr >
		<th>Name</th><br></br>
			<th>Email</th><br></br>
			<th>CurrentBalance</th>
		   </tr>
		
		 {data.map((data,i)=>
		   <tr key={i}>
			 
			 <td>{data.name}</td><br></br>
			 <td>{data.email}</td><br></br>
			 <td>{data.balance}</td>
		   </tr>
		 )}
	  </tbody>
	  </table>
      </td>
      </th>
      
    </>
  );
}
