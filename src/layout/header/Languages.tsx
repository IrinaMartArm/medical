import styled from "styled-components";
import * as React from "react";
import ru from '../../images/svg/russian-flag.svg'
import en from '../../images/svg/en-flag.svg'
import am from '../../images/svg/arm-flag.svg'
import {useTranslation} from "react-i18next";


const flag = [
	{
		iconId: 'en',
		name: en
	},
	{
		iconId: 'ru',
		name: ru
	},
	{
		iconId: 'am',
		name: am
	},
];


export const Languages = () => {
	const {i18n} = useTranslation();
	const changeLanguageFn = async (name: string) => {
		await i18n.changeLanguage(name)
	}

	return (
		<Info style={{height: '20px',}}>
			{flag.map((el, index) => {
				return (
					<button key={index} onClick={() => changeLanguageFn(el.iconId)}>
						<img src={el.name} alt={el.iconId} width={40}/>
						{/*<Icon*/}
						{/*	iconId={el.iconId}*/}
						{/*	width="40px"*/}
						{/*	height="33px"*/}
						{/*	viewBox={'0 0 40px 35px'}*/}
						{/*/>*/}
					</button>
				)
			})}
		</Info>
	)
}

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 200px;
  width: 100%;
  gap: 10px;
  z-index: 99;
  padding-bottom: 40px;
`

