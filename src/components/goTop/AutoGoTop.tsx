import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {animateScroll} from "react-scroll";

export const AutoGoTop = () => {
	// Extracts pathname property(key) from an object
	const { pathname } = useLocation();

	// Automatically scrolls to top whenever pathname changes
	useEffect(() => {
		//animateScroll.scrollToTop()
		window.scrollTo(0, 0);
	}, [pathname]);
	return <></>
}
