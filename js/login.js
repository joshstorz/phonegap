function checkLogin() {
	var userHash = window.localStorage.getItem("userHash");
	if (userHash === null) {
		window.location = 'login.html' ;
	}
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

function replaceAll() {
	var userName = window.localStorage.getItem("userName");
	var userId = window.localStorage.getItem("userId");
	var regDate = window.localStorage.getItem("regDate");
    document.body.innerHTML = document.body.innerHTML
      .replace(new RegExp('_USERNAME_', "g"), userName)
      .replace(new RegExp('_USERID_', "g"), userId)
      .replace(new RegExp('_REGDATE_', "g"), regDate)
    ;
}
