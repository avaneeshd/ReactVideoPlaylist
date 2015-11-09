import React, { PropTypes } from 'react';
import SelectField from 'material-ui/lib/select-field';
import playlistAction from '../../actions/PlayListActions';

export default class Playlist extends React.Component{
	/*
	* React Component for Artist Dropdown
	* */


	constructor(){
		super();
		this.init();
		playlistAction.fetch();
		this.handleChange = this.handleChange.bind(this);
		this.state = {currentArtist : '1'};
		playlistAction.fetch('Elton John');
	}

	init(){
		this.menuItems = [
			{ payload: '1', text: 'Elton John' },
			{ payload: '2', text: 'Stevie Wonder' },
			{ payload: '3', text: 'Frank Sinatra' },
			{ payload: '4', text: 'Louis Armstrong' },
			{ payload: '5', text: 'Taylor Swift' }
		];
	}

	handleChange(event, selectedIndex, menuItem) {
		console.log("MENU ITEM"+ menuItem.text);
		this.setState({currentArtist: menuItem.payload});
		playlistAction.fetch(menuItem.text);
	}

	render(){
		return (
			<div className="ArtistDropDown-container">
				<SelectField
					className="ArtistDropDown-select"
					value={this.state.currentArtist}
					menuItems={this.menuItems}
					openImmediately={false}
					valueMember="payload"
					displayMember="text"
					floatingLabelText="Artists"
					onChange={this.handleChange}/>
			</div>
		);
	}
}