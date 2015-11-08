import {Dispatcher} from 'flux';
import assign from "object-assign";

var AppDispatcher = assign({}, new Dispatcher() , Dispatcher.prototype,  {

	handleViewAction : function (action){
		this.dispatch({
			source:'VIEW_ACTION',
			action: action
		});
	}
});


export default AppDispatcher;
