import React from 'react';
import {MainSlider} from "../sections/slider/Slider";
import {Container} from "../../components/Container";
import {Catalog} from "./Catalog/Catalog";
import {Helmet} from "react-helmet";


export const MainAge = () => {
	return (
		<>
			<Helmet>
				<title>SARMED</title>
				<meta name="sarmed" content="SARMED Sarmed imports medical and dental equipments and materials."/>
			</Helmet>
			<MainSlider/>
			<main>
				<Container padding={'0 20px'}>
					<Catalog/>
				</Container>
			</main>
		</>

	);
}

