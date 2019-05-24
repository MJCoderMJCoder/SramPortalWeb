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

function hasSession(a, url) { /* �ж��Ƿ��Ѿ��˳���Ȼ����Ӧ��Ӧ�¼� */
	// if (window.name == "") {
	// window.location.reload();
	// window.name = 1;
	// } else {
	if (a == "" || a == null) {
		alert("���Ѱ�ȫ�˳�����ҳ�潫��5����Զ���ת��˼���Ż���վ��ҳ");
		window.setTimeout(window.location.replace(url), 5000);
	} else {
	}
}