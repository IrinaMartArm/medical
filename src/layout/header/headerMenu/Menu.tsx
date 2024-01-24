import React from "react";
import {S} from "./HeaderMenuStyle";
import {useTranslation} from "react-i18next";
import {CatalogButton} from "../../../components/catalogButton/CatalogButton";



const items = [
	{ id: '1', i18nKey: 'title1',  href: "/" },
	{id: '3', i18nKey: 'title3', href: "catalog"},
	{id: '2', i18nKey: 'title2', href: "about"},
	{id: '4', i18nKey: 'title4', href: "contact"},
];

type MenuType = {
	onBtnClick?: () => void
}

export const Menu = (props: MenuType) => {
	const {t} = useTranslation();
	return (
		<ul>
				<S.MenuItem>
					<S.HomeLink to={'/'} className={'St.homeLink'}>
						{t('title1')}
					</S.HomeLink>
				</S.MenuItem>
				<CatalogButton/>
			<S.MenuItem>
				<S.HomeLink to={'/about'} className={'St.homeLink'}>
					{t('title2')}
				</S.HomeLink>
			</S.MenuItem>
			<S.MenuItem>
				<S.HomeLink to={'/contacts'} className={'St.homeLink'}>
					{t('title4')}
				</S.HomeLink>
			</S.MenuItem>
		</ul>
	);
};


{/*<ul>*/}
{/*	/!*<S.MenuItem>*!/*/}
{/*	/!*	<S.HomeLink to={'/'} className={'St.homeLink'}>*!/*/}
{/*	/!*		{t('title1')}*!/*/}
{/*	/!*	</S.HomeLink>*!/*/}
{/*	/!*</S.MenuItem>*!/*/}
{/*	<CatalogButton/>*/}
{/*	{items.map((i, index) => {*/}
{/*		return (*/}
{/*			<S.MenuItem key={index}>*/}
{/*				<S.HomeLink to={i.href} className={'St.homeLink'}>*/}
{/*					{t(i.i18nKey)}*/}
{/*				</S.HomeLink>*/}
{/*				/!*<S.NavLinks*!/*/}
{/*				/!*	onClick={props.onBtnClick}*!/*/}
{/*				/!*	to={i.href}*!/*/}
{/*				/!*	smooth={true}*!/*/}
{/*				/!*	activeClass="active"*!/*/}
{/*				/!*	spy={true}*!/*/}
{/*				/!*>*!/*/}
{/*				/!*	{t(i.i18nKey)}*!/*/}
{/*				/!*</S.NavLinks>*!/*/}
{/*			</S.MenuItem>*/}
{/*		);*/}
{/*	})}*/}
{/*</ul>*/}