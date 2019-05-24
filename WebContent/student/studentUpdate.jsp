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
<link href="<%=basePath%>student/CascadingStyleSheets/student.css"
	rel="stylesheet" type="text/css" />
<script src="<%=basePath%>student/javascript/student.js"
	language="javascript" type="text/javascript"></script>
<%-- 日历控件引用开始 --%>
<script src="<%=basePath%>MyDate/WdatePicker.js" language="javascript"
	type="text/javascript"></script>
<%-- 日历控件引用结束 --%>
<title>修改课程</title>
</head>
<body
	onload="queriesGrade('<%=basePath%>queriesGrade', '<option value=${student.stuGrade.gradeId }>${student.stuGrade.gradeName }</option>')">
	<table width="100%" border="0">
		<tr>
			<td width="10%" valign="top">
				<dl>
					<dt
						onclick="packupOrUnfold('company','<%=basePath%>student/images')">
						<h3>
							<img id="companyImg" src="<%=basePath%>student/images/unfold.jpg"
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
						onclick="packupOrUnfold('course','<%=basePath%>student/images')">
						<h3>
							<img id="courseImg" src="<%=basePath%>student/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('grade','<%=basePath%>student/images')">
						<h3>
							<img id="gradeImg" src="<%=basePath%>student/images/unfold.jpg"
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
						onclick="packupOrUnfold('manager','<%=basePath%>student/images')">
						<h3>
							<img id="managerImg" src="<%=basePath%>student/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('news','<%=basePath%>student/images')">
						<h3>
							<img id="newsImg" src="<%=basePath%>student/images/unfold.jpg"
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
						onclick="packupOrUnfold('student','<%=basePath%>student/images')">
						<h3>
							<img id="studentImg" src="<%=basePath%>student/images/packup.jpg"
								width="12" height="12" alt="展开" longdesc="展开"> 学员管理
						</h3>
					</dt>
					<dd id="studentManager" style="display: block;">
						<a
							href="<%=basePath%>student/studentQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self"
							style="font-weight: bold; color: black; text-decoration: underline;">管理学员</a>
					</dd>
				</dl>
				<dl>
					<dt
						onclick="packupOrUnfold('teacher','<%=basePath%>student/images')">
						<h3>
							<img id="teacherImg" src="<%=basePath%>student/images/unfold.jpg"
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
				<%--后台修改界面： modifiedStudent只用于后台修改（管理员分配班级课程时调用modifiedStudent）--%>
				<form action="<%=basePath%>modifiedStudent" method="post"
					enctype="multipart/form-data" name="form1">
					<h1>修改学员信息</h1>
					<table width="100%" border="0">
						<tr>
							<td align="right" valign="middle"><label for="stuId">学员账号：</label>
								<input name="stuId" type="text" id="stuId" maxlength="14"
								readonly value="${student.stuId }"></td>
							<td align="left" valign="middle"><font color="red" size="1">*</font></td>
							<td rowspan="16" align="left" valign="middle"><img
								src="<%=basePath%>studentImages/${student.image}?liuzhifeng=<%=Math.random()%>"
								width="260" height="360" alt="照片"></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="stuPassword">学员密码：</label>
								<input name="stuPassword" type="password" id="stuPassword"
								maxlength="20" onblur="verifyStudentUpdate('stuPassword')"
								value="${student.stuPassword }"></td>
							<td align="left" valign="middle"><font color="red"
								id="stuPasswordHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="">确认密码：</label>
								<input name="verifyPassword" type="password" id="verifyPassword"
								onblur="verifyStudentUpdate('verifyPassword')" maxlength="20"
								value="${student.stuPassword }"></td>
							<td align="left" valign="middle"><font color="red"
								id="verifyPasswordHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="studentGrade">所属班级：
							</label> <select name="studentGrade" id="studentGrade"
								onchange="closeGradeDetail()">
									<option value="${student.stuGrade.gradeId }">${student.stuGrade.gradeName }</option>
							</select> <input type="button" name="go_button" id="go_button"
								value="班级详情"
								onClick="selectGrade('studentGrade', '<%=basePath%>selectGrade')"></td>
							<td align="left" valign="middle"><font color="red"
								id="studentPositionHint" size="1">*</font></td>
						</tr>
						<tr>
							<td colspan="2" align="center" valign="middle">
								<%-- 所教班级详情 --%>
								<div id="gradeDetail"></div>
							</td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="stuJobCompany">就职公司：</label>
								<input name="stuJobCompany" type="text" id="stuJobCompany"
								value="${student.stuJobCompany }" maxlength="20"></td>
							<td align="left" valign="middle"><font color="red"
								id="stuJobCompanyHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="stuJobAddress">工作地点：</label>
								<input name="stuJobAddress" type="text" id="stuJobAddress"
								value="${student.stuJobAddress }" maxlength="40"></td>
							<td align="left" valign="middle"><font color="red"
								id="stuJobAddressHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="stuJobPay">当前年薪：</label>
								<input name="stuJobPay" type="text" id="stuJobPay"
								onblur="verifyStudentUpdate('stuJobPay')"
								value="${student.stuJobPay }" maxlength="7"></td>
							<td align="left" valign="middle"><font color="red"
								id="stuJobPayHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="stuJobTime">就业时间：</label>
								<input type="text" name="stuJobTime" id="stuJobTime"
								onfocus="WdatePicker()" onclick="WdatePicker()"
								value="${student.stuJobTime }"></td>
							<td align="left" valign="middle"><font color="red"
								id="stuJobTimeHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="birthday">出生日期：</label>
								<input type="text" name="birthday" id="birthday"
								readonly="readonly" value="${student.birthday }"></td>
							<td align="left" valign="middle"><font color="red"
								id="birthdayHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="id">身份证号：</label>
								<input name="id" type="text" id="id" maxlength="18" readonly
								value="${student.id }"></td>
							<td align="left" valign="middle"><font color="red"
								id="idHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="name">学员姓名：</label>
								<input name="name" type="text" id="name" maxlength="20"
								onblur="verifyStudentUpdate('name')" value="${student.name }"></td>
							<td align="left" valign="middle"><font color="red"
								id="nameHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><c:choose>
									<c:when test="${student.gender == '男' }">
										<table width="243">
											<tr>
												<td width="99" align="left" valign="middle">学员性别：</td>
												<td width="87" align="left" valign="middle"><label>
														<input name="gender" type="radio" id="gender_0" value="男"
														checked="CHECKED"> 男
												</label></td>
												<td width="76" align="left" valign="middle"><label>
														<input type="radio" name="gender" value="女" id="gender_1">
														女
												</label></td>
											</tr>
										</table>
									</c:when>
									<c:otherwise>
										<table width="243">
											<tr>
												<td width="99" align="left" valign="middle">学员性别：</td>
												<td width="87" align="left" valign="middle"><label>
														<input name="gender" type="radio" id="gender_0" value="男">
														男
												</label></td>
												<td width="76" align="left" valign="middle"><label>
														<input type="radio" name="gender" value="女" id="gender_1"
														checked="CHECKED"> 女
												</label></td>
											</tr>
										</table>
									</c:otherwise>
								</c:choose></td>
							<td align="left" valign="middle"><font color="red"
								id="genderHint" size="1">*</font></td>
						</tr>

						<tr>
							<td align="right" valign="middle"><label for="phone">联系方式：</label>
								<input name="phone" type="text" id="phone" maxlength="11"
								onblur="verifyStudentUpdate('phone')" value="${student.phone }"></td>
							<td align="left" valign="middle"><font color="red"
								id="phoneHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="address">联系地址：</label>
								<input name="address" type="text" id="address" maxlength="40"
								onblur="verifyStudentUpdate('address')"
								value="${student.address }"></td>
							<td align="left" valign="middle"><font color="red"
								id="addressHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="school">毕业院校：</label>
								<input name="school" type="text" id="school" maxlength="40"
								onblur="verifyStudentUpdate('school')"
								value="${student.school }"></td>
							<td align="left" valign="middle"><font color="red"
								id="schoolHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="studentImage">照片：</label>
								<input name="studentImage" type="file" id="studentImage"
								onblur="verifyStudentUpdate('studentImage')"></td>
							<td align="left" valign="middle"><font color="red"
								id="studentImageHint" size="1">*</font></td>
						</tr>
						<tr align="right">
							<td align="center" valign="middle">&nbsp;</td>
							<td align="center" valign="middle">&nbsp;</td>
							<td colspan="2" align="center" valign="middle">&nbsp;</td>
						</tr>
						<tr>
							<td width="35%" align="right" valign="middle"><input
								type="button" name="button" id="button" value="提交"
								onclick="verifyStudentUpdate('submit')"></td>
							<td align="center" valign="middle" nowrap="nowrap"><a
								href="javascript:;" onclick="lock()"
								style="font-size: small; text-decoration: none;">一键锁定</a></td>
							<td width="35%" align="left" valign="middle"><input
								type="reset" name="reset" id="reset" value="重置"></td>
						</tr>
					</table>
				</form>
			</td>
		</tr>
	</table>
</body>
</html>