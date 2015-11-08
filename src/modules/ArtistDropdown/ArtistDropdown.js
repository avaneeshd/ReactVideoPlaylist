import React, { PropTypes } from 'react';
import DropDownMenu from 'material-ui/lib/drop-down-menu';
import playlistAction from '../../actions/PlayListActions';

export default class Playlist extends React.Component{
	/*
	* React Component for Artist Dropdown
	* */
	constructor(){
		super();
	}

	handleChange(event, selectedIndex, menuItem) {
		console.log(menuItem.text);
		playlistAction.fetch(menuItem.text);
	}

	render(){
		let menuItems = [
			{ payload: '1', text: 'Elton John' },
			{ payload: '2', text: 'Stevie Wonder' },
			{ payload: '3', text: 'Frank Sinatra' },
			{ payload: '4', text: 'Louis Armstrong' }
		];
		return (
			<div>
				<DropDownMenu menuItems={menuItems} onChange={this.handleChange}/>
			</div>
		);
	}
}