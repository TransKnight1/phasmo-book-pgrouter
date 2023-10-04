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
		<div className='border-y-2 flex justify-center'>
			<div className='grid grid-cols-2 gap-4   font-bold my-8'>
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
						<label className='-ml-10' htmlFor={`checkbox-${index}`}>
							{evidence}
						</label>
					</div>
				))}
			</div>
		</div>
	);
};
