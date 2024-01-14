import React from 'react';
import './App.css';
import {ButtonUI} from "../components/ButtonUI";
import {Main} from "../layout/sections/main/Main";
import {Header} from "../layout/header/Header";
import {Footer} from "../layout/footer/Footer";
import {Works} from "../layout/sections/works/Works";
import {Basis} from "../layout/sections/Basis";
import {Container} from "../components/Container";


function App() {
  return (
    <div className="App">

        <Header/>
        <Container padding={'0 20px'}>
        {/*<Main/>*/}
        <Works/>
        </Container>
        <Footer/>
    </div>
  );
}

export default App;
