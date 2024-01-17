import React from 'react';
import './App.css';
import {Main} from "../layout/sections/main/Main";
import {Header} from "../layout/header/Header";
import {Footer} from "../layout/footer/Footer";
import {Catalog} from "../layout/sections/Catalog/Catalog";
import {Container} from "../components/Container";
import {MainSlider} from "../layout/sections/slider/Slider";




function App() {

  return (
    <div className="App">
        <Header/>
        <MainSlider/>
        <Container padding={'0 20px'}>
            <Main/>
            <Catalog/>
        </Container>
        <Footer/>
    </div>
  );
}

export default App;
