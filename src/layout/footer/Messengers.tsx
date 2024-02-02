import React from 'react';
import {S} from "./FooterStyle";
import whatsapp from "../../images/pictures/mess/whatsapp.svg"
import viber from "../../images/pictures/mess/viber.svg"
import telegram from "../../images/pictures/mess/telegram.svg"

const socialIconsData = [
	{
		iconId: viber,
		name: 'viber',
		href: "viber://chat?number=%2B091001521"
	},
	{
		iconId: whatsapp,
		name: 'whatsapp',
		href: "whatsapp://send?phone=+37491001521"
		//"https://wa.me/4957777777"
	},
	{
		iconId: telegram,
		name: 'telegram',
		href: "tg://resolve?domain=имя_пользователя"
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
								<a href={i.href}><img src={i.iconId} alt={i.name}/></a>
							</S.SocialLink>
						// </S.SocialItem>
					);
				})}
			</S.SocialList>
			<S.Copyright>© 2024 SARMED</S.Copyright>
		</S.Social>
	);
}

export default Messengers;