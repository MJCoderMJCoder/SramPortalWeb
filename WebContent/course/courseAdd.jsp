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
<%--xheditor���� ��ʼ--%>
<script type="text/javascript"
	src="<%=basePath%>xheditor/jquery-1.7.2.min.js"></script>
<script type="text/javascript"
	src="<%=basePath%>xheditor/xheditor-1.2.2.min.js"></script>
<script type="text/javascript"
	src="<%=basePath%>xheditor/xheditor_lang/zh-cn.js"></script>
<%--xheditor���� ����--%>
<title>��ӿγ�</title>
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
					<dt onclick="packupOrUnfold('course','<%=basePath%>course/images')">
						<h3>
							<img id="courseImg" src="<%=basePath%>course/images/packup.jpg"
								width="12" height="12" alt="չ��" longdesc="չ��"> �γ̹���
						</h3>
					</dt>
					<dd id="courseAdd" style="display: block;">
						<a
							href="<%=basePath%>course/courseAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self"
							style="font-weight: bold; color: black; text-decoration: underline;">��ӿγ�</a>
					</dd>
					<dd id="courseManager" style="display: block;">
						<a
							href="<%=basePath%>course/courseQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">����γ�</a>
					</dd>
				</dl>
				<dl>
					<dt onclick="packupOrUnfold('grade','<%=basePath%>course/images')">
						<h3>
							<img id="gradeImg" src="<%=basePath%>course/images/unfold.jpg"
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
						onclick="packupOrUnfold('manager','<%=basePath%>course/images')">
						<h3>
							<img id="managerImg" src="<%=basePath%>course/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('news','<%=basePath%>course/images')">
						<h3>
							<img id="newsImg" src="<%=basePath%>course/images/unfold.jpg"
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
						onclick="packupOrUnfold('student','<%=basePath%>course/images')">
						<h3>
							<img id="studentImg" src="<%=basePath%>course/images/unfold.jpg"
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
						onclick="packupOrUnfold('teacher','<%=basePath%>course/images')">
						<h3>
							<img id="teacherImg" src="<%=basePath%>course/images/unfold.jpg"
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
					action="<%=basePath%>addCourse" method="post"
					enctype="multipart/form-data" name="form1">
					<table width="100%" border="0">
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="courseId">�γ̱�ţ�</label> <input name="courseId" type="text"
								id="courseId" maxlength="14" readonly
								value="<%=GenerateId.generateId()%>"></td>
							<td align="left" valign="middle"><font color="red" size="1">*</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="courseName">�γ����ƣ�</label> <input name="courseName"
								type="text" id="courseName" maxlength="17"
								onblur="verifyCourse('courseName')"></td>
							<td align="left" valign="middle"><font color="red"
								id="courseNameHint" size="1">*�γ����Ʋ���Ϊ��</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="courseSystem">�γ���ϵ��</label> <input name="courseSystem"
								type="text" id="courseSystem" maxlength="20"
								onblur="verifyCourse('courseSystem')"></td>
							<td align="left" valign="middle"><font color="red"
								id="courseSystemHint" size="1">*�γ���ϵ����Ϊ��</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="jobDirection">��ҵ����</label> <input name="jobDirection"
								type="text" id="jobDirection" maxlength="20"
								onblur="verifyCourse('jobDirection')"></td>
							<td align="left" valign="middle"><font color="red"
								id="jobDirectionHint" size="1">*��ҵ������Ϊ��</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="courseImage">ͼƬ��</label> <input name="courseImage"
								type="file" id="courseImage"
								onblur="verifyCourse('courseImage')"></td>
							<td align="left" valign="middle"><font color="red"
								id="courseImageHint" size="1">*�γ�ͼƬ����Ϊ�գ�ͼƬ��ʽ��jpg��png��gif��</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><br>�γ�����<br></td>
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
								type="button" name="button" id="button" value="�ύ"
								onclick="verifyCourse('submit')"></td>
							<td align="center" valign="middle">&nbsp;</td>
							<td width="45%" align="left" valign="middle"><input
								type="reset" name="reset" id="reset" value="����"></td>
						</tr>
					</table>
				</form></td>
		</tr>
	</table>
</body>
</html>