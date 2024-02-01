import React from 'react';
import {Container} from "../../../../components/Container";
import p1 from '../../../../images/pictures/protez.png'
import p2 from '../../../../images/pictures/prostatic.jpg'
import arr from '../../../../images/pictures/arr.png'
import {S} from './_ProductStyles'

export const ProstheticElements = () => {
	return (
		<S.ProductBox>
			<S.BigImg src={p1} alt={'ID CAM'}/>
			<Container>
				<S.DescriptionBox>
					<S.Title>Prosthetic Elements</S.Title>
					<S.BoxItems>
						<S.SmallImgBox>
						<S.SmallImg src={p2} alt={'implant'}/>
						</S.SmallImgBox>
						<S.TextBox>
							<S.Text>
								<div></div>
								<div><img src={arr} alt={''} width={'50px'}/><span>Features</span></div>

							</S.Text>
						</S.TextBox>
					</S.BoxItems>
				</S.DescriptionBox>
			</Container>
		</S.ProductBox>
	);
}


