import {font} from "../../../../style/Common";
import styled from "styled-components";
import {Theme} from "../../../../style/Theme";

const ProductBox = styled.div`
	padding: 20px 0;
`

const BigImg = styled.img`
	width: 100%;
   min-height: 200px;
`

const DescriptionBox = styled.div`
 text-align: center;
  width: 100%;
  padding: 20px;
  margin: 40px auto;
  border-radius: 5px;
  border: 1px solid ${Theme.colors.border};
  background-color: white;
`

const BoxItems = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 900px) {
    flex-direction: column;
    margin: -20px auto;
    align-items: center;
  }
`

const SmallImgBox = styled.div`
    position: relative;
	max-width: 300px;
  	width: 100%;
    //margin: 100px 0;
`

const SmallImg = styled.img`
  max-width: 300px;
  width: 100%;
`

const TextBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 30px;
  max-width: 800px;
  width: 100%;
  gap: 20px;
`

const Title = styled.h2`
  padding: 15px;
  ${font({weight: 500, fmax: 42, fmin: 24})};
`

const Text = styled.div`
  text-align: start;
  line-height: 1.4;
  ${font({weight: 400, fmax: 24, fmin: 16})};
`

const Text2 = styled.div`
  padding-top: 30px;
  text-align: start;
  ${font({weight: 400, fmax: 24, fmin: 16})};
  
`

const Table = styled.img`
  max-width: 500px;
  width: 100%;
  border: 2px solid ${Theme.colors.border};
`

const VideoBox = styled.div`
  max-width: 600px;
  width: 100%;
  margin-top: 50px;
`

export const S = {
  ProductBox, BigImg, SmallImg, TextBox, Text, Title, SmallImgBox, DescriptionBox, Text2, Table, VideoBox, BoxItems
}
