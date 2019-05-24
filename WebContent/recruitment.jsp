<%@ page contentType="text/html; charset=GBK" language="java"
	import="java.sql.*" errorPage=""%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=GBK" />
<title>思软门户网站</title>
<link href="CascadingStyleSheets/index.css" rel="stylesheet"
	type="text/css" />
<script type="text/javascript" language="javascript"
	src="javascript/index.js" charset="GBK"></script>
<%--xheditor引用 开始--%>
<script type="text/javascript"
	src="<%=basePath%>xheditor/jquery-1.7.2.min.js"></script>
<script type="text/javascript"
	src="<%=basePath%>xheditor/xheditor-1.2.2.min.js"></script>
<script type="text/javascript"
	src="<%=basePath%>xheditor/xheditor_lang/zh-cn.js"></script>
<%--xheditor引用 结束--%>
</head>

<body>
	<jsp:include page="top.jsp" />
	<br />
	<table class="banner" width="100%" background="images/bannerBg.jpg">
		<tr>
			<td align="center" valign="middle" nowrap="nowrap">&nbsp;</td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>" target="_self"><span>思软首页</span></a></td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>queriesCompany" target="_self"><span>公司简介</span></a></td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>queriesNews" target="_self"><span>新闻动态</span></a></td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>coursePrefecture" target="_self"><span>课程专区</span></a></td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>queriesStudent" target="_self"><span>就业信息</span></a></td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>queriesTeacher" target="_self"><span>师资力量</span></a></td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>queriesRecruitment" target="_self"><span
					style="color: blue; background-color: white;">人力招聘</span></a></td>
			<td align="center" valign="middle" nowrap="nowrap">&nbsp;</td>
		</tr>
	</table>
	<table width="100%" border="0" cellpadding="10">
		<tr>
			<td align="center" valign="middle"><br />
				<table width="90%" border="0">
					<tr>
						<th align="center" valign="bottom" class="headline"><img
							src="images/hr.jpg" width="100%" longdesc="人力招聘" /></th>
					</tr>
				</table></td>
		</tr>
		<tr>
			<td align="center" valign="middle" id="articleList"><c:forEach
					var="recruitment" items="${recruitmentList }">
					<table width="90%" border="0" class="article">
						<tr>
							<td rowspan="2" align="left" valign="top" class="microTd"><img
								src="<%=basePath %>newsImages/${recruitment.newsImage }"
								alt="公司简介图片" class="micro" /></td>
							<td align="left" valign="middle" nowrap="nowrap"
								class="newsTitle">${recruitment.newsTitle }</td>
							<th align="right" valign="middle" nowrap="nowrap"><fmt:parseDate
									pattern="yyyyMMddHHmmss" value="${recruitment.newsId}"
									var="time" /> <fmt:formatDate value="${time }"
									pattern="yyyy-MM-dd" /></th>
						</tr>
						<tr>
							<td colspan="2" valign="top" class="detail">${recruitment.newsDetail }</td>
						</tr>
					</table>
				</c:forEach></td>
		</tr>
	</table>
	<br />
	<jsp:include page="bottom.jsp" />
</body>
</html>