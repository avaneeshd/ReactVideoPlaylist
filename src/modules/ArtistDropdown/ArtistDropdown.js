import React, { PropTypes } from 'react';
import DropDownMenu from 'material-ui/lib/drop-down-menu';

export default class Playlist extends React.Component{
	/*
	* React Component for Artist Dropdown
	* */
	constructor(){
		super();
	}

	handleChange(event, selectedIndex, menuItem) {
		console.log(selectedIndex);
	}

	render(){
		let menuItems = [
			{ payload: '1', text: 'Never' },
			{ payload: '2', text: 'Every Night' },
			{ payload: '3', text: 'Weeknights' },
			{ payload: '4', text: 'Weekends' },
			{ payload: '5', text: 'Weekly' },
		];
		return (
			<div>
				<DropDownMenu menuItems={menuItems} onChange={this.handleChange}/>
			</div>
		);
	}
}