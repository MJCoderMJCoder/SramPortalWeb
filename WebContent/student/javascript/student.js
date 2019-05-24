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

function verifyStudent(a) { // ��֤�γ���Ϣ��verify����ʵ����֤���Ƿ�����ύ��
	var stuId = document.getElementById("stuId").value.trim(); // ��ȡԱ���˺�
	var stuPassword = document.getElementById("stuPassword").value.trim(); // ��ȡԱ������
	var verifyPassword = document.getElementById("verifyPassword").value.trim(); // Ա��ȷ������
	var stuGrade = document.getElementById("stuGrade").value.trim(); // ��ȡԱ���˺�
	var id = document.getElementById("id").value.trim(); // ��ȡԱ�����֤��
	var name = document.getElementById("name").value.trim(); // ��ȡԱ������
	var gender; // ��ȡԱ���Ա�ʼ��0���С�1��Ů
	if (document.getElementById("gender_1").checked == true) {
		gender = document.getElementById("gender_1").value.trim();
	} else {
		gender = document.getElementById("gender_0").value.trim();
	} // ��ȡԱ���Ա����
	var birthday = document.getElementById("birthday").value.trim(); // ��ȡԱ����������
	var phone = document.getElementById("phone").value.trim(); // ��ȡԱ����ϵ��ʽ
	var address = document.getElementById("address").value.trim(); // ��ȡԱ����ϵ��ַ
	var school = document.getElementById("school").value.trim(); // ��ȡ��ҵԺУ

	var imageLong = document.getElementById("studentImage").value.trim(); // ͼƬ��ʽ�У�jpg��png��gif
	var studentImage = imageLong.substring(imageLong.lastIndexOf("\\") + 1); // ��ȡͼƬ��
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
		if (stuPassword != null
				&& verifyPassword != null
				&& birthday != null
				&& id != null
				&& name != null
				&& phone != null
				&& address != null
				&& school != null
				&& studentImage != null
				&& stuPassword != ""
				&& verifyPassword != ""
				&& birthday != ""
				&& id != ""
				&& name != ""
				&& phone != ""
				&& address != ""
				&& school != ""
				&& studentImage != ""
				&& (studentImage.indexOf(".jpg") >= 0
						|| studentImage.indexOf(".png") >= 0 || studentImage
						.indexOf(".gif") >= 0)
				&& verifyPassword == stuPassword
				&& birthday.replace(/-/g, "") < stuId.substring(0, 8)
				&& ((id.substring(0, 6)).match(regexIdAddress)
						&& (id.substring(6, 14)) == birthday.replace(/-/g, "") && (id
						.substring(14, 18)).match(regexIdFour))
				&& phone.match(regexPhone)) {
			document.getElementById("button").type = "submit";
		} else {
			alert("������Ա���������Ϣ");
		}
	} else if (a.trim() == "stuPassword") {
		if (stuPassword == null || stuPassword == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*Ա�����벻��Ϊ��";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "verifyPassword") {
		if (verifyPassword == null || verifyPassword == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*Ա������ȷ������";
		} else if (verifyPassword != stuPassword) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�����������벻һ��";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "birthday") {
		if (birthday == null || birthday == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�������ڲ���Ϊ�գ���ܰ��ʾ�������֤������һ�£�";
			document.getElementById("birthday").focus();
		} else if (birthday.replace(/-/g, "") >= stuId.substring(0, 8)) {
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
					.indexOf("student"))
					+ "selectStudent"; // post��url
			xmlHttp = GetXmlHttpObject(); // ��ȡXMLHttpRequest ����
			xmlHttp.onreadystatechange = function() {
				if (xmlHttp.readyState == 4) {
					// 4����������ɣ����Է��ʷ�������Ӧ��ʹ�������ӷ�������response�������
					document.getElementById("idExist").value = xmlHttp.responseText;
					// �жϸ�Ա���Ƿ��Ѵ��ڵ�<input type="hidden" id="idExist" />
					if ((document.getElementById("idExist").value) == "") {
						document.getElementById(a.trim() + "Hint").innerHTML = "*";
					} else {
						document.getElementById(a.trim() + "Hint").innerHTML = "*��Ա���Ѵ���";
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
			document.getElementById(a.trim() + "Hint").innerHTML = "*Ա����������Ϊ��";
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
	} else if (a.trim() == "studentImage") {
		if (studentImage == null || studentImage == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��Ƭ����Ϊ�գ�ͼƬ��ʽ��jpg��png��gif��";
		} else if (studentImage.indexOf(".jpg") < 0
				&& studentImage.indexOf(".png") < 0
				&& studentImage.indexOf(".gif") < 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��Ƭ��ʽ��jpg��png��gif������ȷ";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	}
}

function queriesStudent(url) { // �������ѯ����ѯ��Ϣ
	var stuId = document.getElementById("stuId").value.trim();
	var stuJobCompany = document.getElementById("stuJobCompany").value.trim();
	var stuJobAddress = document.getElementById("stuJobAddress").value.trim();
	var stuJobPay = document.getElementById("stuJobPay").value.trim();
	var stuJobTime = document.getElementById("stuJobTime").value.trim();
	var id = document.getElementById("id").value.trim();
	var name = document.getElementById("name").value.trim();
	var gender; // ��ȡԱ���Ա�ʼ��0���С�1��Ů
	if (document.getElementById("gender_1").checked == true) {
		gender = document.getElementById("gender_1").value.trim();
	} else if (document.getElementById("gender_0").checked == true) {
		gender = document.getElementById("gender_0").value.trim();
	} else {
		gender = "";
	} // ��ȡԱ���Ա����
	var birthday = document.getElementById("birthday").value.trim();
	var phone = document.getElementById("phone").value.trim();
	var address = document.getElementById("address").value.trim();
	var school = document.getElementById("school").value.trim();
	var gradeName = document.getElementById("gradeName").value.trim();
	var courseName = document.getElementById("courseName").value.trim();
	var courseSystem = document.getElementById("courseSystem").value.trim();
	var courseDetail = document.getElementById("courseDetail").value.trim();

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
	xmlHttp.send("stuId=" + encodeURI(encodeURI(stuId)) + "&stuJobCompany="
			+ encodeURI(encodeURI(stuJobCompany)) + "&stuJobAddress="
			+ encodeURI(encodeURI(stuJobAddress)) + "&stuJobPay="
			+ encodeURI(encodeURI(stuJobPay)) + "&stuJobTime="
			+ encodeURI(encodeURI(stuJobTime)) + "&id="
			+ encodeURI(encodeURI(id)) + "&name=" + encodeURI(encodeURI(name))
			+ "&gender=" + encodeURI(encodeURI(gender)) + "&birthday="
			+ encodeURI(encodeURI(birthday)) + "&phone="
			+ encodeURI(encodeURI(phone)) + "&address="
			+ encodeURI(encodeURI(address)) + "&school="
			+ encodeURI(encodeURI(school)) + "&gradeName="
			+ encodeURI(encodeURI(gradeName)) + "&courseName="
			+ encodeURI(encodeURI(courseName)) + "&courseSystem="
			+ encodeURI(encodeURI(courseSystem)) + "&courseDetail="
			+ encodeURI(encodeURI(courseDetail)));
}

function deleteStudent(url) { // ɾ���γ���Ϣ
	var r = confirm("��ȷ��Ҫɾ��ô��ɾ���󲻿ɳ��أ�");
	if (r == true) {
		var stuId = document.getElementById("stuId").value.trim();
		var stuJobCompany = document.getElementById("stuJobCompany").value
				.trim();
		var stuJobAddress = document.getElementById("stuJobAddress").value
				.trim();
		var stuJobPay = document.getElementById("stuJobPay").value.trim();
		var stuJobTime = document.getElementById("stuJobTime").value.trim();
		var id = document.getElementById("id").value.trim();
		var name = document.getElementById("name").value.trim();
		var gender; // ��ȡԱ���Ա�ʼ��0���С�1��Ů
		if (document.getElementById("gender_1").checked == true) {
			gender = document.getElementById("gender_1").value.trim();
		} else if (document.getElementById("gender_0").checked == true) {
			gender = document.getElementById("gender_0").value.trim();
		} else {
			gender = "";
		} // ��ȡԱ���Ա����
		var birthday = document.getElementById("birthday").value.trim();
		var phone = document.getElementById("phone").value.trim();
		var address = document.getElementById("address").value.trim();
		var school = document.getElementById("school").value.trim();
		var gradeName = document.getElementById("gradeName").value.trim();
		var courseName = document.getElementById("courseName").value.trim();
		var courseSystem = document.getElementById("courseSystem").value.trim();
		var courseDetail = document.getElementById("courseDetail").value.trim();

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
		xmlHttp.send("stuId=" + encodeURI(encodeURI(stuId)) + "&stuJobCompany="
				+ encodeURI(encodeURI(stuJobCompany)) + "&stuJobAddress="
				+ encodeURI(encodeURI(stuJobAddress)) + "&stuJobPay="
				+ encodeURI(encodeURI(stuJobPay)) + "&stuJobTime="
				+ encodeURI(encodeURI(stuJobTime)) + "&id="
				+ encodeURI(encodeURI(id)) + "&name="
				+ encodeURI(encodeURI(name)) + "&gender="
				+ encodeURI(encodeURI(gender)) + "&birthday="
				+ encodeURI(encodeURI(birthday)) + "&phone="
				+ encodeURI(encodeURI(phone)) + "&address="
				+ encodeURI(encodeURI(address)) + "&school="
				+ encodeURI(encodeURI(school)) + "&gradeName="
				+ encodeURI(encodeURI(gradeName)) + "&courseName="
				+ encodeURI(encodeURI(courseName)) + "&courseSystem="
				+ encodeURI(encodeURI(courseSystem)) + "&courseDetail="
				+ encodeURI(encodeURI(courseDetail)));
	} else {

	}
}

/**
 * verifyStudentUpdate(a)��studentUpdate.jspר�ã���֤��Ҫ���ݣ�
 * ͼƬ����Ϊ�գ������Բ��ϴ�ͼƬ������Ҫ�����ϴ��Ļ���ͼƬ��ʽ������ȷ�� �������Ϊ��
 */
function verifyStudentUpdate(a) { // studentUpdate.jspר�ã���֤�γ̣�verify����ʵ����֤���Ƿ�����ύ��
	var stuId = document.getElementById("stuId").value.trim(); // ��ȡԱ���˺�
	var stuPassword = document.getElementById("stuPassword").value.trim(); // ��ȡԱ������
	var verifyPassword = document.getElementById("verifyPassword").value.trim(); // Ա��ȷ������
	// var stuGrade = document.getElementById("stuGrade").value.trim();
	// //��ȡѧԱ�༶��������ò�����ã�
	var stuJobCompany = document.getElementById("stuJobCompany").value.trim(); // ��ȡѧԱ��ְ��˾
	var stuJobAddress = document.getElementById("stuJobAddress").value.trim(); // ��ȡѧԱ�����ص�
	var stuJobPay = document.getElementById("stuJobPay").value.trim(); // ��ȡѧԱ��ǰ��н
	var stuJobTime = document.getElementById("stuJobTime").value.trim(); // ��ȡѧԱ��Ҳʱ��
	var birthday = document.getElementById("birthday").value.trim(); // ��ȡѧԱ�������ڣ�������ò�����ã�
	var id = document.getElementById("id").value.trim(); // ��ȡѧԱ���֤�ţ�������ò�����ã�
	var name = document.getElementById("name").value.trim(); // ��ȡѧԱ����
	var gender; // ��ȡѧԱ�Ա�ʼ��0���С�1��Ů
	if (document.getElementById("gender_1").checked == true) {
		gender = document.getElementById("gender_1").value.trim();
	} else {
		gender = document.getElementById("gender_0").value.trim();
	} // ��ȡѧԱ�Ա����
	var phone = document.getElementById("phone").value.trim(); // ��ȡѧԱ��ϵ��ʽ
	var address = document.getElementById("address").value.trim(); // ��ȡѧԱ��ϵ��ַ
	var school = document.getElementById("school").value.trim(); // ��ȡ��ҵԺУ

	var imageLong = document.getElementById("studentImage").value.trim(); // ͼƬ��ʽ�У�jpg��png��gif
	var studentImage = imageLong.substring(imageLong.lastIndexOf("\\") + 1); // ��ȡͼƬ��

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

	/**
	 * н�ʵ�������ʽ
	 */
	var regexPay = new RegExp("[1-9]\\d{0,6}");

	if (a.trim() == "submit") {
		if (stuPassword != null
				&& verifyPassword != null
				&& birthday != null
				&& id != null
				&& name != null
				&& phone != null
				&& address != null
				&& school != null
				&& stuPassword != ""
				&& verifyPassword != ""
				&& birthday != ""
				&& id != ""
				&& name != ""
				&& phone != ""
				&& address != ""
				&& school != ""
				&& (studentImage == null || studentImage == ""
						|| studentImage.indexOf(".jpg") >= 0
						|| studentImage.indexOf(".png") >= 0 || studentImage
						.indexOf(".gif") >= 0)
				&& verifyPassword == stuPassword
				&& ((stuJobPay.match(regexPay)) || stuJobPay == null || stuJobPay == "")
				&& birthday.replace(/-/g, "") < stuId.substring(0, 8)
				&& ((id.substring(0, 6)).match(regexIdAddress)
						&& (id.substring(6, 14)) == birthday.replace(/-/g, "") && (id
						.substring(14, 18)).match(regexIdFour))
				&& phone.match(regexPhone)) {
			document.getElementById("button").type = "submit";
		} else {
			alert("������ѧԱ�������Ϣ");
		}
	} else if (a.trim() == "stuPassword") {
		if (stuPassword == null || stuPassword == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*ѧԱ���벻��Ϊ��";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "verifyPassword") {
		if (verifyPassword == null || verifyPassword == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*ѧԱ����ȷ������";
		} else if (verifyPassword != stuPassword) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�����������벻һ��";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "stuJobPay") {
		if (stuJobPay == null || stuJobPay == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else if (stuJobPay.match(regexPay)) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��н��ʽ����ȷ";
		}
	} else if (a.trim() == "birthday") {
		if (birthday == null || birthday == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�������ڲ���Ϊ�գ��������֤������һ�£�";
			document.getElementById("birthday").focus();
		} else if ((birthday.replace(/-/g, "") >= stuId.substring(0, 8))
				|| (birthday.replace(/-/g, "") != id.substring(6, 14))) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�������ڲ���ȷ���������֤������һ�£�";
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
			document.getElementById(a.trim() + "Hint").innerHTML = "*���֤�Ÿ�ʽ����ȷ�����֤�ϵ����������������һ�£�";
		}
	} else if (a.trim() == "name") {
		if (name == null || name == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*ѧԱ��������Ϊ��";
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
	} else if (a.trim() == "studentImage") {
		if (studentImage == null || studentImage == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else if (studentImage.indexOf(".jpg") < 0
				&& studentImage.indexOf(".png") < 0
				&& studentImage.indexOf(".gif") < 0) {
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
		document.getElementById("moreTr3").style.display = "table-row";
	} else {
		document.getElementById("stuJobPay").value = "";
		document.getElementById("stuJobTime").value = "";
		document.getElementById("id").value = "";
		document.getElementById("name").value = "";
		document.getElementById("gender_0").checked = false;
		document.getElementById("gender_1").checked = false;
		document.getElementById("birthday").value = "";
		document.getElementById("phone").value = "";
		document.getElementById("address").value = "";
		document.getElementById("school").value = "";
		document.getElementById("gradeName").value = "";
		document.getElementById("courseName").value = "";
		document.getElementById("courseSystem").value = "";
		document.getElementById("courseDetail").value = "";
		document.getElementById("moreImg").src = a + "/unfold.jpg";
		document.getElementById("moreTr").style.display = "none";
		document.getElementById("moreTr0").style.display = "none";
		document.getElementById("moreTr1").style.display = "none";
		document.getElementById("moreTr2").style.display = "none";
		document.getElementById("moreTr3").style.display = "none";
	}
}

function clearGender() { // ����Ա�
	document.getElementById("gender_0").checked = false;
	document.getElementById("gender_1").checked = false;
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
			document.getElementById("studentGrade").innerHTML = defaultOption
					+ xmlHttp.responseText;
		}
	}
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
}
