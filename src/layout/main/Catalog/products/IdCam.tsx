import React from 'react';
import {Container} from "../../../../components/Container";
import p1 from '../../../../images/pictures/ID_CAM-Big.webp'
import {Wrapper} from "../../../../components/Wrapper";
import p2 from '../../../../images/pictures/idcam__.jpg'
import yell from '../../../../images/pictures/Ellipse 3.svg'
import red from '../../../../images/pictures/Ellipse 4.svg'
import gr from '../../../../images/pictures/Ellipse 2.svg'
import bl from '../../../../images/pictures/Ellipse 5.svg'
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
					<S.SmallImgBox>
						<S.SmallImg src={p2} alt={'implant'}/>
					</S.SmallImgBox>
					<Wrapper direction={'column'} gap={'20px'} padding={'30px'}>
						<S.Title>ID CAM® STANDARD</S.Title>
						<S.Text>
							<div>PRESENTATION</div>
							<div>STANDARD</div>
							<div>The IDCAM ST implant line (type IM)benefits from the SMA + Ti02 state of surface
								initiated by IDI and used since 1987.
								This self-condensing implant stands 75 N.cm screwing stress without being affected. The
								IDCAM ST implant draws special attention to itself due to its Switching Cone neck and
								to its cylindro-tapered body identical to a dental root.
								The angulation, the state and the depth of the threads are specially studied to optimize
								the primary stabilization in any bone density and favor the immediate loading.
							</div>
							<S.Text2>
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
								<div>LENGTH: <img src={yell}/><strong> 8mm</strong> - <img
									src={red}/><strong> 10mm</strong> - <img src={gr}/><strong> 12mm</strong> - <img
									src={bl}/><strong> 15mm</strong></div>
								<div>DIAMETERS: 3,5mm - 4,2mm - 5,2mm</div>
							</S.Text2>
							<Button>
								<a href={'/IDCAM.pdf'} target="_blank" rel="noreferrer">
									{t('title3')}
								</a>
							</Button>
						</S.Text>
					</Wrapper>
				</S.DescriptionBox>
			</Container>
		</S.IdcamBox>
	);
}


