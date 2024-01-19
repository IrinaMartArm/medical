import React from 'react';
import { S } from "./Header_styles";
import {useTranslation} from "react-i18next";

export const  LngSelect = () => {

	const {i18n} = useTranslation();
	const changeLanguageFn = async (name: string) => {
		await i18n.changeLanguage(name)
	}

	return (
		<S.StyledSelect onChange={(e) => changeLanguageFn(e.currentTarget.value)}>
			<option value={'ru'}>russian</option>
			<option value={'en'}>english</option>
			<option value={'am'}>armenian</option>
		</S.StyledSelect>
	);
}

