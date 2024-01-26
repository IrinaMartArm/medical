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
		<S.ProductBox>
			<S.BigImg src={p1} alt={'ID CAM'}/>
			<Container>
				<S.DescriptionBox>
					<S.Title>ID CAM® STANDARD</S.Title>
					<S.BoxItems>
						<S.SmallImg src={p2} alt={'implant'}/>
						<S.TextBox>
							<S.Text>
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
							</S.Text>
							<S.Text2>
								<div>INTERNAL</div>
								<div>- Cam retention</div>
								<div>- 2,5° Morse taper (same to all diameters from the range)</div>
								<div>-Universal ISO threading</div>
								<div>LENGTH: <img src={yell} alt={''}/><strong> 8mm</strong> - <img
									src={red} alt={''}/><strong> 10mm</strong> - <img src={gr} alt={''}/><strong> 12mm</strong> - <img
									src={bl} alt={''}/><strong> 15mm</strong></div>
								<div>DIAMETERS: <strong> 3,5mm</strong> - <strong> 4,2mm</strong> - <strong> 5,2mm</strong>
								</div>
							</S.Text2>
							<Button>
								<a href={'/IDCAM.pdf'} target="_blank" rel="noreferrer">
									{t('title3')}
								</a>
							</Button>
						</S.TextBox>
					</S.BoxItems>
				</S.DescriptionBox>
			</Container>
		</S.ProductBox>
	);
}

