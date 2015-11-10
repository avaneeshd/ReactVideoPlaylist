

import React, { PropTypes } from 'react';
import List from '../List/List'

export default class Playlist extends React.Component{
	/*  React component for Playlist
	* 	Wrapper for List
	* */
	constructor(){
		super();
	}

	render(){
		return (
			<div className="playlist-outer">
				<List items={this.props.items} />
			</div>
		);
	}
}