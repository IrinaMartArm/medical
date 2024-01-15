import React from "react";
import { S } from "./Header_styles";
import { Container } from "../../components/Container";
import { Wrapper } from "../../components/Wrapper";
import {useTranslation} from "react-i18next";

export const HeaderTitle: React.FC = () => {
    const { t } = useTranslation();

  return (
    <S.Header>
      <Container padding={'0 20px'}>
          <Wrapper justify={'center'} align={'center'} padding={'200px'} direction={'column'} gap={'50px'}>
              <h1>{t("title")}</h1>
              <S.SmallTitle>
                  <h3>Доставка в день заказа</h3>
                  <h3>Оплата при получении</h3>
                  <h3>Скидки</h3>
              </S.SmallTitle>
          </Wrapper>
      </Container>
    </S.Header>
  );
};


