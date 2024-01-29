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
							<div>{t('DIFFERENTLY')}</div>
							<div>{t("TD1")}</div>
							<div>{t("TD2")}</div>
							<div>{t("TD3")}</div>
						</S.Text>
							<S.Text2>{t("TD4")}</S.Text2>
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