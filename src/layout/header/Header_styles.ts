import styled from "styled-components";
import {Theme} from "../../style/Theme";
import {font} from "../../style/Common";


const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  z-index: 99999;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  //border: 1px solid red;
`;
const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 5px 80px 5px 20px;
  background-color: ${Theme.colors.secondary};
  width: 100%;
 
  // @media ${Theme.media.break} {
  //   padding: 5px 80px 5px 0;
  // }
`;
const SmallTitle = styled.h2`
  display: flex;
  gap: 60px;
`
const ArrowDown = styled.img`
	width: 40px;
  height: 40px;
`
const HeaderTitle = styled.div`
	display: none;
`
const StyledBasis = styled.div`
  padding: 10px 40px;
  height: 40px;
  display: flex;
  background-color: #083327;
  justify-content: flex-end;
`
const Logotip = styled.img`
  max-width: 200px;
  width: 100%;
  height: 80px;
`
const LogotipBox = styled.div`
  max-width: 200px;
  width: 100%;
  height: 100px;
  max-height: 80px;
`
const StyledSelect = styled.select`
	background-color: ${Theme.colors.secondary};
  color: ${Theme.colors.primary};
  padding: 5px;
  font-family: Alegreya Sans SC,serif;
  font-size: ${font({ weight: 400, fmax: 20, fmin: 14 })};
`

export const S = {
	Header, Navigation, SmallTitle, ArrowDown, HeaderTitle, StyledBasis, Logotip, LogotipBox, StyledSelect
}