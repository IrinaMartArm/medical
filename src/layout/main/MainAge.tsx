import React from 'react';
import {MainSlider} from "../sections/slider/Slider";
import {Container} from "../../components/Container";
import {Catalog} from "./Catalog/Catalog";
import {Main} from "./about/Main";

export const MainAge = () => {
	return (
		<div>
			<MainSlider/>
			<Container padding={'0 20px'}>
				<Catalog/>
				{/*<Main/>*/}
			</Container>
		</div>
	);
}

