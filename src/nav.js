import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#/bank">
            Bank
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/createaccount">
            CreateAccount
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/loginscreen">
            LonginScreen
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/deposit">
            Deposit
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/withdrawal">
            Withdrawal
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/alldata">
            Alldata
          </a>
        </li>
      </ul>
    </>
  );
}
