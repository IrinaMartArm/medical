import React from 'react';
import {Container} from "../../../../components/Container";
import p1 from '../../../../images/pictures/protez.png'
import p2 from '../../../../images/pictures/D.png'
import {S} from './_ProductStyles'

export const ProstheticElements = () => {
	return (
		<S.ProductBox>
			<S.BigImg src={p1} alt={'ID CAM'}/>
			<Container>
				<S.DescriptionBox>
					<S.Title>Prosthetic Elements</S.Title>
					<S.BoxItems>
						{/*<S.SmallImgBox>*/}
						<S.SmallImg src={p2} alt={'implant'}/>
						{/*</S.SmallImgBox>*/}
						<S.TextBox>
							<S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, alias, necessitatibus?
								Commodi culpa dignissimos dolor magnam necessitatibus totam? Adipisci architecto
								doloribus ea earum eius error ex facere hic illum impedit iste libero minus nesciunt
								officia placeat praesentium quas quos repellat sint sit tempore vel voluptates,
								voluptatibus. Aut error officia perferendis quaerat voluptates? Excepturi in nisi
								perferendis quis rerum, sequi similique? Ad deserunt, doloremque facere harum ipsum
								nobis reiciendis suscipit tenetur veritatis vitae! Aperiam asperiores, excepturi illum
								laboriosam quae quos vel velit? Cum dolorum excepturi explicabo fugiat impedit incidunt
								ipsa, labore magnam minima numquam quas quibusdam quisquam sunt, tenetur, ut veritatis?
							</S.Text>
						</S.TextBox>
					</S.BoxItems>
				</S.DescriptionBox>
			</Container>
		</S.ProductBox>
	);
}


