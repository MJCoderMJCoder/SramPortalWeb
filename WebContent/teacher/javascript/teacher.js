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

function idBirthday() { // ���������֤��֮ǰ�����������������
	var birthday = document.getElementById("birthday").value.trim(); // ��ȡԱ����������
	if (birthday == null || birthday == "") {
		document.getElementById("birthday").focus();
	}
}

function verifyTeacher(a) { // ��֤�γ���Ϣ��verify����ʵ����֤���Ƿ�����ύ��
	var editor = $('#teacherExperience').xheditor(); // ��ȡxheditor�༭��
	var teacherExperience = editor.getSource(); // ��ȡ��ʦ�����������༭���е�ֵ��

	var teacherId = document.getElementById("teacherId").value.trim(); // ��ȡԱ���˺�
	var teacherPassword = document.getElementById("teacherPassword").value
			.trim(); // ��ȡԱ������
	var verifyPassword = document.getElementById("verifyPassword").value.trim(); // Ա��ȷ������
	var teacherGrade = document.getElementById("teacherGrade").value.trim(); // ��ȡ��ʦ���̰༶
	var birthday = document.getElementById("birthday").value.trim(); // ��ȡԱ����������
	var id = document.getElementById("id").value.trim(); // ��ȡԱ�����֤��
	var name = document.getElementById("name").value.trim(); // ��ȡԱ������
	var gender; // ��ȡԱ���Ա�ʼ��0���С�1��Ů
	if (document.getElementById("gender_1").checked == true) {
		gender = document.getElementById("gender_1").value.trim();
	} else {
		gender = document.getElementById("gender_0").value.trim();
	} // ��ȡԱ���Ա����
	var phone = document.getElementById("phone").value.trim(); // ��ȡԱ����ϵ��ʽ
	var address = document.getElementById("address").value.trim(); // ��ȡԱ����ϵ��ַ
	var school = document.getElementById("school").value.trim(); // ��ȡ��ҵԺУ

	var imageLong = document.getElementById("teacherImage").value.trim(); // ͼƬ��ʽ�У�jpg��png��gif
	var teacherImage = imageLong.substring(imageLong.lastIndexOf("\\") + 1); // ��ȡͼƬ��
	/**
	 * ���֤�ŵ�������ʽ
	 * 
	 * regexIdAddress���֤�ŵĵ�ַ��
	 * 
	 * regexIdFour���֤�ŵ���λ����˳�����һλ����У����
	 */
	var regexIdAddress = new RegExp(
			"((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-5])|(71)|(8[1-2]))\\d{4}");
	var regexIdFour = new RegExp("(\\d{4})|(\\d{3}X)|(\\d{3}x)");
	/**
	 * �ֻ��ŵ�������ʽ
	 */
	var regexPhone = new RegExp(
			"((13[0-9])|(14[0-9])|(15[0-9])|(18[0-9])|(17[6-8])|(17[013]))\\d{8}");

	if (a.trim() == "submit") {
		if (teacherPassword != null
				&& verifyPassword != null
				&& birthday != null
				&& id != null
				&& name != null
				&& phone != null
				&& address != null
				&& school != null
				&& teacherImage != null
				&& teacherExperience != null
				&& teacherPassword != ""
				&& verifyPassword != ""
				&& birthday != ""
				&& id != ""
				&& name != ""
				&& phone != ""
				&& address != ""
				&& school != ""
				&& teacherImage != ""
				&& teacherExperience != ""
				&& (name.indexOf("������")) < 0
				&& (teacherImage.indexOf(".jpg") >= 0
						|| teacherImage.indexOf(".png") >= 0 || teacherImage
						.indexOf(".gif") >= 0)
				&& verifyPassword == teacherPassword
				&& birthday.replace(/-/g, "") < teacherId.substring(0, 8)
				&& ((id.substring(0, 6)).match(regexIdAddress)
						&& (id.substring(6, 14)) == birthday.replace(/-/g, "") && (id
						.substring(14, 18)).match(regexIdFour))
				&& phone.match(regexPhone)) {
			document.getElementById("button").type = "submit";
		} else {
			alert("�����ƽ�ʦ�������Ϣ");
		}
	} else if (a.trim() == "teacherPassword") {
		if (teacherPassword == null || teacherPassword == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��ʦ���벻��Ϊ��";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "verifyPassword") {
		if (verifyPassword == null || verifyPassword == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��ʦ����ȷ������";
		} else if (verifyPassword != teacherPassword) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�����������벻һ��";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "birthday") {
		if (birthday == null || birthday == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�������ڲ���Ϊ�գ���ܰ��ʾ�������֤������һ�£�";
			document.getElementById("birthday").focus();
		} else if (birthday.replace(/-/g, "") >= teacherId.substring(0, 8)) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�������ڲ���ȷ����ܰ��ʾ�������֤������һ�£�";
			document.getElementById("birthday").focus();
		} else {
			if ((id.substring(0, 6)).match(regexIdAddress)
					&& (id.substring(6, 14)) != birthday.replace(/-/g, "")
					&& (id.substring(14, 18)).match(regexIdFour)) {
				document.getElementById(a.trim() + "Hint").innerHTML = "*�������ڲ���ȷ����ܰ��ʾ�������֤������һ�£�";
			} else {
				document.getElementById(a.trim() + "Hint").innerHTML = "*";
			}
		}
	} else if (a.trim() == "id") {
		if (id == null || id == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*���֤�Ų���Ϊ��";
		} else if ((id.substring(0, 6)).match(regexIdAddress)
				&& (id.substring(6, 14)) == birthday.replace(/-/g, "")
				&& (id.substring(14, 18)).match(regexIdFour)) {
			var url = window.location.href.substring(0, window.location.href
					.indexOf("teacher"))
					+ "selectTeacher"; // post��url
			xmlHttp = GetXmlHttpObject(); // ��ȡXMLHttpRequest ����
			xmlHttp.onreadystatechange = function() {
				if (xmlHttp.readyState == 4) {
					// 4����������ɣ����Է��ʷ�������Ӧ��ʹ�������ӷ�������response�������
					document.getElementById("idExist").value = xmlHttp.responseText;
					// �жϸ�Ա���Ƿ��Ѵ��ڵ�<input type="hidden" id="idExist" />
					if ((document.getElementById("idExist").value) == "") {
						document.getElementById(a.trim() + "Hint").innerHTML = "*";
					} else {
						document.getElementById(a.trim() + "Hint").innerHTML = "*�ý�ʦ�Ѵ���";
						document.getElementById(a.trim()).focus();
					}
				}
			}
			xmlHttp.open("POST", url, true);
			xmlHttp.setRequestHeader("Content-type",
					"application/x-www-form-urlencoded");
			// Ϊ�˽��ajax��ֵ�������������⣨��Ҫ����encodeURI(URI)ת�����Σ�
			xmlHttp.send("id=" + encodeURI(encodeURI(id)));
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*���֤�Ÿ�ʽ����ȷ����ܰ��ʾ�����֤�ϵ�����Ӧ���������һ�£�";
		}
	} else if (a.trim() == "name") {
		if (name == null || name == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��ʦ��������Ϊ��";
		} else if ((name.indexOf("������")) >= 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��ʦ������ʽ����ȷ";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "phone") {
		if (phone == null || phone == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��ϵ��ʽ����Ϊ�գ��ֻ��ţ�";
		} else if (phone.match(regexPhone)) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�ֻ������ʽ����ȷ";
		}
	} else if (a.trim() == "address") {
		if (address == null || address == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��ϵ��ַ����Ϊ��";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "school") {
		if (school == null || school == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��ҵԺУ����Ϊ��";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "teacherImage") {
		if (teacherImage == null || teacherImage == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��Ƭ����Ϊ�գ�ͼƬ��ʽ��jpg��png��gif��";
		} else if (teacherImage.indexOf(".jpg") < 0
				&& teacherImage.indexOf(".png") < 0
				&& teacherImage.indexOf(".gif") < 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��Ƭ��ʽ��jpg��png��gif������ȷ";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	}
}

function queriesTeacher(url) { // �������ѯ����ѯ��Ϣ
	var teacherId = document.getElementById("teacherId").value.trim();
	var name = document.getElementById("name").value.trim();
	var gradeName = document.getElementById("gradeName").value.trim();
	var school = document.getElementById("school").value.trim();
	var address = document.getElementById("address").value.trim();
	var phone = document.getElementById("phone").value.trim();
	var birthday = document.getElementById("birthday").value.trim();
	var gender; // ��ȡԱ���Ա�ʼ��0���С�1��Ů
	if (document.getElementById("gender_1").checked == true) {
		gender = document.getElementById("gender_1").value.trim();
	} else if (document.getElementById("gender_0").checked == true) {
		gender = document.getElementById("gender_0").value.trim();
	} else {
		gender = "";
	} // ��ȡԱ���Ա����
	var id = document.getElementById("id").value.trim();
	var teacherExperience = document.getElementById("teacherExperience").value
			.trim();
	var gradeCount = document.getElementById("gradeCount").value.trim();
	var courseName = document.getElementById("courseName").value.trim();
	var courseSystem = document.getElementById("courseSystem").value.trim();
	var courseDetail = document.getElementById("courseDetail").value.trim();
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
	xmlHttp.send("teacherId=" + encodeURI(encodeURI(teacherId)) + "&name="
			+ encodeURI(encodeURI(name)) + "&gradeName="
			+ encodeURI(encodeURI(gradeName)) + "&school="
			+ encodeURI(encodeURI(school)) + "&address="
			+ encodeURI(encodeURI(address)) + "&phone="
			+ encodeURI(encodeURI(phone)) + "&birthday="
			+ encodeURI(encodeURI(birthday)) + "&gender="
			+ encodeURI(encodeURI(gender)) + "&id=" + encodeURI(encodeURI(id))
			+ "&teacherExperience=" + encodeURI(encodeURI(teacherExperience))
			+ "&gradeCount=" + encodeURI(encodeURI(gradeCount))
			+ "&courseName=" + encodeURI(encodeURI(courseName))
			+ "&courseSystem=" + encodeURI(encodeURI(courseSystem))
			+ "&courseDetail=" + encodeURI(encodeURI(courseDetail))
			+ "&jobDirection=" + encodeURI(encodeURI(jobDirection)));
}

function deleteTeacher(url) { // ɾ���γ���Ϣ
	var r = confirm("��ȷ��Ҫɾ��ô��ɾ���󲻿ɳ��أ�");
	if (r == true) {
		var teacherId = document.getElementById("teacherId").value.trim();
		var name = document.getElementById("name").value.trim();
		var gradeName = document.getElementById("gradeName").value.trim();
		var school = document.getElementById("school").value.trim();
		var address = document.getElementById("address").value.trim();
		var phone = document.getElementById("phone").value.trim();
		var birthday = document.getElementById("birthday").value.trim();
		var gender; // ��ȡԱ���Ա�ʼ��0���С�1��Ů
		if (document.getElementById("gender_1").checked == true) {
			gender = document.getElementById("gender_1").value.trim();
		} else if (document.getElementById("gender_0").checked == true) {
			gender = document.getElementById("gender_0").value.trim();
		} else {
			gender = "";
		} // ��ȡԱ���Ա����
		var id = document.getElementById("id").value.trim();
		var teacherExperience = document.getElementById("teacherExperience").value
				.trim();
		var gradeCount = document.getElementById("gradeCount").value.trim();
		var courseName = document.getElementById("courseName").value.trim();
		var courseSystem = document.getElementById("courseSystem").value.trim();
		var courseDetail = document.getElementById("courseDetail").value.trim();
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
		xmlHttp.send("teacherId=" + encodeURI(encodeURI(teacherId)) + "&name="
				+ encodeURI(encodeURI(name)) + "&gradeName="
				+ encodeURI(encodeURI(gradeName)) + "&school="
				+ encodeURI(encodeURI(school)) + "&address="
				+ encodeURI(encodeURI(address)) + "&phone="
				+ encodeURI(encodeURI(phone)) + "&birthday="
				+ encodeURI(encodeURI(birthday)) + "&gender="
				+ encodeURI(encodeURI(gender)) + "&id="
				+ encodeURI(encodeURI(id)) + "&teacherExperience="
				+ encodeURI(encodeURI(teacherExperience)) + "&gradeCount="
				+ encodeURI(encodeURI(gradeCount)) + "&courseName="
				+ encodeURI(encodeURI(courseName)) + "&courseSystem="
				+ encodeURI(encodeURI(courseSystem)) + "&courseDetail="
				+ encodeURI(encodeURI(courseDetail)) + "&jobDirection="
				+ encodeURI(encodeURI(jobDirection)));
	} else {
	}

}

/**
 * verifyTeacherUpdate(a)��teacherUpdate.jspר�ã���֤��Ҫ���ݣ�
 * ͼƬ����Ϊ�գ������Բ��ϴ�ͼƬ������Ҫ�����ϴ��Ļ���ͼƬ��ʽ������ȷ�� �������Ϊ��
 */
function verifyTeacherUpdate(a) { // teacherUpdate.jspר�ã���֤�γ̣�verify����ʵ����֤���Ƿ�����ύ��
	var editor = $('#teacherExperience').xheditor(); // ��ȡxheditor�༭��
	var teacherExperience = editor.getSource(); // ��ȡ��ʦ�����������༭���е�ֵ��

	var teacherId = document.getElementById("teacherId").value.trim(); // ��ȡԱ���˺�
	var teacherPassword = document.getElementById("teacherPassword").value
			.trim(); // ��ȡԱ������
	var verifyPassword = document.getElementById("verifyPassword").value.trim(); // Ա��ȷ������
	var teacherGrade = document.getElementById("teacherGrade").value.trim(); // ��ȡ��ʦ���̰༶
	var birthday = document.getElementById("birthday").value.trim(); // ��ȡԱ����������
	var id = document.getElementById("id").value.trim(); // ��ȡԱ�����֤��
	var name = document.getElementById("name").value.trim(); // ��ȡԱ������
	var gender; // ��ȡԱ���Ա�ʼ��0���С�1��Ů
	if (document.getElementById("gender_1").checked == true) {
		gender = document.getElementById("gender_1").value.trim();
	} else {
		gender = document.getElementById("gender_0").value.trim();
	} // ��ȡԱ���Ա����
	var phone = document.getElementById("phone").value.trim(); // ��ȡԱ����ϵ��ʽ
	var address = document.getElementById("address").value.trim(); // ��ȡԱ����ϵ��ַ
	var school = document.getElementById("school").value.trim(); // ��ȡ��ҵԺУ

	var imageLong = document.getElementById("teacherImage").value.trim(); // ͼƬ��ʽ�У�jpg��png��gif
	var teacherImage = imageLong.substring(imageLong.lastIndexOf("\\") + 1); // ��ȡͼƬ��
	/**
	 * ���֤�ŵ�������ʽ
	 * 
	 * regexIdAddress���֤�ŵĵ�ַ��
	 * 
	 * regexIdFour���֤�ŵ���λ����˳�����һλ����У����
	 */
	var regexIdAddress = new RegExp(
			"((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-5])|(71)|(8[1-2]))\\d{4}");
	var regexIdFour = new RegExp("(\\d{4})|(\\d{3}X)|(\\d{3}x)");

	/**
	 * �ֻ��ŵ�������ʽ
	 */
	var regexPhone = new RegExp(
			"((13[0-9])|(14[0-9])|(15[0-9])|(18[0-9])|(17[6-8])|(17[013]))\\d{8}");

	if (a.trim() == "submit") {
		if (teacherPassword != null
				&& verifyPassword != null
				&& birthday != null
				&& id != null
				&& name != null
				&& phone != null
				&& address != null
				&& school != null
				&& teacherExperience != null
				&& teacherPassword != ""
				&& verifyPassword != ""
				&& birthday != ""
				&& id != ""
				&& name != ""
				&& phone != ""
				&& address != ""
				&& school != ""
				&& teacherExperience != ""
				&& (teacherImage != null || teacherImage != ""
						|| teacherImage.indexOf(".jpg") >= 0
						|| teacherImage.indexOf(".png") >= 0 || teacherImage
						.indexOf(".gif") >= 0)
				&& verifyPassword == teacherPassword
				&& birthday.replace(/-/g, "") < teacherId.substring(0, 8)
				&& ((id.substring(0, 6)).match(regexIdAddress)
						&& (id.substring(6, 14)) == birthday.replace(/-/g, "") && (id
						.substring(14, 18)).match(regexIdFour))
				&& phone.match(regexPhone)) {
			document.getElementById("button").type = "submit";
		} else {
			alert("�����ƽ�ʦ�������Ϣ");
		}
	} else if (a.trim() == "teacherPassword") {
		if (teacherPassword == null || teacherPassword == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��ʦ���벻��Ϊ��";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "verifyPassword") {
		if (verifyPassword == null || verifyPassword == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��ʦ����ȷ������";
		} else if (verifyPassword != teacherPassword) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�����������벻һ��";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "birthday") {
		if (birthday == null || birthday == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�������ڲ���Ϊ�գ���ܰ��ʾ�������֤������һ�£�";
			document.getElementById("birthday").focus();
		} else if ((birthday.replace(/-/g, "") >= teacherId.substring(0, 8))
				|| (birthday.replace(/-/g, "") != id.substring(6, 14))) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�������ڲ���ȷ����ܰ��ʾ�������֤������һ�£�";
			document.getElementById("birthday").focus();
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "id") {
		if (id == null || id == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*���֤�Ų���Ϊ��";
		} else if ((id.substring(0, 6)).match(regexIdAddress)
				&& (id.substring(6, 14)) == birthday.replace(/-/g, "")
				&& (id.substring(14, 18)).match(regexIdFour)) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*���֤�Ÿ�ʽ����ȷ����ܰ��ʾ�����֤�ϵ�����Ӧ���������һ�£�";
		}
	} else if (a.trim() == "name") {
		if (name == null || name == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��ʦ��������Ϊ��";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "phone") {
		if (phone == null || phone == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��ϵ��ʽ����Ϊ�գ��ֻ��ţ�";
		} else if (phone.match(regexPhone)) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�ֻ������ʽ����ȷ";
		}
	} else if (a.trim() == "address") {
		if (address == null || address == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��ϵ��ַ����Ϊ��";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "school") {
		if (school == null || school == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��ҵԺУ����Ϊ��";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "teacherImage") {
		if (teacherImage == null || teacherImage == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else if (teacherImage.indexOf(".jpg") < 0
				&& teacherImage.indexOf(".png") < 0
				&& teacherImage.indexOf(".gif") < 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��Ƭ��ʽ��jpg��png��gif������ȷ";
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
		document.getElementById("moreTr0").style.display = "table-row";
		document.getElementById("moreTr1").style.display = "table-row";
		document.getElementById("moreTr2").style.display = "table-row";
	} else {
		document.getElementById("school").value = "";
		document.getElementById("address").value = "";
		document.getElementById("phone").value = "";
		document.getElementById("birthday").value = "";
		document.getElementById("gender_0").checked = false;
		document.getElementById("gender_1").checked = false;
		document.getElementById("id").value = "";
		document.getElementById("teacherExperience").value = "";
		document.getElementById("gradeCount").value = "";
		document.getElementById("courseName").value = "";
		document.getElementById("courseSystem").value = "";
		document.getElementById("courseDetail").value = "";
		document.getElementById("jobDirection").value = "";
		document.getElementById("moreImg").src = a + "/unfold.jpg";
		document.getElementById("moreTr").style.display = "none";
		document.getElementById("moreTr0").style.display = "none";
		document.getElementById("moreTr1").style.display = "none";
		document.getElementById("moreTr2").style.display = "none";
	}
}

function clearGender() { // ����Ա�
	document.getElementById("gender_0").checked = false;
	document.getElementById("gender_1").checked = false;
}

/**
 * Ϊ��ʦѡ���Ͽΰ༶ʱ�ṩ����
 * 
 * @param url
 *            �ṩ��ѯ�༶��url
 */
function queriesGrade(url) { // ��ѯ�γ�
	xmlHttp = GetXmlHttpObject(); // ��ȡXMLHttpRequest ����
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4) { // 4����������ɣ����Է��ʷ�������Ӧ��ʹ�������ӷ�������response�������
			document.getElementById("teacherGrade").innerHTML = xmlHttp.responseText;
		}
	}
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
}

/**
 * Ϊ��ʦѡ���Ͽΰ༶ʱ�ṩ����(�÷���ֻ���ڸ��½�ʦ��Ϣ��teacherUpdate.jsp)
 * 
 * @param url
 *            �ṩ��ѯ�༶��url
 * @param defaultOption
 *            �ṩ�޸Ľ�ʦ��Ϣʱ����ԭ�ȵ�Ĭ��ֵ��
 */
function queriesGrade(url, defaultOption) { // ��ѯ�γ�
	xmlHttp = GetXmlHttpObject(); // ��ȡXMLHttpRequest ����
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4) { // 4����������ɣ����Է��ʷ�������Ӧ��ʹ�������ӷ�������response�������
			document.getElementById("teacherGrade").innerHTML = defaultOption
					+ xmlHttp.responseText;
		}
	}
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
}

/**
 * ���鿴���̰༶������Ϣʱ�����ø÷�������ʾ�������̰༶�������Ϣ��
 * 
 * @param objId
 * @param url
 */
function selectGrade(objId, url) {
	var selObj = document.getElementById(objId);
	var optionValue = selObj.options[selObj.selectedIndex].value.trim();

	xmlHttp = GetXmlHttpObject(); // ��ȡXMLHttpRequest ����
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4) { // 4����������ɣ����Է��ʷ�������Ӧ��ʹ�������ӷ�������response�������
			document.getElementById("gradeDetail").innerHTML = xmlHttp.responseText;
			document.getElementById("gradeDetail").style.display = "block";
		}
	}
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	// Ϊ�˽��ajax��ֵ�������������⣨��Ҫ����encodeURI(URI)ת�����Σ�
	xmlHttp.send("gradeId=" + encodeURI(encodeURI(optionValue)));
}

function showGradeDetail() {
	document.getElementById("gradeDetailTr").style.display = "block";
	document.getElementById("gradeDetail").style.display = "block";
}

function closeGradeDetail() {
	if (document.getElementById("gradeDetailTr") != null) {
		document.getElementById("gradeDetailTr").style.display = "none";
		document.getElementById("gradeDetail").style.display = "none";
	} else {
		document.getElementById("gradeDetail").style.display = "none";
	}

}

function lock() {
	var name = document.getElementById("name").value.trim(); // ��ȡ��˾������
	if ((name.indexOf("������")) < 0) {
		document.getElementById("name").value = "������" + name;
	}
}

function teacherExit() {
	var r = confirm("ȷ��Ҫ�˳���")
	if (r == true) {
		var url = window.location.href.substring(0, window.location.href
				.indexOf("teacher"))
				+ "loginTeacher"; // post��url
		var replaceUrl = window.location.href.substring(0, window.location.href
				.indexOf("teacher"))
				+ "backstage"; // window.location.replace("");��url
		xmlHttp = GetXmlHttpObject(); // ��ȡXMLHttpRequest ����
		xmlHttp.onreadystatechange = function() {
			if (xmlHttp.readyState == 4) {
				// 4����������ɣ����Է��ʷ�������Ӧ��ʹ�������ӷ�������response�������
				window.location.replace(replaceUrl);
			}
		}
		xmlHttp.open("GET", url, true);
		xmlHttp.send(null);
	}
}

function hasSession(a, url) { /* �ж��Ƿ��Ѿ��˳���Ȼ����Ӧ��Ӧ�¼� */
	// if (window.name == "") {
	// window.location.reload();
	// window.name = 1;
	// } else {
	if (a == "" || a == null) {
		alert("���Ѱ�ȫ�˳�����ҳ�潫��5����Զ���ת��˼���̨�ĵ�¼ҳ��");
		window.setTimeout(window.top.location.replace(url), 5000);
	} else {
	}
}