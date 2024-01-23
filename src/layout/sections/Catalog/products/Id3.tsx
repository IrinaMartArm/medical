import React from 'react';
import id3 from '../../../../images/pictures/id3.jpg'
import p1 from '../../../../images/pictures/Screenshot 2024-01-18 at 15.44.32 copy.png'
import {Wrapper} from "../../../../components/Wrapper";
import {S} from './_ProductStyles'


export const Id3 = () => {
	return (
		<S.IdcamBox>
			<S.BigImg src={p1} alt={'ID CAM'}/>
			<Wrapper padding={'40px 20px'} gap={'30px'}>
				<S.SmallImgBox>
					<S.SmallImg src={id3} alt={'implant'}/>
				</S.SmallImgBox>
				<Wrapper direction={'column'} gap={'40px'} padding={'20px'}>
					<S.Title>Id3</S.Title>
					<S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, alias, necessitatibus? Commodi culpa dignissimos dolor magnam necessitatibus totam? Adipisci architecto doloribus ea earum eius error ex facere hic illum impedit iste libero minus nesciunt officia placeat praesentium quas quos repellat sint sit tempore vel voluptates, voluptatibus. Aut error officia perferendis quaerat voluptates? Excepturi in nisi perferendis quis rerum, sequi similique? Ad deserunt, doloremque facere harum ipsum nobis reiciendis suscipit tenetur veritatis vitae! Aperiam asperiores, excepturi illum laboriosam quae quos vel velit? Cum dolorum excepturi explicabo fugiat impedit incidunt ipsa, labore magnam minima numquam quas quibusdam quisquam sunt, tenetur, ut veritatis?</S.Text>
				</Wrapper>
			</Wrapper>
			<div>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/bM9X0hoQQbM?si=VLCOCfs9zgk3YzRb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
			</div>
		</S.IdcamBox>
	);
}

