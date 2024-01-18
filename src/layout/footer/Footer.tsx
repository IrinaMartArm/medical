import React from "react";
import { Wrapper } from "../../components/Wrapper";
import { Logo } from "../../components/logo/Logo";
import { S } from "./FooterStyle";
import {Contacts} from "./Contacts";
import Messengers from "./Messengers";


export const Footer: React.FC = () => {
  return (
    <S.Footer>
      {/*<Wrapper align="center" justify={"space-around"}>*/}
          <S.FooterWrapper>
              <Logo/>
              <Contacts/>
              <Messengers/>
          </S.FooterWrapper>

      {/*</Wrapper>*/}
    </S.Footer>
  );
};
