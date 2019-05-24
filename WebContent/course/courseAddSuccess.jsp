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
			<td align="center" valign="top">
				<h1>��ӳɹ�</h1>
				<table width="100%" border="0">
					<tr>
						<td width="40%" align="right" valign="middle"><label
							for="courseId">�γ̱�ţ�</label> <input name="courseId" type="text"
							id="courseId" value="${course.courseId }" maxlength="14" readonly></td>
						<td align="center" valign="middle">&nbsp;</td>
						<td width="40%" rowspan="4" align="left" valign="middle"><img
							src="<%=basePath %>courseImages/${course.courseImage }"
							width="215" height="115" alt="�γ�ͼƬ" longdesc="�γ�ͼƬ"></td>
					</tr>
					<tr align="center">
						<td align="right" valign="middle"><label for="courseName">�γ����ƣ�</label>
							<input name="courseName" type="text" id="courseName"
							maxlength="20" readonly value="${course.courseName }"></td>
						<td align="center" valign="middle">&nbsp;</td>
					</tr>
					<tr>
						<td align="right" valign="middle"><label for="courseSystem">�γ���ϵ��</label>
							<input name="courseSystem" type="text" id="courseSystem"
							maxlength="20" readonly value="${course.courseSystem }"></td>
						<td align="center" valign="middle">&nbsp;</td>
					</tr>
					<tr>
						<td align="right" valign="middle"><label for="jobDirection">��ҵ����</label>
							<input name="jobDirection" type="text" id="jobDirection"
							maxlength="20" readonly value="${course.jobDirection }"></td>
						<td align="center" valign="middle">&nbsp;</td>
					</tr>
					<tr>
						<td colspan="3" align="center" valign="middle"><label
							for="courseIntro"> <br>�γ�����<br>
						</label></td>
					</tr>
					<tr>
						<td colspan="3" align="center" valign="middle"></td>
					</tr>
					<tr align="right">
						<td colspan="3" align="center" valign="middle">
							<div
								style="width: 70%; border-top-width: 1px; border-top-style: solid; border-top-color: gray; padding-top: 10px; text-align: left;">
								<c:out value="${course.courseDetail}" escapeXml="false"></c:out>
							</div>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>