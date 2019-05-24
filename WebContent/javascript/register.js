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

function idBirthday() { // ���������֤��֮ǰ�����������������
	var birthday = document.getElementById("birthday").value.trim(); // ��ȡԱ����������
	if (birthday == null || birthday == "") {
		document.getElementById("birthday").focus();
	}
}

function verifyStudent(a) { // ��֤�γ���Ϣ��verify����ʵ����֤���Ƿ�����ύ��
	var stuId = document.getElementById("stuId").value.trim(); // ��ȡԱ���˺�
	var stuPassword = document.getElementById("stuPassword").value.trim(); // ��ȡԱ������
	var verifyPassword = document.getElementById("verifyPassword").value.trim();// Ա��ȷ������
	var captcha = document.getElementById("captcha").value.trim(); // ��ȡѧԱ�������֤��
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

	var stuJobCompany = document.getElementById("stuJobCompany").value.trim(); // ��ȡѧԱ��ְ��˾
	var stuJobAddress = document.getElementById("stuJobAddress").value.trim(); // ��ȡѧԱ�����ص�
	var stuJobPay = document.getElementById("stuJobPay").value.trim(); // ��ȡѧԱ��ǰ��н
	var stuJobTime = document.getElementById("stuJobTime").value.trim(); // ��ȡѧԱ��Ҳʱ��
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

	if (a.trim() == "identity") {
		if (birthday != null
				&& id != null
				&& name != null
				&& phone != null
				&& address != null
				&& school != null
				&& studentImage != null
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
				&& birthday.replace(/-/g, "") < stuId.substring(0, 8)
				&& ((id.substring(0, 6)).match(regexIdAddress)
						&& (id.substring(6, 14)) == birthday.replace(/-/g, "") && (id
						.substring(14, 18)).match(regexIdFour))
				&& phone.match(regexPhone)) {
			document.getElementById("login").style.display = "none";
			document.getElementById("identity").style.display = "none";
			document.getElementById("job").style.display = "table";
			document.getElementById("circleLine").innerHTML = '<tr><td align="left" valign="middle" nowrap="nowrap"><div class="circle" style="background-color: blue;">1</div><div class="line" style="background-color: blue;"></div></td><td align="left" valign="middle" nowrap="nowrap"><div class="circle" style="background-color: blue;">2</div> <div class="line" style="background-color: blue;"></div></td> <td align="left" valign="middle" nowrap="nowrap"><div class="circle" style="background-color: blue;">3</div> <div class="line"></div></td> <td align="left" valign="middle" nowrap="nowrap"><div class="circle">&radic;</div></td> </tr> <tr> <td align="left" valign="bottom" nowrap="nowrap" class="process" style="color: blue;">��¼��Ϣ</td> <td align="left" valign="bottom" nowrap="nowrap" class="process" style="color: blue;">�����Ϣ</td> <td align="left" valign="bottom" nowrap="nowrap" class="process" style="color: blue;">��ҵ����</td> <td align="left" valign="bottom" nowrap="nowrap" class="process">&nbsp;&nbsp;���</td></tr>';
		} else {
			alert("������������������Ϣ��������˲�ͨ����");
		}
	} else if (a.trim() == "jobReset") {
		document.getElementById("stuJobCompany").value = "";
		document.getElementById("stuJobAddress").value = "";
		document.getElementById("stuJobPay").value = "";
		document.getElementById("stuJobTime").value = "";
		document.getElementById("stuJobCompanyHint").innerHTML = "*";
		document.getElementById("stuJobAddressHint").innerHTML = "*";
		document.getElementById("stuJobPayHint").innerHTML = "*";
		document.getElementById("stuJobTimeHint").innerHTML = "*";
	} else if (a.trim() == "job") {
		if (stuJobPay == null || stuJobPay == "" || stuJobPay.match(regexPay)) {
			document.getElementById("identity").style.display = "none";
			document.getElementById("login").style.display = "none";
			document.getElementById("job").style.display = "none";
			document.getElementById("complete").style.display = "table";
			document.getElementById("circleLine").innerHTML = '<tr><td align="left" valign="middle" nowrap="nowrap"><div class="circle" style="background-color: blue;">1</div><div class="line" style="background-color: blue;"></div></td><td align="left" valign="middle" nowrap="nowrap"><div class="circle" style="background-color: blue;">2</div> <div class="line" style="background-color: blue;"></div></td> <td align="left" valign="middle" nowrap="nowrap"><div class="circle" style="background-color: blue;">3</div> <div class="line" style="background-color: blue;"></div></td> <td align="left" valign="middle" nowrap="nowrap"><div class="circle" style="background-color: blue;">&radic;</div></td> </tr> <tr> <td align="left" valign="bottom" nowrap="nowrap" class="process" style="color: blue;">��¼��Ϣ</td> <td align="left" valign="bottom" nowrap="nowrap" class="process" style="color: blue;">�����Ϣ</td> <td align="left" valign="bottom" nowrap="nowrap" class="process" style="color: blue;">��ҵ����</td> <td align="left" valign="bottom" nowrap="nowrap" class="process" style="color: blue;">&nbsp;&nbsp;���</td></tr>';
			document.getElementById("buttonSubmit").type = "submit";
		} else {
			alert("���������ƾ�ҵ����������Ϣ���Ա����ԱΪ��������༶��ѵ�γ̡�");
		}
	} else if (a.trim() == "stuJobPay") {
		if (stuJobPay == null || stuJobPay == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else if (stuJobPay.match(regexPay)) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*н�ʸ�ʽ����ȷ";
		}
	} else if (a.trim() == "login") {
		if (stuPassword != null && stuPassword != "" && captcha != null
				&& captcha != "" && verifyPassword == stuPassword
				&& (document.getElementById("captchaValue").value) == captcha) {
			document.getElementById("login").style.display = "none";
			document.getElementById("identity").style.display = "table";
			document.getElementById("circleLine").innerHTML = '<tr><td align="left" valign="middle" nowrap="nowrap"><div class="circle" style="background-color: blue;">1</div><div class="line" style="background-color: blue;"></div></td><td align="left" valign="middle" nowrap="nowrap"><div class="circle" style="background-color: blue;">2</div> <div class="line"></div></td> <td align="left" valign="middle" nowrap="nowrap"><div class="circle">3</div> <div class="line"></div></td> <td align="left" valign="middle" nowrap="nowrap"><div class="circle">&radic;</div></td> </tr> <tr> <td align="left" valign="bottom" nowrap="nowrap" class="process" style="color: blue;">��¼��Ϣ</td> <td align="left" valign="bottom" nowrap="nowrap" class="process" style="color: blue;">�����Ϣ</td> <td align="left" valign="bottom" nowrap="nowrap" class="process">��ҵ����</td> <td align="left" valign="bottom" nowrap="nowrap" class="process">&nbsp;&nbsp;���</td></tr>';
		} else {
			alert("������������ص�¼��Ϣ���Ա����ѯ���״̬��������ѵ��");
		}
	} else if (a.trim() == "captcha") {
		if (captcha == null || captcha == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*��������ȷ����֤��";
		} else {
			var url = window.location.href.substring(0, window.location.href
					.indexOf("register"))
					+ "captchaRand"; // GET��url
			xmlHttp = GetXmlHttpObject(); // ��ȡXMLHttpRequest ����
			xmlHttp.onreadystatechange = function() {
				if (xmlHttp.readyState == 4) {
					// 4����������ɣ����Է��ʷ�������Ӧ��ʹ�������ӷ�������response�������
					document.getElementById("captchaValue").value = xmlHttp.responseText;
					// �жϸ�Ա���Ƿ��Ѵ��ڵ�<input type="hidden" id="idExist" />
					if ((document.getElementById("captchaValue").value) == captcha) {
						document.getElementById(a.trim() + "Hint").innerHTML = "*";
					} else {
						document.getElementById(a.trim() + "Hint").innerHTML = "*��֤�����";
					}
				}
			}
			xmlHttp.open("GET", url, true);
			xmlHttp.send(null);
		}
	} else if (a.trim() == "loginReset") {
		document.getElementById("stuPassword").value = "";
		document.getElementById("verifyPassword").value = "";
		document.getElementById("captcha").value = "";
		document.getElementById("stuPasswordHint").innerHTML = "*";
		document.getElementById("verifyPasswordHint").innerHTML = "*";
		document.getElementById("captchaHint").innerHTML = "*";
		document.getElementById("randImage").src = "captcha.jsp?"
				+ Math.random();
	} else if (a.trim() == "identityReset") {
		document.getElementById("birthday").value = "";
		document.getElementById("id").value = "";
		document.getElementById("name").value = "";
		document.getElementById("phone").value = "";
		document.getElementById("address").value = "";
		document.getElementById("school").value = "";
		document.getElementById("birthdayHint").innerHTML = "*";
		document.getElementById("idHint").innerHTML = "*";
		document.getElementById("nameHint").innerHTML = "*";
		document.getElementById("phoneHint").innerHTML = "*";
		document.getElementById("addressHint").innerHTML = "*";
		document.getElementById("schoolHint").innerHTML = "*";
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
			document.getElementById(a.trim() + "Hint").innerHTML = "*���ε����벻һ��";
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
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "id") {
		if (id == null || id == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*���֤�Ų���Ϊ��";
		} else if ((id.substring(0, 6)).match(regexIdAddress)
				&& (id.substring(6, 14)) == birthday.replace(/-/g, "")
				&& (id.substring(14, 18)).match(regexIdFour)) {
			var url = window.location.href.substring(0, window.location.href
					.indexOf("register"))
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
						document.getElementById(a.trim() + "Hint").innerHTML = "*��ѧԱ�Ѵ���";
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

function getCaptcha() {
	document.getElementById("randImage").src = "captcha.jsp?" + Math.random();
}

function topLogin() { /* ����ѧԱ��¼����ȫ�˳���������Ϣ�ӿ� */
	document.getElementById("studentFunction").innerHTML = "";
}

function returnHome(a) {
	window.location.href = a;
}