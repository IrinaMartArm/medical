import React, {useEffect, useState} from 'react';
import id3 from '../../../../images/pictures/id3small.jpg'
import p1 from '../../../../images/pictures/ID3big.webp'
import {S} from './_ProductStyles'
import {Container} from "../../../../components/Container";
import tabl from '../../../../images/pictures/Table.jpg'
import {Button} from "../../../../components/Button";
import {useTranslation} from "react-i18next";
import styled from "styled-components";

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
							<SmallImg src={id3} alt={'implant'}/>
							<Button>
								<a href={'/ID3.pdf'} target="_blank" rel="noreferrer">
									{t('title3')}
								</a>
							</Button>
						</S.SmallImgBox>
						<S.TextBox>
							<S.Text>
								{t('ID3')}
							</S.Text>
							<div>
								<S.Table src={tabl}/>
							</div>
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
		<iframe width="270" height="151" src="https://www.youtube.com/embed/bM9X0hoQQbM?si=VLCOCfs9zgk3YzRb"
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
const SmallImg = styled.img`
  max-width: 300px;
  width: 100%;
  padding: 100px 0;
`