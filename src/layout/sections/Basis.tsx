import React from 'react';
import styled from "styled-components";
import {Inform} from "../header/Inform";
import logo from '../../images/Group.png'


export const Basis = () => {
	return (
		<StyledBasis>
			{/*<Container padding={'0 0'}>*/}
			{/*	<Wrapper justify={'end'} padding={'0 30px'} >*/}
					<Logotip src={logo} alt={'logo'} width={300} height={80}/>
					<Inform/>
					{/*<SelectSmall />*/}
				{/*</Wrapper>*/}
			{/*</Container>*/}
		</StyledBasis>
	);
};

const StyledBasis = styled.div`
  //border: 1px solid red;
  padding: 10px 40px;
  height: 40px;
  display: flex;
  background-color: #083327;
  justify-content: flex-end;
`
const Logotip = styled.img`
	position: absolute;
  top: 25px;
  left: 100px;
`