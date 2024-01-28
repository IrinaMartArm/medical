import React from 'react';
import {S} from "./FooterStyle";
import {Icon} from "../../components/icon/Icon";
import telegram from "../../images/svg/telegram.svg"

const socialIconsData = [
	{
		iconId: "viber",
	},
	{
		iconId: "whatsapp",
	},
	{
		iconId: "telegram",
	},
];
export const Messengers = () => {
	return (
		<S.Social>
			<S.SocialList>
				{socialIconsData.map((i, index) => {
					return (
						<S.SocialItem key={index}>
							<S.SocialLink>
								<Icon
									iconId={i.iconId}
									width="40px"
									height="40px"
									viewBox={'0 0 40px 40px'}
								/>
							</S.SocialLink>
						</S.SocialItem>
					);
				})}
			</S.SocialList>
			<S.Copyright>© some text</S.Copyright>
		</S.Social>
	);
}

export default Messengers;