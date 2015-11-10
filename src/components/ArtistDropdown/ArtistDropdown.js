import React, { PropTypes } from 'react';
import SelectField from 'material-ui/lib/select-field';
import playlistAction from '../../actions/PlayListActions';
import CircularProgress from 'material-ui/lib/circular-progress'
import ArtistsStore from '../../stores/ArtistsStore';

export default class Playlist extends React.Component{
	/*
	* React Component for Artist Dropdown
	* */

	constructor(){
		super();
		this.init();
		this.handleChange = this.handleChange.bind(this);

		// Inital State
		this.state = {currentArtist : '1', showProgress: false};
	}

	init(){
		// Initialize MenuItems
		let artists = ArtistsStore.getArtists();
		let menuItems = [];
		artists.forEach(function(artist, index){
			menuItems.push({ value: (index+1)+'', label: artist});
		});
		this.menuItems = menuItems;
	}

	componentWillReceiveProps(newprops){
		this.setState({showProgress: newprops.showProgress});
	}

	handleChange(event, selectedIndex, menuItem) {
		console.log("MENU ITEM"+ menuItem.label);

		//Fetch on change
		this.setState({currentArtist: menuItem.value});
		playlistAction.fetch(menuItem.label);

		//Set ShowProgress State to true
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
					valueMember="value"
					displayMember="label"
					floatingLabelText="Artists"
					onChange={this.handleChange}/>

				<div className={progressBarClass}>
					<CircularProgress mode="indeterminate" size={0.4}/>
				</div>
			</div>
		);
	}
}