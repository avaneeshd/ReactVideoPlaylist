
import AppDispatcher from '../utils/AppDispatcher';
import {EventEmitter} from 'events';
import assign from 'object-assign';
import http from 'http';
import Youtube from 'youtube-node';

let CHANGE_EVENT = "change";
const FETCH_PLAYLIST = "FETCH_PLAYLIST";
const YOUTUBE_API_KEY = "AIzaSyASznBtMlI2_3nNzVNPDmGJ3Gv93P4ndFs";

let playlistStore = assign({}, EventEmitter.prototype , {

	_playlistItems: [],
	youTube: new Youtube(),

	initialize :function (){
		this.youTube.setKey(YOUTUBE_API_KEY);
	},

	getPlaylist: function(artistName){
		if(!artistName){
			artistName = "Elton John";
		}
		this.youTube.search(artistName, 10, function(err, results){
			if(err){
				console.log(err);
			}else{
				if(results.items.length > 0) {
					playlistStore._playlistItems = results.items;
					playlistStore.emit(CHANGE_EVENT);
				}
			}
		});
	},

	dispatcherIndex: AppDispatcher.register(function(payload){
		let action = payload.action;
		playlistStore.initialize();
		switch (action.actionType) {
			case FETCH_PLAYLIST:
				playlistStore.getPlaylist(action.data.artist);
				break;
		}
		return true;
	})

});

export default playlistStore;