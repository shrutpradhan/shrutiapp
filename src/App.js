import React from 'react'
import './App.css';
import Header from "./components/Header"
import Booktrial from "./components/Booktrial"
import Working from "./components/Working"
import Subcontent from "./components/Subcontent"
import Payment from "./components/Payment"

function App() {
  return (
    <div className="App">
      <Header/>
      <Booktrial/>
      <Working/>
      <Subcontent/>
      <Payment/>
      

    </div>
  );
}

export default App;
