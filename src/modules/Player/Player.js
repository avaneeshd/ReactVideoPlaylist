
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

	componentDidMount(){
		playListStore.addListener("change", this.onChange);
	}


	componentWillReceiveProps(newProps){
		if(newProps.video !== this.props.video){
			this.onPlay(newProps.video);
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

	onChange(){
		if(playListStore._playlist.length > 0) {
			this.setState({videoIndex:playListStore._currentIndex,  playlist:playListStore._playlist});
			if(this.state.playerIsReady) {
				this.loadPlaylist();
			}
		}
	}

	onPlayerReady(){
		this.setState({playerIsReady:true});
		this.loadPlaylist();
	}

	loadPlaylist(){
		if(this.player && playListStore._playlist.length > 0) {
			this.player.loadPlaylist(playListStore._playlist, playListStore._currentIndex, 0, "large");
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
				<VideoDetails/>
			</div>
		);
	}
}
