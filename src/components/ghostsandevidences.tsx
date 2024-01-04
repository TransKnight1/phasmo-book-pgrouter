import React, { useState } from "react";

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

export const GhostsAndEvidences = () => {
  const [isButtonActive, setIsButtonActive] = useState({});

  const GhostsNames = Object.keys(Ghosts).map((ghostName) => {
    return <button key={ghostName}>{ghostName}</button>;
  });

  function uniqueValues(values: string[][]) {
    const allEvidences = values.reduce(
      (accumulator: string[], current: string[]) => {
        return accumulator.concat(current);
      },
      []
    );

    const uniqueEvidences = [...new Set(allEvidences)];

    return uniqueEvidences;
  }

  const uniqueEvidences = uniqueValues(Object.values(Ghosts));

  const handleButtonClick = (ghostName: string) => {
    setIsButtonActive({
      ...isButtonActive,
      [ghostName]: !isButtonActive[ghostName],
    });
  };

  const renderedUniqueEvidences = uniqueEvidences.map((evidence, index) => (
    <button
      onClick={() => handleButtonClick(evidence)}
      key={index}
      className={`px-4 py-2 rounded-md text-white ${
        isButtonActive[evidence]
          ? "bg-blue-500 text-white"
          : "bg-gray-300 text-gray-700"
      }`}
    >
      {evidence}
    </button>
  ));

  return (
    <>
      <div className="flex mt-10 place-content-center">
        <div className="w-1/2">
          <div className="grid grid-cols-2 text-white text-center">
            {renderedUniqueEvidences}
          </div>
        </div>
      </div>
      <div className="flex mt-10 place-content-center">{GhostsNames}</div>
    </>
  );
};
