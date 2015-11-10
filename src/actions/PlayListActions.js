import AppDispatcher from '../utils/AppDispatcher';
import Constants from '../utils/Constants';

/**
 * Module to dispatch playlist related actions
 * @type {{fetch: Function, play: Function}}
 */


let playListActions = {

	fetch: function(artistName){
		AppDispatcher.handleViewAction({
			actionType: Constants.Actions.FETCH_PLAYLIST,
			data: { artist : artistName }
		});
	},

	play: function(videoId){
		AppDispatcher.handleViewAction({
			actionType: Constants.Actions.PLAY_VIDEO,
			data: { videoId : videoId }
		});
	}
};

export default  playListActions;