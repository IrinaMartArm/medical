import React from 'react';
import {Container} from "../../../../components/Container";
import p1 from '../../../../images/pictures/Drell-Big.png'
import {Wrapper} from "../../../../components/Wrapper";
import p2 from '../../../../images/pictures/box.png'
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
					<S.Title>Surgery and prosthesis kit for IDcam</S.Title>
					<S.Text>
						<div>COMPOSITION:</div>
						<div>- 16 TURBOdrill® drills</div>
						<div>- 4 RBS drills Ø2 mm</div>
						<div>- 4 "dense bone" drills</div>
						<div>- 1 pointer drill (L15 Ø1.8 with depth marking)</div>
						<div>- 1 Faux-moignon extractor</div>
						<div>- Set of prosthetic and ancillary screwdrivers</div>
					</S.Text>

				</Wrapper>
			</S.DescriptionBox>
			</Container>
		</S.IdcamBox>
	);
}


