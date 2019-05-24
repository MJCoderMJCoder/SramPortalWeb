/**
 * 
 */

function GetXmlHttpObject() { // 获取XMLHttpRequest 对象
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

function idBirthday() { // 在输入身份证号之前必须先输入出生日期
	var birthday = document.getElementById("birthday").value.trim(); // 获取员工出生日期
	if (birthday == null || birthday == "") {
		document.getElementById("birthday").focus();
	}
}

function verifyStudent(a) { // 验证课程信息（verify：核实、查证）是否可以提交表单
	var stuId = document.getElementById("stuId").value.trim(); // 获取员工账号
	var stuPassword = document.getElementById("stuPassword").value.trim(); // 获取员工密码
	var verifyPassword = document.getElementById("verifyPassword").value.trim();// 员工确认密码
	var captcha = document.getElementById("captcha").value.trim(); // 获取学员输入的验证码
	var id = document.getElementById("id").value.trim(); // 获取员工身份证号
	var name = document.getElementById("name").value.trim(); // 获取员工姓名
	var gender; // 获取员工性别开始：0是男、1是女
	if (document.getElementById("gender_1").checked == true) {
		gender = document.getElementById("gender_1").value.trim();
	} else {
		gender = document.getElementById("gender_0").value.trim();
	} // 获取员工性别结束
	var birthday = document.getElementById("birthday").value.trim(); // 获取员工出生日期
	var phone = document.getElementById("phone").value.trim(); // 获取员工联系方式
	var address = document.getElementById("address").value.trim(); // 获取员工联系地址
	var school = document.getElementById("school").value.trim(); // 获取毕业院校

	var imageLong = document.getElementById("studentImage").value.trim(); // 图片格式有：jpg、png、gif
	var studentImage = imageLong.substring(imageLong.lastIndexOf("\\") + 1); // 获取图片名

	var stuJobCompany = document.getElementById("stuJobCompany").value.trim(); // 获取学员就职公司
	var stuJobAddress = document.getElementById("stuJobAddress").value.trim(); // 获取学员工作地点
	var stuJobPay = document.getElementById("stuJobPay").value.trim(); // 获取学员当前年薪
	var stuJobTime = document.getElementById("stuJobTime").value.trim(); // 获取学员就也时间
	/**
	 * 身份证号的正则表达式
	 * 
	 * regexIdAddress身份证号的地址码
	 * 
	 * regexIdFour身份证号的三位数字顺序码和一位数字校验码
	 */
	var regexIdAddress = new RegExp(
			"((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-5])|(71)|(8[1-2]))\\d{4}");
	var regexIdFour = new RegExp("(\\d{4})|(\\d{3}X)|(\\d{3}x)");
	/**
	 * 手机号的正则表达式
	 */
	var regexPhone = new RegExp(
			"((13[0-9])|(14[0-9])|(15[0-9])|(18[0-9])|(17[6-8])|(17[013]))\\d{8}");

	/**
	 * 薪资的正则表达式
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
			document.getElementById("circleLine").innerHTML = '<tr><td align="left" valign="middle" nowrap="nowrap"><div class="circle" style="background-color: blue;">1</div><div class="line" style="background-color: blue;"></div></td><td align="left" valign="middle" nowrap="nowrap"><div class="circle" style="background-color: blue;">2</div> <div class="line" style="background-color: blue;"></div></td> <td align="left" valign="middle" nowrap="nowrap"><div class="circle" style="background-color: blue;">3</div> <div class="line"></div></td> <td align="left" valign="middle" nowrap="nowrap"><div class="circle">&radic;</div></td> </tr> <tr> <td align="left" valign="bottom" nowrap="nowrap" class="process" style="color: blue;">登录信息</td> <td align="left" valign="bottom" nowrap="nowrap" class="process" style="color: blue;">身份信息</td> <td align="left" valign="bottom" nowrap="nowrap" class="process" style="color: blue;">就业意向</td> <td align="left" valign="bottom" nowrap="nowrap" class="process">&nbsp;&nbsp;完成</td></tr>';
		} else {
			alert("请认真完善相关身份信息，否则审核不通过。");
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
			document.getElementById("circleLine").innerHTML = '<tr><td align="left" valign="middle" nowrap="nowrap"><div class="circle" style="background-color: blue;">1</div><div class="line" style="background-color: blue;"></div></td><td align="left" valign="middle" nowrap="nowrap"><div class="circle" style="background-color: blue;">2</div> <div class="line" style="background-color: blue;"></div></td> <td align="left" valign="middle" nowrap="nowrap"><div class="circle" style="background-color: blue;">3</div> <div class="line" style="background-color: blue;"></div></td> <td align="left" valign="middle" nowrap="nowrap"><div class="circle" style="background-color: blue;">&radic;</div></td> </tr> <tr> <td align="left" valign="bottom" nowrap="nowrap" class="process" style="color: blue;">登录信息</td> <td align="left" valign="bottom" nowrap="nowrap" class="process" style="color: blue;">身份信息</td> <td align="left" valign="bottom" nowrap="nowrap" class="process" style="color: blue;">就业意向</td> <td align="left" valign="bottom" nowrap="nowrap" class="process" style="color: blue;">&nbsp;&nbsp;完成</td></tr>';
			document.getElementById("buttonSubmit").type = "submit";
		} else {
			alert("请认真完善就业意向的相关信息，以便管理员为你合理分配班级培训课程。");
		}
	} else if (a.trim() == "stuJobPay") {
		if (stuJobPay == null || stuJobPay == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else if (stuJobPay.match(regexPay)) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*薪资格式不正确";
		}
	} else if (a.trim() == "login") {
		if (stuPassword != null && stuPassword != "" && captcha != null
				&& captcha != "" && verifyPassword == stuPassword
				&& (document.getElementById("captchaValue").value) == captcha) {
			document.getElementById("login").style.display = "none";
			document.getElementById("identity").style.display = "table";
			document.getElementById("circleLine").innerHTML = '<tr><td align="left" valign="middle" nowrap="nowrap"><div class="circle" style="background-color: blue;">1</div><div class="line" style="background-color: blue;"></div></td><td align="left" valign="middle" nowrap="nowrap"><div class="circle" style="background-color: blue;">2</div> <div class="line"></div></td> <td align="left" valign="middle" nowrap="nowrap"><div class="circle">3</div> <div class="line"></div></td> <td align="left" valign="middle" nowrap="nowrap"><div class="circle">&radic;</div></td> </tr> <tr> <td align="left" valign="bottom" nowrap="nowrap" class="process" style="color: blue;">登录信息</td> <td align="left" valign="bottom" nowrap="nowrap" class="process" style="color: blue;">身份信息</td> <td align="left" valign="bottom" nowrap="nowrap" class="process">就业意向</td> <td align="left" valign="bottom" nowrap="nowrap" class="process">&nbsp;&nbsp;完成</td></tr>';
		} else {
			alert("请认真完善相关登录信息，以便今后查询审核状态并接受培训。");
		}
	} else if (a.trim() == "captcha") {
		if (captcha == null || captcha == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*请输入正确的验证码";
		} else {
			var url = window.location.href.substring(0, window.location.href
					.indexOf("register"))
					+ "captchaRand"; // GET的url
			xmlHttp = GetXmlHttpObject(); // 获取XMLHttpRequest 对象
			xmlHttp.onreadystatechange = function() {
				if (xmlHttp.readyState == 4) {
					// 4：请求已完成（可以访问服务器响应并使用它）从服务器的response获得数据
					document.getElementById("captchaValue").value = xmlHttp.responseText;
					// 判断该员工是否已存在的<input type="hidden" id="idExist" />
					if ((document.getElementById("captchaValue").value) == captcha) {
						document.getElementById(a.trim() + "Hint").innerHTML = "*";
					} else {
						document.getElementById(a.trim() + "Hint").innerHTML = "*验证码错误";
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
			document.getElementById(a.trim() + "Hint").innerHTML = "*学员密码不能为空";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "verifyPassword") {
		if (verifyPassword == null || verifyPassword == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*学员必须确认密码";
		} else if (verifyPassword != stuPassword) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*两次的密码不一致";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "birthday") {
		if (birthday == null || birthday == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*出生日期不能为空（温馨提示：与身份证上日期一致）";
			document.getElementById("birthday").focus();
		} else if (birthday.replace(/-/g, "") >= stuId.substring(0, 8)) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*出生日期不正确（温馨提示：与身份证上日期一致）";
			document.getElementById("birthday").focus();
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "id") {
		if (id == null || id == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*身份证号不能为空";
		} else if ((id.substring(0, 6)).match(regexIdAddress)
				&& (id.substring(6, 14)) == birthday.replace(/-/g, "")
				&& (id.substring(14, 18)).match(regexIdFour)) {
			var url = window.location.href.substring(0, window.location.href
					.indexOf("register"))
					+ "selectStudent"; // post的url
			xmlHttp = GetXmlHttpObject(); // 获取XMLHttpRequest 对象
			xmlHttp.onreadystatechange = function() {
				if (xmlHttp.readyState == 4) {
					// 4：请求已完成（可以访问服务器响应并使用它）从服务器的response获得数据
					document.getElementById("idExist").value = xmlHttp.responseText;
					// 判断该员工是否已存在的<input type="hidden" id="idExist" />
					if ((document.getElementById("idExist").value) == "") {
						document.getElementById(a.trim() + "Hint").innerHTML = "*";
					} else {
						document.getElementById(a.trim() + "Hint").innerHTML = "*该学员已存在";
						document.getElementById(a.trim()).focus();
					}
				}
			}
			xmlHttp.open("POST", url, true);
			xmlHttp.setRequestHeader("Content-type",
					"application/x-www-form-urlencoded");
			// 为了解决ajax传值的中文乱码问题（需要经过encodeURI(URI)转换两次）
			xmlHttp.send("id=" + encodeURI(encodeURI(id)));
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*身份证号格式不正确（温馨提示：身份证上的日期应与出生日期一致）";
		}
	} else if (a.trim() == "name") {
		if (name == null || name == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*学员姓名不能为空";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "phone") {
		if (phone == null || phone == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*联系方式不能为空（手机号）";
		} else if (phone.match(regexPhone)) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*手机号码格式不正确";
		}
	} else if (a.trim() == "address") {
		if (address == null || address == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*联系地址不能为空";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "school") {
		if (school == null || school == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*毕业院校不能为空";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "studentImage") {
		if (studentImage == null || studentImage == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*照片不能为空（图片格式：jpg、png、gif）";
		} else if (studentImage.indexOf(".jpg") < 0
				&& studentImage.indexOf(".png") < 0
				&& studentImage.indexOf(".gif") < 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*照片格式（jpg、png、gif）不正确";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	}
}

function getCaptcha() {
	document.getElementById("randImage").src = "captcha.jsp?" + Math.random();
}

function topLogin() { /* 隐藏学员登录、安全退出、个人信息接口 */
	document.getElementById("studentFunction").innerHTML = "";
}

function returnHome(a) {
	window.location.href = a;
}