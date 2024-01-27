import React, {useEffect, useState} from 'react';
import {Container} from "../../../../components/Container";
import p1 from '../../../../images/pictures/ID_CAM-Big.webp'
import kits1 from '../../../../images/pictures/box1.jpeg'
import kits2 from '../../../../images/pictures/box2.png'
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
					<S.Title>Surgical Kits</S.Title>
					<S.BoxItems>
						<S.SmallImgBox>
							<S.SmallImg src={kits1} alt={'implant'}/>
							<Button>
								<a href={'/idpara.pdf'} target="_blank" rel="noreferrer">
									{t('title3')}
								</a>
							</Button>
						</S.SmallImgBox>
						<S.TextBox>
							<S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, alias, necessitatibus?
								Commodi culpa dignissimos dolor magnam necessitatibus totam? Adipisci architecto
								doloribus ea earum eius error ex facere hic illum impedit iste libero minus nesciunt
								officia placeat praesentium quas quos repellat sint sit tempore vel voluptates,
								voluptatibus. Aut error officia perferendis quaerat voluptates? Excepturi in nisi
								perferendis quis rerum, sequi similique? Ad deserunt, doloremque facere harum ipsum
								nobis reiciendis suscipit tenetur veritatis vitae! Aperiam asperiores, excepturi illum
								laboriosam quae quos vel velit? Cum dolorum excepturi explicabo fugiat impedit incidunt
								ipsa, labore magnam minima numquam quas quibusdam quisquam sunt, tenetur, ut
								veritatis?
							</S.Text>
							{
								width < breakPoint ?
									<iframe width="270" height="151" src="https://www.youtube.com/embed/YiPvuivhQZE?si=5WS-qJ2VIr_xsYiA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
									: <iframe width="560" height="315" src="https://www.youtube.com/embed/YiPvuivhQZE?si=5WS-qJ2VIr_xsYiA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
							}
						</S.TextBox>
					</S.BoxItems>
				</S.DescriptionBox>
			</Container>
			<Container>
				<S.DescriptionBox>
					<S.Title>Surgical Kits</S.Title>
					<S.BoxItems>
						<S.SmallImgBox>
							<S.SmallImg src={kits2} alt={'implant'}/>
							<Button>
								<a href={'/idspassor.pdf'} target="_blank" rel="noreferrer">
									{t('title3')}
								</a>
							</Button>
						</S.SmallImgBox>
						<S.TextBox>
							<S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, alias, necessitatibus?
								Commodi culpa dignissimos dolor magnam necessitatibus totam? Adipisci architecto
								doloribus ea earum eius error ex facere hic illum impedit iste libero minus nesciunt
								officia placeat praesentium quas quos repellat sint sit tempore vel voluptates,
								voluptatibus. Aut error officia perferendis quaerat voluptates? Excepturi in nisi
								perferendis quis rerum, sequi similique? Ad deserunt, doloremque facere harum ipsum
								nobis reiciendis suscipit tenetur veritatis vitae! Aperiam asperiores, excepturi illum
								laboriosam quae quos vel velit? Cum dolorum excepturi explicabo fugiat impedit incidunt
								ipsa, labore magnam minima numquam quas quibusdam quisquam sunt, tenetur, ut
								veritatis?
							</S.Text>
							{
								width < breakPoint ?
									<iframe width="270" height="151" src="https://www.youtube.com/embed/o-6AzDuLMIU?si=FS8Qv3dV8p2vb2x2"
															 title="YouTube video player" frameBorder="0"
															 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
															 allowFullScreen></iframe>
									: <iframe width="560" height="315" src="https://www.youtube.com/embed/o-6AzDuLMIU?si=FS8Qv3dV8p2vb2x2"
											  title="YouTube video player" frameBorder="0"
											  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											  allowFullScreen></iframe>
							}
						</S.TextBox>
					</S.BoxItems>
				</S.DescriptionBox>
			</Container>
		</S.ProductBox>
	);
}


