import React, {useState, MouseEvent} from "react";
import {S} from './_CatalogButton'
import {useTranslation} from "react-i18next";


const items = [
	{path: '/ID_CAM', name: 'ID CAM'},
	{path: '/ID3', name: 'ID 3'},
	{path: '/ProstheticElements', name: 'Prosthetic Elements'},
	{path: '/TurboDrill', name: 'TURBODrill'},
	{path: '/SurgicalSet', name: 'Surgical set'},
	{path: '/OsteoSinus', name: 'Osteosinus kit'},
	{path: '/SurgicalGuide', name: 'Surgical Guide'},
	{path: '/SurgicalKits', name: 'Surgical kits'},
]

export const CatalogButton = () => {
	const {t} = useTranslation();
	const [isOpen, setIsOpen] = useState(false)

	const buttonHandler = (e:MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation()
		setIsOpen(!isOpen);
	}
	const onClickOut = () => {
		setTimeout(() => {
			if(isOpen) setIsOpen(false)
		}, 200)

	}

	return (
		<S.CatalogBtnBox onBlur={onClickOut}>
			<S.Button onClick={buttonHandler}>
				{t('title3')}
			</S.Button>
			<S.MenuWrapper isOpen={isOpen}>
				<S.CatalogItems onClick={onClickOut}>
					{items.map((el, index) => {
						return (
							<S.CatalogItem onClick={onClickOut} key={index}>
								<S.CatalogLink to={el.path}>
									{el.name}
								</S.CatalogLink>
							</S.CatalogItem>
						)
					})}
					{/*<S.CatalogItem onClick={onClickOut}>*/}
					{/*	<S.CatalogLink to={'/ID_CAM'}>*/}
					{/*		ID CAM*/}
					{/*	</S.CatalogLink>*/}
					{/*</S.CatalogItem>*/}
					{/*<S.CatalogItem onClick={onClickOut}>*/}
					{/*	<S.CatalogLink to={'/ID3'}>*/}
					{/*		ID 3*/}
					{/*	</S.CatalogLink>*/}
					{/*</S.CatalogItem>*/}
				</S.CatalogItems>
			</S.MenuWrapper>
		</S.CatalogBtnBox>
	)
}
