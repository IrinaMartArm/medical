import React from 'react';
import './App.css';
import {ButtonUI} from "../components/ButtonUI";
import {Main} from "../layout/sections/main/Main";
import {Header} from "../layout/header/Header";
import {Footer} from "../layout/footer/Footer";
import {Works} from "../layout/sections/works/Works";


function App() {
  return (
    <div className="App">
      {/*<ButtonUI color={"primary"} onClick={() => {}} name={'home'} variant={"text"}/>*/}
        <Header/>
        <Main/>
        <Works/>
        <Footer/>
    </div>
  );
}

export default App;
