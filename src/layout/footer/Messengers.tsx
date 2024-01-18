import React from 'react';
import {S} from "./FooterStyle";
import {Icon} from "../../components/icon/Icon";

const socialIconsData = [
	{
		iconId: "viber",
	},
	{
		iconId: "whatsapp",
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
									width="35px"
									height="35px"
									viewBox={'0 0 35px 35px'}
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