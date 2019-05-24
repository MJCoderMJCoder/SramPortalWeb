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
<%-- �����ؼ����ÿ�ʼ --%>
<script src="<%=basePath%>MyDate/WdatePicker.js" language="javascript"
	type="text/javascript"></script>
<%-- �����ؼ����ý��� --%>
<title>�޸Ŀγ�</title>
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
						onclick="packupOrUnfold('course','<%=basePath%>manager/images')">
						<h3>
							<img id="courseImg" src="<%=basePath%>manager/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('grade','<%=basePath%>manager/images')">
						<h3>
							<img id="gradeImg" src="<%=basePath%>manager/images/unfold.jpg"
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
						onclick="packupOrUnfold('manager','<%=basePath%>manager/images')">
						<h3>
							<img id="managerImg" src="<%=basePath%>manager/images/packup.jpg"
								width="12" height="12" alt="չ��" longdesc="չ��"> Ա������
						</h3>
					</dt>
					<dd id="managerAdd" style="display: block;">
						<a
							href="<%=basePath%>manager/managerAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">���Ա��</a>
					</dd>
					<dd id="managerManager" style="display: block;">
						<a
							href="<%=basePath%>manager/managerQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self"
							style="font-weight: bold; color: black; text-decoration: underline;">����Ա��</a>
					</dd>
				</dl>
				<dl>
					<dt onclick="packupOrUnfold('news','<%=basePath%>manager/images')">
						<h3>
							<img id="newsImg" src="<%=basePath%>manager/images/unfold.jpg"
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
						onclick="packupOrUnfold('student','<%=basePath%>manager/images')">
						<h3>
							<img id="studentImg" src="<%=basePath%>manager/images/unfold.jpg"
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
						onclick="packupOrUnfold('teacher','<%=basePath%>manager/images')">
						<h3>
							<img id="teacherImg" src="<%=basePath%>manager/images/unfold.jpg"
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
			<td align="center" valign="top"><form
					action="<%=basePath%>updateManager" method="post"
					enctype="multipart/form-data" name="form1">
					<h1>�޸�Ա����Ϣ</h1>
					<table width="100%" border="0">
						<tr>
							<td align="right" valign="middle"><label for="managerId">Ա���˺ţ�</label>
								<input name="managerId" type="text" id="managerId"
								maxlength="14" readonly value="${manager.managerId }"></td>
							<td align="left" valign="middle"><font color="red" size="1">*</font></td>
							<td rowspan="12" align="left" valign="middle"><img
								src="<%=basePath%>managerImages/${manager.image}?liuzhifeng=<%=Math.random()%>"
								width="200" height="290" alt="��Ƭ"></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label
								for="managerPassword">Ա�����룺</label> <input
								name="managerPassword" type="password" id="managerPassword"
								maxlength="20" onblur="verifyManagerUpdate('managerPassword')"
								value="${manager.managerPassword }"></td>
							<td align="left" valign="middle"><font color="red"
								id="managerPasswordHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="">ȷ�����룺</label>
								<input name="verifyPassword" type="password" id="verifyPassword"
								onblur="verifyManagerUpdate('verifyPassword')" maxlength="20"
								value="${manager.managerPassword }"></td>
							<td align="left" valign="middle"><font color="red"
								id="verifyPasswordHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label
								for="managerPosition">Ա��ְ�ƣ�</label> <select
								name="managerPosition" id="managerPosition">
									<option value="${manager.managerPosition }" selected>${manager.managerPosition }</option>
									<option value="��������">��������</option>
									<option value="��˾����">��˾����</option>
									<option value="�γ̹���">�γ̹���</option>
									<option value="�༶����">�༶����</option>
									<option value="ְ������">ְ������</option>
									<option value="���Ź���">���Ź���</option>
									<option value="ѧ������">ѧ������</option>
									<option value="��ʦ����">��ʦ����</option>
							</select></td>
							<td align="left" valign="middle"><font color="red"
								id="managerPositionHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="birthday">�������ڣ�</label>
								<input type="text" name="birthday" id="birthday"
								readonly="readonly" value="${manager.birthday }"></td>
							<td align="left" valign="middle"><font color="red"
								id="birthdayHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="id">���֤�ţ�</label>
								<input name="id" type="text" id="id" maxlength="18" readonly
								value="${manager.id }"></td>
							<td align="left" valign="middle"><font color="red"
								id="idHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="name">Ա��������</label>
								<input name="name" type="text" id="name" maxlength="20"
								onblur="verifyManagerUpdate('name')" value="${manager.name }"></td>
							<td align="left" valign="middle"><font color="red"
								id="nameHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><c:choose>
									<c:when test="${manager.gender == '��' }">
										<table width="243">
											<tr>
												<td width="99" align="left" valign="middle">Ա���Ա�</td>
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
												<td width="99" align="left" valign="middle">Ա���Ա�</td>
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
								onblur="verifyManagerUpdate('phone')" value="${manager.phone }"></td>
							<td align="left" valign="middle"><font color="red"
								id="phoneHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="address">��ϵ��ַ��</label>
								<input name="address" type="text" id="address" maxlength="40"
								onblur="verifyManagerUpdate('address')"
								value="${manager.address }"></td>
							<td align="left" valign="middle"><font color="red"
								id="addressHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="school">��ҵԺУ��</label>
								<input name="school" type="text" id="school" maxlength="40"
								onblur="verifyManagerUpdate('school')"
								value="${manager.school }"></td>
							<td align="left" valign="middle"><font color="red"
								id="schoolHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="managerImage">��Ƭ��</label>
								<input name="managerImage" type="file" id="managerImage"
								onblur="verifyManagerUpdate('managerImage')"></td>
							<td align="left" valign="middle"><font color="red"
								id="managerImageHint" size="1">*</font></td>
						</tr>
						<tr align="right">
							<td align="center" valign="middle">&nbsp;</td>
							<td align="center" valign="middle">&nbsp;</td>
							<td colspan="2" align="center" valign="middle">&nbsp;</td>
						</tr>
						<tr>
							<td width="35%" align="right" valign="middle"><input
								type="button" name="button" id="button" value="�ύ"
								onclick="verifyManagerUpdate('submit')"></td>
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