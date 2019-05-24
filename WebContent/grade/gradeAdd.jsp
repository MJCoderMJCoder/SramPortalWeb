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

<title>��Ӱ༶</title>
</head>
<body onload="queriesCourse('<%=basePath%>queriesCourse')">
	<table width="100%" border="0">
		<tr>
			<td width="10%" valign="top">
				<dl>
					<dt onclick="packupOrUnfold('company','<%=basePath%>grade/images')">
						<h3>
							<img id="companyImg" src="<%=basePath%>grade/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('course','<%=basePath%>grade/images')">
						<h3>
							<img id="courseImg" src="<%=basePath%>grade/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('grade','<%=basePath%>grade/images')">
						<h3>
							<img id="gradeImg" src="<%=basePath%>grade/images/packup.jpg"
								width="12" height="12" alt="չ��" longdesc="չ��"> �༶����
						</h3>
					</dt>
					<dd id="gradeAdd" style="display: block;">
						<a
							href="<%=basePath%>grade/gradeAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self"
							style="font-weight: bold; color: black; text-decoration: underline;">��Ӱ༶</a>
					</dd>
					<dd id="gradeManager" style="display: block;">
						<a
							href="<%=basePath%>grade/gradeQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">����༶</a>
					</dd>
				</dl>
				<dl>
					<dt onclick="packupOrUnfold('manager','<%=basePath%>grade/images')">
						<h3>
							<img id="managerImg" src="<%=basePath%>grade/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('news','<%=basePath%>grade/images')">
						<h3>
							<img id="newsImg" src="<%=basePath%>grade/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('student','<%=basePath%>grade/images')">
						<h3>
							<img id="studentImg" src="<%=basePath%>grade/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('teacher','<%=basePath%>grade/images')">
						<h3>
							<img id="teacherImg" src="<%=basePath%>grade/images/unfold.jpg"
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
					action="<%=basePath%>addGrade" method="post"
					enctype="multipart/form-data" name="form1">
					<table width="100%" border="0">
						<tr>
						  <td colspan="2" align="right" valign="middle"><h1>�����༶</h1></td>
						  <td align="left" valign="middle">&nbsp;</td>
					  </tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="gradeId">�༶��ţ�</label> <input name="gradeId" type="text"
								id="gradeId" maxlength="14" readonly
								value="<%=GenerateId.generateId()%>"></td>
							<td align="left" valign="middle"><font color="red" size="1">*</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="gradeName">�༶���ƣ�</label> <input name="gradeName"
								type="text" id="gradeName" maxlength="17"
								onblur="verifyGrade('gradeName')"></td>
							<td align="left" valign="middle"><font color="red"
								id="gradeNameHint" size="1">*�༶���Ʋ���Ϊ��</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="gradeSystem">�༶������</label> <input name="gradeCount"
								type="text" id="gradeCount" maxlength="2"
								onblur="verifyGrade('gradeCount')"></td>
							<td align="left" valign="middle"><font color="red"
								id="gradeCountHint" size="1">*�༶��������Ϊ��</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="gradeCourse">�༶�γ̣�</label> <select name="gradeCourse"
								id="gradeCourse" onchange="hideCourse()">
									<option value=""></option>
							</select> <input type="button" name="go_button" id="go_button"
								value="��ѡ�γ�"
								onClick="selectCourse('gradeCourse', '<%=basePath%>selectCourse')"></td>
							<td align="left" valign="middle"><font color="red"
								id="gradeCourseHint" size="1">*</font></td>
						</tr>
						<tr align="right">
							<td colspan="3" align="center" valign="middle">
							<%-- �༶�γ����� --%>
								<div id="courseDetail" style="display: none;"></div>
							</td>
						</tr>
						<tr align="right">
							<!-- �ָ��� -->
							<td colspan="3" align="center" valign="middle"></td>
						</tr>
						<tr>
							<td width="45%" align="right" valign="middle"><input
								type="button" name="button" id="button" value="�ύ"
								onclick="verifyGrade('submit')"></td>
							<td align="center" valign="middle"><input type="reset"
								name="reset" id="reset" value="����"></td>
							<td width="45%" align="left" valign="middle">&nbsp;</td>
						</tr>
					</table>
		  </form></td>
		</tr>
	</table>
</body>
</html>