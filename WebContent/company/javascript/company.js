/**
 * 
 */

function packupOrUnfold(dt, srcImage) { // ���𵼺���orչ��������
	var imgSrc = document.getElementById(dt + "Img").src;
	if (imgSrc.indexOf("unfold.jpg") >= 0) { // unfold��չ��������Ѿ������ˣ���չ��
		document.getElementById(dt + "Img").src = srcImage + "/packup.jpg";
		if (dt == "student") {
			document.getElementById(dt + "Manager").style.display = "block";
		} else {
			document.getElementById(dt + "Add").style.display = "block";
			document.getElementById(dt + "Manager").style.display = "block";
		}
	} else {
		document.getElementById(dt + "Img").src = srcImage + "/unfold.jpg";
		if (dt == "student") {
			document.getElementById(dt + "Manager").style.display = "none";
		} else {
			document.getElementById(dt + "Add").style.display = "none";
			document.getElementById(dt + "Manager").style.display = "none";
		}
	}
}

function verifyCompany(a) { // ��֤��˾��飨verify����ʵ����֤���Ƿ�����ύ��
	var editor = $('#companyIntro').xheditor(); // ��ȡxheditor�༭��
	var companyIntro = editor.getSource(); // ��ȡ��˾������飨�༭���е�ֵ��

	var companyName = document.getElementById("companyName").value.trim(); // ��ȡ��˾������
	var imageLong = document.getElementById("companyImage").value.trim(); // ͼƬ��ʽ�У�jpg��png��gif
	var companyImage = imageLong.substring(imageLong.lastIndexOf("\\") + 1); // ��ȡͼƬ��

	if (a.trim() == "submit") {
		if (companyName != null
				&& companyImage != null
				&& companyIntro != null
				&& companyName != ""
				&& companyImage != ""
				&& companyIntro != ""
				&& (companyName.indexOf("������")) < 0
				&& (companyImage.indexOf(".jpg") >= 0
						|| companyImage.indexOf(".png") >= 0 || companyImage
						.indexOf(".gif") >= 0)) {
			document.getElementById("button").type = "submit";
		} else {
			alert("�����ƹ�˾���������Ϣ");
		}
	} else if (a.trim() == "companyName") {
		if (companyName == null || companyName == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��˾�����ⲻ��Ϊ��";
		} else if ((companyName.indexOf("������")) >= 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��˾�������ʽ����ȷ";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "companyImage") {
		if (companyImage == null || companyImage == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��˾���ͼƬ����Ϊ�գ�ͼƬ��ʽ��jpg��png��gif��";
		} else if (companyImage.indexOf(".jpg") < 0
				&& companyImage.indexOf(".png") < 0
				&& companyImage.indexOf(".gif") < 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��˾���ͼƬ��ʽ��jpg��png��gif������ȷ";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	}
}

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

function queriesCompany(url) { // �������ѯ����ѯ��˾�����Ϣ
	var companyId = document.getElementById("companyId").value.trim();
	var companyName = document.getElementById("companyName").value.trim();
	var companyIntro = document.getElementById("companyIntro").value.trim();
	xmlHttp = GetXmlHttpObject(); // ��ȡXMLHttpRequest ����
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4) { // 4����������ɣ����Է��ʷ�������Ӧ��ʹ�������ӷ�������response�������
			document.getElementById("searchResult").innerHTML = xmlHttp.responseText;
		} else {
			document.getElementById("searchResult").innerHTML = '<tr><td align="center" valign="middle" nowrap="nowrap"><img src="images/loading.gif" alt="������" longdesc="������"></td></tr>';
		}
	}
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	// Ϊ�˽��ajax��ֵ�������������⣨��Ҫ����encodeURI(URI)ת�����Σ�
	xmlHttp.send("companyId=" + encodeURI(encodeURI(companyId))
			+ "&companyName=" + encodeURI(encodeURI(companyName))
			+ "&companyIntro=" + encodeURI(encodeURI(companyIntro)));
}

function deleteCompany(url) { // ɾ����˾�����Ϣ
	var r = confirm("��ȷ��Ҫɾ��ô��ɾ���󲻿ɳ��أ�");
	if (r == true) {
		var companyId = document.getElementById("companyId").value.trim();
		var companyName = document.getElementById("companyName").value.trim();
		var companyIntro = document.getElementById("companyIntro").value.trim();

		xmlHttp = GetXmlHttpObject(); // ��ȡXMLHttpRequest ����
		xmlHttp.onreadystatechange = function() {
			if (xmlHttp.readyState == 4) { // 4����������ɣ����Է��ʷ�������Ӧ��ʹ�������ӷ�������response�������
				if (((xmlHttp.responseText).indexOf("��¼֮��ž�����Ӧ�ķ���Ȩ��")) >= 0
						&& ((xmlHttp.responseText).indexOf("/backstage")) >= 0) {
					window.top.location.reload();
				} else {
					document.getElementById("searchResult").innerHTML = xmlHttp.responseText;
				}
			} else {
				document.getElementById("searchResult").innerHTML = '<tr><td align="center" valign="middle" nowrap="nowrap"><img src="images/loading.gif" alt="������" longdesc="������"></td></tr>';
			}
		}
		xmlHttp.open("POST", url, true);
		xmlHttp.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		// Ϊ�˽��ajax��ֵ�������������⣨��Ҫ����encodeURI(URI)ת�����Σ�
		xmlHttp.send("companyId=" + encodeURI(encodeURI(companyId))
				+ "&companyName=" + encodeURI(encodeURI(companyName))
				+ "&companyIntro=" + encodeURI(encodeURI(companyIntro)));
	} else {

	}
}

/**
 * verifyCompanyUpdate(a)��companyUpdate.jspר�ã���֤��Ҫ���ݣ�
 * ͼƬ����Ϊ�գ������Բ��ϴ�ͼƬ������Ҫ�����ϴ��Ļ���ͼƬ��ʽ������ȷ�� �������Ϊ��
 */
function verifyCompanyUpdate(a) { // companyUpdate.jspר�ã���֤��˾��飨verify����ʵ����֤���Ƿ�����ύ��
	var editor = $('#companyIntro').xheditor(); // ��ȡxheditor�༭��
	var companyIntro = editor.getSource(); // ��ȡ��˾������飨�༭���е�ֵ��

	var companyName = document.getElementById("companyName").value.trim(); // ��ȡ��˾������
	var imageLong = document.getElementById("companyImage").value.trim(); // ע�⣺ͼƬ��ʽ�У�jpg��png��gif
	var companyImage = imageLong.substring(imageLong.lastIndexOf("\\") + 1); // ��ȡͼƬ��

	var companyImageHint = document.getElementById("companyImageHint").innerHTML; // ��ȡͼƬ�����ʾ��Ϣ

	if (a.trim() == "submit") {
		if (companyName != null
				&& companyIntro != null
				&& companyName != ""
				&& companyIntro != ""
				&& (companyImage == null || companyImage == ""
						|| companyImage.indexOf(".jpg") >= 0
						|| companyImage.indexOf(".png") >= 0 || companyImage
						.indexOf(".gif") >= 0)) {
			document.getElementById("button").type = "submit";
		} else {
			alert("�����ƹ�˾���������Ϣ");
		}
	} else if (a.trim() == "companyName") {
		if (companyName == null || companyName == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��˾�����ⲻ��Ϊ��";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "companyImage") {
		if (companyImage == null || companyImage == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else if (companyImage.indexOf(".jpg") < 0
				&& companyImage.indexOf(".png") < 0
				&& companyImage.indexOf(".gif") < 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��˾���ͼƬ��ʽ��jpg��png��gif������ȷ";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	}
}

function lock() {
	var companyName = document.getElementById("companyName").value.trim(); // ��ȡ��˾������
	if ((companyName.indexOf("������")) < 0) {
		document.getElementById("companyName").value = "������" + companyName;
	}
}