import React from "react";
import {S} from "./HeaderMenuStyle";
import {useTranslation} from "react-i18next";
import {CatalogButton} from "../../../components/catalogButton/CatalogButton";


// const items = [
// 	{id: '1', i18nKey: 'title1', href: "/"},
// 	{id: '3', i18nKey: 'title3', href: "catalog"},
// 	{id: '2', i18nKey: 'title2', href: "about"},
// 	{id: '4', i18nKey: 'title4', href: "contact"},
// ];

type MenuType = {
	onBtnClick?: () => void
}

export const Menu = (props: MenuType) => {
	const {t} = useTranslation();

	return (
		<ul onClick={props.onBtnClick}>
			<S.MenuItem>
				<S.HomeLink to={'/'}>
					{t('title1')}
				</S.HomeLink>
			</S.MenuItem>
			<CatalogButton/>
			{/*<S.MenuItem>*/}
			{/*	<S.HomeLink to={'/about'}>*/}
			{/*		{t('title2')}*/}
			{/*	</S.HomeLink>*/}
			{/*</S.MenuItem>*/}
			{/*<S.MenuItem>*/}
			{/*	<S.HomeLink to={'/contacts'}>*/}
			{/*		{t('title4')}*/}
			{/*	</S.HomeLink>*/}
			{/*</S.MenuItem>*/}
		</ul>
	);
};

