import React from "react";
// import { animateScroll } from "react-scroll";
import logo from "../../images/svg/c.svg";
import {S} from "../../layout/header/Header_styles";
import {NavLink} from "react-router-dom";

export const Logo: React.FC = () => {
    // const goHome = (e: MouseEvent<HTMLAnchorElement>) => {
    //     e.preventDefault()
    //     animateScroll.scrollToTop()
    // }
    return (
        <NavLink to={'/'}>
            <S.Logotip src={logo} alt={'logo'}/>
        </NavLink>
    );
}

