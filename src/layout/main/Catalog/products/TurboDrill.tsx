import React, {useEffect, useState} from 'react';
import {Container} from "../../../../components/Container";
import p1 from '../../../../images/pictures/Drell-Big.png'
import {Wrapper} from "../../../../components/Wrapper";
import p2 from '../../../../images/pictures/Drill.jpg'
import p3 from '../../../../images/pictures/Drill2.png'
import p4 from '../../../../images/pictures/Drill3.png'
import {S} from './_ProductStyles'
import {Button} from "../../../../components/Button";
import {useTranslation} from "react-i18next";
import {Video} from "../../about/Video";


export const TurboDrill = () => {
	const {t} = useTranslation();
	const [width, setWidth] = useState(window.innerWidth)
	const breakPoint = 540
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth)
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, []);


	return (
		<S.IdcamBox>
			<S.BigImg src={p1} alt={'ID CAM'}/>
			<Container>
				<S.DescriptionBox>
					<S.SmallImgBox>
						<S.SmallImg src={p2} alt={'implant'}/>
						<S.SmallImg src={p4} alt={'implant'}/>
						<S.SmallImg src={p3} alt={'implant'}/>
					</S.SmallImgBox>
					<Wrapper direction={'column'} gap={'20px'} padding={'30px'}>
						<S.Title>TURBOdrill®</S.Title>
						<S.Text>
							<div>DIFFERENTLY</div>
							<div>The TURBOdrill® drill is an innovation of the IDI company – IMPLANTS DIFFUSION INTERNATIONAL. It offers a new drilling approach thanks to its secure bladed stopper.</div>
							<div>Control each drilling parameters : safety, irrigation, bone temperature & speed.</div>
							<div>Cylindro-tapered drill, available in 4 lengths : 8, 10, 12 and 15 mm and 3 diameters : 3,6, 4,2 and 5,2 mm.</div>
							<S.Text2> The TURBOdrill® is a cylindro-tapered drill with 4 serrated blades. It has a hollowed out stopper with blades acting as a turbine and leading the irrigation liquid along the blades till the bone socket. This intense irrigation phenomenon optimizes the cooling of the drill and thus of the operating site. The TURBOdrill® may be used up to 1 200 rpm with irrigation without bone heating up. The fixed stopper enables a safe drilling even with high speed.  There are two sizes: - TURBOdrill® for the IDCAM . Several studies show that the irrigation, the pressure exerted by the practitioner when drilling, the drilling duration and more generally the bone temperature rise have an impact on the osseointegration of the implant inserted. The TURBOdrill® plays on all these factors in order to optimize the implant success.</S.Text2>
							<Button>
								<a href={'/IDCAM.pdf'} target="_blank" rel="noreferrer">
									{t('title3')}
								</a>
							</Button>
							<S.VideoBox>
								{
									width < breakPoint ? <MobileVideos/> : <DesktopVideos/>
								}
							</S.VideoBox>
						</S.Text>
					</Wrapper>
				</S.DescriptionBox>
			</Container>
		</S.IdcamBox>
	);
}


const MobileVideos = () => {
	return (
		<iframe width="360" height="202" src="https://www.youtube.com/embed/jm4q7_nbJ88?si=ENsWaubqrkRWZwGc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
	)
}

const DesktopVideos = () => {
	return (
		<iframe width="560" height="315" src="https://www.youtube.com/embed/jm4q7_nbJ88?si=ENsWaubqrkRWZwGc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
	)
}