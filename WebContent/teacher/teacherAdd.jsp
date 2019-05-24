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
<%--xheditor引用 开始--%>
<script type="text/javascript"
	src="<%=basePath%>xheditor/jquery-1.7.2.min.js"></script>
<script type="text/javascript"
	src="<%=basePath%>xheditor/xheditor-1.2.2.min.js"></script>
<script type="text/javascript"
	src="<%=basePath%>xheditor/xheditor_lang/zh-cn.js"></script>
<%--xheditor引用 结束--%>
<title>添加员工</title>
</head>
<body onload="queriesGrade('<%=basePath%>queriesGrade')">
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
							target="_self"
							style="font-weight: bold; color: black; text-decoration: underline;">添加教师</a>
					</dd>
					<dd id="teacherManager" style="display: block;">
						<a
							href="<%=basePath%>teacher/teacherQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">管理教师</a>
					</dd>
				</dl>
			</td>
			<td align="center" valign="top"><form
					action="<%=basePath%>addTeacher" method="post"
					enctype="multipart/form-data" name="form1">
					<table width="100%" border="0">
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="teacherId">教师账号：</label> <input name="teacherId"
								type="text" id="teacherId" maxlength="14" readonly
								value="<%=GenerateId.generateId()%>"></td>
							<td align="left" valign="middle"><font color="red" size="1">*</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="teacherPassword">教师密码：</label> <input
								name="teacherPassword" type="password" id="teacherPassword"
								maxlength="20" onblur="verifyTeacher('teacherPassword')"></td>
							<td align="left" valign="middle"><font color="red"
								id="teacherPasswordHint" size="1">*教师密码不能为空</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label for="">确认密码：</label>
								<input name="verifyPassword" type="password" id="verifyPassword"
								onblur="verifyTeacher('verifyPassword')" maxlength="20"></td>
							<td align="left" valign="middle"><font color="red"
								id="verifyPasswordHint" size="1">*教师必须确认密码</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="teacherGrade">所教班级：</label> <select name="teacherGrade"
								id="teacherGrade" onchange="closeGradeDetail()">
									<option value=""></option>
							</select> <input type="button" name="go_button" id="go_button"
								value="班级详情"
								onClick="selectGrade('teacherGrade', '<%=basePath%>selectGrade')"></td>
							<td align="left" valign="middle"><font color="red"
								id="teacherPositionHint" size="1">*</font></td>
						</tr>
						<tr>
							<td colspan="3" align="center" valign="middle">
								<%-- 所教班级详情 --%>
								<div id="gradeDetail"></div>
							</td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="birthday">出生日期：</label> <input type="text" name="birthday"
								id="birthday" onfocus="WdatePicker()" onclick="WdatePicker()"
								onblur="verifyTeacher('birthday')"></td>
							<td align="left" valign="middle"><font color="red"
								id="birthdayHint" size="1">*温馨提示：与身份证上相匹配的出生日期</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="id">身份证号：</label> <input name="id" type="text" id="id"
								maxlength="18" onblur="verifyTeacher('id')"
								onfocus="idBirthday()"></td>
							<td align="left" valign="middle"><font color="red"
								id="idHint" size="1">*身份证号不能为空</font><input type="hidden"
								id="idExist" /></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="name">教师姓名：</label> <input name="name" type="text"
								id="name" maxlength="17" onblur="verifyTeacher('name')"></td>
							<td align="left" valign="middle"><font color="red"
								id="nameHint" size="1">*教师姓名不能为空</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><table
									width="243">
									<tr>
										<td width="99" align="left" valign="middle">教师性别：</td>
										<td width="87" align="left" valign="middle"><label>
												<input name="gender" type="radio" id="gender_0" value="男"
												checked="CHECKED"> 男
										</label></td>
										<td width="76" align="left" valign="middle"><label>
												<input type="radio" name="gender" value="女" id="gender_1">
												女
										</label></td>
									</tr>
								</table></td>
							<td align="left" valign="middle"><font color="red"
								id="genderHint" size="1">*</font></td>
						</tr>

						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="phone">联系方式：</label> <input name="phone" type="text"
								id="phone" maxlength="11" onblur="verifyTeacher('phone')"></td>
							<td align="left" valign="middle"><font color="red"
								id="phoneHint" size="1">*联系方式不能为空（手机号）</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="address">联系地址：</label> <input name="address" type="text"
								id="address" maxlength="40" onblur="verifyTeacher('address')"></td>
							<td align="left" valign="middle"><font color="red"
								id="addressHint" size="1">*联系地址不能为空</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="school">毕业院校：</label> <input name="school" type="text"
								id="school" maxlength="40" onblur="verifyTeacher('school')"></td>
							<td align="left" valign="middle"><font color="red"
								id="schoolHint" size="1">*毕业院校不能为空</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="teacherImage">照片：</label> <input name="teacherImage"
								type="file" id="teacherImage"
								onblur="verifyTeacher('teacherImage')"></td>
							<td align="left" valign="middle"><font color="red"
								id="teacherImageHint" size="1">*照片不能为空（格式：jpg、png、gif）</font></td>
						</tr>
						<tr align="right">
							<td align="center" valign="middle">&nbsp;</td>
							<td align="center" valign="middle">&nbsp;</td>
							<td align="center" valign="middle">&nbsp;</td>
						</tr>
						<tr align="right">
							<td colspan="3" align="center" valign="middle">工作经历<font
								color="red" id="teacherExperienceHint" size="1">*</font></td>
						</tr>
						<tr align="right">
							<td colspan="3" align="center" valign="middle"><textarea
									class="xheditor" name="teacherExperience"
									id="teacherExperience" cols="115" rows="8"></textarea></td>
						</tr>
						<tr align="right">
							<td align="center" valign="middle">&nbsp;</td>
							<td align="center" valign="middle">&nbsp;</td>
							<td align="center" valign="middle">&nbsp;</td>
						</tr>
						<tr>
							<td width="45%" align="right" valign="middle"><input
								type="button" name="button" id="button" value="提交"
								onclick="verifyTeacher('submit')"></td>
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