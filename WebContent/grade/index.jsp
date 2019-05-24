<%@ page language="java" contentType="text/html; charset=GBK"
	pageEncoding="GBK"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=GBK">
<link href="CascadingStyleSheets/grade.css" rel="stylesheet"
	type="text/css" />
<script type="text/javascript" src="javascript/grade.js"></script>
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
					<img src="images/xsram.png" width="26" height="15"> 刘志峰 |
					个人设置 | 退出
				</h3></td>
		</tr>
	</table>
	<div id="iframe">
		<iframe src="gradeAdd.jsp?liuzhifeng=<%=Math.random()%>"
			frameborder="0" name="iframe" scrolling="auto" width="100%"
			height="100%"></iframe>
	</div>
</body>
</html>