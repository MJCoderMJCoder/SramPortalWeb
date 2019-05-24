<%@ page language="java" contentType="text/html; charset=GBK"
	pageEncoding="GBK"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=GBK">
<link href="CascadingStyleSheets/manager.css" rel="stylesheet"
	type="text/css" />
<script type="text/javascript" src="javascript/manager.js"></script>
<title>公司简介管理界面</title>
</head>
<body>
	<table width="100%" border="0" id="top">
		<tr>
			<td height="56" align="left" valign="top" nowrap="nowrap">&nbsp;
				<img src="images/xsram.png" width="101" height="52"
				longdesc="思软logo">
			</td>
			<td align="right" valign="middle" nowrap="nowrap"><h3>
					<img src="<%=basePath%>managerImages/${manager.image}" width="26"
						height="15"> ${manager.name} | <a
						style="text-decoration: none; color: black;"
						href="managerInfo.jsp?liuzhifeng=<%=Math.random()%>"
						target="iframe">个人设置</a> | <span style="cursor: pointer;"
						onclick="managerExit()">退出</span>
				</h3></td>
		</tr>
	</table>
	<div id="iframe">
		<iframe src="managerInfo.jsp?liuzhifeng=<%=Math.random()%>"
			frameborder="0" name="iframe" scrolling="auto" width="100%"
			height="100%"></iframe>
	</div>
</body>
</html>