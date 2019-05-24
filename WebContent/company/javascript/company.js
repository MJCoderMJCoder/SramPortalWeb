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

function verifyCompany(a) { // 验证公司简介（verify：核实、查证）是否可以提交表单
	var editor = $('#companyIntro').xheditor(); // 获取xheditor编辑器
	var companyIntro = editor.getSource(); // 获取公司简介详情（编辑器中的值）

	var companyName = document.getElementById("companyName").value.trim(); // 获取公司简介标题
	var imageLong = document.getElementById("companyImage").value.trim(); // 图片格式有：jpg、png、gif
	var companyImage = imageLong.substring(imageLong.lastIndexOf("\\") + 1); // 获取图片名

	if (a.trim() == "submit") {
		if (companyName != null
				&& companyImage != null
				&& companyIntro != null
				&& companyName != ""
				&& companyImage != ""
				&& companyIntro != ""
				&& (companyName.indexOf("已锁定")) < 0
				&& (companyImage.indexOf(".jpg") >= 0
						|| companyImage.indexOf(".png") >= 0 || companyImage
						.indexOf(".gif") >= 0)) {
			document.getElementById("button").type = "submit";
		} else {
			alert("请完善公司简介的相关信息");
		}
	} else if (a.trim() == "companyName") {
		if (companyName == null || companyName == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*公司简介标题不能为空";
		} else if ((companyName.indexOf("已锁定")) >= 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*公司简介标题格式不正确";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "companyImage") {
		if (companyImage == null || companyImage == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*公司简介图片不能为空（图片格式：jpg、png、gif）";
		} else if (companyImage.indexOf(".jpg") < 0
				&& companyImage.indexOf(".png") < 0
				&& companyImage.indexOf(".gif") < 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*公司简介图片格式（jpg、png、gif）不正确";
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

function queriesCompany(url) { // （打包查询）查询公司简介信息
	var companyId = document.getElementById("companyId").value.trim();
	var companyName = document.getElementById("companyName").value.trim();
	var companyIntro = document.getElementById("companyIntro").value.trim();
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
	xmlHttp.send("companyId=" + encodeURI(encodeURI(companyId))
			+ "&companyName=" + encodeURI(encodeURI(companyName))
			+ "&companyIntro=" + encodeURI(encodeURI(companyIntro)));
}

function deleteCompany(url) { // 删除公司简介信息
	var r = confirm("您确定要删除么？删除后不可撤回！");
	if (r == true) {
		var companyId = document.getElementById("companyId").value.trim();
		var companyName = document.getElementById("companyName").value.trim();
		var companyIntro = document.getElementById("companyIntro").value.trim();

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
		xmlHttp.send("companyId=" + encodeURI(encodeURI(companyId))
				+ "&companyName=" + encodeURI(encodeURI(companyName))
				+ "&companyIntro=" + encodeURI(encodeURI(companyIntro)));
	} else {

	}
}

/**
 * verifyCompanyUpdate(a)是companyUpdate.jsp专用；验证主要内容：
 * 图片可以为空（及可以不上传图片；但非要重新上传的话，图片格式必须正确） 其他项不能为空
 */
function verifyCompanyUpdate(a) { // companyUpdate.jsp专用：验证公司简介（verify：核实、查证）是否可以提交表单
	var editor = $('#companyIntro').xheditor(); // 获取xheditor编辑器
	var companyIntro = editor.getSource(); // 获取公司简介详情（编辑器中的值）

	var companyName = document.getElementById("companyName").value.trim(); // 获取公司简介标题
	var imageLong = document.getElementById("companyImage").value.trim(); // 注意：图片格式有：jpg、png、gif
	var companyImage = imageLong.substring(imageLong.lastIndexOf("\\") + 1); // 获取图片名

	var companyImageHint = document.getElementById("companyImageHint").innerHTML; // 获取图片后的提示信息

	if (a.trim() == "submit") {
		if (companyName != null
				&& companyIntro != null
				&& companyName != ""
				&& companyIntro != ""
				&& (companyImage == null || companyImage == ""
						|| companyImage.indexOf(".jpg") >= 0
						|| companyImage.indexOf(".png") >= 0 || companyImage
						.indexOf(".gif") >= 0)) {
			document.getElementById("button").type = "submit";
		} else {
			alert("请完善公司简介的相关信息");
		}
	} else if (a.trim() == "companyName") {
		if (companyName == null || companyName == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*公司简介标题不能为空";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	} else if (a.trim() == "companyImage") {
		if (companyImage == null || companyImage == "") {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		} else if (companyImage.indexOf(".jpg") < 0
				&& companyImage.indexOf(".png") < 0
				&& companyImage.indexOf(".gif") < 0) {
			document.getElementById(a.trim() + "Hint").innerHTML = "*公司简介图片格式（jpg、png、gif）不正确";
		} else {
			document.getElementById(a.trim() + "Hint").innerHTML = "*";
		}
	}
}

function lock() {
	var companyName = document.getElementById("companyName").value.trim(); // 获取公司简介标题
	if ((companyName.indexOf("已锁定")) < 0) {
		document.getElementById("companyName").value = "已锁定" + companyName;
	}
}