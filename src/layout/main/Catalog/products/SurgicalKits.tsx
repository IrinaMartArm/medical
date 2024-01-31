import React, {useEffect, useState} from 'react';
import {Container} from "../../../../components/Container";
import p1 from '../../../../images/pictures/ID_CAM-Big.webp'
import kits1 from '../../../../images/pictures/box1.jpeg'
import kits2 from '../../../../images/pictures/box2.png'
import kits3 from '../../../../images/pictures/ID-PRO.jpg'
import {S} from './_ProductStyles'
import {Button} from "../../../../components/Button";
import {useTranslation} from "react-i18next";

export const SurgicalKits = () => {
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
					<S.BoxItems>
						<S.SmallImgBox>
							<S.Title3>ID-PARA</S.Title3>
							<S.SmallImg src={kits1} alt={'implant'}/>
							<Button>
								<a href={'/idpara.pdf'} target="_blank" rel="noreferrer">
									{t('title3')}
								</a>
							</Button>
						</S.SmallImgBox>
						<S.BoxItems>
							<S.TextBox>
								<S.Text>
									<S.Title2>ABOUT</S.Title2>
									<div>
										{t('ID-PARA_ABOUT')}
									</div>

									<S.Title2>{t('SK-title2')}</S.Title2>
									<div>
										{t('ID-PARA_CHARACTERISTICS')}
									</div>
								</S.Text>
								<S.VideoBox>
								{
									width < breakPoint ?
										<iframe width="270" height="151"
												src="https://www.youtube.com/embed/YiPvuivhQZE?si=5WS-qJ2VIr_xsYiA"
												title="YouTube video player" frameBorder="0"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
												allowFullScreen></iframe>
										: <iframe width="560" height="315"
												  src="https://www.youtube.com/embed/YiPvuivhQZE?si=5WS-qJ2VIr_xsYiA"
												  title="YouTube video player" frameBorder="0"
												  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
												  allowFullScreen></iframe>
								}
									</S.VideoBox>
							</S.TextBox>
						</S.BoxItems>
					</S.BoxItems>
				</S.DescriptionBox>

			</Container>
			<Container>
				<S.DescriptionBox>
					<S.BoxItems>
						<S.SmallImgBox>
							<S.Title3>ID-SPASSOR</S.Title3>
							<S.SmallImg src={kits2} alt={'implant'}/>
							<Button>
								<a href={'/idspassor.pdf'} target="_blank" rel="noreferrer">
									{t('title3')}
								</a>
							</Button>
						</S.SmallImgBox>
						<S.BoxItems>
							<S.TextBox>
								<S.Text>
									<S.Title2>ABOUT</S.Title2>
									<div>
										{t('ID-SPASSOR_ABOUT')}
									</div>

									<S.Title2>{t('SK-title2')}</S.Title2>
									<div>
										{t('ID-SPASSOR_CHARACTERISTICS')}
									</div>
								</S.Text>
								<S.VideoBox>
								{
									width < breakPoint ?
										<iframe width="270" height="151"
												src="https://www.youtube.com/embed/o-6AzDuLMIU?si=FS8Qv3dV8p2vb2x2"
												title="YouTube video player" frameBorder="0"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
												allowFullScreen></iframe>
										: <iframe width="560" height="315"
												  src="https://www.youtube.com/embed/o-6AzDuLMIU?si=FS8Qv3dV8p2vb2x2"
												  title="YouTube video player" frameBorder="0"
												  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
												  allowFullScreen></iframe>
								}
									</S.VideoBox>
							</S.TextBox>
						</S.BoxItems>
					</S.BoxItems>
				</S.DescriptionBox>
			</Container>
			<Container>
				<S.DescriptionBox>
					<S.BoxItems>
						<S.SmallImgBox>
							<S.Title3>ID-PRO</S.Title3>
							<S.SmallImg src={kits3} alt={'implant'}/>
							<Button>
								<a href={'/idspassor.pdf'} target="_blank" rel="noreferrer">
									{t('title3')}
								</a>
							</Button>
						</S.SmallImgBox>
						<S.BoxItems>
							<S.TextBox>
								<S.Text>
									<S.Title2>ABOUT</S.Title2>
									<div>To simplify the prosthesis.</div>
									<div>This box brings together all the essential tools for the IDI prosthesis.</div>
									<div>The ID-PRO Box contains:</div>
									<div>- Short Manual Screwdriver, Ref. 0014</div>
									<div>- Long Manual Screwdriver, Ref. 0114</div>
									<div>- Long Contra-Angle Screwdriver, Ref. 1114</div>
									<div>- Short Contra-Angle Screwdriver, Ref. 1014</div>
									<div>- Extension, Ref. 406</div>
									<div>- False Stump Extractor Screwdriver, Ref. 0148</div>
									<div>- Torque wrench</div>
								</S.Text>
								<S.VideoBox>
								{/*{*/}
								{/*	width < breakPoint ?*/}
								{/*		<iframe width="270" height="151" src="https://www.youtube.com/embed/1uriJ9yK4wA?si=lOhn_TatP7VnmpMQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>*/}
								{/*		: <iframe width="560" height="315" src="https://www.youtube.com/embed/1uriJ9yK4wA?si=GIMYEpz5E-G1xz51" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>*/}
								{/*}*/}
									</S.VideoBox>
							</S.TextBox>
						</S.BoxItems>
					</S.BoxItems>
				</S.DescriptionBox>

			</Container>
		</S.ProductBox>
	);
}




