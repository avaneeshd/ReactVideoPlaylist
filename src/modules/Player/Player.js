
import React, { PropTypes } from 'react';
import VideoDetails from '../VideoDetails/VideoDetails';
//import YoutubePlayer from 'react-youtube';
import playListStore from '../../stores/PlaylistStore';

import loadAPI from './YoutubePlayerApi';

export default class Player extends React.Component {
	/* Basic React component*/
	constructor(props) {
		super(props);
		this.createPlayer = this.createPlayer.bind(this);
		this.onPlay = this.onPlay.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onPlayerReady = this.onPlayerReady.bind(this);

		this.state= { playerIsReady: false,
			          videoIndex:props.video,
			          playlist:props.playlist
		};

		loadAPI().then(this.createPlayer);
	}


	componentWillReceiveProps(newProps){
		console.log("Received  props");
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
		let self = this;
		console.log("load player");
		self.player = new YT.Player('player', {
			height: '390',
			width: '640',
			events: {
				onReady: self.onPlayerReady
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

	onPlayerReady(){
		this.setState({playerIsReady:true});
		this.loadPlaylist(this.state.playlist, this.state.videoIndex);
	}

	loadPlaylist(playlist, index){
		if(this.player && playlist.length > 0) {
			this.player.loadPlaylist(playlist, index, 0, "large");
		}
	}

	onPlay(index){
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
