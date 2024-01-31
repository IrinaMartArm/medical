import React from 'react';
import './App.css';
import {Header} from "../layout/header/Header";
import {Footer} from "../layout/footer/Footer";
import {Route, Routes} from "react-router-dom";
import {IdCam} from "../layout/main/Catalog/products/IdCam";
import {MainAge} from "../layout/main/MainAge";
import {Id3} from "../layout/main/Catalog/products/Id3";
import {GoTop} from "../components/goTop/GoTop";
import {SurgicalSet} from "../layout/main/Catalog/products/SurgicalSet";
import {SurgicalKits} from "../layout/main/Catalog/products/SurgicalKits";
import {ProstheticElements} from "../layout/main/Catalog/products/ProstheticElements";
import {TurboDrill} from "../layout/main/Catalog/products/TurboDrill";
import {OsteoSinus} from "../layout/main/Catalog/products/OsteoSinus";
import {AutoGoTop} from "../components/goTop/AutoGoTop";
import { Helmet } from 'react-helmet';
import {SurgicalGuide} from "../layout/main/Catalog/products/SurgicalDuide";


function App() {

	return (
		<div className="App">
			<Helmet>
				<title>SARMED</title>
				<meta name="sarmed" content="SARMED Sarmed imports medical and dental equipments and materials."/>
			</Helmet>
			<Header/>
			<div>
				<Routes>
					<Route path={'/'} element={<MainAge/>}/>
					<Route path={'/ID_CAM'} element={<IdCam/>}/>
					<Route path={'/ID3'} element={<Id3/>}/>
					<Route path={'/SurgicalSet'} element={<SurgicalSet/>}/>
					<Route path={'/SurgicalKits'} element={<SurgicalKits/>}/>
					<Route path={'ProstheticElements'} element={<ProstheticElements/>}/>
					<Route path={'TurboDrill'} element={<TurboDrill/>}/>
					<Route path={'OsteoSinus'} element={<OsteoSinus/>}/>
					<Route path={'SurgicalGuide'} element={<SurgicalGuide/>}/>
					<Route path="/404" element={<h1>404: PAGE NOTFOUND</h1>}/>
					<Route path="*" element={<h1>404: PAGE NOT FOUND</h1>}/>
				</Routes>
			</div>
			<AutoGoTop/>
			<GoTop/>
			<Footer/>
		</div>
	);
}

export default App;
