import React from "react";
import { S } from "./SkillsStyles";
import { Title } from "../../../components/Title";
import { Wrapper } from "../../../components/Wrapper";
import { Data } from "./Data";
import { Container } from "../../../components/Container";
import { Fade } from "react-awesome-reveal";

const data: any = [

];

export const Skills: React.FC = () => {
  return (
    <S.Skills id="items">
      <Container>
        <Title>About</Title>
        <Wrapper wrap="wrap" gap="30px" justify="space-between">
          <Fade cascade={true} damping={0.1}>
            {data.map((d: any, index: any) => {
              return (
                <Data key={index} iconId={d.iconId} title={d.title} />
              );
            })}
          </Fade>          
        </Wrapper>
      </Container>
    </S.Skills>
  );
};
