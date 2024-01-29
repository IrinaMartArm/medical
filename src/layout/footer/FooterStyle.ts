import styled from "styled-components";
import {Theme} from "../../style/Theme";
import {font} from "../../style/Common";

const Footer = styled.footer`
  position: relative;
  background-color: ${Theme.colors.secondary};
  padding: 10px 0;
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
	gap: 15px;
  }
`
const LogoBox =styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`
const ContactsBox = styled.div`
	display: flex;
  flex-direction: column;
  color: white;
  ${font({weight: 400, color: '#E9EFE7', fmax: 22, fmin: 16})};
  align-items: start;
  @media (max-width: 500px) {
    align-items: center;
  }
`

const Social = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 15px;
  margin: 15px 0;
  z-index: 9999;
`;

const SocialItem = styled.li``

const SocialLink = styled.li`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
	LogoBox,
	ContactsBox,
	Social,
	SocialItem,
	SocialLink,
	SocialList,
	Copyright,
    FooterWrapper
}