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

function packupOrUnfold(dt, srcImage) { // 收起导航栏or展开导航栏
	var imgSrc = document.getElementById(dt + "Img").src;
	if (imgSrc.indexOf("unfold.jpg") >= 0) { // unfold：展开；如果已经收起了，则展开
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

function idBirthday() { // 在输入身份证号之前必须先输入出生日期
	var birthday = document.getElementById("birthday").value.trim(); // 获取员工出生日期
	if (birthday == null || birthday == "") {
		document.getElementById("birthday").focus();
	}
}

function verifyStudent(a) { // 验证课程信息（verify：核实、查证）是否可以提交表单
	var stuId = document.getElementById("stuId").value.trim(); // 获取员工账号
	var stuPassword = document.getElementById("stuPassword").value.trim(); // 获取员工密码
	var verifyPassword = document.getElementById("verifyPassword").value.trim(); // 员工确认密码
	var stuGrade = document.getElementById("stuGrade").value.trim(); // 获取员工账号
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
			alert("请完善员工的相关信息");
		}
	} else if (a.trim() == "stuPassword") {
		if (stuPassword == null || stuPassword == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*员工密码不能为空";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "verifyPassword") {
		if (verifyPassword == null || verifyPassword == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*员工必须确认密码";
		} else if (verifyPassword != stuPassword) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*两次输入密码不一致";
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
			if ((id.substring(0, 6)).match(regexIdAddress)
					&& (id.substring(6, 14)) != birthday.replace(/-/g, "")
					&& (id.substring(14, 18)).match(regexIdFour)) {
				document.getElementById(a.trim() + "Hint").innerHTML = "*出生日期不正确（温馨提示：与身份证上日期一致）";
			} else {
				document.getElementById(a.trim() + "Hint").innerHTML = "*";
			}
		}
	} else if (a.trim() == "id") {
		if (id == null || id == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*身份证号不能为空";
		} else if ((id.substring(0, 6)).match(regexIdAddress)
				&& (id.substring(6, 14)) == birthday.replace(/-/g, "")
				&& (id.substring(14, 18)).match(regexIdFour)) {
			var url = window.location.href.substring(0, window.location.href
					.indexOf("student"))
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
						document.getElementById(a.trim() + "Hint").innerHTML = "*该员工已存在";
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
			document.getElementById(a.trim() + "Hint").innerHTML = "*员工姓名不能为空";
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

function queriesStudent(url) { // （打包查询）查询信息
	var stuId = document.getElementById("stuId").value.trim();
	var stuJobCompany = document.getElementById("stuJobCompany").value.trim();
	var stuJobAddress = document.getElementById("stuJobAddress").value.trim();
	var stuJobPay = document.getElementById("stuJobPay").value.trim();
	var stuJobTime = document.getElementById("stuJobTime").value.trim();
	var id = document.getElementById("id").value.trim();
	var name = document.getElementById("name").value.trim();
	var gender; // 获取员工性别开始：0是男、1是女
	if (document.getElementById("gender_1").checked == true) {
		gender = document.getElementById("gender_1").value.trim();
	} else if (document.getElementById("gender_0").checked == true) {
		gender = document.getElementById("gender_0").value.trim();
	} else {
		gender = "";
	} // 获取员工性别结束
	var birthday = document.getElementById("birthday").value.trim();
	var phone = document.getElementById("phone").value.trim();
	var address = document.getElementById("address").value.trim();
	var school = document.getElementById("school").value.trim();
	var gradeName = document.getElementById("gradeName").value.trim();
	var courseName = document.getElementById("courseName").value.trim();
	var courseSystem = document.getElementById("courseSystem").value.trim();
	var courseDetail = document.getElementById("courseDetail").value.trim();

	xmlHttp = GetXmlHttpObject(); // 获取XMLHttpRequest 对象
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4) { // 4：请求已完成（可以访问服务器响应并使用它）从服务器的response获得数据
			document.getElementById("searchResult").innerHTML = xmlHttp.responseText;
		} else {
			document.getElementById("searchResult").innerHTML = '<tr><td align="center" valign="middle" nowrap="nowrap"><img src="images/loading.gif" alt="加载中" longdesc="加载中"></td></tr>';
		}
	}
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	// 为了解决ajax传值的中文乱码问题（需要经过encodeURI(URI)转换两次）
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

function deleteStudent(url) { // 删除课程信息
	var r = confirm("您确定要删除么？删除后不可撤回！");
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
		var gender; // 获取员工性别开始：0是男、1是女
		if (document.getElementById("gender_1").checked == true) {
			gender = document.getElementById("gender_1").value.trim();
		} else if (document.getElementById("gender_0").checked == true) {
			gender = document.getElementById("gender_0").value.trim();
		} else {
			gender = "";
		} // 获取员工性别结束
		var birthday = document.getElementById("birthday").value.trim();
		var phone = document.getElementById("phone").value.trim();
		var address = document.getElementById("address").value.trim();
		var school = document.getElementById("school").value.trim();
		var gradeName = document.getElementById("gradeName").value.trim();
		var courseName = document.getElementById("courseName").value.trim();
		var courseSystem = document.getElementById("courseSystem").value.trim();
		var courseDetail = document.getElementById("courseDetail").value.trim();

		xmlHttp = GetXmlHttpObject(); // 获取XMLHttpRequest 对象
		xmlHttp.onreadystatechange = function() {
			if (xmlHttp.readyState == 4) { // 4：请求已完成（可以访问服务器响应并使用它）从服务器的response获得数据
				if (((xmlHttp.responseText).indexOf("登录之后才具有相应的访问权限")) >= 0
						&& ((xmlHttp.responseText).indexOf("/backstage")) >= 0) {
					window.top.location.reload();
				} else {
					document.getElementById("searchResult").innerHTML = xmlHttp.responseText;
				}
			} else {
				document.getElementById("searchResult").innerHTML = '<tr><td align="center" valign="middle" nowrap="nowrap"><img src="images/loading.gif" alt="加载中" longdesc="加载中"></td></tr>';
			}
		}
		xmlHttp.open("POST", url, true);
		xmlHttp.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		// 为了解决ajax传值的中文乱码问题（需要经过encodeURI(URI)转换两次）
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

/**
 * 显示更多的精确搜索功能或隐藏更多的精确搜索的功能 display="table-row"：此元素会作为一个表格行显示（类似
 * <tr>）。
 */
function moreSearch(a) {
	var imgSrc = document.getElementById("moreImg").src;
	if (imgSrc.indexOf("unfold.jpg") >= 0) { // unfold：展开；如果已经收起了，则展开
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

function clearGender() { // 清除性别
	document.getElementById("gender_0").checked = false;
	document.getElementById("gender_1").checked = false;
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

function lock() {
	var name = document.getElementById("name").value.trim(); // 获取公司简介标题
	if ((name.indexOf("已锁定")) < 0) {
		document.getElementById("name").value = "已锁定" + name;
	}
}

/**
 * 为教师选择上课班级时提供数据(该方法只用于更新教师信息：teacherUpdate.jsp)
 * 
 * @param url
 *            提供查询班级的url
 * @param defaultOption
 *            提供修改教师信息时，其原先的默认值。
 */
function queriesGrade(url, defaultOption) { // 查询课程
	xmlHttp = GetXmlHttpObject(); // 获取XMLHttpRequest 对象
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4) { // 4：请求已完成（可以访问服务器响应并使用它）从服务器的response获得数据
			document.getElementById("studentGrade").innerHTML = defaultOption
					+ xmlHttp.responseText;
		}
	}
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
}
