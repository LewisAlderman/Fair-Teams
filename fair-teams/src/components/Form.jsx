import React from "react";
import ReactStars from "react-stars";

const Form = ({
	handleInput,
	handleRating,
	handleSubmit,
	rating,
	input,
	btnValue,
}) => {
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Name</label>
			<br />
			<input
				id="name"
				name="player_name"
				type="text"
				placeholder="Enter player name"
				onChange={handleInput}
				value={input}
				autoComplete="off"
			/>
			<ReactStars
				onChange={handleRating}
				className="stars"
				count={5}
				value={rating}
				half={false}
			/>
			<input type="submit" value={btnValue} />
		</form>
	);
};

export default Form;
