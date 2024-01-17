import React from "react";
import { S } from "./Header_styles";
import { Wrapper } from "../../components/Wrapper";
import { DesktopMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./headerMenu/MobileMenu";
import {Languages} from "./Languages";
import logo from '../../images/svg/wx.svg'
import {HeaderTitle} from "./HeaderTitle";



export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1140;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
      <S.Header>
          <S.Navigation>
                  <Wrapper justify={'space-between'} maxWidth={'1500px'} padding={'10px'}>
                      <S.LogotipBox>
                          <S.Logotip src={logo} alt={'logo'}/>
                      </S.LogotipBox>

                      {width < breakpoint ? (
                          <MobileMenu/>
                      ) : (
                          <DesktopMenu/>
                      )}
                      <Languages/>
                  </Wrapper>
          </S.Navigation>
          <HeaderTitle/>
      </S.Header>
  );
};


