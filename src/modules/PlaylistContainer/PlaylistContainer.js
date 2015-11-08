
import React, { PropTypes } from 'react';
import Playlist from '../Playlist/Playlist';
import Paper from 'material-ui/lib/paper';
import playlistStore from '../../stores/PlaylistStore';
import playListActions from '../../actions/PlayListActions';

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
		let items = this.state.items;
		return (
			<Paper zDepth={3} rounded={false} className="PlaylistContainer-outer">
				<Playlist items={items} />
			</Paper>
		);
	}
}