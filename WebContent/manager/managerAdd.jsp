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
<%-- 日历控件引用开始 --%>
<script src="<%=basePath%>MyDate/WdatePicker.js" language="javascript"
	type="text/javascript"></script>
<%-- 日历控件引用结束 --%>
<title>添加员工</title>
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
			<td align="center" valign="top"><form
					action="<%=basePath%>addManager" method="post"
					enctype="multipart/form-data" name="form1">
					<h1>添加员工</h1>
					<table width="100%" border="0">
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="managerId">员工账号：</label> <input name="managerId"
								type="text" id="managerId" maxlength="14" readonly
								value="<%=GenerateId.generateId()%>"></td>
							<td align="left" valign="middle"><font color="red" size="1">*</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="managerPassword">员工密码：</label> <input
								name="managerPassword" type="password" id="managerPassword"
								maxlength="20" onblur="verifyManager('managerPassword')"></td>
							<td align="left" valign="middle"><font color="red"
								id="managerPasswordHint" size="1">*员工密码不能为空</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label for="">确认密码：</label>
								<input name="verifyPassword" type="password" id="verifyPassword"
								onblur="verifyManager('verifyPassword')" maxlength="20"></td>
							<td align="left" valign="middle"><font color="red"
								id="verifyPasswordHint" size="1">*员工必须确认密码</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="managerPosition">员工职称：</label> <select
								name="managerPosition" id="managerPosition">
									<option value="超级管理" selected>超级管理</option>
									<option value="公司管理">公司管理</option>
									<option value="课程管理">课程管理</option>
									<option value="班级管理">班级管理</option>
									<option value="职工管理">职工管理</option>
									<option value="新闻管理">新闻管理</option>
									<option value="学生管理">学生管理</option>
									<option value="教师管理">教师管理</option>
							</select></td>
							<td align="left" valign="middle"><font color="red"
								id="managerPositionHint" size="1">*</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="birthday">出生日期：</label> <input type="text" name="birthday"
								id="birthday" onfocus="WdatePicker()" onclick="WdatePicker()"
								onblur="verifyManager('birthday')"></td>
							<td align="left" valign="middle"><font color="red"
								id="birthdayHint" size="1">*温馨提示：与身份证上相匹配的出生日期</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="id">身份证号：</label> <input name="id" type="text" id="id"
								maxlength="18" onblur="verifyManager('id')"
								onfocus="idBirthday()"></td>
							<td align="left" valign="middle"><font color="red"
								id="idHint" size="1">*身份证号不能为空</font><input type="hidden"
								id="idExist" /></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="name">员工姓名：</label> <input name="name" type="text"
								id="name" maxlength="17" onblur="verifyManager('name')"></td>
							<td align="left" valign="middle"><font color="red"
								id="nameHint" size="1">*员工姓名不能为空</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><table
									width="243">
									<tr>
										<td width="99" align="left" valign="middle">员工性别：</td>
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
								id="phone" maxlength="11" onblur="verifyManager('phone')"></td>
							<td align="left" valign="middle"><font color="red"
								id="phoneHint" size="1">*联系方式不能为空（手机号）</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="address">联系地址：</label> <input name="address" type="text"
								id="address" maxlength="40" onblur="verifyManager('address')"></td>
							<td align="left" valign="middle"><font color="red"
								id="addressHint" size="1">*联系地址不能为空</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="school">毕业院校：</label> <input name="school" type="text"
								id="school" maxlength="40" onblur="verifyManager('school')"></td>
							<td align="left" valign="middle"><font color="red"
								id="schoolHint" size="1">*毕业院校不能为空</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="managerImage">照片：</label> <input name="managerImage"
								type="file" id="managerImage"
								onblur="verifyManager('managerImage')"></td>
							<td align="left" valign="middle"><font color="red"
								id="managerImageHint" size="1">*照片不能为空（格式：jpg、png、gif）</font></td>
						</tr>
						<tr align="right">
							<td align="center" valign="middle">&nbsp;</td>
							<td align="center" valign="middle">&nbsp;</td>
							<td align="center" valign="middle">&nbsp;</td>
						</tr>
						<tr>
							<td width="45%" align="right" valign="middle"><input
								type="button" name="button" id="button" value="提交"
								onclick="verifyManager('submit')"></td>
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