import React from 'react';
import styled from "styled-components";
import {Inform} from "../header/Inform";
import {Container} from "../../components/Container";
import {Wrapper} from "../../components/Wrapper";

export const Basis = () => {
	return (
		<StyledBasis>
			<Container padding={'0 0'}>
				<Wrapper justify={'end'} padding={'0 30px'}>
					<Inform/>
					{/*<SelectSmall />*/}
				</Wrapper>
			</Container>
		</StyledBasis>
	);
};

const StyledBasis = styled.div`
	border: 1px solid red;
  padding: 10px 40px;
  	height: 40px;
  display: flex;
  background-color: gray;
  justify-content: space-between;
`