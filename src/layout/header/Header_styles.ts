import styled from "styled-components";


const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  z-index: -1;
`;
const Navigation = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 5px 0;
  background-color: lightgray;
  z-index: 9999;
  width: 100%;
  margin: 0 auto;
`;
const SmallTitle = styled.div`
  display: flex;
  gap: 60px;
`


export const S = {
	Header, Navigation, SmallTitle
}