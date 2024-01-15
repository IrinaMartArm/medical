import styled from "styled-components";
import * as React from "react";
import {Icon} from "../../components/icon/Icon";
import {useTranslation} from "react-i18next";

const flag = [
	{
		iconId: "en",
		name: "en"
	},
	{
		iconId: "am",
		name: "am"
	},
	{
		iconId: "ru",
		name: "ru"
	},
];


export const Inform = () => {
	const {i18n} = useTranslation();
	const changeLanguage = (name: string) => {
		i18n.changeLanguage(name)
	}

	return (
		<Info style={{height: '20px',}}>
			{flag.map((el, index) => {
				return (
					<button key={index} onClick={() => changeLanguage(el.name)}>
						<Icon
							iconId={el.iconId}
							width="40px"
							height="33px"
							viewBox={'0 0 40px 35px'}

						/>
					</button>
				)
			})}
		</Info>
	)
}

const Info = styled.div`
  height: 20px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 20px;
  gap: 20px;
	z-index: 99;
`

