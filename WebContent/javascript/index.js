/**
 * javascript�ļ�
 */

function GetXmlHttpObject() { // ��ȡXMLHttpRequest ����
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

function imgSelector(a) { /* ͼƬѡ���� */
	if (a == 1) {
		document.getElementById("newsBig").innerHTML = '<marquee behavior="alternate" direction="left" loop="-1" scrollamount="566" scrolldelay="1500" onmouseover="this.stop()" onmouseout="this.start()" name="newsBig"> <img src="images/infoSafety2.jpg" longdesc="��Ϣ��ȫ" /> <img src="images/JavaCourse.jpg" longdesc="Java�γ���ѵ" /> <img src="images/UIDesign.jpg" longdesc="UI�������" /></marquee>';
	} else if (a == 2) {
		document.getElementById("newsBig").innerHTML = '<marquee behavior="alternate" direction="left" loop="-1" scrollamount="566" scrolldelay="1500" onmouseover="this.stop()" onmouseout="this.start()" name="newsBig"> <img src="images/JavaCourse.jpg" longdesc="Java�γ���ѵ" /> <img src="images/UIDesign.jpg" longdesc="UI�������" /><img src="images/infoSafety2.jpg" longdesc="��Ϣ��ȫ" /> </marquee>';
	} else if (a == 3) {
		document.getElementById("newsBig").innerHTML = '<marquee behavior="alternate" direction="left" loop="-1" scrollamount="566" scrolldelay="1500" onmouseover="this.stop()" onmouseout="this.start()" name="newsBig"> <img src="images/UIDesign.jpg" longdesc="UI�������" /> <img src="images/infoSafety2.jpg" longdesc="��Ϣ��ȫ" /> <img src="images/JavaCourse.jpg" longdesc="Java�γ���ѵ" /></marquee>';
	} else {
		alert("jQuery���ó���");
	}
}

function login() { // ��¼������ʾ
	var login = document.getElementById("loginDiv");
	login.innerHTML = '<div id="login"></div><form action="" method="post"><table id="loginTable" width="260" cellspacing="10"><tr><td width="25%" nowrap="nowrap">ѧԱ��¼</td><td align="right" nowrap="nowrap"><label style="cursor: pointer" onclick="closeLogin()">�ر�</label></td></tr><tr><td align="right" nowrap="nowrap">�ʺţ�</td><td nowrap="nowrap"><input type = "text" name = "stuId" id="stuId" maxlength="14" onblur=""/><b style="color: red;">* &nbsp;</b></td></tr><tr><td align="right" nowrap="nowrap">���룺</td><td nowrap="nowrap"><input type = "password" id="password" name="password" maxlength="20"/><b style="color: red;">* &nbsp;</b></td></tr><tr><td align="center" nowrap="nowrap" colspan="2"><a href="register.jsp" target="_blank">���ע��</a>&nbsp;&nbsp;&nbsp;<a href="#">��������</a></td></tr><tr><td align="center" nowrap="nowrap" colspan="2"><input type="button" id="loginButton" onclick="checkLogin()" value="�� ¼"/>&nbsp;&nbsp;&nbsp;<input type = "reset" value="�� ��"/></td></tr></table></form>';
	document.getElementById("login").style.display = "block";
	document.getElementById("loginTable").style.display = "block";
}

function closeLogin() { // �رյ�¼����
	document.getElementById("login").style.display = "none";
	document.getElementById("loginTable").style.display = "none";
}

function checkLogin() {
	var stuId = document.getElementById("stuId").value;
	var password = document.getElementById("password").value;
	var stuIdRegexp = new RegExp("\\d{14}"); // �˺ŵ�������ʽ
	if (password != null && password != "" && stuIdRegexp.test(stuId)) {

		var url = window.location.href.substring(0, window.location.href
				.lastIndexOf("/"))
				+ "/loginStudent"; // post��url
		xmlHttp = GetXmlHttpObject(); // ��ȡXMLHttpRequest ����
		xmlHttp.onreadystatechange = function() {
			if (xmlHttp.readyState == 4) {
				// 4����������ɣ����Է��ʷ�������Ӧ��ʹ�������ӷ�������response�������
				if ((xmlHttp.responseText) == "OK") {
					document.getElementById("login").style.display = "none";
					document.getElementById("loginTable").style.display = "none";
					window.location.reload();
				} else if ((xmlHttp.responseText) == "stuIdNo") {
					alert("�˺Ų���ȷ");
				} else if ((xmlHttp.responseText) == "passwordNo") {
					alert("���벻��ȷ");
				}
			}
		}
		xmlHttp.open("POST", url, true);
		xmlHttp.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		// Ϊ�˽��ajax��ֵ�������������⣨��Ҫ����encodeURI(URI)ת�����Σ�
		xmlHttp.send("stuId=" + encodeURI(encodeURI(stuId)) + "&password="
				+ encodeURI(encodeURI(password)));
	} else if (!(stuIdRegexp.test(stuId))) {
		alert("�˺Ÿ�ʽ����ȷ������������");
	} else if (password == "" || password == null) {
		alert("����������");
	} else {
		alert("��¼��Ϣ��������������");
	}
}

function studentInfo() {
	window.location.replace("studentInfo.jsp");
}

function studentExit() {
	var r = confirm("ȷ��Ҫ�˳���")
	if (r == true) {
		var url = window.location.href.substring(0, window.location.href
				.lastIndexOf("/"))
				+ "/loginStudent"; // post��url
		xmlHttp = GetXmlHttpObject(); // ��ȡXMLHttpRequest ����
		xmlHttp.onreadystatechange = function() {
			if (xmlHttp.readyState == 4) {
				// 4����������ɣ����Է��ʷ�������Ӧ��ʹ�������ӷ�������response�������
				window.location.reload();
			}
		}
		xmlHttp.open("GET", url, true);
		xmlHttp.send(null);
	}
}
