/**
 * newsType() 该方法只用于修改新闻时：对修改页面做相应的控制
 */
function newsNameType() { // 如果新闻标题为“人力招聘”，则标题不可更改；否则的话可以修改新闻标题
	var newsName = document.getElementById("newsName").value;
	if (newsName == "人力招聘") {
		document.getElementById("newsName").readOnly = true;
	} else {
		document.getElementById("newsName").readOnly = false;
	}
}

function newsTypeChange(objId) { // 在新闻类型改变时，对“添加新闻页面”做相应改变
	var selObj = document.getElementById(objId);
	var optionValue = selObj.options[selObj.selectedIndex].value.trim();
	if (optionValue == "人力招聘") {
		document.getElementById("newsName").value = "人力招聘";
		document.getElementById("newsName").readOnly = true;
		document.getElementById("newsNameHint").innerHTML = "*";
	} else {
		document.getElementById("newsName").value = "";
		document.getElementById("newsName").readOnly = false;
		document.getElementById("newsNameHint").innerHTML = "*新闻标题不能为空";
	}
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

function verifyNews(a) { // 验证公司简介（verify：核实、查证）是否可以提交表单
	var editor = $('#newsIntro').xheditor(); // 获取xheditor编辑器
	var newsIntro = editor.getSource(); // 获取公司简介详情（编辑器中的值）

	var selObj = document.getElementById("newsType"); // 获取newsType（及新闻类型）的对象
	var newsType = selObj.options[selObj.selectedIndex].value.trim(); // 获取newsType(及新闻类型)的值
	var newsName = document.getElementById("newsName").value.trim(); // 获取公司简介标题
	var imageLong = document.getElementById("newsImage").value.trim(); // 图片格式有：jpg、png、gif
	var newsImage = imageLong.substring(imageLong.lastIndexOf("\\") + 1); // 获取图片名

	if (a.trim() == "submit") {
		if (newsImage != null
				&& newsIntro != null
				&& newsImage != ""
				&& newsIntro != ""
				&& (newsName.indexOf("已锁定")) < 0
				&& ((newsType == "一般新闻" && newsName != "人力招聘" && newsName != "" && newsName != null) || (newsType == "人力招聘" && newsName == "人力招聘"))
				&& (newsImage.indexOf(".jpg") >= 0
						|| newsImage.indexOf(".png") >= 0 || newsImage
						.indexOf(".gif") >= 0)) {
			document.getElementById("button").type = "submit";
		} else {
			alert("请完善新闻的相关信息");
		}
	} else if (a.trim() == "newsName") {
		if (newsType == "人力招聘") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else {
			if (newsName == null || newsName == "") {
				document.getElementById(a.trim() + "Hint").innerHTML = "*新闻标题不能为空";
			} else if (newsName == "人力招聘") {
				document.getElementById(a.trim() + "Hint").innerHTML = "*一般新闻的标题不能为\"人力招聘\"";
			} else if ((newsName.indexOf("已锁定")) >= 0) {
				document.getElementById(a.trim() + "Hint").innerHTML = "*一般新闻的标题格式不正确";
			} else {
				document.getElementById(a.trim() + "Hint").innerHTML = "*";
			}
		}
	} else if (a.trim() == "newsImage") {
		if (newsImage == null || newsImage == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*新闻图片不能为空（图片格式：jpg、png、gif）";
		} else if (newsImage.indexOf(".jpg") < 0
				&& newsImage.indexOf(".png") < 0
				&& newsImage.indexOf(".gif") < 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*新闻图片格式（jpg、png、gif）不正确";
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

function queriesNews(url) { // （打包查询）查询公司简介信息
	var newsId = document.getElementById("newsId").value.trim();
	var newsName = document.getElementById("newsName").value.trim();
	var newsIntro = document.getElementById("newsIntro").value.trim();
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
	xmlHttp.send("newsId=" + encodeURI(encodeURI(newsId)) + "&newsName="
			+ encodeURI(encodeURI(newsName)) + "&newsIntro="
			+ encodeURI(encodeURI(newsIntro)));
}

function deleteNews(url) { // 删除公司简介信息
	var r = confirm("您确定要删除么？删除后不可撤回！");
	if (r == true) {
		var newsId = document.getElementById("newsId").value.trim();
		var newsName = document.getElementById("newsName").value.trim();
		var newsIntro = document.getElementById("newsIntro").value.trim();

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
		xmlHttp.send("newsId=" + encodeURI(encodeURI(newsId)) + "&newsName="
				+ encodeURI(encodeURI(newsName)) + "&newsIntro="
				+ encodeURI(encodeURI(newsIntro)));
	} else {

	}
}

/**
 * verifyNewsUpdate(a)是newsUpdate.jsp专用；验证主要内容：
 * 图片可以为空（及可以不上传图片；但非要重新上传的话，图片格式必须正确） 其他项不能为空
 */
function verifyNewsUpdate(a) { // newsUpdate.jsp专用：验证公司简介（verify：核实、查证）是否可以提交表单
	var editor = $('#newsIntro').xheditor(); // 获取xheditor编辑器
	var newsIntro = editor.getSource(); // 获取公司简介详情（编辑器中的值）

	var newsName = document.getElementById("newsName").value.trim(); // 获取公司简介标题
	var imageLong = document.getElementById("newsImage").value.trim(); // 注意：图片格式有：jpg、png、gif
	var newsImage = imageLong.substring(imageLong.lastIndexOf("\\") + 1); // 获取图片名

	var newsImageHint = document.getElementById("newsImageHint").innerHTML; // 获取图片后的提示信息

	if (a.trim() == "submit") {
		if (newsName != null
				&& newsIntro != null
				&& newsName != ""
				&& newsIntro != ""
				&& (newsImage == null || newsImage == ""
						|| newsImage.indexOf(".jpg") >= 0
						|| newsImage.indexOf(".png") >= 0 || newsImage
						.indexOf(".gif") >= 0)) {
			document.getElementById("button").type = "submit";
		} else {
			alert("请完善希望的相关信息");
		}
	} else if (a.trim() == "newsName") {
		if (newsName == null || newsName == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*新闻标题不能为空";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "newsImage") {
		if (newsImage == null || newsImage == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else if (newsImage.indexOf(".jpg") < 0
				&& newsImage.indexOf(".png") < 0
				&& newsImage.indexOf(".gif") < 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*新闻图片格式（jpg、png、gif）不正确";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	}
}

function lock() {
	var newsName = document.getElementById("newsName").value.trim(); // 获取公司简介标题
	if ((newsName.indexOf("已锁定")) < 0) {
		document.getElementById("newsName").value = "已锁定" + newsName;
	}
}