import _ from 'lodash';
import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import ReactDOM from '../../node_modules/react-dom/server';

import PlaylistContainer from '../components/PlaylistContainer/PlaylistContainer';
import PlayListActions from '../actions/PlayListActions';
import PlayListStore from '../stores/PlayListStore';
import ArtistsStore from '../stores/ArtistsStore';

import injectTapEventPlugin from 'react-tap-event-plugin';

const server = express();

server.set('port', 3000);

/*  Serve static files in public directory */
server.use(express.static(path.join(__dirname, '../public')));
server.set('view engine', 'jade');
/* Server side rendering of index.html */

/*
 * Handle requests
 **/

server.get('/', (req, res, next) => {
	injectTapEventPlugin();
	/*
	 * Render App and inject into html
	 */

	PlayListStore.fetchPlaylist(ArtistsStore.artists[0] , function(err, items, playlist){
		let data = {body: '', serializedItems: [], serializedPlaylist:[]};
		let itemsList = items||[];
		let playList = playlist||[];
		if(err){
			console.log("Error Fetching Data:" , err);
			res.status(500);
			next();
		}else {
			data.serializedItems = JSON.stringify(items);
			data.serializedPlaylist = JSON.stringify(playlist);
			data.body = ReactDOM.renderToString(<PlaylistContainer items={itemsList} playlist={playList} artistname={ArtistsStore.artists[0]}/>);

			res.render('index', {bodyContent: data.body,
				serializedPlaylist:data.serializedPlaylist,
				serializedItems:data.serializedItems,
				title:"Yahoo Playlist",
				appName: "YahooPlex" });

			next();
		}
	});

});

/* ----
 * Run the server on port 3000
 * ---- */
server.listen(server.get('port'), () => {
	if (process.send) {
		process.send('online');
	} else {
		console.log('The server is running at http://localhost:' + server.get('port'));
	}
});