import _ from 'lodash';
import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import ReactDOM from '../../node_modules/react-dom/server';

import router from './router';
import PlaylistContainer from '../modules/PlaylistContainer/PlaylistContainer';
import PlayListActions from '../actions/PlayListActions';

import injectTapEventPlugin from 'react-tap-event-plugin';

const server = express();

server.set('port', 3000);

/* --- Serve static files in public directory ---- */
server.use(express.static(path.join(__dirname, '../public')));

/* ---- Server side rendering of index.html ---- */
const templateFile = path.join(__dirname, '../index.html');
const template = _.template(fs.readFileSync(templateFile, 'UTF-8'));

/* ---- Handle requests ---- */
server.get('*', (req, res, next) => {

	injectTapEventPlugin();
	/* ---- Render App and inject into html ---- */
	PlayListActions.fetch("");
	let data = {body: ''};
	data.body = ReactDOM.renderToString(<PlaylistContainer/>);
	const html = template(data);

	res.status(200).send(html);
	next();
});

/* ----  Run the server on port 3000 ---- */
server.listen(server.get('port'), () => {
	if (process.send) {
		process.send('online');
	} else {
		console.log('The server is running at http://localhost:' + server.get('port'));
	}
});