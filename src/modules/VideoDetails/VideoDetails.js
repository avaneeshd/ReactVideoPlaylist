
import React, { PropTypes } from 'react';
import playlistStore from '../../stores/PlaylistStore';
import Common from '../../utils/common';

export default class VideoDetails extends React.Component {
	/* React component to display video details */

	constructor(props) {
		super(props);
		this.state = {videoId: props.video, title: "", date: "", description:""};
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
				date: playlistStore._currentVideo.snippet.publishedAt,
				description: playlistStore._currentVideo.snippet.description
			});
		}
	}

	render() {
		return (
			<div>
				<h4>{this.state.title}</h4>
				<div>{this.state.description}</div>
				<div>Published on {Common.formatDate(this.state.date)}</div>
			</div>
		);
	}
}
