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
<link href="<%=basePath%>CascadingStyleSheets/studentInfo.css"
	rel="stylesheet" type="text/css" />
<link href="<%=basePath%>CascadingStyleSheets/index.css"
	rel="stylesheet" type="text/css" />
<script src="<%=basePath%>javascript/studentInfo.js"
	language="javascript" type="text/javascript"></script>
<script src="<%=basePath%>javascript/index.js" language="javascript"
	type="text/javascript"></script>
<%-- 日历控件引用开始 --%>
<script src="<%=basePath%>MyDate/WdatePicker.js" language="javascript"
	type="text/javascript"></script>
<%-- 日历控件引用结束 --%>
<title>思软门户网站</title>
</head>
<body onmousemove="hasSession('${student.id}', '<%=basePath%>')">
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
				href="<%=basePath%>queriesRecruitment" target="_self"><span>人力招聘</span></a></td>
			<td align="center" valign="middle" nowrap="nowrap">&nbsp;</td>
		</tr>
	</table>
	<br />

	<table width="100%" border="0">
		<tr>
			<td align="center" valign="top"><form
					action="<%=basePath%>updateStudent" method="post"
					enctype="multipart/form-data" name="form1">
					<h1>学员信息</h1>
					<table width="100%" border="0">
						<tr>
							<td align="right" valign="middle"><label for="stuId">学员账号：
							</label> <input name="stuId" type="text" id="stuId" maxlength="14"
								readonly value="${student.stuId }"></td>
							<td align="left" valign="middle"><font color="red" size="1">*</font></td>
							<td rowspan="16" align="left" valign="middle"><img
								src="<%=basePath%>studentImages/${student.image}?liuzhifeng=<%=Math.random()%>"
								width="260" height="360" alt="照片"></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="stuPassword">学员密码：
							</label> <input name="stuPassword" type="password" id="stuPassword"
								maxlength="20" onblur="verifyStudentUpdate('stuPassword')"
								value="${student.stuPassword }"></td>
							<td align="left" valign="middle"><font color="red"
								id="stuPasswordHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="">确认密码：
							</label> <input name="verifyPassword" type="password" id="verifyPassword"
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
								id="teacherPositionHint" size="1">*</font></td>
						</tr>
						<tr>
							<td colspan="2" align="center" valign="middle">
								<%-- 所教班级详情 --%>
								<div id="gradeDetail"></div>
							</td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="stuJobCompany">就职公司：
							</label> <input name="stuJobCompany" type="text" id="stuJobCompany"
								value="${student.stuJobCompany }" maxlength="20"></td>
							<td align="left" valign="middle"><font color="red"
								id="stuJobCompanyHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="stuJobAddress">工作地点：
							</label> <input name="stuJobAddress" type="text" id="stuJobAddress"
								value="${student.stuJobAddress }" maxlength="40"></td>
							<td align="left" valign="middle"><font color="red"
								id="stuJobAddressHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="stuJobPay">当前年薪：
							</label> <input name="stuJobPay" type="text" id="stuJobPay"
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
							<td align="right" valign="middle"><label for="birthday">出生日期：
							</label> <input type="text" name="birthday" id="birthday" readonly
								value="${student.birthday }"></td>
							<td align="left" valign="middle"><font color="red"
								id="birthdayHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="id">身份证号：
							</label> <input name="id" type="text" id="id" maxlength="18" readonly
								value="${student.id }"></td>
							<td align="left" valign="middle"><font color="red"
								id="idHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="name">学员姓名：
							</label> <input name="name" type="text" id="name" maxlength="20"
								onblur="verifyStudentUpdate('name')" value="${student.name }"></td>
							<td align="left" valign="middle"><font color="red"
								id="nameHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><c:choose>
									<c:when test="${student.gender == '男' }">
										<table width="230">
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
										<table width="230">
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
							<td align="right" valign="middle"><label for="phone">联系方式：
							</label> <input name="phone" type="text" id="phone" maxlength="11"
								onblur="verifyStudentUpdate('phone')" value="${student.phone }"></td>
							<td align="left" valign="middle"><font color="red"
								id="phoneHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="address">联系地址：
							</label> <input name="address" type="text" id="address" maxlength="40"
								onblur="verifyStudentUpdate('address')"
								value="${student.address }"></td>
							<td align="left" valign="middle"><font color="red"
								id="addressHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="school">毕业院校：
							</label> <input name="school" type="text" id="school" maxlength="40"
								onblur="verifyStudentUpdate('school')"
								value="${student.school }"></td>
							<td align="left" valign="middle"><font color="red"
								id="schoolHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="studentImage">照片：
							</label> <input name="studentImage" type="file" id="studentImage"
								onblur="verifyStudentUpdate('studentImage')"></td>
							<td colspan="2" align="left" valign="middle"><font
								color="red" id="studentImageHint" size="1">*</font></td>
						</tr>
						<tr align="right">
							<td align="center" valign="middle">&nbsp;</td>
							<td align="center" valign="middle">&nbsp;</td>
							<td colspan="2" align="center" valign="middle">&nbsp;</td>
						</tr>
						<tr>
							<td width="40%" align="right" valign="middle"><input
								type="button" name="button" id="button" value="修改"
								onclick="verifyStudentUpdate('submit')"></td>
							<td align="center" valign="middle">&nbsp;</td>
							<td width="40%" align="left" valign="middle"><input
								type="reset" name="reset" id="reset" value="重置"></td>
						</tr>
					</table>
				</form></td>
		</tr>
	</table>

	<br />
	<jsp:include page="bottom.jsp" />
</body>
</html>