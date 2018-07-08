import React, { Component } from "react";
import Form from "./components/Form";
import List from "./components/List";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			players: [
				{
					name: "Alan",
					rating: 5,
				},
				{
					name: "Jimbob",
					rating: 2,
				},
			],
			player: {
				input: "",
				rating: 0,
			},
			editMode: false,
		};
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRating = this.handleRating.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	handleSubmit = e => {
		e.preventDefault();
		let newPlayer = {
			name: this.state.player.input,
			rating: this.state.player.rating,
		};

		this.setState({
			players: [...this.state.players, newPlayer],
			player: {
				input: "",
				rating: 0,
			},
			editMode: false,
		});
	};

	handleInput = e => {
		this.setState({ player: { ...this.state.player, input: e.target.value } });
	};

	handleRating = e => {
		this.setState({ player: { ...this.state.player, rating: e } });
	};

	handleRemove = e => {
		// NOT HERERERE
		let selected = e.target.parentNode.dataset.key;
		let newState = this.state.players;
		newState.splice(selected, 1);

		this.setState({
			players: [newState],
		});
	};

	handleEdit = e => {
		//EDIT HERERERERE
		let field = document.getElementById("name");
		let selected = e.target.parentNode.dataset.key;
		let newState = this.state.players;
		let editedPlayer = newState.splice(selected, 1);

		if (!this.state.editMode) {
			field.focus();
			this.setState({
				editMode: true,
				player: {
					...this.state.player,
					input: editedPlayer[0].name,
					rating: editedPlayer[0].rating,
				},
			});
		} else {
			field.blur();
			this.setState({
				editMode: false,
				player: {
					...this.state.player,
					input: "",
					rating: 0,
				},
			});
		}
	};

	render() {
		return (
			<div className="app-container">
				<br />
				<Form
					handleInput={e => this.handleInput(e)}
					handleRating={this.handleRating}
					handleSubmit={this.handleSubmit}
					rating={this.state.player.rating}
					input={this.state.player.input}
					btnValue={this.state.editMode ? "Save Changes" : "Add Player"}
				/>
				{this.state.players ? (
					<List
						players={this.state.players}
						handleRemove={this.handleRemove}
						handleEdit={this.handleEdit}
					/>
				) : (
					<p>Add some players</p>
				)}
			</div>
		);
	}
}

export default App;
