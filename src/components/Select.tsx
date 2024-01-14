import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export  function SelectSmall() {
	const [lng, setLng] = React.useState('ARM');

	const handleChange = (event: SelectChangeEvent) => {
		setLng(event.target.value);
	};

	return (
		<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
			<InputLabel id="demo-select-small-label">Language</InputLabel>
			<Select
				labelId="demo-select-small-label"
				id="demo-select-small"
				value={lng}
				label="Age"
				onChange={handleChange}
			>
				ARM
				<MenuItem value={'ARM'}>ARM</MenuItem>
				<MenuItem value={'RU'}>RU</MenuItem>
				<MenuItem value={'ENG'}>ENG</MenuItem>
			</Select>
		</FormControl>
	);
}