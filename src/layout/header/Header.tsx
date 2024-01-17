import React from "react";
import { S } from "./Header_styles";
import { Container } from "../../components/Container";
import { Wrapper } from "../../components/Wrapper";
import { DesktopMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./headerMenu/MobileMenu";
import {Logo} from "../../components/logo/Logo";
import {Basis} from "../sections/Basis";
import {SliderReact} from "../../components/slider/Swiper";
import {HeaderTitle} from "./HeaderTitle";
import arrow from '../../images/svg/down-arrow.svg'





export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
      <S.Header>
          <S.Navigation>
              <Basis/>
              <Container padding={'0 20px'}>
                  <Wrapper justify={'space-between'}>
                      <Logo aria-label='logo'/>
                      {width < breakpoint ? (
                          <MobileMenu/>
                      ) : (
                          <DesktopMenu/>
                      )}
                  </Wrapper>
              </Container>
          </S.Navigation>
          <SliderReact/>
          <HeaderTitle/>
          <S.ArrowDown src={arrow} alt={'down'}/>
      </S.Header>
  );
};


