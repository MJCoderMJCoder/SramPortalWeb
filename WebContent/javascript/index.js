/**
 * javascript文件
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

function imgSelector(a) { /* 图片选择器 */
	if (a == 1) {
		document.getElementById("newsBig").innerHTML = '<marquee behavior="alternate" direction="left" loop="-1" scrollamount="566" scrolldelay="1500" onmouseover="this.stop()" onmouseout="this.start()" name="newsBig"> <img src="images/infoSafety2.jpg" longdesc="信息安全" /> <img src="images/JavaCourse.jpg" longdesc="Java课程培训" /> <img src="images/UIDesign.jpg" longdesc="UI界面设计" /></marquee>';
	} else if (a == 2) {
		document.getElementById("newsBig").innerHTML = '<marquee behavior="alternate" direction="left" loop="-1" scrollamount="566" scrolldelay="1500" onmouseover="this.stop()" onmouseout="this.start()" name="newsBig"> <img src="images/JavaCourse.jpg" longdesc="Java课程培训" /> <img src="images/UIDesign.jpg" longdesc="UI界面设计" /><img src="images/infoSafety2.jpg" longdesc="信息安全" /> </marquee>';
	} else if (a == 3) {
		document.getElementById("newsBig").innerHTML = '<marquee behavior="alternate" direction="left" loop="-1" scrollamount="566" scrolldelay="1500" onmouseover="this.stop()" onmouseout="this.start()" name="newsBig"> <img src="images/UIDesign.jpg" longdesc="UI界面设计" /> <img src="images/infoSafety2.jpg" longdesc="信息安全" /> <img src="images/JavaCourse.jpg" longdesc="Java课程培训" /></marquee>';
	} else {
		alert("jQuery引用出错");
	}
}

function login() { // 登录界面显示
	var login = document.getElementById("loginDiv");
	login.innerHTML = '<div id="login"></div><form action="" method="post"><table id="loginTable" width="260" cellspacing="10"><tr><td width="25%" nowrap="nowrap">学员登录</td><td align="right" nowrap="nowrap"><label style="cursor: pointer" onclick="closeLogin()">关闭</label></td></tr><tr><td align="right" nowrap="nowrap">帐号：</td><td nowrap="nowrap"><input type = "text" name = "stuId" id="stuId" maxlength="14" onblur=""/><b style="color: red;">* &nbsp;</b></td></tr><tr><td align="right" nowrap="nowrap">密码：</td><td nowrap="nowrap"><input type = "password" id="password" name="password" maxlength="20"/><b style="color: red;">* &nbsp;</b></td></tr><tr><td align="center" nowrap="nowrap" colspan="2"><a href="register.jsp" target="_blank">免费注册</a>&nbsp;&nbsp;&nbsp;<a href="#">忘记密码</a></td></tr><tr><td align="center" nowrap="nowrap" colspan="2"><input type="button" id="loginButton" onclick="checkLogin()" value="登 录"/>&nbsp;&nbsp;&nbsp;<input type = "reset" value="重 置"/></td></tr></table></form>';
	document.getElementById("login").style.display = "block";
	document.getElementById("loginTable").style.display = "block";
}

function closeLogin() { // 关闭登录界面
	document.getElementById("login").style.display = "none";
	document.getElementById("loginTable").style.display = "none";
}

function checkLogin() {
	var stuId = document.getElementById("stuId").value;
	var password = document.getElementById("password").value;
	var stuIdRegexp = new RegExp("\\d{14}"); // 账号的正则表达式
	if (password != null && password != "" && stuIdRegexp.test(stuId)) {

		var url = window.location.href.substring(0, window.location.href
				.lastIndexOf("/"))
				+ "/loginStudent"; // post的url
		xmlHttp = GetXmlHttpObject(); // 获取XMLHttpRequest 对象
		xmlHttp.onreadystatechange = function() {
			if (xmlHttp.readyState == 4) {
				// 4：请求已完成（可以访问服务器响应并使用它）从服务器的response获得数据
				if ((xmlHttp.responseText) == "OK") {
					document.getElementById("login").style.display = "none";
					document.getElementById("loginTable").style.display = "none";
					window.location.reload();
				} else if ((xmlHttp.responseText) == "stuIdNo") {
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
		xmlHttp.send("stuId=" + encodeURI(encodeURI(stuId)) + "&password="
				+ encodeURI(encodeURI(password)));
	} else if (!(stuIdRegexp.test(stuId))) {
		alert("账号格式不正确，请重新输入");
	} else if (password == "" || password == null) {
		alert("请输入密码");
	} else {
		alert("登录信息有误，请重新输入");
	}
}

function studentInfo() {
	window.location.replace("studentInfo.jsp");
}

function studentExit() {
	var r = confirm("确定要退出吗？")
	if (r == true) {
		var url = window.location.href.substring(0, window.location.href
				.lastIndexOf("/"))
				+ "/loginStudent"; // post的url
		xmlHttp = GetXmlHttpObject(); // 获取XMLHttpRequest 对象
		xmlHttp.onreadystatechange = function() {
			if (xmlHttp.readyState == 4) {
				// 4：请求已完成（可以访问服务器响应并使用它）从服务器的response获得数据
				window.location.reload();
			}
		}
		xmlHttp.open("GET", url, true);
		xmlHttp.send(null);
	}
}
