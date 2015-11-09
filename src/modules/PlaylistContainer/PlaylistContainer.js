
import React, { PropTypes } from 'react';
import Playlist from '../Playlist/Playlist';
import Player from '../Player/Player'
import Paper from 'material-ui/lib/paper';
import playlistStore from '../../stores/PlaylistStore';
import playListActions from '../../actions/PlayListActions';

export default class PlaylistContainer extends React.Component{
	/* Basic React component*/
	constructor(){
		super();
		this.state = {};
		this.state.playlist = playlistStore._playlist;
		this.state.index = playlistStore._currentIndex;
		this.state.items = playlistStore._playlistItems;

		this.onLoad = this.onLoad.bind(this);
		this.onPlay = this.onPlay.bind(this);
	}

	componentDidMount(){
		console.log("Adding Event Listener");
		playlistStore.addListener("change", this.onLoad);
		playlistStore.addListener("play", this.onPlay);
	}

	componentWillUnmount(){
		console.log("Remove Event Listener");
		playlistStore.removeListener("change", this.onLoad);
	}

	onLoad(){
		console.log("change"+ playlistStore._currentIndex);
		this.setState({items: playlistStore._playlistItems, index: playlistStore._currentIndex, playlist: playlistStore._playlist});
	}

	onPlay(){
		console.log("play video: " + playlistStore._currentIndex);
		this.setState({index: playlistStore._currentIndex });
	}

	render(){
		let items = this.state.items;
		return (
			<Paper zDepth={3} rounded={false} className="PlaylistContainer-outer">
				<Player playlist={this.state.playlist} video={this.state.index} />
				<Playlist items={items} />
			</Paper>
		);
	}
}