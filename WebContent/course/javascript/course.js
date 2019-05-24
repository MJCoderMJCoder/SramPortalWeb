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

function verifyCourse(a) { // 验证课程信息（verify：核实、查证）是否可以提交表单
	var editor = $('#courseIntro').xheditor(); // 获取xheditor编辑器
	var courseIntro = editor.getSource(); // 获取课程详情（编辑器中的值）

	var courseName = document.getElementById("courseName").value.trim(); // 获取课程名称
	var courseSystem = document.getElementById("courseSystem").value.trim(); // 获取课程体系
	var jobDirection = document.getElementById("jobDirection").value.trim(); // 获取就业方向
	var imageLong = document.getElementById("courseImage").value.trim(); // 图片格式有：jpg、png、gif
	var courseImage = imageLong.substring(imageLong.lastIndexOf("\\") + 1); // 获取图片名

	if (a.trim() == "submit") {
		if (courseName != null
				&& courseSystem != null
				&& jobDirection != null
				&& courseImage != null
				&& courseIntro != null
				&& courseName != ""
				&& courseSystem != ""
				&& jobDirection != ""
				&& courseImage != ""
				&& courseIntro != ""
				&& (courseName.indexOf("已锁定")) < 0
				&& (courseImage.indexOf(".jpg") >= 0
						|| courseImage.indexOf(".png") >= 0 || courseImage
						.indexOf(".gif") >= 0)) {
			document.getElementById("button").type = "submit";
		} else {
			alert("请完善课程的相关信息");
		}
	} else if (a.trim() == "courseName") {
		if (courseName == null || courseName == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*课程名称不能为空";
		} else if ((courseName.indexOf("已锁定")) >= 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*课程名称格式不正确";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "courseSystem") {
		if (courseSystem == null || courseSystem == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*课程体系不能为空";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "jobDirection") {
		if (jobDirection == null || jobDirection == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*就业方向不能为空";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "courseImage") {
		if (courseImage == null || courseImage == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*课程图片不能为空（图片格式：jpg、png、gif）";
		} else if (courseImage.indexOf(".jpg") < 0
				&& courseImage.indexOf(".png") < 0
				&& courseImage.indexOf(".gif") < 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*课程图片格式（jpg、png、gif）不正确";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
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

function queriesCourse(url) { // （打包查询）查询课程信息
	var courseId = document.getElementById("courseId").value.trim();
	var courseName = document.getElementById("courseName").value.trim();
	var courseIntro = document.getElementById("courseIntro").value.trim();
	var courseSystem = document.getElementById("courseSystem").value.trim();
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
	xmlHttp.send("courseId=" + encodeURI(encodeURI(courseId)) + "&courseName="
			+ encodeURI(encodeURI(courseName)) + "&courseIntro="
			+ encodeURI(encodeURI(courseIntro)) + "&courseSystem="
			+ encodeURI(encodeURI(courseSystem)) + "&jobDirection="
			+ encodeURI(encodeURI(jobDirection)));
}

function deleteCourse(url) { // 删除课程信息
	var r = confirm("您确定要删除么？删除后不可撤回！");
	if (r == true) {
		var courseId = document.getElementById("courseId").value.trim();
		var courseName = document.getElementById("courseName").value.trim();
		var courseIntro = document.getElementById("courseIntro").value.trim();
		var courseSystem = document.getElementById("courseSystem").value.trim();
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
		xmlHttp.send("courseId=" + encodeURI(encodeURI(courseId))
				+ "&courseName=" + encodeURI(encodeURI(courseName))
				+ "&courseIntro=" + encodeURI(encodeURI(courseIntro))
				+ "&courseSystem=" + encodeURI(encodeURI(courseSystem))
				+ "&jobDirection=" + encodeURI(encodeURI(jobDirection)));
	} else {

	}
}

/**
 * verifyCourseUpdate(a)是courseUpdate.jsp专用；验证主要内容：
 * 图片可以为空（及可以不上传图片；但非要重新上传的话，图片格式必须正确） 其他项不能为空
 */
function verifyCourseUpdate(a) { // courseUpdate.jsp专用：验证课程（verify：核实、查证）是否可以提交表单
	var editor = $('#courseIntro').xheditor(); // 获取xheditor编辑器
	var courseIntro = editor.getSource(); // 获取课程详情（编辑器中的值）

	var courseName = document.getElementById("courseName").value.trim(); // 获取课程名称
	var courseSystem = document.getElementById("courseSystem").value.trim(); // 获取课程体系
	var jobDirection = document.getElementById("jobDirection").value.trim(); // 获取就业方向
	var imageLong = document.getElementById("courseImage").value.trim(); // 图片格式有：jpg、png、gif
	var courseImage = imageLong.substring(imageLong.lastIndexOf("\\") + 1); // 获取图片名

	var courseImageHint = document.getElementById("courseImageHint").innerHTML; // 获取图片后的提示信息
	if (a.trim() == "submit") {
		if (courseName != null
				&& courseSystem != null
				&& jobDirection != null
				&& courseIntro != null
				&& courseName != ""
				&& courseSystem != ""
				&& jobDirection != ""
				&& courseIntro != ""
				&& (courseImage == null || courseImage == ""
						|| courseImage.indexOf(".jpg") >= 0
						|| courseImage.indexOf(".png") >= 0 || courseImage
						.indexOf(".gif") >= 0)) {
			document.getElementById("button").type = "submit";
		} else {
			alert("请完善课程的相关信息");
		}
	} else if (a.trim() == "courseName") {
		if (courseName == null || courseName == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*课程名称不能为空";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "courseSystem") {
		if (courseSystem == null || courseSystem == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*课程体系不能为空";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "jobDirection") {
		if (jobDirection == null || jobDirection == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*就业方向不能为空";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "courseImage") {
		if (courseImage == null || courseImage == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else if (courseImage.indexOf(".jpg") < 0
				&& courseImage.indexOf(".png") < 0
				&& courseImage.indexOf(".gif") < 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*课程图片格式（jpg、png、gif）不正确";
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
	} else {
		document.getElementById("courseSystem").value = "";
		document.getElementById("jobDirection").value = "";
		document.getElementById("moreImg").src = a + "/unfold.jpg";
		document.getElementById("moreTr").style.display = "none";
	}
}

function lock() {
	var courseName = document.getElementById("courseName").value.trim(); // 获取公司简介标题
	if ((courseName.indexOf("已锁定")) < 0) {
		document.getElementById("courseName").value = "已锁定" + courseName;
	}
}