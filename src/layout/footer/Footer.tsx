import React from "react";
import { Icon } from "../../components/icon/Icon";
import { Wrapper } from "../../components/Wrapper";
import { Logo } from "../../components/logo/Logo";
import { S } from "./FooterStyle";
import {Contacts} from "./Contacts";

const socialIconsData = [
  {
    iconId: "in",
  },
  {
    iconId: "gt",
  },
  {
    iconId: "telegram",
  },
];

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Wrapper align="center" justify={"space-around"}>
        <Logo />
        <S.SocialList>
          {socialIconsData.map((i, index) => {
            return (
              <S.SocialItem key={index}>
                <S.SocialLink>
                  <Icon
                    iconId={i.iconId}
                    width="35px"
                    height="35px"
                    viewBox={'0 0 35px 35px'}
                  />
                </S.SocialLink>
              </S.SocialItem>
            );
          })}
        </S.SocialList>
        <Contacts/>
        <S.Copyright>© some text</S.Copyright>
      </Wrapper>
    </S.Footer>
  );
};
