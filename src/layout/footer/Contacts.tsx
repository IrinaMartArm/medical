import styled from "styled-components";

export const Contacts = () => {
	return (
		<ContactsBox>
			<div>
				tel 94736252552552
			</div>
			<div>
				address Erevan
			</div>
			<div>
				som text
			</div>
		</ContactsBox>

	)
}

const ContactsBox = styled.div`
	display: flex;
  flex-direction: column;
  color: white;
  align-items: start;
`