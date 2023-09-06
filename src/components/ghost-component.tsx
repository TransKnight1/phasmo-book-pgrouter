import React from "react";
import { ghosts } from "./ghostsandevidences";

const changeButton = () => {};

const onClick = () => {
	console.log(changeButton);
};
export const GhostsButtons = () => {
	return (
		<div className='grid grid-cols-3 m-4 gap-1 w-1/3'>
			{ghosts.map((ghost, index) => (
				<button
					className='bg-blue-700 hover:bg-blue-900 text-white font-bold border-4 border-black rounded '
					key={index}
					onClick={onClick}>
					{ghost.name}
				</button>
			))}
		</div>
	);
};
