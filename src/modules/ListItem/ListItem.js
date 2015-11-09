
import React, { PropTypes } from 'react';
import MaterialListItem from 'material-ui/lib/lists/list-item';
import PlaylistActions from '../../actions/PlayListActions';

export default class PlaylistContainer extends React.Component{
	/* Basic React component*/

	constructor(){
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	formatDate(date){
		let d = new Date(date);
		return d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear();
	}

	handleClick(){
		console.log("Handle Play"+this.props.data.id);
		PlaylistActions.play(this.props.data.id);
	}

	render(){
		return (
			<MaterialListItem
				onClick = { this.handleClick }
				className="listitem"
				key = {this.props.data.id}
				primaryText = {this.props.data.title}
				secondaryText = { "on " + this.formatDate(this.props.data.publishedAt) }
				>
				<img className="listitem-thumbnail" src={this.props.data.thumbnails.medium.url} />
			</MaterialListItem>
		);
	}
}