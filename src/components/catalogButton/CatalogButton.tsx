import React, {useState, MouseEvent} from "react";
import {S} from './_CatalogButton'
import {useTranslation} from "react-i18next";


export const CatalogButton = () => {
	const {t} = useTranslation();
	const [isOpen, setIsOpen] = useState(false)
	const onBtnClick = () => {
		setIsOpen(!isOpen);
	};

	const buttonHandler = (e:MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation()
		setIsOpen(!isOpen);
	}

	return (
		<S.CatalogBtnBox onBlur={onBtnClick}>
			<S.Button onClick={buttonHandler}>
				{t('title3')}
			</S.Button>
			<S.MenuWrapper isOpen={isOpen}>
				<S.CatalogItems onClick={onBtnClick}>
					<S.CatalogItem onClick={() => {
						setIsOpen(false)}}>
						<S.CatalogLink to={'/ID_CAM'}>
							ID CAM
						</S.CatalogLink>
					</S.CatalogItem>
					<S.CatalogItem>
						<S.CatalogLink to={'/ID3'}>
							ID 3
						</S.CatalogLink>
					</S.CatalogItem>
				</S.CatalogItems>
			</S.MenuWrapper>
		</S.CatalogBtnBox>
	)
}
