import React from 'react';
import styled from "styled-components";
import img from "../../images/svg/404.svg";

export const NotFoundPage = () => {


	return (
		<Box>
			<ImgBox>
				<img src={img} alt={'PAGE NOT FOUND'}/>
			</ImgBox>
		</Box>
	);
}

const Box = styled.div`
  max-width: 1900px;
  width: 100%;
  height: 100vh;
`
const ImgBox = styled.div`
  max-width: 1900px;
  width: 100%;
  padding-top: 50px;
`
