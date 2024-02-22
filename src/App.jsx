import React from "react";
import MonsterBox from "../src/Components/MonsterBox/MonsterBox";
import "./App.css";
import Monster from "./Components/Monster/Monster";
import Header from "./Components/Header/Header";
const App = () => {
  return (
    <>
      <div className='Collection'>
        <Header />
        <MonsterBox />
        <Monster />
      </div>
    </>
  );
};

export default App;
