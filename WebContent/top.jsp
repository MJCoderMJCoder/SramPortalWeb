<%@ page language="java" contentType="text/html; charset=GBK"
	pageEncoding="GBK"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

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
<link href="CascadingStyleSheets/top.css" rel="stylesheet"
	type="text/css" />
<script type="text/javascript" language="javascript"
	src="javascript/top.js" charset="GBK"></script>
<title>˼���Ż���վ</title>
</head>
<body onload="currentDate()">
	<table width="100%" border="0">
		<tr>
			<td align="center" valign="top"><table width="90%" border="0">
					<tr>
						<td width="30%" rowspan="2" align="left" valign="middle"><img
							src="images/xsram.png" width="163" height="88" alt=""
							longdesc="LOGO" /></td>

						<td width="20%" align="right" valign="bottom" nowrap="nowrap"
							id="studentFunction"><c:choose>
								<c:when test="${student == null}">
									<span onclick="login()" id="topLogin">ѧԱ��¼</span>
								</c:when>
								<c:otherwise>
									<span onclick="studentInfo()" id="studentInfo">${student.name}</span>
									| <span onclick="studentExit()" id="studentExit">��ȫ�˳�</span>
								</c:otherwise>
							</c:choose></td>
						<td width="20%" align="right" valign="bottom" nowrap="nowrap"
							id="time">2016��4��26��&nbsp;���ڶ�</td>
						<td width="20%" align="right" valign="bottom" nowrap="nowrap"><span
							onclick="setHome(this, '<%=basePath%>')" id="home">��Ϊ��ҳ</span> |
							<span onclick="addCollect('˼���Ż���վ', '<%=basePath%>')"
							id="collect">�ղر�վ</span></td>
					</tr>
					<tr>
						<td height="41" colspan="3" align="right" valign="middle">
							<form id="form1" name="form1" method="post" action="">
								<table width="100%" border="0">
									<tr>
										<td width="94%" align="right" valign="middle"><input
											name="search" type="text" id="search" /></td>
										<td width="6%" align="left" valign="middle"><label
											for="search"><a href="<%=basePath%>" target="_blank"><img
													src="images/search.jpg" alt="search" width="46" height="48"
													longdesc="����" /></a></label></td>
									</tr>
								</table>
							</form>
						</td>
					</tr>
				</table></td>
		</tr>
	</table>
	<div id="loginDiv"></div>
</body>
</html>