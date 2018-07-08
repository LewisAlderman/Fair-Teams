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

		return [teamOne, teamTwo];
    };
    
    splitFair(players)

	return(
        <ul>{teamOne.map((player, i) => <li key="i">{player.name}</li>)}</ul>
        <ul>{teamTwo.map((player, i) => <li key="i">{player.name}</li>)}</ul>
    )
};

export default Teams;
