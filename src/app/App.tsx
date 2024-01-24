import React from 'react';
import './App.css';
import {Header} from "../layout/header/Header";
import {Footer} from "../layout/footer/Footer";
import {Route, Routes} from "react-router-dom";
import {Idcam} from "../layout/main/Catalog/products/Idcam";
import {MainAge} from "../layout/main/MainAge";
import {Id3} from "../layout/main/Catalog/products/Id3";
import {GoTop} from "../components/goTop/GoTop";


function App() {

	return (
		<div className="App">
			<Header/>
			<div>
				<Routes>
					<Route path={'/'} element={<MainAge/>}/>
					<Route path={'/ID_CAM'} element={<Idcam/>}/>
					<Route path={'ID3'} element={<Id3/>}/>
					<Route path="/404" element={<h1>404: PAGE NOTFOUND</h1>}/>
					<Route path="*" element={<h1>404: PAGE NOT FOUND</h1>}/>
				</Routes>
			</div>
			<GoTop/>
			<Footer/>
		</div>
	);
}

export default App;
