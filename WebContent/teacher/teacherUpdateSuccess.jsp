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

<title>添加课程</title>
</head>
<body>
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
				<h1>修改成功</h1>
				<table width="50%" border="0" cellpadding="5">
					<tr>
						<td width="50%" align="left" valign="middle"></td>
						<td width="50%" rowspan="10" align="right" valign="middle"><img
							src="<%=basePath%>teacherImages/${teacher.image }" width="200"
							height="290" alt="照片"></td>
					</tr>
					<tr>
						<td align="left" valign="middle" nowrap="nowrap">教师账号：${teacher.teacherId }</td>
					</tr>
					<tr>
						<td align="left" valign="middle" nowrap="nowrap">所教班级：<span
							onclick="showGradeDetail()">${teacher.teacherGrade.gradeName }</span></td>
					</tr>
					<tr style="display: none;" id="gradeDetailTr">
						<td>
							<div id="gradeDetail">
								<table width="100%" border="0">
									<tr>
										<td align='right' valign='middle' id='closeGradeDetail'
											onclick='closeGradeDetail()'>关闭&nbsp;</td>
									</tr>
									<tr>
										<td><table width="100%" border="0" cellpadding="10">
												<tr>
													<td align="left" valign="middle" nowrap="nowrap">班级名称：${teacher.teacherGrade.gradeName }</td>
													<td rowspan="5" align="right" valign="middle"><img
														src="<%=basePath%>courseImages/${teacher.teacherGrade.gradeCourse.courseImage}"
														width="163" height="88" alt="课程图片"></td>
												</tr>
												<tr align="left" valign="middle">
													<td nowrap="nowrap">班级人数：${teacher.teacherGrade.gradeCount }</td>
												</tr>
												<tr align="left" valign="middle">
													<td nowrap="nowrap">班级课程：${teacher.teacherGrade.gradeCourse.courseName }</td>
												</tr>
												<tr align="left" valign="middle">
													<td nowrap="nowrap">课程体系：${teacher.teacherGrade.gradeCourse.courseSystem }</td>
												</tr>
												<tr align="left" valign="middle">
													<td nowrap="nowrap">就业方向：${teacher.teacherGrade.gradeCourse.jobDirection }</td>
												</tr>
												<tr>
													<td colspan="2"><hr>
														${teacher.teacherGrade.gradeCourse.courseDetail }</td>
												</tr>
											</table></td>
									</tr>
								</table>
							</div>
						</td>
					</tr>
					<tr>
						<td align="left" valign="middle" nowrap="nowrap">出生日期：${teacher.birthday }</td>
					</tr>
					<tr>
						<td align="left" valign="middle" nowrap="nowrap">身份证号：${teacher.id }</td>
					</tr>
					<tr>
						<td align="left" valign="middle" nowrap="nowrap">教师姓名：${teacher.name }</td>
					</tr>
					<tr>
						<td align="left" valign="middle" nowrap="nowrap">教师性别：${teacher.gender }</td>
					</tr>

					<tr>
						<td align="left" valign="middle" nowrap="nowrap">联系方式：${teacher.phone }（手机号）</td>
					</tr>
					<tr>
						<td align="left" valign="middle" nowrap="nowrap">联系地址：${teacher.address }</td>
					</tr>
					<tr>
						<td align="left" valign="middle" nowrap="nowrap">毕业院校：${teacher.school }</td>
					</tr>
					<tr>
						<td colspan="2" align="left" valign="middle"><hr>${teacher.teacherExperience }</td>
					</tr>
				</table>

			</td>
		</tr>
	</table>
</body>
</html>