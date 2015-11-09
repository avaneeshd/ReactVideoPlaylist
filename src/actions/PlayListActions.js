import AppDispatcher from '../utils/AppDispatcher';

const FETCH_PLAYLIST = "FETCH_PLAYLIST";
const PLAY_VIDEO = "PLAY_VIDEO";
let playListActions = {
	fetch: function(artistName){
		AppDispatcher.handleViewAction({
			actionType: FETCH_PLAYLIST,
			data: { artist : artistName }
		});
	},

	play: function(videoId){
		AppDispatcher.handleViewAction({
			actionType: PLAY_VIDEO,
			data: { videoId : videoId }
		});
	}
};

export default  playListActions;