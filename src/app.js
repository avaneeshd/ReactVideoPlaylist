
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Playlist from './modules/Playlist/Playlist';
import materialUI from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

if (window.addEventListener) {
	window.addEventListener('DOMContentLoaded', run);
} else {
	window.attachEvent('onload', run);
}

function run(){
	ReactDOM.render(<Playlist/> , document.getElementById("app"));
}