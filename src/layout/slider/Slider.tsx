import React from 'react';
import {SliderReact} from "../../components/slider/Swiper";
import arrow from "../../images/svg/down-arrow.svg";
import {S} from "../header/Header_styles";

export const MainSlider = () => {
	return (
		<div>
			<SliderReact/>
			<S.ArrowDown src={arrow} alt={'down'}/>
		</div>
	);
}

