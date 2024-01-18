import React from 'react';
import styled from "styled-components";
import {Theme} from "../../style/Theme";
import {useTranslation} from "react-i18next";

export const  LngSelect = () => {

	const {i18n} = useTranslation();
	const changeLanguageFn = async (name: string) => {
		await i18n.changeLanguage(name)
	}

	return (
		<StyledSelect onChange={(e) => changeLanguageFn(e.currentTarget.value)}>
			<option value={'ru'}>russian</option>
			<option value={'en'}>english</option>
			<option value={'am'}>armenian</option>
		</StyledSelect>
	);
}

const StyledSelect = styled.select`
	background-color: ${Theme.colors.secondary};
  color: ${Theme.colors.primary};
  padding: 5px;
`