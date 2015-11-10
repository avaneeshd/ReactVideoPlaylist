
import React, { PropTypes } from 'react';
import Playlist from '../Playlist/Playlist';
import Player from '../Player/Player'
import Paper from 'material-ui/lib/paper';
import ArtistDropdown from '../ArtistDropdown/ArtistDropdown'
import playlistStore from '../../stores/PlaylistStore';
import playListActions from '../../actions/PlayListActions';
import ArtistStore from '../../stores/ArtistsStore';
import ArtistDetails from '../ArtistDetails/ArtistDetails'

export default class PlaylistContainer extends React.Component{
	/* Basic React component*/
	constructor(props){
		super(props);
		this.state = {};
		this.state.playlist = props.playlist;
		this.state.index = 0;
		this.state.items = props.items;
		this.state.artist = ArtistStore.artistDetails[props.artistname];

		//Initialize Client side store with props
		playlistStore._playlist = props.playlist;
		playlistStore._playlistItems = props.items;
		playlistStore._currentIndex = 0;
		playlistStore._currentVideo = props.items[0];

		playlistStore._currentArtist = props.artistname;

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
		playlistStore.removeListener("play", this.onPlay);
	}

	onLoad(){
		console.log("change"+ playlistStore.getCurrentIndex());
		this.setState({items: playlistStore.getItems(),
			index: playlistStore.getCurrentIndex(),
			playlist: playlistStore.getPlaylist(),
			artist: ArtistStore.artistDetails[playlistStore.getCurrentArtist()]
		});
	}

	onPlay(){
		console.log("play video"+ playlistStore.getCurrentIndex());
		this.setState({index: playlistStore.getCurrentIndex() });
	}

	render(){
		let items = this.state.items;
		return (
			<div className="PlaylistContainer-outer">
				<div className="ArtistsContainer">
					<ArtistDropdown showProgress={false}/>
					<ArtistDetails artist={this.state.artist} />
				</div>
				<Player playlist={this.state.playlist} video={this.state.index} />
				<Playlist showProgress={false} items={items} />
			</div>
		);
	}
}