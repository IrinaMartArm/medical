import React from 'react';
import {Container} from "../../../../components/Container";
import p1 from '../../../../images/pictures/Drell-Big.png'
import {Wrapper} from "../../../../components/Wrapper";
import p2 from '../../../../images/pictures/TURBOdrill-Dense-.webp'
import {S} from './_ProductStyles'

export const SurgicalSet = () => {
	return (
		<S.IdcamBox>
			<S.BigImg src={p1} alt={'ID CAM'}/>
			<Container>
			<S.DescriptionBox>
				<S.SmallImgBox>
					<S.SmallImg src={p2} alt={'implant'}/>
				</S.SmallImgBox>
				<Wrapper direction={'column'} gap={'10px'} padding={'30px'}>
					<S.Title>Surgical Set</S.Title>
					<S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, alias, necessitatibus? Commodi culpa dignissimos dolor magnam necessitatibus totam? Adipisci architecto doloribus ea earum eius error ex facere hic illum impedit iste libero minus nesciunt officia placeat praesentium quas quos repellat sint sit tempore vel voluptates, voluptatibus. Aut error officia perferendis quaerat voluptates? Excepturi in nisi perferendis quis rerum, sequi similique? Ad deserunt, doloremque facere harum ipsum nobis reiciendis suscipit tenetur veritatis vitae! Aperiam asperiores, excepturi illum laboriosam quae quos vel velit? Cum dolorum excepturi explicabo fugiat impedit incidunt ipsa, labore magnam minima numquam quas quibusdam quisquam sunt, tenetur, ut veritatis?</S.Text>

				</Wrapper>
			</S.DescriptionBox>
			</Container>
		</S.IdcamBox>
	);
}

