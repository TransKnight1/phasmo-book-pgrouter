import React, { useState } from "react";
import { ghosts } from "./GhostsAndEvidences";

export const GhostCheckboxes = () => {
	const [selectedEvidence, setSelectedEvidence] = useState([]);

	const toggleEvidence = (evidence) => {
		if (selectedEvidence.includes(evidence)) {
			setSelectedEvidence(selectedEvidence.filter((item) => item !== evidence));
		} else {
			setSelectedEvidence([...selectedEvidence, evidence]);
		}
	};

	// Collect all unique evidence types from the ghosts data
	const allEvidenceTypes = Array.from(
		new Set(ghosts.flatMap((ghost) => ghost.evidences))
	);

	return (
		<div className='grid grid-cols-2 m-4 gap-1 w-5/12 font-bold border-y-2 my-4'>
			{allEvidenceTypes.map((evidence, index) => (
				<div
					key={index}
					className='text-white text-base flex items-center justify-start'>
					<input
						type='checkbox'
						id={`checkbox-${index}`}
						className={`w-32 h-6 border-black ${
							selectedEvidence.includes(evidence) ? "bg-blue-600" : ""
						}`}
						onClick={() => toggleEvidence(evidence)}
					/>
					<label htmlFor={`checkbox-${index}`}>{evidence}</label>
				</div>
			))}
		</div>
	);
};
