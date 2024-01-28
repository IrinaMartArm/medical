import React, {useEffect, useState} from 'react';
import {Container} from "../../../../components/Container";
import p1 from '../../../../images/pictures/ID_CAM-Big.webp'
import kits1 from '../../../../images/pictures/box1.jpeg'
import kits2 from '../../../../images/pictures/box2.png'
import {S} from './_ProductStyles'
import {Button} from "../../../../components/Button";
import {useTranslation} from "react-i18next";
import p0 from "../../../../images/pictures/osteosinus/p1.png";

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
									<div>IDI launched the IDPARA surgical kit, which due to its enormous usefulness will
										be of great value to dentists. It works universally for any implant surgery
										regardless of the brand or type of implant.
									</div>

									<S.Title2>CHARACTERISTICS</S.Title2>
									<div>IDPARA is a set of surgical instruments for applying parallel implants.
										Composed of three elements: a drill with top, parallelism guides and
										parallelizer (articulated instrument).
									</div>
									<div>
										This kit is indicated when there is a need to place parallel implants to
										optimize the life of the prosthesis.
									</div>
								</S.Text>
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
										IDI launched the IDSPASSOR surgical kit, which due to its enormous usefulness will be of great value to dentists. It works universally for any implant surgery regardless of the brand or type of implant.
									</div>

									<S.Title2>CHARACTERISTICS</S.Title2>
									<div>
										The IDSPASSOR is intended to create a surgical pre-drill for implant placement. Resting on the adjacent tooth, the drill allows precise guidance in the mesio-distal direction and perfectly positions the implant in the center of the future prosthetic tooth. avoiding the risk of poor positioning.
									</div>
								</S.Text>
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
							</S.TextBox>
						</S.BoxItems>
					</S.BoxItems>
				</S.DescriptionBox>

			</Container>
		</S.ProductBox>
	);
}




