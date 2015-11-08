
import React, { PropTypes } from 'react';
import Playlist from '../Playlist/Playlist';
import playlistStore from '../../stores/PlaylistStore';

export default class PlaylistContainer extends React.Component{
	/* Basic React component*/
	constructor(){
		super();
		this.state = {};
		this.state.items = playlistStore._playlistItems;
		this.onLoad = this.onLoad.bind(this);
	}

	componentDidMount(){
		console.log("Adding Event Listener");
		playlistStore.addListener("change", this.onLoad);
	}

	componentWillUnmount(){
		console.log("Remove Event Listener");
		playlistStore.removeEventListener("change", this.onLoad);
	}

	onLoad(){
		console.log("change");
		this.setState({items: playlistStore._playlistItems} );
	}

	render(){
		return (
			<div>
				PlayList:
				<Playlist items={this.state.items} />
			</div>
		);
	}
}