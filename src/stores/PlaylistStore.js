
import AppDispatcher from '../utils/AppDispatcher';
import {EventEmitter} from 'events';
import assign from 'object-assign';
import http from 'http';
import Youtube from 'youtube-node';
import Constants from '../utils/Constants';
/**
 * PlayList Store
 * Functions to perform actions on playlists:
 *
 * fetchPlaylist: fetches playlist form youtube search API
 * playVideo: triggers event to play selected video
 */
let playlistStore = assign({}, EventEmitter.prototype , {

	_playlistItems: [],
	_playlist: [],
	_currentIndex: 0,
	_currentVideo: null,
	_currentArtist: null,

	youTube: new Youtube(),

	initialize :function (){
		//set API key
		this.youTube.setKey(Constants.Youtube.YOUTUBE_API_KEY);
	},

	fetchPlaylist: function(artistName, serverCallback){
		playlistStore.initialize();
		if(artistName) {
			this._currentArtist = artistName;
			//Load Youtube search results
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
						playlistStore.emit(Constants.Events.CHANGE_EVENT);
					}
				}
				if(serverCallback){
					//Call server callback with fetched data
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

		playlistStore.emit(Constants.Events.PLAY_EVENT);
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

	getCurrentArtist(){
		return playlistStore._currentArtist;
	},

	dispatcherIndex: AppDispatcher.register(function(payload){
		let action = payload.action;
		playlistStore.initialize();
		switch (action.actionType) {
			case Constants.Actions.FETCH_PLAYLIST:
				playlistStore.fetchPlaylist(action.data.artist);
				break;
			case Constants.Actions.PLAY_VIDEO:
				playlistStore.playVideo(action.data.videoId);
				break;
		}
		return true;
	})

});

export default playlistStore;