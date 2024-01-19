import React from "react";
import { Wrapper } from "../../../components/Wrapper";
import { Container } from "../../../components/Container";
import { S } from "./MainStyles";
import {Title} from "../../../components/Title";
import {useTranslation} from "react-i18next";
import {Vidios} from "./Vidios";




export const Main: React.FC = () => {
    const { t } = useTranslation();
  return (
    <S.StyledMain id="about">
      <Container>
          <Title>{t("test")}</Title>
        <Wrapper align="center" justify="space-around" gap="40px" wrap="wrap">
            <Vidios/>
          <S.Description>
            Best quality
          </S.Description>
            <S.Description>
                About production
            </S.Description>
        </Wrapper>
      </Container>
    </S.StyledMain>
  );
};
