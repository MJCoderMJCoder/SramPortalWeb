/**
 * 
 */

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

function verifyGrade(a) { // 验证课程信息（verify：核实、查证）是否可以提交表单
	var gradeName = document.getElementById("gradeName").value.trim(); // 获取班级名称
	var gradeCount = document.getElementById("gradeCount").value.trim(); // 获取班级人数
	var regexTwo = new RegExp("\\d\\d"); // 验证两位数的正则表达式
	var regexOne = new RegExp("[1-9]"); // 验证一位数的正则表达式
	if (a.trim() == "submit") {
		if (gradeName != null
				&& gradeName != ""
				&& (gradeName.indexOf("已锁定")) < 0
				&& ((gradeCount.length == 1 && gradeCount.match(regexOne)) || (gradeCount.length == 2
						&& gradeCount.match(regexTwo) && gradeCount > 0))) {
			document.getElementById("button").type = "submit";
		} else {
			alert("请完善班级的相关信息");
		}
	} else if (a.trim() == "gradeName") {
		if (gradeName == null || gradeName == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*班级名称不能为空";
		} else if ((gradeName.indexOf("已锁定")) >= 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*班级名称格式不正确";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "gradeCount") {
		if (gradeCount == null || gradeCount == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*班级人数不能为空";
		} else if (gradeCount.length == 1 && gradeCount.match(regexOne)) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else if (gradeCount.length == 2 && gradeCount.match(regexTwo)
				&& gradeCount > 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*班级人数为正整数";
		}
	}
}

function verifyGradeUpdate(a) { // 验证课程信息（verify：核实、查证）是否可以提交表单
	var gradeName = document.getElementById("gradeName").value.trim(); // 获取班级名称
	var gradeCount = document.getElementById("gradeCount").value.trim(); // 获取班级人数
	var regexTwo = new RegExp("\\d\\d"); // 验证两位数的正则表达式
	var regexOne = new RegExp("[1-9]"); // 验证一位数的正则表达式
	if (a.trim() == "submit") {
		if (gradeName != null
				&& gradeName != ""
				&& ((gradeCount.length == 1 && gradeCount.match(regexOne)) || (gradeCount.length == 2
						&& gradeCount.match(regexTwo) && gradeCount > 0))) {
			document.getElementById("button").type = "submit";
		} else {
			alert("请完善班级的相关信息");
		}
	} else if (a.trim() == "gradeName") {
		if (gradeName == null || gradeName == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*班级名称不能为空";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "gradeCount") {
		if (gradeCount == null || gradeCount == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*班级人数不能为空";
		} else if (gradeCount.length == 1 && gradeCount.match(regexOne)) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else if (gradeCount.length == 2 && gradeCount.match(regexTwo)
				&& gradeCount > 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*班级人数为正整数";
		}
	}
}

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

function queriesGrade(url) { // （打包查询）查询班级信息
	var gradeId = document.getElementById("gradeId").value.trim();
	var gradeName = document.getElementById("gradeName").value.trim();
	var gradeCount = document.getElementById("gradeCount").value.trim(); // 班级人数
	var gradeCourseName = document.getElementById("gradeCourseName").value
			.trim(); // 班级课程名称
	var gradeCourseSystem = document.getElementById("gradeCourseSystem").value
			.trim(); // 班级课程体系
	var gradeCourseJob = document.getElementById("gradeCourseJob").value.trim(); // 班级课程就业方向
	var gradeCourseDetail = document.getElementById("gradeCourseDetail").value
			.trim(); // 班级课程详情

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
	xmlHttp.send("gradeId=" + encodeURI(encodeURI(gradeId)) + "&gradeName="
			+ encodeURI(encodeURI(gradeName)) + "&gradeCount="
			+ encodeURI(encodeURI(gradeCount)) + "&gradeCourseName="
			+ encodeURI(encodeURI(gradeCourseName)) + "&gradeCourseSystem="
			+ encodeURI(encodeURI(gradeCourseSystem)) + "&gradeCourseJob="
			+ encodeURI(encodeURI(gradeCourseJob)) + "&gradeCourseDetail="
			+ encodeURI(encodeURI(gradeCourseDetail)));
}

function deleteGrade(url) { // 删除班级信息
	var r = confirm("您确定要删除么？删除后不可撤回！");
	if (r == true) {
		var gradeId = document.getElementById("gradeId").value.trim();
		var gradeName = document.getElementById("gradeName").value.trim();
		var gradeCount = document.getElementById("gradeCount").value.trim(); // 班级人数
		var gradeCourseName = document.getElementById("gradeCourseName").value
				.trim(); // 班级课程名称
		var gradeCourseSystem = document.getElementById("gradeCourseSystem").value
				.trim(); // 班级课程体系
		var gradeCourseJob = document.getElementById("gradeCourseJob").value
				.trim(); // 班级课程就业方向
		var gradeCourseDetail = document.getElementById("gradeCourseDetail").value
				.trim(); // 班级课程详情

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
		xmlHttp.send("gradeId=" + encodeURI(encodeURI(gradeId)) + "&gradeName="
				+ encodeURI(encodeURI(gradeName)) + "&gradeCount="
				+ encodeURI(encodeURI(gradeCount)) + "&gradeCourseName="
				+ encodeURI(encodeURI(gradeCourseName)) + "&gradeCourseSystem="
				+ encodeURI(encodeURI(gradeCourseSystem)) + "&gradeCourseJob="
				+ encodeURI(encodeURI(gradeCourseJob)) + "&gradeCourseDetail="
				+ encodeURI(encodeURI(gradeCourseDetail)));
	} else {

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
		document.getElementById("moreTr1").style.display = "table-row";
	} else {
		document.getElementById("gradeCourseName").value = "";
		document.getElementById("gradeCourseSystem").value = "";
		document.getElementById("gradeCourseJob").value = "";
		document.getElementById("gradeCourseDetail").value = "";
		document.getElementById("moreImg").src = a + "/unfold.jpg";
		document.getElementById("moreTr").style.display = "none";
		document.getElementById("moreTr1").style.display = "none";
	}
}

/**
 * 当查看已选课程更多信息时，调用该方法（提示更多已选课程的信息）
 * 
 * @param selObj
 */
function selectCourse(objId, url) { // 显示已选课程信息的详情
	var selObj = document.getElementById(objId);
	var optionValue = selObj.options[selObj.selectedIndex].value.trim();
	xmlHttp = GetXmlHttpObject(); // 获取XMLHttpRequest 对象
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4) { // 4：请求已完成（可以访问服务器响应并使用它）从服务器的response获得数据
			document.getElementById("courseDetail").innerHTML = xmlHttp.responseText;
			document.getElementById("courseDetail").style.display = "block";
		}
	}
	xmlHttp.open("POST", url, true);
	xmlHttp.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	// 为了解决ajax传值的中文乱码问题（需要经过encodeURI(URI)转换两次）
	xmlHttp.send("courseId=" + encodeURI(encodeURI(optionValue)));
}
function hideCourse() { // 隐藏已选课程信息的详情
	document.getElementById("courseDetail").style.display = "none";
}

