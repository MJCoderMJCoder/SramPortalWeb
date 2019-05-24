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

function verifyManager(a) { // 验证课程信息（verify：核实、查证）是否可以提交表单
	var managerId = document.getElementById("managerId").value.trim(); // 获取员工账号
	var managerPassword = document.getElementById("managerPassword").value
			.trim(); // 获取员工密码
	var verifyPassword = document.getElementById("verifyPassword").value.trim(); // 员工确认密码
	var managerPosition = document.getElementById("managerPosition").value
			.trim(); // 获取员工账号
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

	var imageLong = document.getElementById("managerImage").value.trim(); // 图片格式有：jpg、png、gif
	var managerImage = imageLong.substring(imageLong.lastIndexOf("\\") + 1); // 获取图片名
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
				&& (name.indexOf("已锁定")) < 0
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
			alert("请完善员工的相关信息");
		}
	} else if (a.trim() == "managerPassword") {
		if (managerPassword == null || managerPassword == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*员工密码不能为空";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "verifyPassword") {
		if (verifyPassword == null || verifyPassword == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*员工必须确认密码";
		} else if (verifyPassword != managerPassword) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*两次输入密码不一致";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "birthday") {
		if (birthday == null || birthday == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*出生日期不能为空（温馨提示：与身份证上日期一致）";
			document.getElementById("birthday").focus();
		} else if (birthday.replace(/-/g, "") >= managerId.substring(0, 8)) {
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
					.indexOf("manager"))
					+ "selectManager"; // post的url
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
		} else if ((name.indexOf("已锁定")) >= 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*员工姓名格式不正确";
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
	} else if (a.trim() == "managerImage") {
		if (managerImage == null || managerImage == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*照片不能为空（图片格式：jpg、png、gif）";
		} else if (managerImage.indexOf(".jpg") < 0
				&& managerImage.indexOf(".png") < 0
				&& managerImage.indexOf(".gif") < 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*照片格式（jpg、png、gif）不正确";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	}
}

function queriesManager(url) { // （打包查询）查询信息
	var managerId = document.getElementById("managerId").value.trim();
	var name = document.getElementById("name").value.trim();
	var managerPosition = document.getElementById("managerPositionText").value
			.trim();
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
	xmlHttp.send("managerId=" + encodeURI(encodeURI(managerId)) + "&name="
			+ encodeURI(encodeURI(name)) + "&managerPosition="
			+ encodeURI(encodeURI(managerPosition)) + "&school="
			+ encodeURI(encodeURI(school)) + "&address="
			+ encodeURI(encodeURI(address)) + "&phone="
			+ encodeURI(encodeURI(phone)) + "&birthday="
			+ encodeURI(encodeURI(birthday)) + "&gender="
			+ encodeURI(encodeURI(gender)) + "&id=" + encodeURI(encodeURI(id)));
}

function deleteManager(url) { // 删除课程信息
	var r = confirm("您确定要删除么？删除后不可撤回！");
	if (r == true) {
		var managerId = document.getElementById("managerId").value.trim();
		var name = document.getElementById("name").value.trim();
		var managerPosition = document.getElementById("managerPositionText").value
				.trim();
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
 * verifyManagerUpdate(a)是managerUpdate.jsp专用；验证主要内容：
 * 图片可以为空（及可以不上传图片；但非要重新上传的话，图片格式必须正确） 其他项不能为空
 */
function verifyManagerUpdate(a) { // managerUpdate.jsp专用：验证课程（verify：核实、查证）是否可以提交表单
	var managerId = document.getElementById("managerId").value.trim(); // 获取员工账号
	var managerPassword = document.getElementById("managerPassword").value
			.trim(); // 获取员工密码
	var verifyPassword = document.getElementById("verifyPassword").value.trim(); // 员工确认密码
	var managerPosition = document.getElementById("managerPosition").value
			.trim(); // 获取员工账号
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

	var imageLong = document.getElementById("managerImage").value.trim(); // 图片格式有：jpg、png、gif
	var managerImage = imageLong.substring(imageLong.lastIndexOf("\\") + 1); // 获取图片名

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
			alert("请完善员工的相关信息");
		}
	} else if (a.trim() == "managerPassword") {
		if (managerPassword == null || managerPassword == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*员工密码不能为空";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "verifyPassword") {
		if (verifyPassword == null || verifyPassword == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*员工必须确认密码";
		} else if (verifyPassword != managerPassword) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*两次输入密码不一致";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "birthday") {
		if (birthday == null || birthday == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*出生日期不能为空（温馨提示：与身份证上日期一致）";
			document.getElementById("birthday").focus();
		} else if ((birthday.replace(/-/g, "") >= managerId.substring(0, 8))
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
	} else if (a.trim() == "managerImage") {
		if (managerImage == null || managerImage == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else if (managerImage.indexOf(".jpg") < 0
				&& managerImage.indexOf(".png") < 0
				&& managerImage.indexOf(".gif") < 0) {
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

function clearGender() { // 清除性别
	document.getElementById("gender_0").checked = false;
	document.getElementById("gender_1").checked = false;
}

function lock() {
	var name = document.getElementById("name").value.trim(); // 获取公司简介标题
	if ((name.indexOf("已锁定")) < 0) {
		document.getElementById("name").value = "已锁定" + name;
	}
}

function managerExit() {
	var r = confirm("确定要退出吗？")
	if (r == true) {
		var url = window.location.href.substring(0, window.location.href
				.indexOf("manager"))
				+ "loginManager"; // post的url
		var replaceUrl = window.location.href.substring(0, window.location.href
				.indexOf("manager"))
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