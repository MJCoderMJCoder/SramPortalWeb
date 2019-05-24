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

function verifyTeacher(a) { // 验证课程信息（verify：核实、查证）是否可以提交表单
	var editor = $('#teacherExperience').xheditor(); // 获取xheditor编辑器
	var teacherExperience = editor.getSource(); // 获取教师工作经历（编辑器中的值）

	var teacherId = document.getElementById("teacherId").value.trim(); // 获取员工账号
	var teacherPassword = document.getElementById("teacherPassword").value
			.trim(); // 获取员工密码
	var verifyPassword = document.getElementById("verifyPassword").value.trim(); // 员工确认密码
	var teacherGrade = document.getElementById("teacherGrade").value.trim(); // 获取教师所教班级
	var birthday = document.getElementById("birthday").value.trim(); // 获取员工出生日期
	var id = document.getElementById("id").value.trim(); // 获取员工身份证号
	var name = document.getElementById("name").value.trim(); // 获取员工姓名
	var gender; // 获取员工性别开始：0是男、1是女
	if (document.getElementById("gender_1").checked == true) {
		gender = document.getElementById("gender_1").value.trim();
	} else {
		gender = document.getElementById("gender_0").value.trim();
	} // 获取员工性别结束
	var phone = document.getElementById("phone").value.trim(); // 获取员工联系方式
	var address = document.getElementById("address").value.trim(); // 获取员工联系地址
	var school = document.getElementById("school").value.trim(); // 获取毕业院校

	var imageLong = document.getElementById("teacherImage").value.trim(); // 图片格式有：jpg、png、gif
	var teacherImage = imageLong.substring(imageLong.lastIndexOf("\\") + 1); // 获取图片名
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
				&& (name.indexOf("已锁定")) < 0
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
			alert("请完善教师的相关信息");
		}
	} else if (a.trim() == "teacherPassword") {
		if (teacherPassword == null || teacherPassword == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*教师密码不能为空";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "verifyPassword") {
		if (verifyPassword == null || verifyPassword == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*教师必须确认密码";
		} else if (verifyPassword != teacherPassword) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*两次输入密码不一致";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "birthday") {
		if (birthday == null || birthday == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*出生日期不能为空（温馨提示：与身份证上日期一致）";
			document.getElementById("birthday").focus();
		} else if (birthday.replace(/-/g, "") >= teacherId.substring(0, 8)) {
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
					.indexOf("teacher"))
					+ "selectTeacher"; // post的url
			xmlHttp = GetXmlHttpObject(); // 获取XMLHttpRequest 对象
			xmlHttp.onreadystatechange = function() {
				if (xmlHttp.readyState == 4) {
					// 4：请求已完成（可以访问服务器响应并使用它）从服务器的response获得数据
					document.getElementById("idExist").value = xmlHttp.responseText;
					// 判断该员工是否已存在的<input type="hidden" id="idExist" />
					if ((document.getElementById("idExist").value) == "") {
						document.getElementById(a.trim() + "Hint").innerHTML = "*";
					} else {
						document.getElementById(a.trim() + "Hint").innerHTML = "*该教师已存在";
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
			document.getElementById(a.trim() + "Hint").innerHTML = "*教师姓名不能为空";
		} else if ((name.indexOf("已锁定")) >= 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*教师姓名格式不正确";
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
	} else if (a.trim() == "teacherImage") {
		if (teacherImage == null || teacherImage == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*照片不能为空（图片格式：jpg、png、gif）";
		} else if (teacherImage.indexOf(".jpg") < 0
				&& teacherImage.indexOf(".png") < 0
				&& teacherImage.indexOf(".gif") < 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*照片格式（jpg、png、gif）不正确";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	}
}

function queriesTeacher(url) { // （打包查询）查询信息
	var teacherId = document.getElementById("teacherId").value.trim();
	var name = document.getElementById("name").value.trim();
	var gradeName = document.getElementById("gradeName").value.trim();
	var school = document.getElementById("school").value.trim();
	var address = document.getElementById("address").value.trim();
	var phone = document.getElementById("phone").value.trim();
	var birthday = document.getElementById("birthday").value.trim();
	var gender; // 获取员工性别开始：0是男、1是女
	if (document.getElementById("gender_1").checked == true) {
		gender = document.getElementById("gender_1").value.trim();
	} else if (document.getElementById("gender_0").checked == true) {
		gender = document.getElementById("gender_0").value.trim();
	} else {
		gender = "";
	} // 获取员工性别结束
	var id = document.getElementById("id").value.trim();
	var teacherExperience = document.getElementById("teacherExperience").value
			.trim();
	var gradeCount = document.getElementById("gradeCount").value.trim();
	var courseName = document.getElementById("courseName").value.trim();
	var courseSystem = document.getElementById("courseSystem").value.trim();
	var courseDetail = document.getElementById("courseDetail").value.trim();
	var jobDirection = document.getElementById("jobDirection").value.trim();

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

function deleteTeacher(url) { // 删除课程信息
	var r = confirm("您确定要删除么？删除后不可撤回！");
	if (r == true) {
		var teacherId = document.getElementById("teacherId").value.trim();
		var name = document.getElementById("name").value.trim();
		var gradeName = document.getElementById("gradeName").value.trim();
		var school = document.getElementById("school").value.trim();
		var address = document.getElementById("address").value.trim();
		var phone = document.getElementById("phone").value.trim();
		var birthday = document.getElementById("birthday").value.trim();
		var gender; // 获取员工性别开始：0是男、1是女
		if (document.getElementById("gender_1").checked == true) {
			gender = document.getElementById("gender_1").value.trim();
		} else if (document.getElementById("gender_0").checked == true) {
			gender = document.getElementById("gender_0").value.trim();
		} else {
			gender = "";
		} // 获取员工性别结束
		var id = document.getElementById("id").value.trim();
		var teacherExperience = document.getElementById("teacherExperience").value
				.trim();
		var gradeCount = document.getElementById("gradeCount").value.trim();
		var courseName = document.getElementById("courseName").value.trim();
		var courseSystem = document.getElementById("courseSystem").value.trim();
		var courseDetail = document.getElementById("courseDetail").value.trim();
		var jobDirection = document.getElementById("jobDirection").value.trim();

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
 * verifyTeacherUpdate(a)是teacherUpdate.jsp专用；验证主要内容：
 * 图片可以为空（及可以不上传图片；但非要重新上传的话，图片格式必须正确） 其他项不能为空
 */
function verifyTeacherUpdate(a) { // teacherUpdate.jsp专用：验证课程（verify：核实、查证）是否可以提交表单
	var editor = $('#teacherExperience').xheditor(); // 获取xheditor编辑器
	var teacherExperience = editor.getSource(); // 获取教师工作经历（编辑器中的值）

	var teacherId = document.getElementById("teacherId").value.trim(); // 获取员工账号
	var teacherPassword = document.getElementById("teacherPassword").value
			.trim(); // 获取员工密码
	var verifyPassword = document.getElementById("verifyPassword").value.trim(); // 员工确认密码
	var teacherGrade = document.getElementById("teacherGrade").value.trim(); // 获取教师所教班级
	var birthday = document.getElementById("birthday").value.trim(); // 获取员工出生日期
	var id = document.getElementById("id").value.trim(); // 获取员工身份证号
	var name = document.getElementById("name").value.trim(); // 获取员工姓名
	var gender; // 获取员工性别开始：0是男、1是女
	if (document.getElementById("gender_1").checked == true) {
		gender = document.getElementById("gender_1").value.trim();
	} else {
		gender = document.getElementById("gender_0").value.trim();
	} // 获取员工性别结束
	var phone = document.getElementById("phone").value.trim(); // 获取员工联系方式
	var address = document.getElementById("address").value.trim(); // 获取员工联系地址
	var school = document.getElementById("school").value.trim(); // 获取毕业院校

	var imageLong = document.getElementById("teacherImage").value.trim(); // 图片格式有：jpg、png、gif
	var teacherImage = imageLong.substring(imageLong.lastIndexOf("\\") + 1); // 获取图片名
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
			alert("请完善教师的相关信息");
		}
	} else if (a.trim() == "teacherPassword") {
		if (teacherPassword == null || teacherPassword == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*教师密码不能为空";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "verifyPassword") {
		if (verifyPassword == null || verifyPassword == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*教师必须确认密码";
		} else if (verifyPassword != teacherPassword) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*两次输入密码不一致";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "birthday") {
		if (birthday == null || birthday == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*出生日期不能为空（温馨提示：与身份证上日期一致）";
			document.getElementById("birthday").focus();
		} else if ((birthday.replace(/-/g, "") >= teacherId.substring(0, 8))
				|| (birthday.replace(/-/g, "") != id.substring(6, 14))) {
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
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*身份证号格式不正确（温馨提示：身份证上的日期应与出生日期一致）";
		}
	} else if (a.trim() == "name") {
		if (name == null || name == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*教师姓名不能为空";
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
	} else if (a.trim() == "teacherImage") {
		if (teacherImage == null || teacherImage == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else if (teacherImage.indexOf(".jpg") < 0
				&& teacherImage.indexOf(".png") < 0
				&& teacherImage.indexOf(".gif") < 0) {
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

function clearGender() { // 清除性别
	document.getElementById("gender_0").checked = false;
	document.getElementById("gender_1").checked = false;
}

/**
 * 为教师选择上课班级时提供数据
 * 
 * @param url
 *            提供查询班级的url
 */
function queriesGrade(url) { // 查询课程
	xmlHttp = GetXmlHttpObject(); // 获取XMLHttpRequest 对象
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4) { // 4：请求已完成（可以访问服务器响应并使用它）从服务器的response获得数据
			document.getElementById("teacherGrade").innerHTML = xmlHttp.responseText;
		}
	}
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
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
			document.getElementById("teacherGrade").innerHTML = defaultOption
					+ xmlHttp.responseText;
		}
	}
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
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

function teacherExit() {
	var r = confirm("确定要退出吗？")
	if (r == true) {
		var url = window.location.href.substring(0, window.location.href
				.indexOf("teacher"))
				+ "loginTeacher"; // post的url
		var replaceUrl = window.location.href.substring(0, window.location.href
				.indexOf("teacher"))
				+ "backstage"; // window.location.replace("");的url
		xmlHttp = GetXmlHttpObject(); // 获取XMLHttpRequest 对象
		xmlHttp.onreadystatechange = function() {
			if (xmlHttp.readyState == 4) {
				// 4：请求已完成（可以访问服务器响应并使用它）从服务器的response获得数据
				window.location.replace(replaceUrl);
			}
		}
		xmlHttp.open("GET", url, true);
		xmlHttp.send(null);
	}
}

function hasSession(a, url) { /* 判断是否已经退出，然后响应相应事件 */
	// if (window.name == "") {
	// window.location.reload();
	// window.name = 1;
	// } else {
	if (a == "" || a == null) {
		alert("你已安全退出，该页面将在5秒后自动跳转到思软后台的登录页面");
		window.setTimeout(window.top.location.replace(url), 5000);
	} else {
	}
}