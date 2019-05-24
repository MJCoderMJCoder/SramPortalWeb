/**
 * newsType() �÷���ֻ�����޸�����ʱ�����޸�ҳ������Ӧ�Ŀ���
 */
function newsNameType() { // ������ű���Ϊ��������Ƹ��������ⲻ�ɸ��ģ�����Ļ������޸����ű���
	var newsName = document.getElementById("newsName").value;
	if (newsName == "������Ƹ") {
		document.getElementById("newsName").readOnly = true;
	} else {
		document.getElementById("newsName").readOnly = false;
	}
}

function newsTypeChange(objId) { // ���������͸ı�ʱ���ԡ��������ҳ�桱����Ӧ�ı�
	var selObj = document.getElementById(objId);
	var optionValue = selObj.options[selObj.selectedIndex].value.trim();
	if (optionValue == "������Ƹ") {
		document.getElementById("newsName").value = "������Ƹ";
		document.getElementById("newsName").readOnly = true;
		document.getElementById("newsNameHint").innerHTML = "*";
	} else {
		document.getElementById("newsName").value = "";
		document.getElementById("newsName").readOnly = false;
		document.getElementById("newsNameHint").innerHTML = "*���ű��ⲻ��Ϊ��";
	}
}

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

function verifyNews(a) { // ��֤��˾��飨verify����ʵ����֤���Ƿ�����ύ��
	var editor = $('#newsIntro').xheditor(); // ��ȡxheditor�༭��
	var newsIntro = editor.getSource(); // ��ȡ��˾������飨�༭���е�ֵ��

	var selObj = document.getElementById("newsType"); // ��ȡnewsType�����������ͣ��Ķ���
	var newsType = selObj.options[selObj.selectedIndex].value.trim(); // ��ȡnewsType(����������)��ֵ
	var newsName = document.getElementById("newsName").value.trim(); // ��ȡ��˾������
	var imageLong = document.getElementById("newsImage").value.trim(); // ͼƬ��ʽ�У�jpg��png��gif
	var newsImage = imageLong.substring(imageLong.lastIndexOf("\\") + 1); // ��ȡͼƬ��

	if (a.trim() == "submit") {
		if (newsImage != null
				&& newsIntro != null
				&& newsImage != ""
				&& newsIntro != ""
				&& (newsName.indexOf("������")) < 0
				&& ((newsType == "һ������" && newsName != "������Ƹ" && newsName != "" && newsName != null) || (newsType == "������Ƹ" && newsName == "������Ƹ"))
				&& (newsImage.indexOf(".jpg") >= 0
						|| newsImage.indexOf(".png") >= 0 || newsImage
						.indexOf(".gif") >= 0)) {
			document.getElementById("button").type = "submit";
		} else {
			alert("���������ŵ������Ϣ");
		}
	} else if (a.trim() == "newsName") {
		if (newsType == "������Ƹ") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else {
			if (newsName == null || newsName == "") {
				document.getElementById(a.trim() + "Hint").innerHTML = "*���ű��ⲻ��Ϊ��";
			} else if (newsName == "������Ƹ") {
				document.getElementById(a.trim() + "Hint").innerHTML = "*һ�����ŵı��ⲻ��Ϊ\"������Ƹ\"";
			} else if ((newsName.indexOf("������")) >= 0) {
				document.getElementById(a.trim() + "Hint").innerHTML = "*һ�����ŵı����ʽ����ȷ";
			} else {
				document.getElementById(a.trim() + "Hint").innerHTML = "*";
			}
		}
	} else if (a.trim() == "newsImage") {
		if (newsImage == null || newsImage == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*����ͼƬ����Ϊ�գ�ͼƬ��ʽ��jpg��png��gif��";
		} else if (newsImage.indexOf(".jpg") < 0
				&& newsImage.indexOf(".png") < 0
				&& newsImage.indexOf(".gif") < 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*����ͼƬ��ʽ��jpg��png��gif������ȷ";
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

function queriesNews(url) { // �������ѯ����ѯ��˾�����Ϣ
	var newsId = document.getElementById("newsId").value.trim();
	var newsName = document.getElementById("newsName").value.trim();
	var newsIntro = document.getElementById("newsIntro").value.trim();
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
	xmlHttp.send("newsId=" + encodeURI(encodeURI(newsId)) + "&newsName="
			+ encodeURI(encodeURI(newsName)) + "&newsIntro="
			+ encodeURI(encodeURI(newsIntro)));
}

function deleteNews(url) { // ɾ����˾�����Ϣ
	var r = confirm("��ȷ��Ҫɾ��ô��ɾ���󲻿ɳ��أ�");
	if (r == true) {
		var newsId = document.getElementById("newsId").value.trim();
		var newsName = document.getElementById("newsName").value.trim();
		var newsIntro = document.getElementById("newsIntro").value.trim();

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
		xmlHttp.send("newsId=" + encodeURI(encodeURI(newsId)) + "&newsName="
				+ encodeURI(encodeURI(newsName)) + "&newsIntro="
				+ encodeURI(encodeURI(newsIntro)));
	} else {

	}
}

/**
 * verifyNewsUpdate(a)��newsUpdate.jspר�ã���֤��Ҫ���ݣ�
 * ͼƬ����Ϊ�գ������Բ��ϴ�ͼƬ������Ҫ�����ϴ��Ļ���ͼƬ��ʽ������ȷ�� �������Ϊ��
 */
function verifyNewsUpdate(a) { // newsUpdate.jspר�ã���֤��˾��飨verify����ʵ����֤���Ƿ�����ύ��
	var editor = $('#newsIntro').xheditor(); // ��ȡxheditor�༭��
	var newsIntro = editor.getSource(); // ��ȡ��˾������飨�༭���е�ֵ��

	var newsName = document.getElementById("newsName").value.trim(); // ��ȡ��˾������
	var imageLong = document.getElementById("newsImage").value.trim(); // ע�⣺ͼƬ��ʽ�У�jpg��png��gif
	var newsImage = imageLong.substring(imageLong.lastIndexOf("\\") + 1); // ��ȡͼƬ��

	var newsImageHint = document.getElementById("newsImageHint").innerHTML; // ��ȡͼƬ�����ʾ��Ϣ

	if (a.trim() == "submit") {
		if (newsName != null
				&& newsIntro != null
				&& newsName != ""
				&& newsIntro != ""
				&& (newsImage == null || newsImage == ""
						|| newsImage.indexOf(".jpg") >= 0
						|| newsImage.indexOf(".png") >= 0 || newsImage
						.indexOf(".gif") >= 0)) {
			document.getElementById("button").type = "submit";
		} else {
			alert("������ϣ���������Ϣ");
		}
	} else if (a.trim() == "newsName") {
		if (newsName == null || newsName == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*���ű��ⲻ��Ϊ��";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "newsImage") {
		if (newsImage == null || newsImage == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else if (newsImage.indexOf(".jpg") < 0
				&& newsImage.indexOf(".png") < 0
				&& newsImage.indexOf(".gif") < 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*����ͼƬ��ʽ��jpg��png��gif������ȷ";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	}
}

function lock() {
	var newsName = document.getElementById("newsName").value.trim(); // ��ȡ��˾������
	if ((newsName.indexOf("������")) < 0) {
		document.getElementById("newsName").value = "������" + newsName;
	}
}