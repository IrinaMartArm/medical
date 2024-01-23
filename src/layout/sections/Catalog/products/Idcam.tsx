import React from 'react';
import id3 from '../../../../images/pictures/id3.jpg'
import styled from "styled-components";
import p1 from '../../../../images/pictures/Screenshot 2024-01-18 at 15.42.19 copy.png'
import {Wrapper} from "../../../../components/Wrapper";
import i1 from '../../../../images/pictures/IDCST-Prsentation.webp'
import {font} from "../../../../style/Common";

export const Idcam = () => {
	return (
		<IdcamBox>
			<BigImg src={p1} alt={'ID CAM'}/>
			<Wrapper padding={'40px 20px'} gap={'30px'}>
				<SmallImg src={i1} alt={'implant'}/>
				<Wrapper direction={'column'} gap={'40px'} padding={'20px'}>
					<Title>ID CAM® STANDARD</Title>
					<Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, alias, necessitatibus? Commodi culpa dignissimos dolor magnam necessitatibus totam? Adipisci architecto doloribus ea earum eius error ex facere hic illum impedit iste libero minus nesciunt officia placeat praesentium quas quos repellat sint sit tempore vel voluptates, voluptatibus. Aut error officia perferendis quaerat voluptates? Excepturi in nisi perferendis quis rerum, sequi similique? Ad deserunt, doloremque facere harum ipsum nobis reiciendis suscipit tenetur veritatis vitae! Aperiam asperiores, excepturi illum laboriosam quae quos vel velit? Cum dolorum excepturi explicabo fugiat impedit incidunt ipsa, labore magnam minima numquam quas quibusdam quisquam sunt, tenetur, ut veritatis?</Text>
				</Wrapper>
			</Wrapper>
		</IdcamBox>
	);
}

const IdcamBox = styled.div`
	padding: 20px 0;
`
const BigImg = styled.img`
	width: 100%;
`
const SmallImg = styled.img`
	width: 300px;
`
const Title = styled.h2`
  letter-spacing: 2.5px;
  ${font({weight: 500, fmax: 50, fmin: 36})};
`
const Text = styled.p`
  //letter-spacing: 2.5px;
  ${font({weight: 400, fmax: 24, fmin: 16})};
`