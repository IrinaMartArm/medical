import React from "react";
import { Icon } from "../icon/Icon";
import { animateScroll } from "react-scroll";

export const Logo: React.FC = () => {
    
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href={'#'} onClick={()=>{animateScroll.scrollToTop()}}>
            <Icon iconId={'sarmed'}  width={"150px"} height="80px"/>
        </a>
    );
}

