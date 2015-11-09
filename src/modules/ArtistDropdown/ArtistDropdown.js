import React, { PropTypes } from 'react';
import SelectField from 'material-ui/lib/select-field';
import playlistAction from '../../actions/PlayListActions';
import CircularProgress from 'material-ui/lib/circular-progress'

export default class Playlist extends React.Component{
	/*
	* React Component for Artist Dropdown
	* */


	constructor(){
		super();
		this.init();
		this.handleChange = this.handleChange.bind(this);
		this.state = {currentArtist : '1', showProgress: false};
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

	componentWillReceiveProps(newprops){
		this.setState({showProgress: newprops.showProgress});
	}

	handleChange(event, selectedIndex, menuItem) {
		console.log("MENU ITEM"+ menuItem.text);
		this.setState({currentArtist: menuItem.payload});
		playlistAction.fetch(menuItem.text);
		this.setState({showProgress: true});
	}

	render(){
	    let progressBarClass = this.state.showProgress ? "showProgress": "hideProgress";
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
				<div className={progressBarClass}>
					<CircularProgress mode="indeterminate" size={0.4}/>
				</div>
			</div>
		);
	}
}