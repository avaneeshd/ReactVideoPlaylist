
import React, { PropTypes } from 'react';
import MaterialListItem from 'material-ui/lib/lists/list-item';
export default class PlaylistContainer extends React.Component{
	/* Basic React component*/

	constructor(){
		super();
	}

	formatDate(date){
		let d = new Date(date);
		return d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear();
	}

	render(){
		return (
			<MaterialListItem
				className="listitem"
				primaryText = {this.props.data.title}
				secondaryText = { "on " + this.formatDate(this.props.data.publishedAt) }
				>
				<img className="listitem-thumbnail" src={this.props.data.thumbnails.medium.url} />
			</MaterialListItem>
		);
	}
}