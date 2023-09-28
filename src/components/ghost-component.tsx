import React, { useState } from "react";
import { ghosts } from "./ghostsandevidences";

export const GhostsButtons = () => {
	const [buttonStates, setButtonStates] = useState(
		Array(ghosts.length).fill(0)
	);
	const [selectedGhost, setSelectedGhost] = useState(0);

	const toggleStyle = (index) => {
		if (selectedGhost === index) {
			// Clicked the selected ghost again, reset the selection
			setSelectedGhost(-1);
		} else {
			// Clicked a different ghost, update the selection
			setSelectedGhost(index);
		}

		const updatedButtonStates = [...buttonStates];
		updatedButtonStates[index] = updatedButtonStates[index] + 1;
		setButtonStates(updatedButtonStates);
	};

	const getButtonClasses = (index: number) => {
		let newStyle = "border-4 border-transparent rounded";
		const classes = [`hover:bg-blue-900 text-white font-bold  ${newStyle}`];

		if (selectedGhost === index) {
			newStyle = "border-2 border-white rounded-full";
		} else if (buttonStates[index]) {
			newStyle = "line-through";
		} else {
		}

		return classes.join(" ");
	};

	return (
		<div className='grid grid-cols-3 m-4 gap-1 w-1/3'>
			{ghosts.map((ghost, index) => (
				<button
					className={getButtonClasses(index)}
					key={index}
					onClick={() => toggleStyle(index)}>
					{ghost.name}
				</button>
			))}
		</div>
	);
};
