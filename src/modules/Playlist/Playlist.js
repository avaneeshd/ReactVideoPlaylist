

import React, { PropTypes } from 'react';
import ArtistDropdown from '../ArtistDropdown/ArtistDropdown'
import List from '../List/List'

export default class Playlist extends React.Component{
	/* Basic React component*/
	constructor(){
		super();
	}

	render(){
		return (
			<div>
				<ArtistDropdown/>
				<List items={this.props.items} />
			</div>
		);
	}
}