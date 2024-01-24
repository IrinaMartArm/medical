import {Theme} from "../../style/Theme";
import styled, {css} from "styled-components";
import {font} from "../../style/Common";
import {NavLink} from "react-router-dom";

const CatalogBtnBox = styled.div`
//border: 1px solid red;
position: relative;
`
const MenuWrapper = styled.nav<{ isOpen: boolean }>`
  position: absolute;
  left: -15px;
  top: 50px;
  min-width: 150px;
  border-radius: 4px;
  z-index: 999;
  border: 1px solid black;
  background-color: ${Theme.colors.primary};

  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: 0.2s;

  ${(props) =>
          props.isOpen && css<{ isOpen: boolean }>`
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          `}
  &::before, &::after {
    display: inline-block;
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    left: 15px;
    border: 10px solid transparent;
  }

  &::before {
    top: -20px;
    border-bottom: 10px solid black;
  }

  &::after {
    top: -19px;
    border-bottom: 10px solid ${Theme.colors.primary};
  }
`

const CatalogItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 15px;
`

const CatalogItem = styled.li`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    height: 2px;
    background-color: transparent;
    position: absolute;
    bottom: 0;
    left: 5px;
    right: 5px;
    z-index: 2;
    transform: scale(0);
    transition: ${Theme.animations.transition};
  }

  &:hover, &.active {
    &::before {
      transform: scale(1);
      background-color: ${Theme.colors.accent};
    }
  }
`

const Button = styled.button`
  text-align: center;
  font-family: Alegreya Sans SC, sans-serif;
  font-size: ${font({weight: 400, fmax: 28, fmin: 20})};
  line-height: 1.2;
  color: ${Theme.colors.primary};

  &::before {
    content: "";
    display: inline-block;
    height: 2px;
    background-color: transparent;
    position: absolute;
    bottom: 0;
    left: -10px;
    right: -10px;
    z-index: 2;
    transform: scale(0);
    transition: ${Theme.animations.transition};
  }

  &:hover, &.active {
    &::before {
      transform: scale(1);
      background-color: ${Theme.colors.accent};
    }
  }
`

const CatalogLink = styled(NavLink)`
    font-family: Alegreya Sans SC, sans-serif;
    font-size: ${font({weight: 400, fmax: 24, fmin: 16})};
    color: ${Theme.colors.secondary};
  
`

export const S = {
	Button, CatalogBtnBox, CatalogItems, MenuWrapper, CatalogItem, CatalogLink
}