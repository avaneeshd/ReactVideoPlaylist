/**
 * Common utility functions
 */


export default {

	/**
	 * formatDate
	 * Input: @type {{Date}}
	 * Output: @type {{String}} formatted date string
	 */
	formatDate(date){
		if(date) {
			let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
			let d = new Date(date);
			return d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
		}
		return "";
	}
}