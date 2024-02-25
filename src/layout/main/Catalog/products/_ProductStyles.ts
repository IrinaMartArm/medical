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

const DescriptionBox = styled.section`
  text-align: center;
  width: 100%;
  padding: 0 20px 20px;
  margin: 40px auto;
  border-radius: 5px;
  border: 1px solid ${Theme.colors.border};
  background-color: white;
  @media (max-width: 900px) {
    margin: 5px auto;
  }
`

const BoxItems = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 20px;
  @media (max-width: 900px) {
    flex-direction: column;
    margin: -20px auto;
    align-items: center;
  }
`

const SmallImgBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: space-between;
    align-items: start;
	max-width: 500px;
  	width: 100%;
    padding: 15px 0;
`
const SmallImgBox2 = styled.div`
	max-width: 1000px;
  	width: 100%;
    padding: 15px 0;
`

const SmallImg = styled.img`
  max-width: 700px;
  width: 100%;
`
const SmallImg2 = styled.img`
  max-width: 1000px;
  width: 100%;
`

const TextBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px;
  max-width: 800px;
  width: 100%;
  gap: 20px;
`

const Title = styled.h2`
  padding: 35px;
  ${font({weight: 500, fmax: 42, fmin: 24})};
`
const Title2 = styled.div`
  padding: 25px 0;
  ${font({weight: 400, fmax: 28, fmin: 18})};
  @media (max-width: 900px) {
    padding: 5px 0;
  }
`
const Title3 = styled.h4`
  padding: 20px 0;
  ${font({weight: 500, fmax: 32, fmin: 20})};
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: start;
  line-height: 1.4;
  ${font({weight: 400, fmax: 24, fmin: 16})};
  span {
    ${font({weight: 400, fmax: 28, fmin: 20})};
  }
`

const Text2 = styled.div`
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
const ButtonsBox = styled.div`
  display: flex;
  gap: 50px;
`
const Button = styled.button`
  a {
    display: inline-block;
    padding: 8px 50px;
    margin-top: 20px;
    border-radius: 4px;
    ${font({weight: 500, fmax: 24, fmin: 16})};
    color: ${Theme.colors.secondary};
    background-color: transparent;
    border: 2px solid ${Theme.colors.accent};
    //background-color: ${Theme.colors.secondary};
    transition: ${Theme.animations.transition};

    &:hover {
      color: ${Theme.colors.accent};
      border: 2px solid ${Theme.colors.secondary};
      transform: scale(1.01);
    }

    &:active {
      color: ${Theme.colors.primary};
    }
  }
`
const TableBox = styled.div`
  display: flex;
  justify-content: space-between;
`
const TableBoxTitles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-width: 100px;
`
const TableBoxTitle = styled.div`
  ${font({weight: 500, fmax: 24, fmin: 16})};
`
const TablImg = styled.img`
  max-width: 500px;
  width: 100%;
`
const TablImgBox = styled.div`
  max-width: 500px;
  width: 100%;
`
const Sizes = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`
const Size = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
`
export const S = {
  ProductBox, BigImg, SmallImg, TextBox, Text, Title, SmallImgBox, DescriptionBox, Text2, Table, VideoBox, BoxItems, ButtonsBox, Button, Title2, TableBox, TableBoxTitles, TableBoxTitle, TablImg, TablImgBox, Title3, SmallImgBox2, SmallImg2, Sizes, Size
}
