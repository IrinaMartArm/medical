import React from 'react';
import {Container} from "../../../../components/Container";
import p1 from '../../../../images/pictures/ID_CAM-Big.webp'
import {Wrapper} from "../../../../components/Wrapper";
import p2 from '../../../../images/pictures/idcam__.jpg'
import {S} from './_ProductStyles'
import {Button} from "../../../../components/Button";
import {useTranslation} from "react-i18next";


export const IdCam = () => {
	const {t} = useTranslation();
	return (
		<S.IdcamBox>
			<S.BigImg src={p1} alt={'ID CAM'}/>
			<Container>
				<S.DescriptionBox>
					<Wrapper direction={'column'} gap={'10px'} padding={'30px'}>
						<S.Title>ID CAM® STANDARD</S.Title>
						<S.Text>FEATURES
							<div>FEATURES</div>
							<div>EXTERNAL</div>
							<div>- Cylindro-tapered shaped</div>
							<div>- 2 types : Standard and Mini-threads.</div>
							<div>- Titanium alloy: TAL6V ELI</div>
							<div>- S.M.A. and TiO2 state of surface</div>
							<div>- Switching cone</div>
							<div>- Condensing mini-threads</div>
							<div>- Condensing high-threads</div>
							<div>- Anti-unscrewing groove</div>
							<div>- Self-drilling low threads</div>
							<div>INTERNAL</div>
							<div>- Cam retention</div>
							<div>- 2,5° Morse taper (same to all diameters from the range)</div>
							<div>-Universal ISO threading</div>
							<div>LENGTH: 8mm - 10mm - 12mm - 15mm</div>
							<div>DIAMETERS: 3,5mm - 4,2mm - 5,2mm</div>
							<Button>
								<a href={'/IDCAM.pdf'} target="_blank" rel="noreferrer">
									{t('title3')}
								</a>
							</Button>
						</S.Text>
					</Wrapper>
					<S.SmallImgBox>
						<S.SmallImg src={p2} alt={'implant'}/>
					</S.SmallImgBox>
				</S.DescriptionBox>
			</Container>
		</S.IdcamBox>
	);
}


