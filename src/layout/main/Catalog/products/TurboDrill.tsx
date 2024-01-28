import React, {useEffect, useState} from 'react';
import {Container} from "../../../../components/Container";
import p1 from '../../../../images/pictures/Drell-Big.png'
import {S} from './_ProductStyles'
import {Button} from "../../../../components/Button";
import {useTranslation} from "react-i18next";
import {SwiperForDrill} from "./SwiperForDrill";
import styled from "styled-components";


export const TurboDrill = () => {
	const {t} = useTranslation();
	const [width, setWidth] = useState(window.innerWidth)
	const breakPoint = 770
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth)
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, []);


	return (
		<S.ProductBox>
			<S.BigImg src={p1} alt={'ID CAM'}/>
			<Container>
				<S.DescriptionBox>
					<S.Title>TURBOdrill®</S.Title>
					<S.BoxItems>
					<S.SmallImgBox>
						<SmallImgBox>
							<SwiperForDrill/>
						</SmallImgBox>
						<Button>
							<a href={'/turbo-drill.pdf'} target="_blank" rel="noreferrer">
								{t('title3')}
							</a>
						</Button>
					</S.SmallImgBox>
						<S.TextBox>
						<S.Text>
							<div>DIFFERENTLY</div>
							<div>The TURBOdrill® drill is an innovation of the IDI company – IMPLANTS DIFFUSION INTERNATIONAL. It offers a new drilling approach thanks to its secure bladed stopper.</div>
							<div>Control each drilling parameters : safety, irrigation, bone temperature & speed.</div>
							<div>Cylindro-tapered drill, available in 4 lengths : 8, 10, 12 and 15 mm and 3 diameters : 3,6, 4,2 and 5,2 mm.</div>
						</S.Text>
							<S.Text2> The TURBOdrill® is a cylindro-tapered drill with 4 serrated blades. It has a hollowed out stopper with blades acting as a turbine and leading the irrigation liquid along the blades till the bone socket. This intense irrigation phenomenon optimizes the cooling of the drill and thus of the operating site. The TURBOdrill® may be used up to 1 200 rpm with irrigation without bone heating up. The fixed stopper enables a safe drilling even with high speed.  There are two sizes: - TURBOdrill® for the IDCAM . Several studies show that the irrigation, the pressure exerted by the practitioner when drilling, the drilling duration and more generally the bone temperature rise have an impact on the osseointegration of the implant inserted. The TURBOdrill® plays on all these factors in order to optimize the implant success.
							</S.Text2>
							{/*<S.VideoBox>*/}
								{
									width < breakPoint ? <MobileVideos/> : <DesktopVideos/>
								}
							{/*</S.VideoBox>*/}
							</S.TextBox>
						</S.BoxItems>
				</S.DescriptionBox>
			</Container>
		</S.ProductBox>
	);
}

const SmallImgBox = styled.div`
    position: relative;
	max-width: 300px;
  	width: 100%;
    margin-bottom: 100px;
`

const MobileVideos = () => {
	return (
		<iframe width="270" height="151" src="https://www.youtube.com/embed/jm4q7_nbJ88?si=ENsWaubqrkRWZwGc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
	)
}

const DesktopVideos = () => {
	return (
		<iframe width="560" height="315" src="https://www.youtube.com/embed/jm4q7_nbJ88?si=ENsWaubqrkRWZwGc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
	)
}