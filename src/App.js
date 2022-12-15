import "./App.css";
import {HashRouter,BrowserRouter,Route,Routes,Link} 
from "react-router-dom";
import Nav from "./nav";
import Bank from "./bank";
import CreateAccount from "./createaccount";
import Deposit from "./deposit";
import Withdrawal from "./withdrawal";
import Alldata from "./alldata";
import userContext from "./context";
import loginScreen from './longinScreen'
import LoginAccount from "./longinScreen";
// import LoginAccount from "./longinScreen";

export default function App() {
  return (
    <>
      <HashRouter>
        <div>
          <Nav />
          {/* <Link to="/createaccount">Home</Link>
          <Link to="/deposit">Deposit</Link>
          <Link to="/withdrawal">Withdrawal</Link>
          <Link to="/alldata">Alldata</Link> */}
          
          <userContext.Provider
            value={{
              users: [
                {
                   name: "Dharani",
                   email: "dharaniathithi@gmail.com",
                   password: "dharani@24",
                  bal:0
                }
              ]
            }}>
           
            <Routes>
              <Route exact path="/bank" element={<Bank />} />
              <Route exact path="/createaccount" element={<CreateAccount />} />
              <Route exact path="/deposit" element={<Deposit />} />
              <Route exact path="/withdrawal" element={<Withdrawal />} />
              <Route exact path="/alldata" element={<Alldata />} />
              <Route exact path="/loginScreen" element={<LoginAccount />} />
            </Routes>
          </userContext.Provider>
        </div>
      </HashRouter>
    </>
  );
}
