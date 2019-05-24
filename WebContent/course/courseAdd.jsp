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
<link href="<%=basePath%>course/CascadingStyleSheets/course.css"
	rel="stylesheet" type="text/css" />
<script src="<%=basePath%>course/javascript/course.js"
	language="javascript" type="text/javascript"></script>
<%--xheditor引用 开始--%>
<script type="text/javascript"
	src="<%=basePath%>xheditor/jquery-1.7.2.min.js"></script>
<script type="text/javascript"
	src="<%=basePath%>xheditor/xheditor-1.2.2.min.js"></script>
<script type="text/javascript"
	src="<%=basePath%>xheditor/xheditor_lang/zh-cn.js"></script>
<%--xheditor引用 结束--%>
<title>添加课程</title>
</head>
<body>
	<table width="100%" border="0">
		<tr>
			<td width="10%" valign="top">
				<dl>
					<dt
						onclick="packupOrUnfold('company','<%=basePath%>course/images')">
						<h3>
							<img id="companyImg" src="<%=basePath%>course/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('course','<%=basePath%>course/images')">
						<h3>
							<img id="courseImg" src="<%=basePath%>course/images/packup.jpg"
								width="12" height="12" alt="展开" longdesc="展开"> 课程管理
						</h3>
					</dt>
					<dd id="courseAdd" style="display: block;">
						<a
							href="<%=basePath%>course/courseAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self"
							style="font-weight: bold; color: black; text-decoration: underline;">添加课程</a>
					</dd>
					<dd id="courseManager" style="display: block;">
						<a
							href="<%=basePath%>course/courseQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">管理课程</a>
					</dd>
				</dl>
				<dl>
					<dt onclick="packupOrUnfold('grade','<%=basePath%>course/images')">
						<h3>
							<img id="gradeImg" src="<%=basePath%>course/images/unfold.jpg"
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
						onclick="packupOrUnfold('manager','<%=basePath%>course/images')">
						<h3>
							<img id="managerImg" src="<%=basePath%>course/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('news','<%=basePath%>course/images')">
						<h3>
							<img id="newsImg" src="<%=basePath%>course/images/unfold.jpg"
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
						onclick="packupOrUnfold('student','<%=basePath%>course/images')">
						<h3>
							<img id="studentImg" src="<%=basePath%>course/images/unfold.jpg"
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
						onclick="packupOrUnfold('teacher','<%=basePath%>course/images')">
						<h3>
							<img id="teacherImg" src="<%=basePath%>course/images/unfold.jpg"
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
			<td align="center" valign="top"><form
					action="<%=basePath%>addCourse" method="post"
					enctype="multipart/form-data" name="form1">
					<table width="100%" border="0">
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="courseId">课程编号：</label> <input name="courseId" type="text"
								id="courseId" maxlength="14" readonly
								value="<%=GenerateId.generateId()%>"></td>
							<td align="left" valign="middle"><font color="red" size="1">*</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="courseName">课程名称：</label> <input name="courseName"
								type="text" id="courseName" maxlength="17"
								onblur="verifyCourse('courseName')"></td>
							<td align="left" valign="middle"><font color="red"
								id="courseNameHint" size="1">*课程名称不能为空</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="courseSystem">课程体系：</label> <input name="courseSystem"
								type="text" id="courseSystem" maxlength="20"
								onblur="verifyCourse('courseSystem')"></td>
							<td align="left" valign="middle"><font color="red"
								id="courseSystemHint" size="1">*课程体系不能为空</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="jobDirection">就业方向：</label> <input name="jobDirection"
								type="text" id="jobDirection" maxlength="20"
								onblur="verifyCourse('jobDirection')"></td>
							<td align="left" valign="middle"><font color="red"
								id="jobDirectionHint" size="1">*就业方向不能为空</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="courseImage">图片：</label> <input name="courseImage"
								type="file" id="courseImage"
								onblur="verifyCourse('courseImage')"></td>
							<td align="left" valign="middle"><font color="red"
								id="courseImageHint" size="1">*课程图片不能为空（图片格式：jpg、png、gif）</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><br>课程详情<br></td>
							<td align="left" valign="middle"><br> <font color="red"
								id="courseIntroHint">*</font><br></td>
						</tr>
						<tr align="right">
							<td colspan="3" align="center" valign="middle"><textarea
									class="xheditor" name="courseIntro" id="courseIntro" cols="115"
									rows="20"></textarea></td>
						</tr>
						<tr>
							<td width="45%" align="right" valign="middle"><input
								type="button" name="button" id="button" value="提交"
								onclick="verifyCourse('submit')"></td>
							<td align="center" valign="middle">&nbsp;</td>
							<td width="45%" align="left" valign="middle"><input
								type="reset" name="reset" id="reset" value="重置"></td>
						</tr>
					</table>
				</form></td>
		</tr>
	</table>
</body>
</html>