import styled from "styled-components";
import {Theme} from "../../style/Theme";


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
`;
const SmallTitle = styled.div`
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
  //border: 1px solid red;
  padding: 10px 40px;
  height: 40px;
  display: flex;
  background-color: #083327;
  justify-content: flex-end;
`
const Logotip = styled.img`
  top: 25px;
  left: 100px;
  max-width: 300px;
  width: 100%;
  height: 100px;
  max-height: 80px;
  //border: 1px solid red;
`

export const S = {
	Header, Navigation, SmallTitle, ArrowDown, HeaderTitle, StyledBasis, Logotip
}