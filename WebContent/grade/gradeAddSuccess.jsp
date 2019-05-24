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
<link href="<%=basePath%>grade/CascadingStyleSheets/grade.css"
	rel="stylesheet" type="text/css" />
<script src="<%=basePath%>grade/javascript/grade.js"
	language="javascript" type="text/javascript"></script>

<title>添加班级</title>
</head>
<body>
	<table width="100%" border="0">
		<tr>
			<td width="10%" valign="top">
				<dl>
					<dt onclick="packupOrUnfold('company','<%=basePath%>grade/images')">
						<h3>
							<img id="companyImg" src="<%=basePath%>grade/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('course','<%=basePath%>grade/images')">
						<h3>
							<img id="courseImg" src="<%=basePath%>grade/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('grade','<%=basePath%>grade/images')">
						<h3>
							<img id="gradeImg" src="<%=basePath%>grade/images/packup.jpg"
								width="12" height="12" alt="展开" longdesc="展开"> 班级管理
						</h3>
					</dt>
					<dd id="gradeAdd" style="display: block;">
						<a
							href="<%=basePath%>grade/gradeAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self"
							style="font-weight: bold; color: black; text-decoration: underline;">添加班级</a>
					</dd>
					<dd id="gradeManager" style="display: block;">
						<a
							href="<%=basePath%>grade/gradeQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">管理班级</a>
					</dd>
				</dl>
				<dl>
					<dt onclick="packupOrUnfold('manager','<%=basePath%>grade/images')">
						<h3>
							<img id="managerImg" src="<%=basePath%>grade/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('news','<%=basePath%>grade/images')">
						<h3>
							<img id="newsImg" src="<%=basePath%>grade/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('student','<%=basePath%>grade/images')">
						<h3>
							<img id="studentImg" src="<%=basePath%>grade/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('teacher','<%=basePath%>grade/images')">
						<h3>
							<img id="teacherImg" src="<%=basePath%>grade/images/unfold.jpg"
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
						<td align="right" valign="middle"><label for="gradeId">班级编号：</label>
							<input name="gradeId" type="text" id="gradeId" readonly
							value="${grade.gradeId }"></td>
						<td align="center" valign="middle">&nbsp;</td>
						<td align="left" valign="middle"><label for="gradeName">班级名称：</label>
							<input name="gradeName" type="text" id="gradeName" readonly
							value="${grade.gradeName }"></td>
					</tr>
					<tr>
						<td align="right" valign="middle"><label for="gradeCount">班级人数：</label>
							<input name="gradeCount" type="text" id="gradeCount" readonly
							value="${grade.gradeCount }"></td>
						<td align="center" valign="middle">&nbsp;</td>
						<td align="left" valign="middle"><label for="gradeCourse">班级课程：</label>
							<input name="gradeCourseText" type="text" id="gradeCourseText"
							value="${grade.gradeCourse.courseName }" readonly></td>
					</tr>
					<tr>
						<td align="right" valign="middle">&nbsp;</td>
						<td align="center" valign="middle">&nbsp;</td>
						<td align="left" valign="middle">&nbsp;</td>
					</tr>
					<tr>
						<td colspan="3" align="center" valign="bottom"><p>以下是该班级的课程信息
							</p>
							<p>
							<div id="courseDetail" style="display: block;">
								<table width="100%" border="0">
									<tr>
										<td align="left" valign="middle">课程名称：${grade.gradeCourse.courseName }</td>
										<td rowspan="3" align="right" valign="middle"><img
											src="<%=basePath %>courseImages/${grade.gradeCourse.courseImage }"
											width="163" height="88" alt="课程图片"></td>
									</tr>
									<tr>
										<td align="left" valign="middle">课程体系：${grade.gradeCourse.courseSystem }</td>
									</tr>
									<tr>
										<td align="left" valign="middle">就业方向：${grade.gradeCourse.jobDirection }</td>
									</tr>
									<tr>
										<td colspan="2" align="left" valign="middle"><hr>${grade.gradeCourse.courseDetail }</td>
									</tr>
								</table>
							</div>
							</p></td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>