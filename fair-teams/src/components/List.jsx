import React from "react";

const List = ({ players, handleRemove, handleEdit }) => {
	return (
		<div className="list-container">
			<ul className="list-group">
				<p className="player-count label">{players.length} Players</p>
				{players.length ? (
					[].concat(...Object.values(players)).map((player, i) => (
						<li data-key={i} key={i} className="list-group-item">
							{player.name.length > 10
								? player.name.slice(0, 10) + ".."
								: player.name}
							<div className="btn-group float-right">
								<span className="player-rating">
									{player.rating}
									<span className="player-rating-star"> &#x2605;</span>
								</span>
								<button
									onClick={handleEdit}
									className="btn btn-icon btn-primary"
								>
									Edit
								</button>
								<button
									onClick={handleRemove}
									className="btn btn-icon btn-danger"
								>
									Remove
								</button>
							</div>
						</li>
					))
				) : (
					<p className="intro">
						Create some players! <br />
						<span style={{ fontSize: "2em", textShadow: "none" }}>👀⚽️</span>
					</p>
				)}
			</ul>
		</div>
	);
};

export default List;
