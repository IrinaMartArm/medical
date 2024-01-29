import React from 'react';
import {S} from "./FooterStyle";
import {Icon} from "../../components/icon/Icon";
import whatsapp from "../../images/pictures/mess/whatsapp.svg"
import viber from "../../images/pictures/mess/viber.svg"
import telegram from "../../images/pictures/mess/telegram.svg"

const socialIconsData = [
	{
		iconId: viber,
		name: 'viber'
	},
	{
		iconId: whatsapp,
		name: 'whatsapp'
	},
	{
		iconId: telegram,
		name: 'telegram'
	},
];
export const Messengers = () => {
	return (
		<S.Social>
			<S.SocialList>
				{socialIconsData.map((i, index) => {
					return (
						// <S.SocialItem key={index}>
							<S.SocialLink key={index}>
								<img src={i.iconId} alt={i.name}/>
							</S.SocialLink>
						// </S.SocialItem>
					);
				})}
			</S.SocialList>
			<S.Copyright>© some text</S.Copyright>
		</S.Social>
	);
}

export default Messengers;