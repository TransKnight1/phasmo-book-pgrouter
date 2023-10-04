import React, { useState } from "react";
import { ghosts } from "./GhostsAndEvidences";

export const GhostsButtons = ({ selectedEvidence }) => {
	// Function to check if a ghost has all the selected evidence
	const hasSelectedEvidence = (ghost) =>
		selectedEvidence.every((evidence) => ghost.evidences.includes(evidence));

	const [buttonState, setButtonState] = useState(Array(ghosts.length).fill(0));

	const toggleStyle = (index: number) => {
		setButtonState((prevButtonState) => {
			const updatedButtonState = [...prevButtonState];

			if (updatedButtonState[index] === 0) {
				// If the ghost is in the initial state, select it
				updatedButtonState[index] = 1; // Set to selected state
			} else if (updatedButtonState[index] === 1) {
				// If the ghost is selected, mark it as not selected (return to initial state)
				updatedButtonState[index] = 2; // Set to line-through state
			} else if (updatedButtonState[index] === 2) {
				// If the ghost is in the line-through state, return it to the initial state
				updatedButtonState[index] = 0; // Set to initial state
			}

			// Ensure only one ghost can be in the "selected" state at a time
			for (let i = 0; i < updatedButtonState.length; i++) {
				if (i !== index && updatedButtonState[i] === 1) {
					updatedButtonState[i] = 0; // Deselect other selected ghosts
				}
			}

			return updatedButtonState;
		});
	};

	console.log(buttonState);

	const getButtonClass = (index: number) => {
		let classes =
			"hover:bg-blue-900 text-white font-bold border-4 border-transparent rounded";

		if (buttonState[index] === 1) {
			classes =
				"hover:bg-blue-900 text-white font-bold border-2 border-white rounded-full";
		} else if (buttonState[index] === 2) {
			classes = "hover:bg-blue-900 text-white font-bold line-through";
		}

		return classes;
	};

	return (
		<div className='flex justify-center'>
			<div className='grid grid-cols-3 m-4 gap-1 w-5/12'>
				{ghosts.map((ghost, index) => (
					<button
						className={`${
							hasSelectedEvidence(ghost)
								? getButtonClass(index)
								: "text-opacity-10"
						}`}
						key={index}
						onClick={() => toggleStyle(index)}
						disabled={!hasSelectedEvidence(ghost)}>
						{ghost.name}
					</button>
				))}
			</div>
		</div>
	);
};