/**
 * 为选择班级课程时提供数据
 * 
 * @param url
 */
function queriesCourse(url) { // 查询课程
	xmlHttp = GetXmlHttpObject(); // 获取XMLHttpRequest 对象
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4) { // 4：请求已完成（可以访问服务器响应并使用它）从服务器的response获得数据
			document.getElementById("gradeCourse").innerHTML = xmlHttp.responseText;
		}
	}
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
}

/**
 * 为选择班级课程时提供数据（该方法是更新班级信息时专用） gradeUpdate.jsp装载时调用，为其提供课程信息的数据和其默认值（更新班级的默认值）
 * 
 * @param url
 */
function queriesCourseUpdate(url, defaultOption) { // 查询课程
	xmlHttp = GetXmlHttpObject(); // 获取XMLHttpRequest 对象
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4) { // 4：请求已完成（可以访问服务器响应并使用它）从服务器的response获得数据
			document.getElementById("gradeCourse").innerHTML = defaultOption
					+ xmlHttp.responseText;
		}
	}
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
}

function lock() {
	var gradeName = document.getElementById("gradeName").value.trim(); // 获取公司简介标题
	if ((gradeName.indexOf("已锁定")) < 0) {
		document.getElementById("gradeName").value = "已锁定" + gradeName;
	}
}