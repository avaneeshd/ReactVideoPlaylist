
import React, { PropTypes } from 'react';

export default class PlaylistContainer extends React.Component{
	/* Basic React component*/

	constructor(){
		super();
	}

	render(){
		return (
			<div>
				<div>{this.props.data.channelId}</div>
				<div>{this.props.data.description}</div>
			</div>
		);
	}
}