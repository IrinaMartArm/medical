import {S} from "./FooterStyle";
import loc from "../../images/svg/loc.svg"
import tel from "../../images/svg/tel.svg"
import mail from "../../images/svg/Messages.svg"

const data = [
	{
		img: loc,
		name: 'address',
		text: 'Address: Pushkin 15a, Yerevan, Armenia'
	},
	{
		img: mail,
		name: 'email',
		text: 'Email: sarmed@gmail.com'
	},
]

export const Contacts = () => {
	return (
		<S.ContactsBox>
			{data.map((el) => {
				return (
					<S.Contact>
						<img src={el.img} alt={el.name}/>
						<p>{el.text}</p>
					</S.Contact>)
			})}
			<S.Contact2 href={'+374 91 001 521'}>
				<img src={tel} alt={''}/>
				<p>Tel: +374 91 001 521</p>
			</S.Contact2>)
		</S.ContactsBox>
	)
}

