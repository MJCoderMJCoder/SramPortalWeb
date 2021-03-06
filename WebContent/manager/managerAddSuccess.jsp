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
<link href="<%=basePath%>manager/CascadingStyleSheets/manager.css"
	rel="stylesheet" type="text/css" />
<script src="<%=basePath%>manager/javascript/manager.js"
	language="javascript" type="text/javascript"></script>

<title>添加课程</title>
</head>
<body>
	<table width="100%" border="0">
		<tr>
			<td width="10%" valign="top">
				<dl>
					<dt
						onclick="packupOrUnfold('company','<%=basePath%>manager/images')">
						<h3>
							<img id="companyImg" src="<%=basePath%>manager/images/unfold.jpg"
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
					<dt
						onclick="packupOrUnfold('course','<%=basePath%>manager/images')">
						<h3>
							<img id="courseImg" src="<%=basePath%>manager/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('grade','<%=basePath%>manager/images')">
						<h3>
							<img id="gradeImg" src="<%=basePath%>manager/images/unfold.jpg"
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
					<dt
						onclick="packupOrUnfold('manager','<%=basePath%>manager/images')">
						<h3>
							<img id="managerImg" src="<%=basePath%>manager/images/packup.jpg"
								width="12" height="12" alt="展开" longdesc="展开"> 员工管理
						</h3>
					</dt>
					<dd id="managerAdd" style="display: block;">
						<a
							href="<%=basePath%>manager/managerAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self"
							style="font-weight: bold; color: black; text-decoration: underline;">添加员工</a>
					</dd>
					<dd id="managerManager" style="display: block;">
						<a
							href="<%=basePath%>manager/managerQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">管理员工</a>
					</dd>
				</dl>
				<dl>
					<dt onclick="packupOrUnfold('news','<%=basePath%>manager/images')">
						<h3>
							<img id="newsImg" src="<%=basePath%>manager/images/unfold.jpg"
								width="12" height="12" alt="展开" longdesc="展开"> 新闻管理
						</h3>
					</dt>
					<dd id="newsAdd" style="display: none;">
						<a
							href="<%=basePath%>news/newsAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">添加新闻</a>
					</dd>
					<dd id="newsManager" style="display: none;">
						<a
							href="<%=basePath%>news/newsQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">管理新闻</a>
					</dd>
				</dl>
				<dl>
					<dt
						onclick="packupOrUnfold('student','<%=basePath%>manager/images')">
						<h3>
							<img id="studentImg" src="<%=basePath%>manager/images/unfold.jpg"
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
					<dt
						onclick="packupOrUnfold('teacher','<%=basePath%>manager/images')">
						<h3>
							<img id="teacherImg" src="<%=basePath%>manager/images/unfold.jpg"
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
				<table width="50%" border="0" cellpadding="5">
					<tr>
						<td width="50%" align="left" valign="middle">员工账号：${manager.managerId }</td>
						<td width="50%" rowspan="9" align="right" valign="middle"><img
							src="<%=basePath%>managerImages/${manager.image }" width="200"
							height="290" alt="照片"></td>
					</tr>
					<tr>
						<td align="left" valign="middle">员工职称：${manager.managerPosition }</td>
					</tr>
					<tr>
						<td align="left" valign="middle">出生日期：${manager.birthday }</td>
					</tr>
					<tr>
						<td align="left" valign="middle">身份证号：${manager.id }</td>
					</tr>
					<tr>
						<td align="left" valign="middle">员工姓名：${manager.name }</td>
					</tr>
					<tr>
						<td align="left" valign="middle">员工性别：${manager.gender }</td>
					</tr>

					<tr>
						<td align="left" valign="middle">联系方式：${manager.phone }（手机号）</td>
					</tr>
					<tr>
						<td align="left" valign="middle">联系地址：${manager.address }</td>
					</tr>
					<tr>
						<td align="left" valign="middle">毕业院校：${manager.school }</td>
					</tr>
					<tr>
						<td colspan="2" align="left" valign="middle">&nbsp;</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>