import React from "react";
import {Header} from "./component/Header";
import { Balance } from "./component/Balance";
import {Incomeexpenses} from "./component/Incomeexpenses";
import {Transaction_list} from "./component/Transaction_list";
import {AddTransaction} from "./component/AddTransaction";
import {GlobalProvider} from './context/GlobalState';
import './App.css';

<script src="http://localhost:8097"></script>

function App() {
  return (
    <GlobalProvider >
      <Header />
      <div className="container">
        <Balance />
        <Incomeexpenses />
        <Transaction_list />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
