
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import PlaylistContainer from './components/PlaylistContainer/PlaylistContainer';
import materialUI from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import playlistStore from './stores/PlaylistStore';
import ArtistsStore from './stores/ArtistsStore'

injectTapEventPlugin();

if (window.addEventListener) {
	window.addEventListener('DOMContentLoaded', run);
} else {
	window.attachEvent('onload', run);
}

function run(){
	let items =[];
	let playlist = [];
	//Check for state
	if(window.items !== undefined){
		items = window.items;
		window.items = null;
	}

	if(window.playlist !== undefined){
		playlist = window.playlist;
		window.playlist = null;
	}
	//Rerender the react component on client side with passed state

	ReactDOM.render(<PlaylistContainer items={items}  playlist={playlist} artistname={ArtistsStore.artists[0]} />
		, document.getElementById("app"));
}