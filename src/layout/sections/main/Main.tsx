import React from "react";
import { Wrapper } from "../../../components/Wrapper";
import { Container } from "../../../components/Container";
import { S } from "./MainStyles";




export const Main: React.FC = () => {
  return (
    <S.StyledMain id="home">
      <Container>
        <Wrapper align="center" justify="space-around" gap="40px" wrap="wrap">
          <div style={{height: '500px'}}>

          </div>

        </Wrapper>
      </Container>
    </S.StyledMain>
  );
};
