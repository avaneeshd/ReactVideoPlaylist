
import React, { PropTypes } from 'react';
import MaterialListItem from 'material-ui/lib/lists/list-item';
import PlaylistActions from '../../actions/PlayListActions';
import Common from '../../utils/common';

export default class PlaylistContainer extends React.Component{
	/* Basic React component*/

	constructor(){
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		console.log("Handle Play"+this.props.data.id);
		PlaylistActions.play(this.props.data.id);
		window.scrollTo(0,0);
	}

	render(){
		return (
			<MaterialListItem
				onClick = { this.handleClick }
				className="listitem"
				key = {this.props.data.id}
				primaryText = {this.props.data.title}
				>
				<img className="listitem-thumbnail" src={this.props.data.thumbnails.medium.url} />
			</MaterialListItem>
		);
	}
}