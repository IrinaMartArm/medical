import React, {useEffect, useState} from 'react';
import id3 from '../../../../images/pictures/id3small.jpg'
import p1 from '../../../../images/pictures/ID3big.webp'
import {S} from './_ProductStyles'
import {Container} from "../../../../components/Container";
import tabl from '../../../../images/pictures/Table.jpg'
import {Button} from "../../../../components/Button";
import {useTranslation} from "react-i18next";

export const Id3 = () => {
	const {t} = useTranslation();
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
					<S.Title>Id3</S.Title>
					<S.BoxItems>
						<S.SmallImgBox>
							<S.SmallImg src={id3} alt={'implant'}/>
						</S.SmallImgBox>
						<S.TextBox>
							<S.Text>
								The ID3 new implant, dedicated to lateral incisors, Ø3mm, Morse Taper. As strong as a
								monobloc, prosthetic flexibility in addition!
								The ID3 will complete your therapeutic arsenal.
								It has a real 2,5° morse taper, perfectly airtight, with 6 cams anchor for flawless
								prosthetic stability.
							</S.Text>
							<div>
								<S.Table src={tabl}/>
							</div>
							<Button>
								<a href={'/ID3.pdf'} target="_blank" rel="noreferrer">
									{t('title3')}
								</a>
							</Button>
							<S.VideoBox>
								{
									width < breakPoint ? <MobileVideos/> : <DesktopVideos/>
								}
							</S.VideoBox>
						</S.TextBox>
					</S.BoxItems>
				</S.DescriptionBox>
			</Container>
		</S.ProductBox>
	);
}

const MobileVideos = () => {
	return (
		<iframe width="360" height="202" src="https://www.youtube.com/embed/bM9X0hoQQbM?si=VLCOCfs9zgk3YzRb"
				title="YouTube video player" frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen></iframe>
	)
}

const DesktopVideos = () => {
	return (
		<iframe width="560" height="315" src="https://www.youtube.com/embed/bM9X0hoQQbM?si=VLCOCfs9zgk3YzRb"
				title="YouTube video player" frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen></iframe>
	)
}