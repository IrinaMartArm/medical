import React from "react";
import { S } from "./Header_styles";
import { Wrapper } from "../../components/Wrapper";
import { DesktopMenu } from "./headerMenu/DesktopMenu";
import { MobileMenu } from "./headerMenu/MobileMenu";
import {Languages} from "./Languages";
import logo from '../../images/svg/c.svg'
import {HeaderTitle} from "./HeaderTitle";
import {LngSelect} from "./LngSelect";
import {Logo} from "../../components/logo/Logo";




export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1100;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
      <S.Header>
          <S.Navigation>
                  <Wrapper justify={'space-between'} maxWidth={'1500px'} padding={'3px'} align={'center'} gap={'10px'}>
                      <Logo/>
                      {width < breakpoint ? (
                          <MobileMenu/>
                      ) : (
                          <DesktopMenu/>
                      )}
                      {/*<LngSelect/>*/}
                      <Languages/>
                  </Wrapper>
          </S.Navigation>
          <HeaderTitle/>
      </S.Header>
  );
};


