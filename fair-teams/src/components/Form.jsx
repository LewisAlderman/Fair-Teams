import React from "react";
import ReactStars from "react-stars";

const Form = ({
	handleInput,
	handleRating,
	handleSubmit,
	rating,
	input,
	btnValue,
	disabled,
}) => {
	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<label className="label" htmlFor="name">
					Player Name
				</label>
				<br />
				<input
					id="name"
					name="player_name"
					type="text"
					placeholder="Enter a player name"
					onChange={handleInput}
					value={input}
					autoComplete="off"
					className="form-control"
				/>
				<ReactStars
					onChange={handleRating}
					className="stars"
					count={5}
					value={rating}
					half={false}
					size={36}
					color1={"#242530"}
					color2={"rgb(255, 255, 79)"}
				/>
				<input
					disabled={disabled}
					type="submit"
					value={btnValue}
					className="btn btn-primary"
				/>
			</form>
		</div>
	);
};

export default Form;
