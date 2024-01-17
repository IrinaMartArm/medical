import styled from "styled-components";
import { Theme } from "../../style/Theme";

const Slider = styled.div`
    min-height: 100vh;
    max-width: 1500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    border: 1px solid red;
`;

const Slide = styled.div`
    text-align: center;
    border: 1px solid red;
    height: 500px;
    width: 100%;
`;

const Text = styled.p``;
const Pagination = styled.span`
    span {
        display: inline-block;
        width: 7px;
        height: 7px; 
        border-radius: 20px;
        border: 1px solid red;
        background-color: ${Theme.colors.secondary};
        & + span {
            margin-left: 5px;
        } 
        &:active {
            background-color: ${Theme.colors.accent};
            width: 20px;
        }
    }
`;

export const S = {
    Slider,
    Slide, 
    Text,
    Pagination
}




