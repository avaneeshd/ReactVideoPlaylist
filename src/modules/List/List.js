
import React, { PropTypes } from 'react';
import ListItem  from '../ListItem/ListItem';

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
		})

		data.forEach(function(item){
			listItems.push(<ListItem data={item} />);
		});

		return (
			<div>
				{listItems}
			</div>
		);
	}
}