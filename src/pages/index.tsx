import { useState } from "react";
import { GhostsButtons } from "@/components/GhostButtons";
import { GhostCheckboxes } from "@/components/GhostCheckboxes";
export default function Home() {
	const [selectedEvidence, setSelectedEvidence] = useState([]);

	return (
		<main>
			<div>
				<GhostCheckboxes
					selectedEvidence={selectedEvidence}
					setSelectedEvidence={setSelectedEvidence}
				/>
			</div>
			<div>
				<GhostsButtons selectedEvidence={selectedEvidence} />
			</div>
		</main>
	);
}
