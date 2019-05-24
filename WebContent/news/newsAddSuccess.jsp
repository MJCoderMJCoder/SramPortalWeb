<%@ page language="java" contentType="text/html; charset=GBK"
	pageEncoding="GBK" import="com.lzf.util.GenerateId"%>
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
<link href="<%=basePath%>news/CascadingStyleSheets/news.css"
	rel="stylesheet" type="text/css" />
<script src="<%=basePath%>news/javascript/news.js" language="javascript"
	type="text/javascript"></script>

<title>添加简介</title>
</head>
<body>
	<table width="100%" border="0">
		<tr>
			<td width="10%" valign="top">
				<dl>
					<dt onclick="packupOrUnfold('company','<%=basePath%>news/images')">
						<h3>
							<img id="companyImg" src="<%=basePath%>news/images/unfold.jpg"
								width="12" height="12" alt="展开" longdesc="展开"> 公司简介
						</h3>
					</dt>
					<dd id="companyAdd" style="display: none;">
						<a
							href="<%=basePath%>company/companyAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">添加简介</a>
					</dd>
					<dd id="companyManager" style="display: none;">
						<a
							href="<%=basePath%>company/companyQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">管理简介</a>
					</dd>
				</dl>
				<dl>
					<dt onclick="packupOrUnfold('course','<%=basePath%>news/images')">
						<h3>
							<img id="courseImg" src="<%=basePath%>news/images/unfold.jpg"
								width="12" height="12" alt="展开" longdesc="展开"> 课程管理
						</h3>
					</dt>
					<dd id="courseAdd" style="display: none;">
						<a
							href="<%=basePath%>course/courseAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">添加课程</a>
					</dd>
					<dd id="courseManager" style="display: none;">
						<a
							href="<%=basePath%>course/courseQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">管理课程</a>
					</dd>
				</dl>
				<dl>
					<dt onclick="packupOrUnfold('grade','<%=basePath%>news/images')">
						<h3>
							<img id="gradeImg" src="<%=basePath%>news/images/unfold.jpg"
								width="12" height="12" alt="展开" longdesc="展开"> 班级管理
						</h3>
					</dt>
					<dd id="gradeAdd" style="display: none;">
						<a
							href="<%=basePath%>grade/gradeAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">添加班级</a>
					</dd>
					<dd id="gradeManager" style="display: none;">
						<a
							href="<%=basePath%>grade/gradeQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">管理班级</a>
					</dd>
				</dl>
				<dl>
					<dt onclick="packupOrUnfold('manager','<%=basePath%>news/images')">
						<h3>
							<img id="managerImg" src="<%=basePath%>news/images/unfold.jpg"
								width="12" height="12" alt="展开" longdesc="展开"> 员工管理
						</h3>
					</dt>
					<dd id="managerAdd" style="display: none;">
						<a
							href="<%=basePath%>manager/managerAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">添加员工</a>
					</dd>
					<dd id="managerManager" style="display: none;">
						<a
							href="<%=basePath%>manager/managerQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">管理员工</a>
					</dd>
				</dl>
				<dl>
					<dt onclick="packupOrUnfold('news','<%=basePath%>news/images')">
						<h3>
							<img id="newsImg" src="<%=basePath%>news/images/packup.jpg"
								width="12" height="12" alt="展开" longdesc="展开"> 新闻管理
						</h3>
					</dt>
					<dd id="newsAdd" style="display: block;">
						<a
							href="<%=basePath%>news/newsAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self"
							style="font-weight: bold; color: black; text-decoration: underline;">添加新闻</a>
					</dd>
					<dd id="newsManager" style="display: block;">
						<a
							href="<%=basePath%>news/newsQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">管理新闻</a>
					</dd>
				</dl>
				<dl>
					<dt onclick="packupOrUnfold('student','<%=basePath%>news/images')">
						<h3>
							<img id="studentImg" src="<%=basePath%>news/images/unfold.jpg"
								width="12" height="12" alt="展开" longdesc="展开"> 学员管理
						</h3>
					</dt>
					<dd id="studentManager" style="display: none;">
						<a
							href="<%=basePath%>student/studentQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">管理学员</a>
					</dd>
				</dl>
				<dl>
					<dt onclick="packupOrUnfold('teacher','<%=basePath%>news/images')">
						<h3>
							<img id="teacherImg" src="<%=basePath%>news/images/unfold.jpg"
								width="12" height="12" alt="展开" longdesc="展开"> 教师管理
						</h3>
					</dt>
					<dd id="teacherAdd" style="display: none;">
						<a
							href="<%=basePath%>teacher/teacherAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">添加教师</a>
					</dd>
					<dd id="teacherManager" style="display: none;">
						<a
							href="<%=basePath%>teacher/teacherQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">管理教师</a>
					</dd>
				</dl>
			</td>
			<td align="center" valign="top">
				<h1>添加成功</h1>
				<table width="100%" border="0">
					<tr>
						<td width="40%" align="right" valign="middle"><label
							for="newsId">新闻编号：</label> <input name="newsId" type="text"
							id="newsId" value="${news.newsId }" maxlength="14" readonly></td>
						<td align="center" valign="middle">&nbsp;</td>
						<td width="40%" rowspan="2" align="left" valign="middle"><img
							src="<%=basePath %>newsImages/${news.newsImage }" width="200"
							height="100" alt="公司简介图片" longdesc="公司简介图片"></td>
					</tr>
					<tr align="center">
						<td align="right" valign="middle"><label for="newsName">新闻标题：</label>
							<input name="newsName" type="text" id="newsName" maxlength="20"
							readonly value="${news.newsTitle }"></td>
						<td align="center" valign="middle">&nbsp;</td>
					</tr>
					<tr>
						<td colspan="3" align="center" valign="middle"><label
							for="newsIntro"> <br> 新闻详情<br>
						</label></td>
					</tr>
					<tr>
						<td colspan="3" align="center" valign="middle"></td>
					</tr>
					<tr align="right">
						<td colspan="3" align="center" valign="middle">
							<div
								style="width: 70%; border-top-width: 1px; border-top-style: solid; border-top-color: gray; padding-top: 10px; text-align: left;">
								<c:out value="${news.newsDetail}" escapeXml="false"></c:out>
							</div>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>