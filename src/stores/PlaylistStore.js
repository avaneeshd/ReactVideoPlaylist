
import AppDispatcher from '../utils/AppDispatcher';
import {EventEmitter} from 'events';
import assign from 'object-assign';
import http from 'http';
import Youtube from 'youtube-node';

let CHANGE_EVENT = "change";
let PLAY_EVENT = "play";

const FETCH_PLAYLIST = "FETCH_PLAYLIST";
const PLAY_VIDEO = "PLAY_VIDEO";

const YOUTUBE_API_KEY = "AIzaSyASznBtMlI2_3nNzVNPDmGJ3Gv93P4ndFs";

let playlistStore = assign({}, EventEmitter.prototype , {

	_playlistItems: [],
	_playlist: [],
	_currentIndex: 0,
	_currentVideo: null,

	youTube: new Youtube(),

	initialize :function (){
		this.youTube.setKey(YOUTUBE_API_KEY);
	},

	fetchPlaylist: function(artistName, serverCallback){
		playlistStore.initialize();
		if(artistName) {
			this.youTube.addParam('type', 'video');
			this.youTube.search(artistName, 10, function (err, results) {
				if (err) {
					console.log(err);
				} else {
					if (results.items.length > 0) {
						playlistStore._playlist = [];
						playlistStore._playlistItems = results.items;
						playlistStore._playlistItems.forEach(function(item){
							playlistStore._playlist.push(item.id.videoId);
						});
						playlistStore._currentIndex = 0;
						playlistStore._currentVideo = results.items[0];
						playlistStore.emit(CHANGE_EVENT);

					}
				}

				if(serverCallback){
					serverCallback(err, playlistStore._playlistItems, playlistStore._playlist);
				}
			});
		}
	},

	playVideo: function(videoId){
		console.log("play video store");
		playlistStore._playlistItems.some(function(item, index){
			if(item.id.videoId == videoId){
				playlistStore._currentIndex = index;
				playlistStore._currentVideo = item;
			}
			return item.id.videoId == videoId;
		});

		playlistStore.emit(PLAY_EVENT);
	},

	getPlaylist: function(){
		return playlistStore._playlist;
	},

	getItems: function(){
		return playlistStore._playlistItems;
	},

	getCurrentIndex(){
		return playlistStore._currentIndex;
	},

	getCurrentVideo(){
		return playlistStore._currentVideo;
	},

	dispatcherIndex: AppDispatcher.register(function(payload){
		let action = payload.action;
		playlistStore.initialize();
		switch (action.actionType) {
			case FETCH_PLAYLIST:
				playlistStore.fetchPlaylist(action.data.artist);
				break;
			case PLAY_VIDEO:
				playlistStore.playVideo(action.data.videoId);
				break;
		}
		return true;
	})

});

export default playlistStore;