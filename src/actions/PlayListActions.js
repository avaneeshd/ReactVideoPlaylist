import AppDispatcher from '../utils/AppDispatcher';

const FETCH_PLAYLIST = "FETCH_PLAYLIST";

let playListActions = {
	fetch: function(artistName){
		AppDispatcher.handleViewAction({
			actionType: FETCH_PLAYLIST,
			data: { artist : artistName }
		});
	}
};

export default  playListActions;