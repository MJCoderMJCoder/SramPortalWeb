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
<%-- �����ؼ����ÿ�ʼ --%>
<script src="<%=basePath%>MyDate/WdatePicker.js" language="javascript"
	type="text/javascript"></script>
<%-- �����ؼ����ý��� --%>
<title>�޸Ŀγ�</title>
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
						onclick="packupOrUnfold('course','<%=basePath%>student/images')">
						<h3>
							<img id="courseImg" src="<%=basePath%>student/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('grade','<%=basePath%>student/images')">
						<h3>
							<img id="gradeImg" src="<%=basePath%>student/images/unfold.jpg"
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
						onclick="packupOrUnfold('manager','<%=basePath%>student/images')">
						<h3>
							<img id="managerImg" src="<%=basePath%>student/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('news','<%=basePath%>student/images')">
						<h3>
							<img id="newsImg" src="<%=basePath%>student/images/unfold.jpg"
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
						onclick="packupOrUnfold('student','<%=basePath%>student/images')">
						<h3>
							<img id="studentImg" src="<%=basePath%>student/images/packup.jpg"
								width="12" height="12" alt="չ��" longdesc="չ��"> ѧԱ����
						</h3>
					</dt>
					<dd id="studentManager" style="display: block;">
						<a
							href="<%=basePath%>student/studentQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self"
							style="font-weight: bold; color: black; text-decoration: underline;">����ѧԱ</a>
					</dd>
				</dl>
				<dl>
					<dt
						onclick="packupOrUnfold('teacher','<%=basePath%>student/images')">
						<h3>
							<img id="teacherImg" src="<%=basePath%>student/images/unfold.jpg"
								width="12" height="12" alt="չ��" longdesc="չ��"> ��ʦ����
						</h3>
					</dt>
					<dd id="teacherAdd" style="display: none;">
						<a
							href="<%=basePath%>teacher/teacherAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">��ӽ�ʦ</a>
					</dd>
					<dd id="teacherManager" style="display: none;">
						<a
							href="<%=basePath%>teacher/teacherQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">�����ʦ</a>
					</dd>
				</dl>
			</td>
			<td align="center" valign="top">
				<%--��̨�޸Ľ��棺 modifiedStudentֻ���ں�̨�޸ģ�����Ա����༶�γ�ʱ����modifiedStudent��--%>
				<form action="<%=basePath%>modifiedStudent" method="post"
					enctype="multipart/form-data" name="form1">
					<h1>�޸�ѧԱ��Ϣ</h1>
					<table width="100%" border="0">
						<tr>
							<td align="right" valign="middle"><label for="stuId">ѧԱ�˺ţ�</label>
								<input name="stuId" type="text" id="stuId" maxlength="14"
								readonly value="${student.stuId }"></td>
							<td align="left" valign="middle"><font color="red" size="1">*</font></td>
							<td rowspan="16" align="left" valign="middle"><img
								src="<%=basePath%>studentImages/${student.image}?liuzhifeng=<%=Math.random()%>"
								width="260" height="360" alt="��Ƭ"></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="stuPassword">ѧԱ���룺</label>
								<input name="stuPassword" type="password" id="stuPassword"
								maxlength="20" onblur="verifyStudentUpdate('stuPassword')"
								value="${student.stuPassword }"></td>
							<td align="left" valign="middle"><font color="red"
								id="stuPasswordHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="">ȷ�����룺</label>
								<input name="verifyPassword" type="password" id="verifyPassword"
								onblur="verifyStudentUpdate('verifyPassword')" maxlength="20"
								value="${student.stuPassword }"></td>
							<td align="left" valign="middle"><font color="red"
								id="verifyPasswordHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="studentGrade">�����༶��
							</label> <select name="studentGrade" id="studentGrade"
								onchange="closeGradeDetail()">
									<option value="${student.stuGrade.gradeId }">${student.stuGrade.gradeName }</option>
							</select> <input type="button" name="go_button" id="go_button"
								value="�༶����"
								onClick="selectGrade('studentGrade', '<%=basePath%>selectGrade')"></td>
							<td align="left" valign="middle"><font color="red"
								id="studentPositionHint" size="1">*</font></td>
						</tr>
						<tr>
							<td colspan="2" align="center" valign="middle">
								<%-- ���̰༶���� --%>
								<div id="gradeDetail"></div>
							</td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="stuJobCompany">��ְ��˾��</label>
								<input name="stuJobCompany" type="text" id="stuJobCompany"
								value="${student.stuJobCompany }" maxlength="20"></td>
							<td align="left" valign="middle"><font color="red"
								id="stuJobCompanyHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="stuJobAddress">�����ص㣺</label>
								<input name="stuJobAddress" type="text" id="stuJobAddress"
								value="${student.stuJobAddress }" maxlength="40"></td>
							<td align="left" valign="middle"><font color="red"
								id="stuJobAddressHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="stuJobPay">��ǰ��н��</label>
								<input name="stuJobPay" type="text" id="stuJobPay"
								onblur="verifyStudentUpdate('stuJobPay')"
								value="${student.stuJobPay }" maxlength="7"></td>
							<td align="left" valign="middle"><font color="red"
								id="stuJobPayHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="stuJobTime">��ҵʱ�䣺</label>
								<input type="text" name="stuJobTime" id="stuJobTime"
								onfocus="WdatePicker()" onclick="WdatePicker()"
								value="${student.stuJobTime }"></td>
							<td align="left" valign="middle"><font color="red"
								id="stuJobTimeHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="birthday">�������ڣ�</label>
								<input type="text" name="birthday" id="birthday"
								readonly="readonly" value="${student.birthday }"></td>
							<td align="left" valign="middle"><font color="red"
								id="birthdayHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="id">���֤�ţ�</label>
								<input name="id" type="text" id="id" maxlength="18" readonly
								value="${student.id }"></td>
							<td align="left" valign="middle"><font color="red"
								id="idHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="name">ѧԱ������</label>
								<input name="name" type="text" id="name" maxlength="20"
								onblur="verifyStudentUpdate('name')" value="${student.name }"></td>
							<td align="left" valign="middle"><font color="red"
								id="nameHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><c:choose>
									<c:when test="${student.gender == '��' }">
										<table width="243">
											<tr>
												<td width="99" align="left" valign="middle">ѧԱ�Ա�</td>
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
												<td width="99" align="left" valign="middle">ѧԱ�Ա�</td>
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
								onblur="verifyStudentUpdate('phone')" value="${student.phone }"></td>
							<td align="left" valign="middle"><font color="red"
								id="phoneHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="address">��ϵ��ַ��</label>
								<input name="address" type="text" id="address" maxlength="40"
								onblur="verifyStudentUpdate('address')"
								value="${student.address }"></td>
							<td align="left" valign="middle"><font color="red"
								id="addressHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="school">��ҵԺУ��</label>
								<input name="school" type="text" id="school" maxlength="40"
								onblur="verifyStudentUpdate('school')"
								value="${student.school }"></td>
							<td align="left" valign="middle"><font color="red"
								id="schoolHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="studentImage">��Ƭ��</label>
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
								type="button" name="button" id="button" value="�ύ"
								onclick="verifyStudentUpdate('submit')"></td>
							<td align="center" valign="middle" nowrap="nowrap"><a
								href="javascript:;" onclick="lock()"
								style="font-size: small; text-decoration: none;">һ������</a></td>
							<td width="35%" align="left" valign="middle"><input
								type="reset" name="reset" id="reset" value="����"></td>
						</tr>
					</table>
				</form>
			</td>
		</tr>
	</table>
</body>
</html>