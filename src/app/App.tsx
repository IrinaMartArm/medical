import React from 'react';
import './App.css';
import {Main} from "../layout/sections/about/Main";
import {Header} from "../layout/header/Header";
import {Footer} from "../layout/footer/Footer";
import {Catalog} from "../layout/sections/Catalog/Catalog";
import {Container} from "../components/Container";
import {MainSlider} from "../layout/sections/slider/Slider";
import {Route, Routes} from "react-router-dom";
import {Id3} from "../layout/sections/Catalog/products/id3";




function App() {

  return (
    <div className="App">
        <Header/>
        <MainSlider/>
        <Container padding={'0 20px'}>
            <div>
                <Routes>
                    <Route path={'/'} element={<Catalog/>}/>
                    <Route path={'/id3'} element={<Id3/>}/>
                    <Route path={''} element={''}/>
                    <Route path="/404" element={<h1>404: PAGE NOTFOUND</h1>} />
                    <Route path="*" element={<h1>404: PAGE NOT FOUND</h1>} />
                </Routes>
            </div>
            {/*<Catalog/>*/}
            <Main/>
        </Container>
        <Footer/>
    </div>
  );
}

export default App;
