import React from "react";

const List = ({ players, handleRemove, handleEdit }) => {
	return (
		<div className="list-container">
			<ul>
				{[].concat(...Object.values(players)).map((player, i) => (
					<li data-key={i} key={i}>
						{player.name} :: {player.rating}&#x2605;
						<button onClick={handleRemove}>X</button>
						<button onClick={handleEdit}>edit</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default List;
