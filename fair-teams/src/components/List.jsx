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
									<div className="icon icon-edit">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-edit-2"
										>
											<polygon points="16 3 21 8 8 21 3 21 3 16 16 3" />
										</svg>
									</div>
								</button>
								<button
									onClick={handleRemove}
									className="btn btn-icon btn-danger"
								>
									<div className="icon icon-remove">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-trash-2"
										>
											<polyline points="3 6 5 6 21 6" />
											<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
											<line x1="10" y1="11" x2="10" y2="17" />
											<line x1="14" y1="11" x2="14" y2="17" />
										</svg>
									</div>
								</button>
							</div>
						</li>
					))
				) : (
					<p className="intro">
						Create some players! <br />
						<span
							role="img"
							aria-label="emojis"
							style={{ fontSize: "2em", textShadow: "none" }}
						>
							👀⚽️
						</span>
					</p>
				)}
			</ul>
		</div>
	);
};

export default List;
