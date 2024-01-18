import React from "react";
import { animateScroll } from "react-scroll";
import logo from "../../images/svg/c.svg";
import {S} from "../../layout/header/Header_styles";

export const Logo: React.FC = () => {
    
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href={'#'} onClick={()=>{animateScroll.scrollToTop()}}>
            <S.Logotip src={logo} alt={'logo'}/>
            {/*<Icon iconId={'sarmed'}  width={"150px"} height="80px"/>*/}
        </a>
    );
}

