import styled from "styled-components";


const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  z-index: -1;
`;
const Navigation = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 5px 0;
  background-color: #083327;
  z-index: 9999;
  width: 100%;
  margin: 0 auto;
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

export const S = {
	Header, Navigation, SmallTitle, ArrowDown, HeaderTitle
}