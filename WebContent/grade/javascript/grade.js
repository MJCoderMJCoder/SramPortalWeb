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

function verifyGrade(a) { // ��֤�γ���Ϣ��verify����ʵ����֤���Ƿ�����ύ��
	var gradeName = document.getElementById("gradeName").value.trim(); // ��ȡ�༶����
	var gradeCount = document.getElementById("gradeCount").value.trim(); // ��ȡ�༶����
	var regexTwo = new RegExp("\\d\\d"); // ��֤��λ����������ʽ
	var regexOne = new RegExp("[1-9]"); // ��֤һλ����������ʽ
	if (a.trim() == "submit") {
		if (gradeName != null
				&& gradeName != ""
				&& (gradeName.indexOf("������")) < 0
				&& ((gradeCount.length == 1 && gradeCount.match(regexOne)) || (gradeCount.length == 2
						&& gradeCount.match(regexTwo) && gradeCount > 0))) {
			document.getElementById("button").type = "submit";
		} else {
			alert("�����ư༶�������Ϣ");
		}
	} else if (a.trim() == "gradeName") {
		if (gradeName == null || gradeName == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�༶���Ʋ���Ϊ��";
		} else if ((gradeName.indexOf("������")) >= 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�༶���Ƹ�ʽ����ȷ";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "gradeCount") {
		if (gradeCount == null || gradeCount == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�༶��������Ϊ��";
		} else if (gradeCount.length == 1 && gradeCount.match(regexOne)) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else if (gradeCount.length == 2 && gradeCount.match(regexTwo)
				&& gradeCount > 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�༶����Ϊ������";
		}
	}
}

function verifyGradeUpdate(a) { // ��֤�γ���Ϣ��verify����ʵ����֤���Ƿ�����ύ��
	var gradeName = document.getElementById("gradeName").value.trim(); // ��ȡ�༶����
	var gradeCount = document.getElementById("gradeCount").value.trim(); // ��ȡ�༶����
	var regexTwo = new RegExp("\\d\\d"); // ��֤��λ����������ʽ
	var regexOne = new RegExp("[1-9]"); // ��֤һλ����������ʽ
	if (a.trim() == "submit") {
		if (gradeName != null
				&& gradeName != ""
				&& ((gradeCount.length == 1 && gradeCount.match(regexOne)) || (gradeCount.length == 2
						&& gradeCount.match(regexTwo) && gradeCount > 0))) {
			document.getElementById("button").type = "submit";
		} else {
			alert("�����ư༶�������Ϣ");
		}
	} else if (a.trim() == "gradeName") {
		if (gradeName == null || gradeName == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�༶���Ʋ���Ϊ��";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "gradeCount") {
		if (gradeCount == null || gradeCount == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�༶��������Ϊ��";
		} else if (gradeCount.length == 1 && gradeCount.match(regexOne)) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else if (gradeCount.length == 2 && gradeCount.match(regexTwo)
				&& gradeCount > 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�༶����Ϊ������";
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

function queriesGrade(url) { // �������ѯ����ѯ�༶��Ϣ
	var gradeId = document.getElementById("gradeId").value.trim();
	var gradeName = document.getElementById("gradeName").value.trim();
	var gradeCount = document.getElementById("gradeCount").value.trim(); // �༶����
	var gradeCourseName = document.getElementById("gradeCourseName").value
			.trim(); // �༶�γ�����
	var gradeCourseSystem = document.getElementById("gradeCourseSystem").value
			.trim(); // �༶�γ���ϵ
	var gradeCourseJob = document.getElementById("gradeCourseJob").value.trim(); // �༶�γ̾�ҵ����
	var gradeCourseDetail = document.getElementById("gradeCourseDetail").value
			.trim(); // �༶�γ�����

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
	xmlHttp.send("gradeId=" + encodeURI(encodeURI(gradeId)) + "&gradeName="
			+ encodeURI(encodeURI(gradeName)) + "&gradeCount="
			+ encodeURI(encodeURI(gradeCount)) + "&gradeCourseName="
			+ encodeURI(encodeURI(gradeCourseName)) + "&gradeCourseSystem="
			+ encodeURI(encodeURI(gradeCourseSystem)) + "&gradeCourseJob="
			+ encodeURI(encodeURI(gradeCourseJob)) + "&gradeCourseDetail="
			+ encodeURI(encodeURI(gradeCourseDetail)));
}

function deleteGrade(url) { // ɾ���༶��Ϣ
	var r = confirm("��ȷ��Ҫɾ��ô��ɾ���󲻿ɳ��أ�");
	if (r == true) {
		var gradeId = document.getElementById("gradeId").value.trim();
		var gradeName = document.getElementById("gradeName").value.trim();
		var gradeCount = document.getElementById("gradeCount").value.trim(); // �༶����
		var gradeCourseName = document.getElementById("gradeCourseName").value
				.trim(); // �༶�γ�����
		var gradeCourseSystem = document.getElementById("gradeCourseSystem").value
				.trim(); // �༶�γ���ϵ
		var gradeCourseJob = document.getElementById("gradeCourseJob").value
				.trim(); // �༶�γ̾�ҵ����
		var gradeCourseDetail = document.getElementById("gradeCourseDetail").value
				.trim(); // �༶�γ�����

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
		xmlHttp.send("gradeId=" + encodeURI(encodeURI(gradeId)) + "&gradeName="
				+ encodeURI(encodeURI(gradeName)) + "&gradeCount="
				+ encodeURI(encodeURI(gradeCount)) + "&gradeCourseName="
				+ encodeURI(encodeURI(gradeCourseName)) + "&gradeCourseSystem="
				+ encodeURI(encodeURI(gradeCourseSystem)) + "&gradeCourseJob="
				+ encodeURI(encodeURI(gradeCourseJob)) + "&gradeCourseDetail="
				+ encodeURI(encodeURI(gradeCourseDetail)));
	} else {

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
		document.getElementById("moreTr1").style.display = "table-row";
	} else {
		document.getElementById("gradeCourseName").value = "";
		document.getElementById("gradeCourseSystem").value = "";
		document.getElementById("gradeCourseJob").value = "";
		document.getElementById("gradeCourseDetail").value = "";
		document.getElementById("moreImg").src = a + "/unfold.jpg";
		document.getElementById("moreTr").style.display = "none";
		document.getElementById("moreTr1").style.display = "none";
	}
}

/**
 * ���鿴��ѡ�γ̸�����Ϣʱ�����ø÷�������ʾ������ѡ�γ̵���Ϣ��
 * 
 * @param selObj
 */
function selectCourse(objId, url) { // ��ʾ��ѡ�γ���Ϣ������
	var selObj = document.getElementById(objId);
	var optionValue = selObj.options[selObj.selectedIndex].value.trim();
	xmlHttp = GetXmlHttpObject(); // ��ȡXMLHttpRequest ����
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4) { // 4����������ɣ����Է��ʷ�������Ӧ��ʹ�������ӷ�������response�������
			document.getElementById("courseDetail").innerHTML = xmlHttp.responseText;
			document.getElementById("courseDetail").style.display = "block";
		}
	}
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	// Ϊ�˽��ajax��ֵ�������������⣨��Ҫ����encodeURI(URI)ת�����Σ�
	xmlHttp.send("courseId=" + encodeURI(encodeURI(optionValue)));
}
function hideCourse() { // ������ѡ�γ���Ϣ������
	document.getElementById("courseDetail").style.display = "none";
}

/**
 * Ϊѡ��༶�γ�ʱ�ṩ����
 * 
 * @param url
 */
function queriesCourse(url) { // ��ѯ�γ�
	xmlHttp = GetXmlHttpObject(); // ��ȡXMLHttpRequest ����
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4) { // 4����������ɣ����Է��ʷ�������Ӧ��ʹ�������ӷ�������response�������
			document.getElementById("gradeCourse").innerHTML = xmlHttp.responseText;
		}
	}
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
}

/**
 * Ϊѡ��༶�γ�ʱ�ṩ���ݣ��÷����Ǹ��°༶��Ϣʱר�ã� gradeUpdate.jspװ��ʱ���ã�Ϊ���ṩ�γ���Ϣ�����ݺ���Ĭ��ֵ�����°༶��Ĭ��ֵ��
 * 
 * @param url
 */
function queriesCourseUpdate(url, defaultOption) { // ��ѯ�γ�
	xmlHttp = GetXmlHttpObject(); // ��ȡXMLHttpRequest ����
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4) { // 4����������ɣ����Է��ʷ�������Ӧ��ʹ�������ӷ�������response�������
			document.getElementById("gradeCourse").innerHTML = defaultOption
					+ xmlHttp.responseText;
		}
	}
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
}

function lock() {
	var gradeName = document.getElementById("gradeName").value.trim(); // ��ȡ��˾������
	if ((gradeName.indexOf("������")) < 0) {
		document.getElementById("gradeName").value = "������" + gradeName;
	}
}