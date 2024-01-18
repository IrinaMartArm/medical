import styled from "styled-components";
import {Theme} from "../../style/Theme";

const Footer = styled.footer`
  position: relative;
  background-color: ${Theme.colors.secondary};
  padding: 10px 0;
  border: 1px solid red;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 40px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 15px ;
  
  @media (max-width: 500px) {
    flex-direction: column;
    
  }
`

const SocialList = styled.ul`
  display: flex;
  gap: 15px;
  margin: 15px 0;

`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

const SocialItem = styled.li``

const SocialLink = styled.div`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Theme.colors.accent};
  transition: ${Theme.animations.transition};

  // &:hover {
    //   color: ${Theme.colors.white};
  //   transform: translateY(-4px);
  // }
  //
  // &:active {
  //   opacity: 0.5;  
    //   //color: ${Theme.colors.primary};
  // }
`;

const Copyright = styled.small`
  opacity: 0.5;
  font-size: 14px;
  font-weight: 400;
`;

export const S = {
	Footer,
	Social,
	SocialItem,
	SocialLink,
	SocialList,
	Copyright,
    FooterWrapper
}