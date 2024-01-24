import React, {useEffect, useState} from 'react';
import id3 from '../../../../images/pictures/id3.jpg'
import p1 from '../../../../images/pictures/Screenshot 2024-01-18 at 15.44.32 copy.png'
import {Wrapper} from "../../../../components/Wrapper";
import {S} from './_ProductStyles'
import {Container} from "../../../../components/Container";


export const Id3 = () => {
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
						<S.SmallImg src={id3} alt={'implant'}/>
					</S.SmallImgBox>
					<Wrapper direction={'column'} gap={'10px'} padding={'30px'}>
						<S.Title>Id3</S.Title>
						<S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, alias, necessitatibus?
							Commodi culpa dignissimos dolor magnam necessitatibus totam? Adipisci architecto doloribus
							ea earum eius error ex facere hic illum impedit iste libero minus nesciunt officia placeat
							praesentium quas quos repellat sint sit tempore vel voluptates, voluptatibus. Aut error
							officia perferendis quaerat voluptates? Excepturi in nisi perferendis quis rerum, sequi
							similique? Ad deserunt, doloremque facere harum ipsum nobis reiciendis suscipit tenetur
							veritatis vitae! Aperiam asperiores, excepturi illum laboriosam quae quos vel velit? Cum
							dolorum excepturi explicabo fugiat impedit incidunt ipsa, labore magnam minima numquam quas
							quibusdam quisquam sunt, tenetur, ut veritatis?</S.Text>
					</Wrapper>
				</S.DescriptionBox>
				<div>
					{
						width < breakPoint ? <MobileVideos/> : <DesktopVideos/>
					}
				</div>
			</Container>
		</S.IdcamBox>
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