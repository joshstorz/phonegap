function checkLogin() {
	var userHash = window.localStorage.getItem("userHash");
	$.ajax({
		method : "POST",
		url : "http://50.57.87.125/pluggs/static_login.php",
		data : "userHash=" + userHash
	}).done(function(msg) {
		if (msg.indexOf("loggedIn") > -1) {
			return true ;
		} else {
			window.location = 'login.html' ;
			return false ;
		}
	});
}
