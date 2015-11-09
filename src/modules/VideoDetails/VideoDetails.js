
import React, { PropTypes } from 'react';
import playlistStore from '../../stores/PlaylistStore';

export default class VideoDetails extends React.Component {
	/* Basic React component*/
	constructor(props) {
		super(props);
		this.state = {videoId: props.video, title: "", date: ""};
		this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps(newProps){
		if(newProps.video !== this.props.video){
			this.setState({videoId: newProps.video});
			this.handleChange(newProps.video);
		}
	}

	handleChange(videoId) {
		if(videoId && playlistStore._currentVideo) {
			console.log("update video details", playlistStore._currentVideo);
			this.setState({
				title: playlistStore._currentVideo.snippet.title,
				date: playlistStore._currentVideo.snippet.publishedAt
			});
		}
	}


	render() {
		return (
			<div>
				<h3>{this.state.title}</h3>
				<h5>{this.state.date}</h5>
			</div>
		);
	}
}
