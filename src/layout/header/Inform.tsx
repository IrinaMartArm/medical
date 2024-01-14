import styled from "styled-components";
import * as React from "react";
import {SelectChangeEvent} from "@mui/material/Select";


export const Inform = () => {
	const [lng, setLng] = React.useState('ARM');

	const handleChange = (event: SelectChangeEvent) => {
		setLng(event.target.value);
	};
	return (

		<Info style={{height: '20px', }}>
			{lng}
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

