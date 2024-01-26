import styled from "styled-components";
import { Theme } from "../style/Theme";
import {font} from "../style/Common";

export const Button = styled.button`
  position: absolute;
  bottom: 70px;
  left: 5px;
  a {
     display: inline-block;
  padding: 8px 50px;
    margin-top: 20px;
  border-radius: 4px;
  ${font({weight: 500, fmax: 24, fmin: 16})};
  color: ${Theme.colors.secondary};
  background-color: ${Theme.colors.accent};
  transition: ${Theme.animations.transition};

  &:hover {
    color: ${Theme.colors.white};
    transform: scale(1.01);
  }
  &:active {
    color: ${Theme.colors.primary};
  }
  }
 
`
