/**
 * 顶部的js文件
 */

// 设置为主页
function setHome(obj, vrl) {
	try {
		obj.style.behavior = 'url(#default#homepage)';
		obj.setHomePage(vrl);
	} catch (e) {
		if (window.netscape) {
			try {
				netscape.security.PrivilegeManager
						.enablePrivilege("UniversalXPConnect");
			} catch (e) {
				alert("您的浏览器暂时不支持自动设为首页，请手动添加。");
			}
			var prefs = Components.classes['@mozilla.org/preferences-service;1']
					.getService(Components.interfaces.nsIPrefBranch);
			prefs.setCharPref('browser.startup.homepage', vrl);
		} else {
			alert("您的浏览器暂时不支持自动设为首页，请手动添加。");
		}
	}
}

// 加入收藏
function addCollect(sTitle, sURL) {
	try {
		window.external.AddFavorite(sURL, sTitle);
	} catch (e) {
		try {
			window.sidebar.addPanel(sTitle, sURL, "");
		} catch (e) {
			alert("您的浏览器暂时不支持自动收藏，请使用Ctrl+D进行添加");
		}
	}
}

// 获取时间
function currentDate() {
	var currentDate = new Date();
	var week;
	switch (currentDate.getDay()) {
	case 1:
		week = "星期一";
		break;
	case 2:
		week = "星期二";
		break;
	case 3:
		week = "星期三";
		break;
	case 4:
		week = "星期四";
		break;
	case 5:
		week = "星期五";
		break;
	case 6:
		week = "星期六";
		break;
	case 0:
		week = "星期日";
		break;
	}
	document.getElementById("time").innerHTML = currentDate.getFullYear() + "年"
			+ (currentDate.getMonth() + 1) + "月" + (currentDate.getDate())
			+ "日&nbsp;" + week;
}
