<%@page import="java.util.Date"%>
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
<link href="<%=basePath%>teacher/CascadingStyleSheets/teacher.css"
	rel="stylesheet" type="text/css" />
<script src="<%=basePath%>teacher/javascript/teacher.js"
	language="javascript" type="text/javascript"></script>

<%-- 日历控件引用开始 --%>
<script src="<%=basePath%>MyDate/WdatePicker.js" language="javascript"
	type="text/javascript"></script>
<%-- 日历控件引用结束 --%>
<title>管理员工</title>
</head>
<body onload="queriesTeacher('<%=basePath%>queriesTeacher')">
	<table width="100%" border="0">
		<tr>
			<td width="10%" valign="top">
				<dl>
					<dt
						onclick="packupOrUnfold('company','<%=basePath%>teacher/images')">
						<h3>
							<img id="companyImg" src="<%=basePath%>teacher/images/unfold.jpg"
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
						onclick="packupOrUnfold('course','<%=basePath%>teacher/images')">
						<h3>
							<img id="courseImg" src="<%=basePath%>teacher/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('grade','<%=basePath%>teacher/images')">
						<h3>
							<img id="gradeImg" src="<%=basePath%>teacher/images/unfold.jpg"
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
						onclick="packupOrUnfold('manager','<%=basePath%>teacher/images')">
						<h3>
							<img id="managerImg" src="<%=basePath%>teacher/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('news','<%=basePath%>teacher/images')">
						<h3>
							<img id="newsImg" src="<%=basePath%>teacher/images/unfold.jpg"
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
						onclick="packupOrUnfold('student','<%=basePath%>teacher/images')">
						<h3>
							<img id="studentImg" src="<%=basePath%>teacher/images/unfold.jpg"
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
						onclick="packupOrUnfold('teacher','<%=basePath%>teacher/images')">
						<h3>
							<img id="teacherImg" src="<%=basePath%>teacher/images/packup.jpg"
								width="12" height="12" alt="展开" longdesc="展开"> 教师管理
						</h3>
					</dt>
					<dd id="teacherAdd" style="display: block;">
						<a
							href="<%=basePath%>teacher/teacherAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">添加教师</a>
					</dd>
					<dd id="teacherManager" style="display: block;">
						<a
							href="<%=basePath%>teacher/teacherQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self"
							style="font-weight: bold; color: black; text-decoration: underline;">管理教师</a>
					</dd>
				</dl>
			</td>
			<td align="center" valign="top">
				<table width="100%" border="0">
					<tr>
						<th align="center" valign="middle" nowrap="nowrap"><label
							for="teacherId">入职日期：</label><input type="text" name="teacherId"
							id="teacherId" onfocus="WdatePicker()" onclick="WdatePicker()"></th>
						<th align="center" valign="middle" nowrap="nowrap"><label
							for="name">教师姓名：</label><input type="text" name="name" id="name"></th>
						<th align="center" valign="middle" nowrap="nowrap"><label
							for="gradeName">所教班级：</label><input type="text" name="gradeName"
							id="gradeName"></th>
						<th align="center" valign="middle" nowrap="nowrap"><input
							type="button" name="search" id="search" value="搜索"
							onclick="queriesTeacher('<%=basePath%>queriesTeacher')"></th>
						<th><img id="moreImg"
							src="<%=basePath%>teacher/images/unfold.jpg" width="14"
							height="14" alt="更多" longdesc="更多" style="cursor: pointer;"
							onclick="moreSearch('<%=basePath%>teacher/images')"></th>
					</tr>
					<tr id="moreTr" style="display: none;">
						<%-- 更多的精确搜索功能 --%>
						<th align="center" valign="middle" nowrap="nowrap"><label
							for="school">毕业院校：</label><input type="text" name="school"
							id="school"></th>
						<th align="center" valign="middle" nowrap="nowrap"><label
							for="address">联系地址：</label><input type="text" name="address"
							id="address"></th>
						<th align="center" valign="middle" nowrap="nowrap"><label
							for="phone">联系方式：</label><input type="text" name="phone"
							id="phone"></th>
					</tr>
					<tr id="moreTr0" style="display: none;">
						<%-- 更多的精确搜索功能 --%>
						<th align="center" valign="middle" nowrap="nowrap"><label
							for="birthday">出生日期：</label><input type="text" name="birthday"
							id="birthday" onclick="WdatePicker()"></th>
						<th align="center" valign="middle" nowrap="nowrap"><table
								width="243">
								<tr>
									<th width="99" align="left" valign="middle">员工性别：</th>
									<td width="87" align="left" valign="middle"><label>
											<input name="gender" type="radio" id="gender_0" value="男">
											男
									</label></td>
									<td width="76" align="left" valign="middle"><label>
											<input type="radio" name="gender" value="女" id="gender_1">
											女
									</label></td>
									<td><button onclick="clearGender()">清空</button></td>
								</tr>
							</table></th>
						<th align="center" valign="middle" nowrap="nowrap"><label
							for="id">身份证号：</label><input type="text" name="id" id="id"></th>
					</tr>
					<tr id="moreTr1" style="display: none;">
						<%-- 更多的精确搜索功能 --%>
						<th align="center" valign="middle" nowrap="nowrap"><label
							for="teacherExperience">工作经历：</label><input type="text"
							name="teacherExperience" id="teacherExperience"></th>
						<th align="center" valign="middle" nowrap="nowrap"><label
							for="gradeCount">班级人数：</label><input type="text"
							name="gradeCount" id="gradeCount"></th>
						<th align="center" valign="middle" nowrap="nowrap"><label
							for="courseName">班级课程：</label><input type="text"
							name="courseName" id="courseName"></th>
					</tr>
					<tr id="moreTr2" style="display: none;">
						<%-- 更多的精确搜索功能 --%>
						<th align="center" valign="middle" nowrap="nowrap"><label
							for="courseSystem">课程体系：</label><input type="text"
							name="courseSystem" id="courseSystem"></th>
						<th align="center" valign="middle" nowrap="nowrap"><label
							for="courseDetail">课程详情：</label><input type="text"
							name="courseDetail" id="courseDetail"></th>
						<th align="center" valign="middle" nowrap="nowrap"><label
							for="jobDirection">就业方向：</label><input type="text"
							name="jobDirection" id="jobDirection"></th>
					</tr>

				</table>
				<hr>
				<table width="100%" border="1" cellpadding="10" id="searchResult">
				</table>
			</td>
		</tr>
	</table>
</body>
</html>