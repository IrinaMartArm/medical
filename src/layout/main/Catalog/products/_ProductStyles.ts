import {font} from "../../../../style/Common";
import styled from "styled-components";
import {Theme} from "../../../../style/Theme";

const IdcamBox = styled.div`
	padding: 20px 0;
`
const DescriptionBox = styled.div`
  display: flex;
  //flex-wrap: wrap;
  flex-direction: row;
  padding: 20px;
  margin: 40px auto;
  border-radius: 5px;
  border: 1px solid ${Theme.colors.border};
  background-color: white;
  @media (max-width: 900px) {
    flex-direction: column;
    margin: -20px auto;
  }
`
const BigImg = styled.img`
	width: 100%;
   min-height: 200px;
`
const SmallImgBox = styled.div`
	max-width: 300px;
  	width: 100%;
    margin: 100px auto;
`
const SmallImg = styled.img`
  width: 100%;
`
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
  gap: 20px;
  //border: 1px solid red;
`

const Title = styled.h2`
  //font-family: Alegreya Sans SC, sans-serif;
  ${font({weight: 500, fmax: 42, fmin: 24})};
`
const Text = styled.div`
  padding: 20px;
  text-align: start;
  //border: 1px solid red;
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
  margin: 50px 0;
`

export const S = {
  IdcamBox, BigImg, SmallImg, TextBox, Text, Title, SmallImgBox, DescriptionBox, Text2, Table, VideoBox
}


// const Table = styled.img`
//   max-width: 500px;
//   width: 100%;
// `