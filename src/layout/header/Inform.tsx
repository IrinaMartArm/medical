import styled from "styled-components";
import {SelectSmall} from "../../components/Select";

export const Inform = () => {
	return (
		<Info style={{height: '20px', }}>
			<SelectSmall />
		</Info>
	)
}

const Info = styled.div`
	height: 20px;
  	display: flex;
  justify-content: end;
  padding-right: 20px;
  gap: 20px;
  
`

