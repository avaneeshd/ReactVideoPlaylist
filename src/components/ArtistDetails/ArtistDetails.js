
import React, { PropTypes } from 'react';
import MaterialList from 'material-ui/lib/lists/list';
import ListItem  from '../ListItem/ListItem';
import ListDivider from 'material-ui/lib/lists/list-divider'
import FlatButton from 'material-ui/lib/flat-button'

export default class ArtistDetails extends React.Component{
	/***
	 *  React component for ArtistDetails
	 ***/

	constructor(props){
		super(props);
		// Set artist state
		this.state = {artist: props.artist};
	}

	componentWillReceiveProps(newProps){
		if(newProps.artist.name !== this.props.artist.name){
			//update artist state
			this.setState({artist: newProps.artist});
		}
	}

	render(){
		return (
			<div className="artist-details-outer">
				<img className="artist-image" src={this.state.artist.image} />
				<div className="artist-name">{this.state.artist.name}</div>
				<div className="artist-bornOn">{ "Born On "+ this.state.artist.bornOn}</div>
				<div className="artist-description">{this.state.artist.desc}</div>
			</div>
		);
	}
}