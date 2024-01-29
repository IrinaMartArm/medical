import React from "react";
import { S } from "./Header_styles";
import { Container } from "../../components/Container";
import { Wrapper } from "../../components/Wrapper";

export const HeaderTitle: React.FC = () => {

  return (
    <S.HeaderTitle>
      <Container padding={'0 20px'}>
          <Wrapper justify={'center'} align={'center'} padding={'200px'} direction={'column'} gap={'50px'}>
              <h1>SARMED Sarmed imports medical and dental equipments and materials. The company is the distributor of France IDI implants in Armenia</h1>
              <S.SmallTitle>
                  Sarmed imports medical and dental equipments and materials. The company is the distributor of France IDI implants in Armenia
              </S.SmallTitle>
          </Wrapper>
      </Container>
    </S.HeaderTitle>
  );
};


