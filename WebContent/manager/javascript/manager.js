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

function verifyManager(a) { // ��֤�γ���Ϣ��verify����ʵ����֤���Ƿ�����ύ��
	var managerId = document.getElementById("managerId").value.trim(); // ��ȡԱ���˺�
	var managerPassword = document.getElementById("managerPassword").value
			.trim(); // ��ȡԱ������
	var verifyPassword = document.getElementById("verifyPassword").value.trim(); // Ա��ȷ������
	var managerPosition = document.getElementById("managerPosition").value
			.trim(); // ��ȡԱ���˺�
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

	var imageLong = document.getElementById("managerImage").value.trim(); // ͼƬ��ʽ�У�jpg��png��gif
	var managerImage = imageLong.substring(imageLong.lastIndexOf("\\") + 1); // ��ȡͼƬ��
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
		if (managerPassword != null
				&& verifyPassword != null
				&& birthday != null
				&& id != null
				&& name != null
				&& phone != null
				&& address != null
				&& school != null
				&& managerImage != null
				&& managerPassword != ""
				&& verifyPassword != ""
				&& birthday != ""
				&& id != ""
				&& name != ""
				&& phone != ""
				&& address != ""
				&& school != ""
				&& managerImage != ""
				&& (name.indexOf("������")) < 0
				&& (managerImage.indexOf(".jpg") >= 0
						|| managerImage.indexOf(".png") >= 0 || managerImage
						.indexOf(".gif") >= 0)
				&& verifyPassword == managerPassword
				&& birthday.replace(/-/g, "") < managerId.substring(0, 8)
				&& ((id.substring(0, 6)).match(regexIdAddress)
						&& (id.substring(6, 14)) == birthday.replace(/-/g, "") && (id
						.substring(14, 18)).match(regexIdFour))
				&& phone.match(regexPhone)) {
			document.getElementById("button").type = "submit";
		} else {
			alert("������Ա���������Ϣ");
		}
	} else if (a.trim() == "managerPassword") {
		if (managerPassword == null || managerPassword == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*Ա�����벻��Ϊ��";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "verifyPassword") {
		if (verifyPassword == null || verifyPassword == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*Ա������ȷ������";
		} else if (verifyPassword != managerPassword) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�����������벻һ��";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "birthday") {
		if (birthday == null || birthday == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�������ڲ���Ϊ�գ���ܰ��ʾ�������֤������һ�£�";
			document.getElementById("birthday").focus();
		} else if (birthday.replace(/-/g, "") >= managerId.substring(0, 8)) {
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
					.indexOf("manager"))
					+ "selectManager"; // post��url
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
		} else if ((name.indexOf("������")) >= 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*Ա��������ʽ����ȷ";
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
	} else if (a.trim() == "managerImage") {
		if (managerImage == null || managerImage == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��Ƭ����Ϊ�գ�ͼƬ��ʽ��jpg��png��gif��";
		} else if (managerImage.indexOf(".jpg") < 0
				&& managerImage.indexOf(".png") < 0
				&& managerImage.indexOf(".gif") < 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��Ƭ��ʽ��jpg��png��gif������ȷ";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	}
}

function queriesManager(url) { // �������ѯ����ѯ��Ϣ
	var managerId = document.getElementById("managerId").value.trim();
	var name = document.getElementById("name").value.trim();
	var managerPosition = document.getElementById("managerPositionText").value
			.trim();
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
	xmlHttp.send("managerId=" + encodeURI(encodeURI(managerId)) + "&name="
			+ encodeURI(encodeURI(name)) + "&managerPosition="
			+ encodeURI(encodeURI(managerPosition)) + "&school="
			+ encodeURI(encodeURI(school)) + "&address="
			+ encodeURI(encodeURI(address)) + "&phone="
			+ encodeURI(encodeURI(phone)) + "&birthday="
			+ encodeURI(encodeURI(birthday)) + "&gender="
			+ encodeURI(encodeURI(gender)) + "&id=" + encodeURI(encodeURI(id)));
}

function deleteManager(url) { // ɾ���γ���Ϣ
	var r = confirm("��ȷ��Ҫɾ��ô��ɾ���󲻿ɳ��أ�");
	if (r == true) {
		var managerId = document.getElementById("managerId").value.trim();
		var name = document.getElementById("name").value.trim();
		var managerPosition = document.getElementById("managerPositionText").value
				.trim();
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
		xmlHttp.send("managerId=" + encodeURI(encodeURI(managerId)) + "&name="
				+ encodeURI(encodeURI(name)) + "&managerPosition="
				+ encodeURI(encodeURI(managerPosition)) + "&school="
				+ encodeURI(encodeURI(school)) + "&address="
				+ encodeURI(encodeURI(address)) + "&phone="
				+ encodeURI(encodeURI(phone)) + "&birthday="
				+ encodeURI(encodeURI(birthday)) + "&gender="
				+ encodeURI(encodeURI(gender)) + "&id="
				+ encodeURI(encodeURI(id)));
	} else {

	}
}

/**
 * verifyManagerUpdate(a)��managerUpdate.jspר�ã���֤��Ҫ���ݣ�
 * ͼƬ����Ϊ�գ������Բ��ϴ�ͼƬ������Ҫ�����ϴ��Ļ���ͼƬ��ʽ������ȷ�� �������Ϊ��
 */
function verifyManagerUpdate(a) { // managerUpdate.jspר�ã���֤�γ̣�verify����ʵ����֤���Ƿ�����ύ��
	var managerId = document.getElementById("managerId").value.trim(); // ��ȡԱ���˺�
	var managerPassword = document.getElementById("managerPassword").value
			.trim(); // ��ȡԱ������
	var verifyPassword = document.getElementById("verifyPassword").value.trim(); // Ա��ȷ������
	var managerPosition = document.getElementById("managerPosition").value
			.trim(); // ��ȡԱ���˺�
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

	var imageLong = document.getElementById("managerImage").value.trim(); // ͼƬ��ʽ�У�jpg��png��gif
	var managerImage = imageLong.substring(imageLong.lastIndexOf("\\") + 1); // ��ȡͼƬ��

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
		if (managerPassword != null
				&& verifyPassword != null
				&& birthday != null
				&& id != null
				&& name != null
				&& phone != null
				&& address != null
				&& school != null
				&& managerPassword != ""
				&& verifyPassword != ""
				&& birthday != ""
				&& id != ""
				&& name != ""
				&& phone != ""
				&& address != ""
				&& school != ""
				&& (managerImage != null || managerImage != ""
						|| managerImage.indexOf(".jpg") >= 0
						|| managerImage.indexOf(".png") >= 0 || managerImage
						.indexOf(".gif") >= 0)
				&& verifyPassword == managerPassword
				&& birthday.replace(/-/g, "") < managerId.substring(0, 8)
				&& ((id.substring(0, 6)).match(regexIdAddress)
						&& (id.substring(6, 14)) == birthday.replace(/-/g, "") && (id
						.substring(14, 18)).match(regexIdFour))
				&& phone.match(regexPhone)) {
			document.getElementById("button").type = "submit";
		} else {
			alert("������Ա���������Ϣ");
		}
	} else if (a.trim() == "managerPassword") {
		if (managerPassword == null || managerPassword == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*Ա�����벻��Ϊ��";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "verifyPassword") {
		if (verifyPassword == null || verifyPassword == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*Ա������ȷ������";
		} else if (verifyPassword != managerPassword) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�����������벻һ��";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "birthday") {
		if (birthday == null || birthday == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*�������ڲ���Ϊ�գ���ܰ��ʾ�������֤������һ�£�";
			document.getElementById("birthday").focus();
		} else if ((birthday.replace(/-/g, "") >= managerId.substring(0, 8))
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
	} else if (a.trim() == "managerImage") {
		if (managerImage == null || managerImage == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else if (managerImage.indexOf(".jpg") < 0
				&& managerImage.indexOf(".png") < 0
				&& managerImage.indexOf(".gif") < 0) {
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
	} else {
		document.getElementById("school").value = "";
		document.getElementById("address").value = "";
		document.getElementById("phone").value = "";
		document.getElementById("birthday").value = "";
		document.getElementById("gender_0").checked = false;
		document.getElementById("gender_1").checked = false;
		document.getElementById("id").value = "";
		document.getElementById("moreImg").src = a + "/unfold.jpg";
		document.getElementById("moreTr").style.display = "none";
		document.getElementById("moreTr0").style.display = "none";
	}
}

function clearGender() { // ����Ա�
	document.getElementById("gender_0").checked = false;
	document.getElementById("gender_1").checked = false;
}

function lock() {
	var name = document.getElementById("name").value.trim(); // ��ȡ��˾������
	if ((name.indexOf("������")) < 0) {
		document.getElementById("name").value = "������" + name;
	}
}

function managerExit() {
	var r = confirm("ȷ��Ҫ�˳���")
	if (r == true) {
		var url = window.location.href.substring(0, window.location.href
				.indexOf("manager"))
				+ "loginManager"; // post��url
		var replaceUrl = window.location.href.substring(0, window.location.href
				.indexOf("manager"))
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