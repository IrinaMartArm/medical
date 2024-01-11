import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export  function SelectSmall() {
	const [age, setAge] = React.useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value);
	};

	return (
		<FormControl sx={{ m: 1, minWidth: 40, height: 10 }} size="small" color={'secondary'}>
			<InputLabel id="demo-select-small-label">language</InputLabel>
			<Select
				labelId="demo-select-small-label"
				id="demo-select-small"
				value={age}
				label="Age"
				onChange={handleChange}
			>
				<MenuItem value="">
					<em>None</em>
				</MenuItem>
				<MenuItem value={10}>ARM</MenuItem>
				<MenuItem value={20}>RU</MenuItem>
				<MenuItem value={30}>ENG</MenuItem>
			</Select>
		</FormControl>
	);
}