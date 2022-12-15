import "./App.css";
import bb from "./bank.png";
export default function Bank() {
  return (
    <>
    <h1> <marquee> Welcome To Indian Bank </marquee></h1>
     <div className="bank">
        <img className="img" src={bb} height={650} width={750} alt=""/>
      </div>
    </>
  );
}
