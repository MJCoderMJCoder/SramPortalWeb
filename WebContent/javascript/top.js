/**
 * ������js�ļ�
 */

// ����Ϊ��ҳ
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
				alert("�����������ʱ��֧���Զ���Ϊ��ҳ�����ֶ���ӡ�");
			}
			var prefs = Components.classes['@mozilla.org/preferences-service;1']
					.getService(Components.interfaces.nsIPrefBranch);
			prefs.setCharPref('browser.startup.homepage', vrl);
		} else {
			alert("�����������ʱ��֧���Զ���Ϊ��ҳ�����ֶ���ӡ�");
		}
	}
}

// �����ղ�
function addCollect(sTitle, sURL) {
	try {
		window.external.AddFavorite(sURL, sTitle);
	} catch (e) {
		try {
			window.sidebar.addPanel(sTitle, sURL, "");
		} catch (e) {
			alert("�����������ʱ��֧���Զ��ղأ���ʹ��Ctrl+D�������");
		}
	}
}

// ��ȡʱ��
function currentDate() {
	var currentDate = new Date();
	var week;
	switch (currentDate.getDay()) {
	case 1:
		week = "����һ";
		break;
	case 2:
		week = "���ڶ�";
		break;
	case 3:
		week = "������";
		break;
	case 4:
		week = "������";
		break;
	case 5:
		week = "������";
		break;
	case 6:
		week = "������";
		break;
	case 0:
		week = "������";
		break;
	}
	document.getElementById("time").innerHTML = currentDate.getFullYear() + "��"
			+ (currentDate.getMonth() + 1) + "��" + (currentDate.getDate())
			+ "��&nbsp;" + week;
}
