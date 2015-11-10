
export default {

	formatDate(date){
		if(date) {
			let d = new Date(date);
			return d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
		}
		return "";
	}
}