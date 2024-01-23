import React, { useEffect, useState } from "react";
import styled from "styled-components";
import up from '../../images/svg/up-arrow-svgrepo-com.svg'
import { animateScroll } from "react-scroll";

export const GoTop = () => {

    const [show, setShow] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 300) {
                setShow(true)
            } else {
                setShow(false)
            }
        })
    }, [])

    return (  
        <>
        {show && (
            <GoTopBtn onClick={()=>{animateScroll.scrollToTop()}}>
                <StyledImg src={up} alt={'up'}/>
            </GoTopBtn>)}
        </>     
    );
}

const GoTopBtn = styled.button`
    position: fixed;
    bottom: 150px;
    right: 30px;
`
const StyledImg = styled.img`
  width: 50px;
    height: 50px;
`



