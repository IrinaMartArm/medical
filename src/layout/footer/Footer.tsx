import React from "react";
import { Logo } from "../../components/logo/Logo";
import { S } from "./FooterStyle";
import {Contacts} from "./Contacts";
import Messengers from "./Messengers";


export const Footer: React.FC = () => {
  return (
    <S.Footer>
          <S.FooterWrapper>
              <S.LogoBox>
                  <Logo/>
              </S.LogoBox>
              <Contacts/>
              <Messengers/>
          </S.FooterWrapper>
    </S.Footer>
  );
};
