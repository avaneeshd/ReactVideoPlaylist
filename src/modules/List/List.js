
import React, { PropTypes } from 'react';
import MaterialList from 'material-ui/lib/lists/list';
import ListItem  from '../ListItem/ListItem';
import ListDivider from 'material-ui/lib/lists/list-divider'

export default class List extends React.Component{
	/* Basic React component*/
	constructor(){
		super();
	}

	render(){
		let data = this.props.items;
		let listItems = [];

		data = data.map(function(item){
			let snippet = item.snippet;
			snippet.id = item.id.videoId;
			return snippet;
		});

		data.forEach(function(item){
			listItems.push(
				<div key={item.id}>
					<ListItem data={item} />
					<ListDivider />
				</div>);
		});

		return (
			<div className="list-outer">
				<MaterialList subheader="Playlist">
					{listItems}
				</MaterialList>
			</div>
		);
	}
}