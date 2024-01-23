import React from 'react';
import {MainSlider} from "../sections/slider/Slider";
import {Container} from "../../components/Container";
import {Catalog} from "../sections/Catalog/Catalog";
import {Main} from "../sections/about/Main";

export const MainAge = () => {
	return (
		<div>
			<MainSlider/>
			<Container padding={'0 20px'}>
				<Catalog/>
				<Main/>
			</Container>
		</div>
	);
}

