
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import PlaylistContainer from './modules/PlaylistContainer/PlaylistContainer';
import materialUI from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import playlistStore from './stores/PlaylistStore';


injectTapEventPlugin();

if (window.addEventListener) {
	window.addEventListener('DOMContentLoaded', run);
} else {
	window.attachEvent('onload', run);
}

function run(){
	let items =[];
	let playlist = [];
	if(window.items !== undefined){
		items = window.items;
	}

	if(window.playlist !== undefined){
		playlist = window.playlist;
	}

	ReactDOM.render(<PlaylistContainer items={items}  playlist={playlist}/> , document.getElementById("app"));
}