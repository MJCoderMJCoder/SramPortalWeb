/**
 * 
 */

function GetXmlHttpObject() { // 获取XMLHttpRequest 对象
	var xmlHttp = null;
	try {
		// Firefox, Opera 8.0+, Safari
		xmlHttp = new XMLHttpRequest();
	} catch (e) {
		// Internet Explorer
		try {
			xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xmlHttp;
}

function checkLogin(role) {
	var idRegexp = new RegExp("\\d{14}"); // 账号的正则表达式
	if (role == "manager") {
		var managerId = document.getElementById("managerId").value;
		var managerPassword = document.getElementById("managerPassword").value;
		if (managerPassword != null && managerPassword != ""
				&& (idRegexp.test(managerId) || managerId == "liuzhifeng")) {
			var url = window.location.href.substring(0, window.location.href
					.indexOf("backstage"))
					+ "loginManager"; // post的url
			var replaceUrl = window.location.href.substring(0,
					window.location.href.indexOf("backstage"))
					+ "manager"; // window.location.replace()的url
			xmlHttp = GetXmlHttpObject(); // 获取XMLHttpRequest 对象
			xmlHttp.onreadystatechange = function() {
				if (xmlHttp.readyState == 4) {
					// 4：请求已完成（可以访问服务器响应并使用它）从服务器的response获得数据
					if ((xmlHttp.responseText) == "OK") {
						window.location.replace(replaceUrl);
					} else if ((xmlHttp.responseText) == "idNo") {
						alert("账号不正确");
					} else if ((xmlHttp.responseText) == "passwordNo") {
						alert("密码不正确");
					}
				}
			}
			xmlHttp.open("POST", url, true);
			xmlHttp.setRequestHeader("Content-type",
					"application/x-www-form-urlencoded");
			// 为了解决ajax传值的中文乱码问题（需要经过encodeURI(URI)转换两次）
			xmlHttp.send("managerId=" + encodeURI(encodeURI(managerId))
					+ "&managerPassword="
					+ encodeURI(encodeURI(managerPassword)));
		} else if (!(idRegexp.test(managerId)) && managerId != "liuzhifeng") {
			alert("账号格式不正确，请重新输入");
		} else if (managerPassword == "" || managerPassword == null) {
			alert("请输入密码");
		} else {
			alert("登录信息有误，请重新输入");
		}
	} else if (role == "teacher") {
		var teacherId = document.getElementById("teacherId").value;
		var teacherPassword = document.getElementById("teacherPassword").value;
		if (teacherPassword != null && teacherPassword != ""
				&& idRegexp.test(teacherId)) {
			var url = window.location.href.substring(0, window.location.href
					.indexOf("backstage"))
					+ "loginTeacher"; // post的url
			var replaceUrl = window.location.href.substring(0,
					window.location.href.indexOf("backstage"))
					+ "teacher"; // window.location.replace()的url
			xmlHttp = GetXmlHttpObject(); // 获取XMLHttpRequest 对象
			xmlHttp.onreadystatechange = function() {
				if (xmlHttp.readyState == 4) {
					// 4：请求已完成（可以访问服务器响应并使用它）从服务器的response获得数据
					if ((xmlHttp.responseText) == "OK") {
						window.location.replace(replaceUrl);
					} else if ((xmlHttp.responseText) == "idNo") {
						alert("账号不正确");
					} else if ((xmlHttp.responseText) == "passwordNo") {
						alert("密码不正确");
					}
				}
			}
			xmlHttp.open("POST", url, true);
			xmlHttp.setRequestHeader("Content-type",
					"application/x-www-form-urlencoded");
			// 为了解决ajax传值的中文乱码问题（需要经过encodeURI(URI)转换两次）
			xmlHttp.send("teacherId=" + encodeURI(encodeURI(teacherId))
					+ "&teacherPassword="
					+ encodeURI(encodeURI(teacherPassword)));
		} else if (!(idRegexp.test(teacherId))) {
			alert("账号格式不正确，请重新输入");
		} else if (teacherPassword == "" || teacherPassword == null) {
			alert("请输入密码");
		} else {
			alert("登录信息有误，请重新输入");
		}
	}
}