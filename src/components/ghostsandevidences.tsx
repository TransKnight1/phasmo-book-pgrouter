enum GhostName {
	Spirit = "Spirit",
	Wraith = "Wraith",
	Phantom = "Phantom",
	Poltergeist = "Poltergeist",
	Banshee = "Banshee",
	Jinn = "Jinn",
	Mare = "Mare",
	Revenant = "Revenant",
	Shade = "Shade",
	Demon = "Demon",
	Yurei = "Yurei",
	Oni = "Oni",
	Youkai = "Youkai",
	Hantu = "Hantu",
	Goryo = "Goryo",
	Myling = "Myling",
	Onryo = "Onryo",
	TheTwins = "The Twins",
	Raiju = "Raiju",
	Obake = "Obake",
	TheMimic = "The Mimic",
	Moroi = "Moroi",
	Deogen = "Deogen",
	Thaye = "Thaye",
}

enum EvidenceType {
	EMF5 = "EMF5",
	Orb = "Ghost Orb",
	SpiritBox = "Spirit Box",
	Freezing = "Freezing",
	UltraViolet = "UltraViolet",
	Writing = "GhostWriting",
	DOTS = "D.O.T.S",
}

type Ghost = {
	name: GhostName;
	evidences: EvidenceType[];
};

const ghosts: Ghost[] = [
	{
		name: GhostName.Spirit,
		evidences: [
			EvidenceType.EMF5,
			EvidenceType.SpiritBox,
			EvidenceType.Writing,
		],
	},
	{
		name: GhostName.Wraith,
		evidences: [
			EvidenceType.DOTS,
			EvidenceType.UltraViolet,
			EvidenceType.Freezing,
		],
	},
	{
		name: GhostName.Phantom,
		evidences: [EvidenceType.Orb, EvidenceType.DOTS, EvidenceType.Freezing],
	},
	{
		name: GhostName.Poltergeist,
		evidences: [
			EvidenceType.SpiritBox,
			EvidenceType.UltraViolet,
			EvidenceType.Writing,
		],
	},
	{
		name: GhostName.Banshee,
		evidences: [
			EvidenceType.EMF5,
			EvidenceType.UltraViolet,
			EvidenceType.Freezing,
		],
	},
	{
		name: GhostName.Jinn,
		evidences: [EvidenceType.EMF5, EvidenceType.Orb, EvidenceType.SpiritBox],
	},
	{
		name: GhostName.Mare,
		evidences: [
			EvidenceType.SpiritBox,
			EvidenceType.Freezing,
			EvidenceType.Orb,
		],
	},
	{
		name: GhostName.Revenant,
		evidences: [
			EvidenceType.EMF5,
			EvidenceType.Writing,
			EvidenceType.UltraViolet,
		],
	},
	{
		name: GhostName.Shade,
		evidences: [EvidenceType.EMF5, EvidenceType.Orb, EvidenceType.Writing],
	},
	{
		name: GhostName.Demon,
		evidences: [
			EvidenceType.Writing,
			EvidenceType.Freezing,
			EvidenceType.UltraViolet,
		],
	},
	{
		name: GhostName.Yurei,
		evidences: [EvidenceType.Orb, EvidenceType.Freezing, EvidenceType.DOTS],
	},
	{
		name: GhostName.Oni,
		evidences: [EvidenceType.EMF5, EvidenceType.Freezing, EvidenceType.DOTS],
	},
	{
		name: GhostName.Youkai,
		evidences: [EvidenceType.EMF5, EvidenceType.Writing, EvidenceType.DOTS],
	},
	{
		name: GhostName.Hantu,
		evidences: [EvidenceType.EMF5, EvidenceType.Orb, EvidenceType.Freezing],
	},
	{
		name: GhostName.Goryo,
		evidences: [EvidenceType.SpiritBox, EvidenceType.Orb, EvidenceType.Writing],
	},
	{
		name: GhostName.Myling,
		evidences: [
			EvidenceType.EMF5,
			EvidenceType.UltraViolet,
			EvidenceType.Writing,
		],
	},
	{
		name: GhostName.Onryo,
		evidences: [EvidenceType.SpiritBox, EvidenceType.Orb, EvidenceType.Writing],
	},
	{
		name: GhostName.TheTwins,
		evidences: [
			EvidenceType.UltraViolet,
			EvidenceType.Freezing,
			EvidenceType.Writing,
		],
	},
	{
		name: GhostName.Raiju,
		evidences: [EvidenceType.EMF5, EvidenceType.Orb, EvidenceType.Writing],
	},
	{
		name: GhostName.Obake,
		evidences: [
			EvidenceType.Writing,
			EvidenceType.UltraViolet,
			EvidenceType.Orb,
		],
	},
	{
		name: GhostName.TheMimic,
		evidences: [EvidenceType.Orb, EvidenceType.Freezing, EvidenceType.Writing],
	},
	{
		name: GhostName.Moroi,
		evidences: [
			EvidenceType.EMF5,
			EvidenceType.UltraViolet,
			EvidenceType.Freezing,
		],
	},
	{
		name: GhostName.Deogen,
		evidences: [EvidenceType.EMF5, EvidenceType.Orb, EvidenceType.Writing],
	},
	{
		name: GhostName.Thaye,
		evidences: [
			EvidenceType.Orb,
			EvidenceType.Writing,
			EvidenceType.UltraViolet,
		],
	},
];

export { ghosts };
