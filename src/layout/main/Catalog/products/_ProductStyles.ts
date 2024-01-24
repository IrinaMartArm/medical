import {font} from "../../../../style/Common";
import styled from "styled-components";
import {Theme} from "../../../../style/Theme";

const IdcamBox = styled.div`
	padding: 20px 0;
`
const DescriptionBox = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  margin: 40px auto;
  border: 1px solid ${Theme.colors.border};
  background-color: white;
`
const BigImg = styled.img`
	width: 100%;
   min-height: 200px;
`
const SmallImgBox = styled.div`
	max-width: 300px;
  	width: 100%;
`
const SmallImg = styled.img`
  width: 100%;
`
const TextBox = styled.div`
  display: flex;
  width: 100%;
`
const VideoBox = styled.div`
  margin: 0 10px;
`
const Title = styled.h2`
  ${font({weight: 500, fmax: 50, fmin: 24})};
`
const Text = styled.p`
  ${font({weight: 400, fmax: 24, fmin: 16})};
`

export const S = {
  IdcamBox, BigImg, SmallImg, TextBox, Text, Title, SmallImgBox, DescriptionBox
}