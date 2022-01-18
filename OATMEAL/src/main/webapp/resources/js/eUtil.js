/**
 *
 */

let eUtil = {};

eUtil.ISEmpty = function(str){
	if(null != str && undefined != str){
		str = str.toString();
		if(str.replace(/ /gi, "").length == 0) {
			return true;
		}
	}
	return false;
}