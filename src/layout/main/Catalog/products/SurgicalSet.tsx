import React, {useEffect, useState} from 'react';
import {Container} from "../../../../components/Container";
import p1 from '../../../../images/pictures/Drell-Big.jpg'
import p2 from '../../../../images/pictures/turbo-box.png'
import {S} from './_ProductStyles'

export const SurgicalSet = () => {

	const [width, setWidth] = useState(window.innerWidth)
	const breakPoint = 580
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
					<S.Title>Surgery and prosthesis kit for IDcam</S.Title>
					<S.BoxItems>
						<S.SmallImgBox>
							<S.SmallImg src={p2} alt={'implant'}/>
						</S.SmallImgBox>
						<S.TextBox>
							<S.Text>
								<div>COMPOSITION:</div>
								<div>- 16 TURBOdrill® drills</div>
								<div>- 4 RBS drills Ø2 mm</div>
								<div>- 4 "dense bone" drills</div>
								<div>- 1 pointer drill (L15 Ø1.8 with depth marking)</div>
								<div>- 1 Faux-moignon extractor</div>
								<div>- Set of prosthetic and ancillary screwdrivers</div>
							</S.Text>
							<S.VideoBox>
								{
									width < breakPoint
										? <iframe width="270" height="151" src="https://www.youtube.com/embed/2mgn_ouqs7A?si=vugcinm1MQDj0U81" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
										: <iframe width="560" height="315" src="https://www.youtube.com/embed/2mgn_ouqs7A?si=vugcinm1MQDj0U81" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
								}
							</S.VideoBox>
						</S.TextBox>
					</S.BoxItems>
				</S.DescriptionBox>
			</Container>
		</S.ProductBox>
	);
}


