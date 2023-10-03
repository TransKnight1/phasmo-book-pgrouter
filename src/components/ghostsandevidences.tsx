const Ghosts = {
	Spirit: ["EMF5", "Spirit Box", "GhostWriting"],
	Wraith: ["D.O.T.S", "UltraViolet", "Freezing"],
	Phantom: ["Ghost Orb", "D.O.T.S", "Freezing"],
	Poltergeist: ["Spirit Box", "UltraViolet", "GhostWriting"],
	Banshee: ["EMF5", "UltraViolet", "Freezing"],
	Jinn: ["EMF5", "Ghost Orb", "Spirit Box"],
	Mare: ["Spirit Box", "Freezing", "Ghost Orb"],
	Revenant: ["EMF5", "GhostWriting", "UltraViolet"],
	Shade: ["EMF5", "Ghost Orb", "GhostWriting"],
	Demon: ["GhostWriting", "Freezing", "UltraViolet"],
	Yurei: ["Ghost Orb", "Freezing", "D.O.T.S"],
	Oni: ["EMF5", "Freezing", "D.O.T.S"],
	Youkai: ["EMF5", "GhostWriting", "D.O.T.S"],
	Hantu: ["EMF5", "Ghost Orb", "Freezing"],
	Goryo: ["Spirit Box", "Ghost Orb", "GhostWriting"],
	Myling: ["EMF5", "UltraViolet", "GhostWriting"],
	Onryo: ["Spirit Box", "Ghost Orb", "GhostWriting"],
	TheTwins: ["UltraViolet", "Freezing", "GhostWriting"],
	Raiju: ["EMF5", "Ghost Orb", "GhostWriting"],
	Obake: ["GhostWriting", "UltraViolet", "Ghost Orb"],
	TheMimic: ["Ghost Orb", "Freezing", "GhostWriting"],
	Moroi: ["EMF5", "UltraViolet", "Freezing"],
	Deogen: ["EMF5", "Ghost Orb", "GhostWriting"],
	Thaye: ["Ghost Orb", "GhostWriting", "UltraViolet"],
};

type GhostName = keyof typeof Ghosts;
type EvidenceType = (typeof Ghosts)[GhostName];

const ghosts: { name: GhostName; evidences: EvidenceType }[] = Object.entries(
	Ghosts
).map(([name, evidences]) => ({
	name: name as GhostName,
	evidences: evidences as EvidenceType,
}));

export { ghosts };
