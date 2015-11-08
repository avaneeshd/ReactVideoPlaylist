

import React, { PropTypes } from 'react';
import ArtistDropdown from '../ArtistDropdown/ArtistDropdown'

export default class Playlist extends React.Component{
	/* Basic React component*/
	constructor(){
		super();
	}

	render(){
		return (
			<div>
				PlayList
				<ArtistDropdown/>
			</div>
		);
	}
}