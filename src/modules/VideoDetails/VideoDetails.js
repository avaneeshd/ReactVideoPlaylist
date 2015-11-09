
import React, { PropTypes } from 'react';
import playlistStore from '../../stores/PlaylistStore';

export default class VideoDetails extends React.Component {
	/* Basic React component*/
	constructor() {
		super();
		this.state = {title: "", date: ""};
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		playlistStore.addListener("play", this.handleChange);
	}


	handleChange() {
		console.log("update vidoe details" , playlistStore._currentVideo);
		this.setState({title: playlistStore._currentVideo.snippet.title, date: playlistStore._currentVideo.snippet.publishedAt});
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
