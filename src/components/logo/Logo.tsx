import React, { MouseEvent} from "react";

import { animateScroll } from "react-scroll";
import logo from "../../images/svg/c.svg";
import {S} from "../../layout/header/Header_styles";

export const Logo: React.FC = () => {
    const goHome = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        animateScroll.scrollToTop()
    }
    return (
        <a href={'/'} onClick={goHome}>
            <S.Logotip src={logo} alt={'logo'}/>
        </a>
    );
}

