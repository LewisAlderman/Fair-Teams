import React from "react";

const Teams = ({ players }) => {
	const splitFair = arr => {
		// Sort from highest -> lowest
		arr.sort((a, b) => b.rating - a.rating);

		let teamOne = [],
			teamTwo = [],
			sum1 = 0,
			sum2 = 0;

		arr.forEach(player => {
			// Place into two arrays
			// Based on the potential sum
			if (sum1 + player.rating <= sum2 + player.rating) {
				teamOne.push(player);
				sum1 += player.rating;
			} else {
				teamTwo.push(player);
				sum2 += player.rating;
			}
		});

		// Balance the number of players on each team
		if (teamTwo.length - teamOne.length > 1) {
			teamTwo.forEach(player => {
				if (teamTwo.length - teamOne.length > 1) {
					// Add the least skillful from one to the other
					teamOne.push(...teamTwo.splice(-1));
					// Repeat
				}
			});
		}

		let teams = [teamOne, teamTwo];
		return teams;
	};

	let [teamOne, teamTwo] = splitFair(players);

	return (
		<div className="teams-container">
			<ul className="team-one list-group">
				{teamOne.map((player, i) => (
					<li key={i} className="list-group-item">
						{player.name}
						<span className="player-rating float-right">
							{player.rating}
							<span className="player-rating-star"> &#x2605;</span>
						</span>
					</li>
				))}
			</ul>
			<ul className="team-two list-group">
				{teamTwo.map((player, i) => (
					<li key={i} className="list-group-item">
						{player.name}
						<span className="player-rating float-right">
							{player.rating}
							<span className="player-rating-star"> &#x2605;</span>
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Teams;
