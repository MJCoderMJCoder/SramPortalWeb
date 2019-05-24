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

function verifyCourse(a) { // ��֤�γ���Ϣ��verify����ʵ����֤���Ƿ�����ύ��
	var editor = $('#courseIntro').xheditor(); // ��ȡxheditor�༭��
	var courseIntro = editor.getSource(); // ��ȡ�γ����飨�༭���е�ֵ��

	var courseName = document.getElementById("courseName").value.trim(); // ��ȡ�γ�����
	var courseSystem = document.getElementById("courseSystem").value.trim(); // ��ȡ�γ���ϵ
	var jobDirection = document.getElementById("jobDirection").value.trim(); // ��ȡ��ҵ����
	var imageLong = document.getElementById("courseImage").value.trim(); // ͼƬ��ʽ�У�jpg��png��gif
	var courseImage = imageLong.substring(imageLong.lastIndexOf("\\") + 1); // ��ȡͼƬ��

	if (a.trim() == "submit") {
		if (courseName != null
				&& courseSystem != null
				&& jobDirection != null
				&& courseImage != null
				&& courseIntro != null
				&& courseName != ""
				&& courseSystem != ""
				&& jobDirection != ""
				&& courseImage != ""
				&& courseIntro != ""
				&& (courseName.indexOf("������")) < 0
				&& (courseImage.indexOf(".jpg") >= 0
						|| courseImage.indexOf(".png") >= 0 || courseImage
						.indexOf(".gif") >= 0)) {
			document.getElementById("button").type = "submit";
		} else {
			alert("�����ƿγ̵������Ϣ");
		}
	} else if (a.trim() == "courseName") {
		if (courseName == null || courseName == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�γ����Ʋ���Ϊ��";
		} else if ((courseName.indexOf("������")) >= 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�γ����Ƹ�ʽ����ȷ";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "courseSystem") {
		if (courseSystem == null || courseSystem == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�γ���ϵ����Ϊ��";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "jobDirection") {
		if (jobDirection == null || jobDirection == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��ҵ������Ϊ��";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "courseImage") {
		if (courseImage == null || courseImage == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�γ�ͼƬ����Ϊ�գ�ͼƬ��ʽ��jpg��png��gif��";
		} else if (courseImage.indexOf(".jpg") < 0
				&& courseImage.indexOf(".png") < 0
				&& courseImage.indexOf(".gif") < 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�γ�ͼƬ��ʽ��jpg��png��gif������ȷ";
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

function queriesCourse(url) { // �������ѯ����ѯ�γ���Ϣ
	var courseId = document.getElementById("courseId").value.trim();
	var courseName = document.getElementById("courseName").value.trim();
	var courseIntro = document.getElementById("courseIntro").value.trim();
	var courseSystem = document.getElementById("courseSystem").value.trim();
	var jobDirection = document.getElementById("jobDirection").value.trim();

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
	xmlHttp.send("courseId=" + encodeURI(encodeURI(courseId)) + "&courseName="
			+ encodeURI(encodeURI(courseName)) + "&courseIntro="
			+ encodeURI(encodeURI(courseIntro)) + "&courseSystem="
			+ encodeURI(encodeURI(courseSystem)) + "&jobDirection="
			+ encodeURI(encodeURI(jobDirection)));
}

function deleteCourse(url) { // ɾ���γ���Ϣ
	var r = confirm("��ȷ��Ҫɾ��ô��ɾ���󲻿ɳ��أ�");
	if (r == true) {
		var courseId = document.getElementById("courseId").value.trim();
		var courseName = document.getElementById("courseName").value.trim();
		var courseIntro = document.getElementById("courseIntro").value.trim();
		var courseSystem = document.getElementById("courseSystem").value.trim();
		var jobDirection = document.getElementById("jobDirection").value.trim();

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
		xmlHttp.send("courseId=" + encodeURI(encodeURI(courseId))
				+ "&courseName=" + encodeURI(encodeURI(courseName))
				+ "&courseIntro=" + encodeURI(encodeURI(courseIntro))
				+ "&courseSystem=" + encodeURI(encodeURI(courseSystem))
				+ "&jobDirection=" + encodeURI(encodeURI(jobDirection)));
	} else {

	}
}

/**
 * verifyCourseUpdate(a)��courseUpdate.jspר�ã���֤��Ҫ���ݣ�
 * ͼƬ����Ϊ�գ������Բ��ϴ�ͼƬ������Ҫ�����ϴ��Ļ���ͼƬ��ʽ������ȷ�� �������Ϊ��
 */
function verifyCourseUpdate(a) { // courseUpdate.jspר�ã���֤�γ̣�verify����ʵ����֤���Ƿ�����ύ��
	var editor = $('#courseIntro').xheditor(); // ��ȡxheditor�༭��
	var courseIntro = editor.getSource(); // ��ȡ�γ����飨�༭���е�ֵ��

	var courseName = document.getElementById("courseName").value.trim(); // ��ȡ�γ�����
	var courseSystem = document.getElementById("courseSystem").value.trim(); // ��ȡ�γ���ϵ
	var jobDirection = document.getElementById("jobDirection").value.trim(); // ��ȡ��ҵ����
	var imageLong = document.getElementById("courseImage").value.trim(); // ͼƬ��ʽ�У�jpg��png��gif
	var courseImage = imageLong.substring(imageLong.lastIndexOf("\\") + 1); // ��ȡͼƬ��

	var courseImageHint = document.getElementById("courseImageHint").innerHTML; // ��ȡͼƬ�����ʾ��Ϣ
	if (a.trim() == "submit") {
		if (courseName != null
				&& courseSystem != null
				&& jobDirection != null
				&& courseIntro != null
				&& courseName != ""
				&& courseSystem != ""
				&& jobDirection != ""
				&& courseIntro != ""
				&& (courseImage == null || courseImage == ""
						|| courseImage.indexOf(".jpg") >= 0
						|| courseImage.indexOf(".png") >= 0 || courseImage
						.indexOf(".gif") >= 0)) {
			document.getElementById("button").type = "submit";
		} else {
			alert("�����ƿγ̵������Ϣ");
		}
	} else if (a.trim() == "courseName") {
		if (courseName == null || courseName == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�γ����Ʋ���Ϊ��";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "courseSystem") {
		if (courseSystem == null || courseSystem == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�γ���ϵ����Ϊ��";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "jobDirection") {
		if (jobDirection == null || jobDirection == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��ҵ������Ϊ��";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "courseImage") {
		if (courseImage == null || courseImage == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else if (courseImage.indexOf(".jpg") < 0
				&& courseImage.indexOf(".png") < 0
				&& courseImage.indexOf(".gif") < 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�γ�ͼƬ��ʽ��jpg��png��gif������ȷ";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	}
}

/**
 * ��ʾ����ľ�ȷ�������ܻ����ظ���ľ�ȷ�����Ĺ��� display="table-row"����Ԫ�ػ���Ϊһ���������ʾ������
 * <tr>����
 */
function moreSearch(a) {
	var imgSrc = document.getElementById("moreImg").src;
	if (imgSrc.indexOf("unfold.jpg") >= 0) { // unfold��չ��������Ѿ������ˣ���չ��
		document.getElementById("moreImg").src = a + "/packup.jpg";
		document.getElementById("moreTr").style.display = "table-row";
	} else {
		document.getElementById("courseSystem").value = "";
		document.getElementById("jobDirection").value = "";
		document.getElementById("moreImg").src = a + "/unfold.jpg";
		document.getElementById("moreTr").style.display = "none";
	}
}

function lock() {
	var courseName = document.getElementById("courseName").value.trim(); // ��ȡ��˾������
	if ((courseName.indexOf("������")) < 0) {
		document.getElementById("courseName").value = "������" + courseName;
	}
}