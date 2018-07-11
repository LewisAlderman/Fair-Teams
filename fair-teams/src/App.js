import React, { Component } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Teams from "./components/Teams";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			players: [],
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
		this.hide = this.hide.bind(this);
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
		let selected = e.target.parentNode.parentNode.dataset.key;
		let newState = this.state.players;
		newState.splice(selected, 1);

		this.setState({
			players: [...newState],
		});
	};

	handleEdit = e => {
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

	hide = () => {
		let form = document.querySelector(".form-container");
		let list = document.querySelector(".list-container");

		if (
			form.classList.contains("hidden") &&
			list.classList.contains("hidden")
		) {
			document.location.reload();
		} else {
			form.classList.toggle("hidden");
			list.classList.toggle("hidden");

			let teams = document.querySelector(".teams-container");
			teams.classList.toggle("shown");
		}
	};

	render() {
		const empty =
			this.state.player.input === "" || this.state.player.rating === 0;

		return (
			<React.Fragment>
				<div className="app-container">
					<Form
						handleInput={e => this.handleInput(e)}
						handleRating={this.handleRating}
						handleSubmit={this.handleSubmit}
						rating={this.state.player.rating}
						input={this.state.player.input}
						btnValue={this.state.editMode ? "Save Changes" : "Add Player"}
						disabled={empty ? "disabled" : null}
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
					<button
						disabled={this.state.players.length > 3 ? null : "disabled"}
						id="generate"
						className="btn btn-success"
						onClick={this.hide}
					>
						Generate Teams
					</button>
					<Teams players={this.state.players} />
				</div>
			</React.Fragment>
		);
	}
}

export default App;
