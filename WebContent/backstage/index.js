/**
 * 
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

function checkLogin(role) {
	var idRegexp = new RegExp("\\d{14}"); // �˺ŵ�������ʽ
	if (role == "manager") {
		var managerId = document.getElementById("managerId").value;
		var managerPassword = document.getElementById("managerPassword").value;
		if (managerPassword != null && managerPassword != ""
				&& (idRegexp.test(managerId) || managerId == "liuzhifeng")) {
			var url = window.location.href.substring(0, window.location.href
					.indexOf("backstage"))
					+ "loginManager"; // post��url
			var replaceUrl = window.location.href.substring(0,
					window.location.href.indexOf("backstage"))
					+ "manager"; // window.location.replace()��url
			xmlHttp = GetXmlHttpObject(); // ��ȡXMLHttpRequest ����
			xmlHttp.onreadystatechange = function() {
				if (xmlHttp.readyState == 4) {
					// 4����������ɣ����Է��ʷ�������Ӧ��ʹ�������ӷ�������response�������
					if ((xmlHttp.responseText) == "OK") {
						window.location.replace(replaceUrl);
					} else if ((xmlHttp.responseText) == "idNo") {
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
			xmlHttp.send("managerId=" + encodeURI(encodeURI(managerId))
					+ "&managerPassword="
					+ encodeURI(encodeURI(managerPassword)));
		} else if (!(idRegexp.test(managerId)) && managerId != "liuzhifeng") {
			alert("�˺Ÿ�ʽ����ȷ������������");
		} else if (managerPassword == "" || managerPassword == null) {
			alert("����������");
		} else {
			alert("��¼��Ϣ��������������");
		}
	} else if (role == "teacher") {
		var teacherId = document.getElementById("teacherId").value;
		var teacherPassword = document.getElementById("teacherPassword").value;
		if (teacherPassword != null && teacherPassword != ""
				&& idRegexp.test(teacherId)) {
			var url = window.location.href.substring(0, window.location.href
					.indexOf("backstage"))
					+ "loginTeacher"; // post��url
			var replaceUrl = window.location.href.substring(0,
					window.location.href.indexOf("backstage"))
					+ "teacher"; // window.location.replace()��url
			xmlHttp = GetXmlHttpObject(); // ��ȡXMLHttpRequest ����
			xmlHttp.onreadystatechange = function() {
				if (xmlHttp.readyState == 4) {
					// 4����������ɣ����Է��ʷ�������Ӧ��ʹ�������ӷ�������response�������
					if ((xmlHttp.responseText) == "OK") {
						window.location.replace(replaceUrl);
					} else if ((xmlHttp.responseText) == "idNo") {
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
			xmlHttp.send("teacherId=" + encodeURI(encodeURI(teacherId))
					+ "&teacherPassword="
					+ encodeURI(encodeURI(teacherPassword)));
		} else if (!(idRegexp.test(teacherId))) {
			alert("�˺Ÿ�ʽ����ȷ������������");
		} else if (teacherPassword == "" || teacherPassword == null) {
			alert("����������");
		} else {
			alert("��¼��Ϣ��������������");
		}
	}
}