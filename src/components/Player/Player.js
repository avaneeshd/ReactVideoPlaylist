
import React, { PropTypes } from 'react';
import VideoDetails from '../VideoDetails/VideoDetails';
import playListStore from '../../stores/PlaylistStore';
import loadAPI from './YoutubePlayerApi';

/**
 * Player Component
 * wrapper for youtube player IFrame API
 *
 */

export default class Player extends React.Component {
	/* React component for Youtube videoo player API*/

	constructor(props) {
		super(props);
		//bind all the functions to "this" object
		this.createPlayer = this.createPlayer.bind(this);
		this.onPlay = this.onPlay.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onPlayerReady = this.onPlayerReady.bind(this);
		this.onPlayerStateChange = this.onPlayerStateChange.bind(this);

		//Set Initial State
		this.state= { playerIsReady: false,
			          videoIndex:props.video,
			          playlist:props.playlist
		};

		//Load Youtube API asynchronously
		loadAPI().then(this.createPlayer);
	}


	componentWillReceiveProps(newProps){
		this.setState({
			videoIndex: newProps.video,
			playlist: newProps.playlist
		});

		if(newProps.playlist[newProps.video] !== this.props.playlist[this.props.video]){
			console.log("Not same");
			this.onPlay(newProps.video);
			this.onChange(newProps.playlist, newProps.video);
		}

	}

	createPlayer(){
		// Creates a Youtube player after the API has loaded
		let self = this;
		console.log("load player");
		self.player = new YT.Player('player', {
			height: '390',
			width: '640',
			events: {
				onReady: self.onPlayerReady,
				onStateChange: self.onPlayerStateChange
			}
		});
	}

	onChange(playlist, index){
		if(this.state.playlist.length > 0) {
			if(this.state.playerIsReady) {
				this.loadPlaylist(playlist, index);
			}
		}
	}

	onPlayerStateChange(event){
		//On Previous and Next button
		if(event.data === 3) {
			playListStore.playVideo(this.state.playlist[event.target.getPlaylistIndex()]);
			this.setState({videoIndex: event.target.getPlaylistIndex()})
		}
	}

	onPlayerReady(){
		//On Player ready state
		this.setState({playerIsReady:true});
		this.loadPlaylist(this.state.playlist, this.state.videoIndex);
	}

	loadPlaylist(playlist, index){
		//Load Playlist into the player
		if(this.player && playlist.length > 0) {
			this.player.loadPlaylist(playlist, index, 0, "large");
		}
	}

	onPlay(index){
		//Play the selected video in playlist
		if(this.player && index  !== null){
			this.setState({videoIndex: index });
			this.player.playVideoAt(index);
		}
	}

	render() {
		return (
			<div className="video-player">
				<div className="videoWrapper">
					<div id="player"></div>
				</div>
				<VideoDetails video={this.state.playlist[this.state.videoIndex]} />
			</div>
		);
	}
}

Player.propTypes = {
	video: PropTypes.number.isRequired,
	playlist: PropTypes.array.isRequired
};

