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
<%-- �����ؼ����ÿ�ʼ --%>
<script src="<%=basePath%>MyDate/WdatePicker.js" language="javascript"
	type="text/javascript"></script>
<%-- �����ؼ����ý��� --%>
<%--xheditor���� ��ʼ--%>
<script type="text/javascript"
	src="<%=basePath%>xheditor/jquery-1.7.2.min.js"></script>
<script type="text/javascript"
	src="<%=basePath%>xheditor/xheditor-1.2.2.min.js"></script>
<script type="text/javascript"
	src="<%=basePath%>xheditor/xheditor_lang/zh-cn.js"></script>
<%--xheditor���� ����--%>
<title>�޸Ľ�ʦ��Ϣ</title>
</head>
<body
	onload="queriesGrade('<%=basePath%>queriesGrade', '<option value=${teacher.teacherGrade.gradeId }>${teacher.teacherGrade.gradeName }</option>')">
	<table width="100%" border="0">
		<tr>
			<td width="10%" valign="top">
				<dl>
					<dt
						onclick="packupOrUnfold('company','<%=basePath%>teacher/images')">
						<h3>
							<img id="companyImg" src="<%=basePath%>teacher/images/unfold.jpg"
								width="12" height="12" alt="չ��" longdesc="չ��"> ��˾���
						</h3>
					</dt>
					<dd id="companyAdd" style="display: none;">
						<a
							href="<%=basePath%>company/companyAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">��Ӽ��</a>
					</dd>
					<dd id="companyManager" style="display: none;">
						<a
							href="<%=basePath%>company/companyQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">������</a>
					</dd>
				</dl>
				<dl>
					<dt
						onclick="packupOrUnfold('course','<%=basePath%>teacher/images')">
						<h3>
							<img id="courseImg" src="<%=basePath%>teacher/images/unfold.jpg"
								width="12" height="12" alt="չ��" longdesc="չ��"> �γ̹���
						</h3>
					</dt>
					<dd id="courseAdd" style="display: none;">
						<a
							href="<%=basePath%>course/courseAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">��ӿγ�</a>
					</dd>
					<dd id="courseManager" style="display: none;">
						<a
							href="<%=basePath%>course/courseQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">����γ�</a>
					</dd>
				</dl>
				<dl>
					<dt onclick="packupOrUnfold('grade','<%=basePath%>teacher/images')">
						<h3>
							<img id="gradeImg" src="<%=basePath%>teacher/images/unfold.jpg"
								width="12" height="12" alt="չ��" longdesc="չ��"> �༶����
						</h3>
					</dt>
					<dd id="gradeAdd" style="display: none;">
						<a
							href="<%=basePath%>grade/gradeAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">��Ӱ༶</a>
					</dd>
					<dd id="gradeManager" style="display: none;">
						<a
							href="<%=basePath%>grade/gradeQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">����༶</a>
					</dd>
				</dl>
				<dl>
					<dt
						onclick="packupOrUnfold('manager','<%=basePath%>teacher/images')">
						<h3>
							<img id="managerImg" src="<%=basePath%>teacher/images/unfold.jpg"
								width="12" height="12" alt="չ��" longdesc="չ��"> Ա������
						</h3>
					</dt>
					<dd id="managerAdd" style="display: none;">
						<a
							href="<%=basePath%>manager/managerAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">���Ա��</a>
					</dd>
					<dd id="managerManager" style="display: none;">
						<a
							href="<%=basePath%>manager/managerQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">����Ա��</a>
					</dd>
				</dl>
				<dl>
					<dt onclick="packupOrUnfold('news','<%=basePath%>teacher/images')">
						<h3>
							<img id="newsImg" src="<%=basePath%>teacher/images/unfold.jpg"
								width="12" height="12" alt="չ��" longdesc="չ��"> ���Ź���
						</h3>
					</dt>
					<dd id="newsAdd" style="display: none;">
						<a
							href="<%=basePath%>news/newsAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">�������</a>
					</dd>
					<dd id="newsManager" style="display: none;">
						<a
							href="<%=basePath%>news/newsQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">��������</a>
					</dd>
				</dl>
				<dl>
					<dt
						onclick="packupOrUnfold('student','<%=basePath%>teacher/images')">
						<h3>
							<img id="studentImg" src="<%=basePath%>teacher/images/unfold.jpg"
								width="12" height="12" alt="չ��" longdesc="չ��"> ѧԱ����
						</h3>
					</dt>
					<dd id="studentManager" style="display: none;">
						<a
							href="<%=basePath%>student/studentQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">����ѧԱ</a>
					</dd>
				</dl>
				<dl>
					<dt
						onclick="packupOrUnfold('teacher','<%=basePath%>teacher/images')">
						<h3>
							<img id="teacherImg" src="<%=basePath%>teacher/images/packup.jpg"
								width="12" height="12" alt="չ��" longdesc="չ��"> ��ʦ����
						</h3>
					</dt>
					<dd id="teacherAdd" style="display: block;">
						<a
							href="<%=basePath%>teacher/teacherAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">��ӽ�ʦ</a>
					</dd>
					<dd id="teacherManager" style="display: block;">
						<a
							href="<%=basePath%>teacher/teacherQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self"
							style="font-weight: bold; color: black; text-decoration: underline;">�����ʦ</a>
					</dd>
				</dl>
			</td>
			<td align="center" valign="top"><form
					action="<%=basePath%>updateTeacher" method="post"
					enctype="multipart/form-data" name="form1">
					<table width="100%" border="0">
						<tr>
							<td align="right" valign="middle"><label for="teacherId">��ʦ�˺ţ�</label>
								<input name="teacherId" type="text" id="teacherId"
								maxlength="14" readonly value="${teacher.teacherId }"></td>
							<td align="left" valign="middle"><font color="red" size="1">*</font></td>
							<td colspan="2" rowspan="13" align="left" valign="middle"><img
								src="<%=basePath%>teacherImages/${teacher.image}?liuzhifeng=<%=Math.random()%>"
								width="200" height="290" alt="��Ƭ"></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label
								for="teacherPassword">��ʦ���룺</label> <input
								name="teacherPassword" type="password" id="teacherPassword"
								maxlength="20" onblur="verifyTeacherUpdate('teacherPassword')"
								value="${teacher.teacherPassword }"></td>
							<td align="left" valign="middle"><font color="red"
								id="teacherPasswordHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="">ȷ�����룺</label>
								<input name="verifyPassword" type="password" id="verifyPassword"
								onblur="verifyTeacherUpdate('verifyPassword')" maxlength="20"
								value="${teacher.teacherPassword }"></td>
							<td align="left" valign="middle"><font color="red"
								id="verifyPasswordHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="teacherGrade">���̰༶��</label>
								<select name="teacherGrade" id="teacherGrade"
								onchange="closeGradeDetail()">
									<option value="${teacher.teacherGrade.gradeId }">${teacher.teacherGrade.gradeName }</option>
							</select> <input type="button" name="go_button" id="go_button"
								value="�༶����"
								onClick="selectGrade('teacherGrade', '<%=basePath%>selectGrade')"></td>
							<td align="left" valign="middle"><font color="red"
								id="teacherPositionHint" size="1">*</font></td>
						</tr>
						<tr>
							<td colspan="2" align="center" valign="middle">
								<%-- ���̰༶���� --%>
								<div id="gradeDetail"></div>
							</td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="birthday">�������ڣ�</label>
								<input type="text" name="birthday" id="birthday"
								readonly="readonly" value="${teacher.birthday }"></td>
							<td align="left" valign="middle"><font color="red"
								id="birthdayHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="id">���֤�ţ�</label>
								<input name="id" type="text" id="id" maxlength="18" readonly
								value="${teacher.id }"></td>
							<td align="left" valign="middle"><font color="red"
								id="idHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="name">��ʦ������</label>
								<input name="name" type="text" id="name" maxlength="20"
								onblur="verifyTeacherUpdate('name')" value="${teacher.name }"></td>
							<td align="left" valign="middle"><font color="red"
								id="nameHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><c:choose>
									<c:when test="${teacher.gender == '��' }">
										<table width="243">
											<tr>
												<td width="99" align="left" valign="middle">��ʦ�Ա�</td>
												<td width="87" align="left" valign="middle"><label>
														<input name="gender" type="radio" id="gender_0" value="��"
														checked="CHECKED"> ��
												</label></td>
												<td width="76" align="left" valign="middle"><label>
														<input type="radio" name="gender" value="Ů" id="gender_1">
														Ů
												</label></td>
											</tr>
										</table>
									</c:when>
									<c:otherwise>
										<table width="243">
											<tr>
												<td width="99" align="left" valign="middle">��ʦ�Ա�</td>
												<td width="87" align="left" valign="middle"><label>
														<input name="gender" type="radio" id="gender_0" value="��">
														��
												</label></td>
												<td width="76" align="left" valign="middle"><label>
														<input type="radio" name="gender" value="Ů" id="gender_1"
														checked="CHECKED"> Ů
												</label></td>
											</tr>
										</table>
									</c:otherwise>
								</c:choose></td>
							<td align="left" valign="middle"><font color="red"
								id="genderHint" size="1">*</font></td>
						</tr>

						<tr>
							<td align="right" valign="middle"><label for="phone">��ϵ��ʽ��</label>
								<input name="phone" type="text" id="phone" maxlength="11"
								onblur="verifyTeacherUpdate('phone')" value="${teacher.phone }"></td>
							<td align="left" valign="middle"><font color="red"
								id="phoneHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="address">��ϵ��ַ��</label>
								<input name="address" type="text" id="address" maxlength="40"
								onblur="verifyTeacherUpdate('address')"
								value="${teacher.address }"></td>
							<td align="left" valign="middle"><font color="red"
								id="addressHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="school">��ҵԺУ��</label>
								<input name="school" type="text" id="school" maxlength="40"
								onblur="verifyTeacherUpdate('school')"
								value="${teacher.school }"></td>
							<td align="left" valign="middle"><font color="red"
								id="schoolHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="teacherImage">��Ƭ��</label>
								<input name="teacherImage" type="file" id="teacherImage"
								onblur="verifyTeacherUpdate('teacherImage')"></td>
							<td align="left" valign="middle"><font color="red"
								id="teacherImageHint" size="1">*</font></td>
						</tr>
						<tr>
							<td colspan="3" align="center" valign="middle">&nbsp;</td>
						</tr>
						<tr>
							<td colspan="3" align="center" valign="middle">��������<font
								color="red" id="teacherExperienceHint" size="1">*</font></td>
						</tr>
						<tr>
							<td colspan="3" align="center" valign="middle"><textarea
									class="xheditor" name="teacherExperience"
									id="teacherExperience" cols="115" rows="8">${teacher.teacherExperience }</textarea></td>
						</tr>
						<tr align="right">
							<td align="center" valign="middle">&nbsp;</td>
							<td align="center" valign="middle">&nbsp;</td>
							<td align="center" valign="middle">&nbsp;</td>
						</tr>
						<tr>
							<td width="35%" align="right" valign="middle"><input
								type="button" name="button" id="button" value="�ύ"
								onclick="verifyTeacherUpdate('submit')"></td>
							<td align="center" valign="middle" nowrap="nowrap"><a
								href="javascript:;" onclick="lock()"
								style="font-size: small; text-decoration: none;">һ������</a></td>
							<td width="35%" align="left" valign="middle"><input
								type="reset" name="reset" id="reset" value="����"></td>
						</tr>
					</table>
				</form></td>
		</tr>
	</table>
</body>
</html>