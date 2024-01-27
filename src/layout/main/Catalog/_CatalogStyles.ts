import styled, { css } from "styled-components";
import { Theme } from "../../../style/Theme";
import { motion } from "framer-motion";
import {font} from "../../../style/Common";


const Items = styled.section`
    position: relative;
    text-align: center;  
    margin: 30px 0;
    background-color: white;
`


const Item = styled(motion.div)`
    position: relative;
    transition: 0.2s ease-in;
    padding: 25px 0;
    border-radius: 2%;
    background-color: white;

    /* &:hover {
        outline: 2px solid ${Theme.colors.accent};
        transform: scale(1.02);
        
        &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.10);        
        }
    } */
`
const ItemTitle = styled.div`
    padding-top: 25px;
    text-align: start;
   
`
const ImgBox = styled.div`
    max-width: 350px;
    width: 100%;
`
    
const Image = styled.img`
    max-width: 350px;
    width: 100%;
    object-fit: cover;
    border-radius: 3px;
    //border: 1px solid red;
`

const Title = styled.h4`
    font-size: 20px;
    letter-spacing: 1px;
    color: ${Theme.colors.secondary};
    //border: 1px solid red;
`

const Text = styled.p`
    margin: 5px 0 20px;
`
const Button = styled.a`
    margin-right: 25px;
    position: relative;
    z-index: 2;
    padding: 5px;
    font-size: 20px;
    letter-spacing: 1px;
    color: ${Theme.colors.secondary};
    

    &::before {
        content: '';
        display: inline-block;
        position: absolute;
        height: 2px;
        width: 120%;
        background-color: ${Theme.colors.accent};
        bottom: -1px;
        left: -10%;
        border-radius: 3px;
        transition: ${Theme.animations.transition};
    }

    &:hover {
        &::before {
            height: 103%;
            z-index: -1;
        }
    }

    &:active {
        color: ${Theme.colors.secondary};
        &::before {
            height: 90%;
            z-index: -1;
        }
    }
`
// Menu

const Menu = styled.nav`

    ul {
        display: flex;
        justify-content: space-between;
        max-width: 355px;
        width: 100%;
        margin: 0 auto 40px;
    }
`;

const List = styled.ul`
    color: ${Theme.colors.secondary};
`;

const ListItem = styled.li`
    color: ${Theme.colors.secondary};
`;

const Link = styled.a<{active: boolean}>`
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 10px;
    position: relative;
    z-index: 2;
    ${font({weight: 500, fmax: 22, fmin: 16})};

    &:hover {
        &::before{
        height: 2px;
        }
    }

    &::before {
        content: '';
        position: absolute;
        display: inline-block;
        left: 5px;
        right: 5px;
        bottom: 5px;
        background-color: ${Theme.colors.accent};
        z-index: -1;
        height: 0;
        transition: ${Theme.animations.transition};

        ${props => props.active && css<{active: boolean}>`
        height: 2px;
        `}
    }
`;


export const St = {
    Items,
    Text,
    Title,
    Image,
    ImgBox,
    ItemTitle,
    Item,
    Menu,
    Link,
    List,
    ListItem,
    Button
}