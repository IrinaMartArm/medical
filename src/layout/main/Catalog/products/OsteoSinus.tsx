import React from 'react';
import {Container} from "../../../../components/Container";
import p1 from '../../../../images/pictures/Osteosinus-Big.png'
import p2 from '../../../../images/pictures/osteosinus-kit.png'
import yell from '../../../../images/pictures/Ellipse 3.svg'
import red from '../../../../images/pictures/Ellipse 4.svg'
import gr from '../../../../images/pictures/Ellipse 2.svg'
import bl from '../../../../images/pictures/Ellipse 5.svg'
import {S} from './_ProductStyles'
import {Button} from "../../../../components/Button";
import {useTranslation} from "react-i18next";
import styled from "styled-components";


export const OsteoSinus = () => {
	const {t} = useTranslation();
	return (
		<S.ProductBox>
			<S.BigImg src={p1} alt={'ID CAM'}/>
			<Container>
				<S.DescriptionBox>
					<S.Title>Osteosinus Kit</S.Title>
					<S.BoxItems>
					<S.SmallImgBox>
						<SmallImg src={p2} alt={'implant'}/>
						<Button>
							<a href={'/IDCAM.pdf'} target="_blank" rel="noreferrer">
								{t('title3')}
							</a>
						</Button>
					</S.SmallImgBox>
					<S.TextBox>

						<S.Text>
							<div>Osteosinus Kit</div>
							<div>The TURBOdrill® drill is an innovation of the IDI company – IMPLANTS DIFFUSION INTERNATIONAL. It offers a new drilling approach thanks to its secure bladed stopper.</div>
							<div>Control each drilling parameters : safety, irrigation, bone temperature & speed.</div>
							<div>Cylindro-tapered drill, available in 4 lengths : 8, 10, 12 and 15 mm and 3 diameters : 3,6, 4,2 and 5,2 mm.</div>
							<div> The TURBOdrill® is a cylindro-tapered drill with 4 serrated blades. It has a hollowed out stopper with blades acting as a turbine and leading the irrigation liquid along the blades till the bone socket. This intense irrigation phenomenon optimizes the cooling of the drill and thus of the operating site. The TURBOdrill® may be used up to 1 200 rpm with irrigation without bone heating up. The fixed stopper enables a safe drilling even with high speed.  There are two sizes: - TURBOdrill® for the IDCAM . Several studies show that the irrigation, the pressure exerted by the practitioner when drilling, the drilling duration and more generally the bone temperature rise have an impact on the osseointegration of the implant inserted. The TURBOdrill® plays on all these factors in order to optimize the implant success.</div>


							{/*<div>- Switching cone</div>*/}
							{/*<div>- Condensing mini-threads</div>*/}
							{/*<div>- Condensing high-threads</div>*/}
							{/*<div>- Anti-unscrewing groove</div>*/}
							{/*<div>- Self-drilling low threads</div>*/}
							{/*<S.Text2>*/}
							{/*	<div>INTERNAL</div>*/}
							{/*	<div>- Cam retention</div>*/}
							{/*	<div>- 2,5° Morse taper (same to all diameters from the range)</div>*/}
							{/*	<div>-Universal ISO threading</div>*/}
							{/*	<div>LENGTH: <img src={yell}/><strong> 8mm</strong> - <img*/}
							{/*		src={red}/><strong> 10mm</strong> - <img src={gr}/><strong> 12mm</strong> - <img*/}
							{/*		src={bl}/><strong> 15mm</strong></div>*/}
							{/*	<div>DIAMETERS: <strong> 3,5mm</strong> - <strong> 4,2mm</strong> - <strong> 5,2mm</strong></div>*/}
							{/*</S.Text2>*/}

						</S.Text>
					</S.TextBox>
						</S.BoxItems>
				</S.DescriptionBox>
			</Container>
		</S.ProductBox>
	);
}

const SmallImg = styled.img`
  max-width: 300px;
  width: 100%;
  padding-top: 100px;
`
