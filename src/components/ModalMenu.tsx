import React, { useState } from 'react';

type DropdownProps = {
	options: string[];
	onSelect: (option: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState<string | null>(null);

	const toggleDropdown = () => setIsOpen(!isOpen);

	const handleOptionClick = (option: string) => {
		setSelectedOption(option);
		onSelect(option);
		setIsOpen(false);
	};

	return (
		<div>
			<button onClick={toggleDropdown}>
				{selectedOption || 'Выберите опцию'}
			</button>
			{isOpen && (
				<ul>
					{options.map((option, index) => (
						<li
							key={index}
							onClick={() => handleOptionClick(option)}
							style={{ cursor: 'pointer' }}
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;


function App() {
	const options = ['Опция 1', 'Опция 2', 'Опция 3'];

	const handleSelect = (option: string) => {
		console.log(`Выбрана ${option}`);
	};

	return (
		<div className="App">
			<h1>Пример выпадающего меню</h1>
			<Dropdown options={options} onSelect={handleSelect} />
		</div>
	);
}