import React, {useEffect, useState} from 'react';
import {Container} from "../../../../components/Container";
import p1 from '../../../../images/pictures/guide-big.png'
import p2 from '../../../../images/pictures/guide-small.png'
import {S} from './_ProductStyles'
import {Button} from "../../../../components/Button";
import {useTranslation} from "react-i18next";

export const SurgicalGuide = () => {
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
					<S.Title>Surgical Guide</S.Title>
					<S.BoxItems>
						<S.SmallImgBox>
							<S.SmallImg src={p2} alt={'implant'}/>
							<Button>
								<a href={'/idguide.pdf'} target="_blank" rel="noreferrer">
									{t('title3')}
								</a>
							</Button>
						</S.SmallImgBox>
						<S.TextBox>
							<S.Text>
								<b>At the forefront of digital dental technologies for years, IDI adds the IDGuide® to its catalog, created in collaboration with experienced surgeons.</b>

								<div><h5>The IDGuide®</h5> guided surgery kit has all the benefits necessary to ensure precision and predictability in guided implant placement:</div>
								<div>• Ease of use.</div>
								<div>• Ergonomics, which allows the practitioner to improve comfort, quality and profitability.</div>
								<div>• Irrigation and cooling of the bone during all drilling stages thanks to the innovative morphology of the drills.</div>
								<div>• Height adjustment and self-locking of the implant holder during implant placement.</div>
								<div><h5>The IDGuide®</h5> offers numerous reproducible surgical possibilities:</div>
								<div>• The One Drill technique (semi-guided surgery).</div>
								<div>• The All Drill technique (complete guided surgery).</div>
								<div>• Dental-supported guides.</div>
								<div>• Guides with mucosal or bone support.</div>
							</S.Text>
							<S.VideoBox>
								{
									width < breakPoint
										? <iframe width="270" height="151" src="https://www.youtube.com/embed/1uriJ9yK4wA?si=7SRFT_ZfBBcgOss_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
										: <iframe width="560" height="315" src="https://www.youtube.com/embed/1uriJ9yK4wA?si=7SRFT_ZfBBcgOss_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
								}
							</S.VideoBox>
						</S.TextBox>
					</S.BoxItems>
				</S.DescriptionBox>
			</Container>
		</S.ProductBox>
	);
}

