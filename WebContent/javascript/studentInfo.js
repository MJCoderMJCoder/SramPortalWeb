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

/**
 * 当查看所教班级更多信息时，调用该方法（提示更多所教班级的相关信息）
 * 
 * @param objId
 * @param url
 */
function selectGrade(objId, url) {
	var selObj = document.getElementById(objId);
	var optionValue = selObj.options[selObj.selectedIndex].value.trim();

	xmlHttp = GetXmlHttpObject(); // 获取XMLHttpRequest 对象
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4) { // 4：请求已完成（可以访问服务器响应并使用它）从服务器的response获得数据
			document.getElementById("gradeDetail").innerHTML = xmlHttp.responseText;
			document.getElementById("gradeDetail").style.display = "block";
		}
	}
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	// 为了解决ajax传值的中文乱码问题（需要经过encodeURI(URI)转换两次）
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
 * verifyStudentUpdate(a)是studentUpdate.jsp专用；验证主要内容：
 * 图片可以为空（及可以不上传图片；但非要重新上传的话，图片格式必须正确） 其他项不能为空
 */
function verifyStudentUpdate(a) { // studentUpdate.jsp专用：验证课程（verify：核实、查证）是否可以提交表单
	var stuId = document.getElementById("stuId").value.trim(); // 获取员工账号
	var stuPassword = document.getElementById("stuPassword").value.trim(); // 获取员工密码
	var verifyPassword = document.getElementById("verifyPassword").value.trim(); // 员工确认密码
	// var stuGrade = document.getElementById("stuGrade").value.trim();
	// //获取学员班级（待定：貌似无用）
	var stuJobCompany = document.getElementById("stuJobCompany").value.trim(); // 获取学员就职公司
	var stuJobAddress = document.getElementById("stuJobAddress").value.trim(); // 获取学员工作地点
	var stuJobPay = document.getElementById("stuJobPay").value.trim(); // 获取学员当前年薪
	var stuJobTime = document.getElementById("stuJobTime").value.trim(); // 获取学员就也时间
	var birthday = document.getElementById("birthday").value.trim(); // 获取学员出生日期（待定：貌似无用）
	var id = document.getElementById("id").value.trim(); // 获取学员身份证号（待定：貌似无用）
	var name = document.getElementById("name").value.trim(); // 获取学员姓名
	var gender; // 获取学员性别开始：0是男、1是女
	if (document.getElementById("gender_1").checked == true) {
		gender = document.getElementById("gender_1").value.trim();
	} else {
		gender = document.getElementById("gender_0").value.trim();
	} // 获取学员性别结束
	var phone = document.getElementById("phone").value.trim(); // 获取学员联系方式
	var address = document.getElementById("address").value.trim(); // 获取学员联系地址
	var school = document.getElementById("school").value.trim(); // 获取毕业院校

	var imageLong = document.getElementById("studentImage").value.trim(); // 图片格式有：jpg、png、gif
	var studentImage = imageLong.substring(imageLong.lastIndexOf("\\") + 1); // 获取图片名

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
			alert("请完善学员的相关信息");
		}
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
			document.getElementById(a.trim() + "Hint").innerHTML = "*两次输入密码不一致";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "stuJobPay") {
		if (stuJobPay == null || stuJobPay == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else if (stuJobPay.match(regexPay)) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*年薪格式不正确";
		}
	} else if (a.trim() == "birthday") {
		if (birthday == null || birthday == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*出生日期不能为空（须与身份证上日期一致）";
			document.getElementById("birthday").focus();
		} else if ((birthday.replace(/-/g, "") >= stuId.substring(0, 8))
				|| (birthday.replace(/-/g, "") != id.substring(6, 14))) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*出生日期不正确（须与身份证上日期一致）";
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
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*身份证号格式不正确（身份证上的日期须与出生日期一致）";
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
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else if (studentImage.indexOf(".jpg") < 0
				&& studentImage.indexOf(".png") < 0
				&& studentImage.indexOf(".gif") < 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*照片格式（jpg、png、gif）不正确";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	}
}

function hasSession(a, url) { /* 判断是否已经退出，然后响应相应事件 */
	// if (window.name == "") {
	// window.location.reload();
	// window.name = 1;
	// } else {
	if (a == "" || a == null) {
		alert("你已安全退出，该页面将在5秒后自动跳转到思软门户网站首页");
		window.setTimeout(window.location.replace(url), 5000);
	} else {
	}
}