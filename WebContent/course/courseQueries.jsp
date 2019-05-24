<%@page import="java.util.Date"%>
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

<%-- �����ؼ����ÿ�ʼ --%>
<script src="<%=basePath%>MyDate/WdatePicker.js" language="javascript"
	type="text/javascript"></script>
<%-- �����ؼ����ý��� --%>
<title>��Ӽ��</title>
</head>
<body onload="queriesCourse('<%=basePath%>queriesCourse')">
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
							target="_self">��ӿγ�</a>
					</dd>
					<dd id="courseManager" style="display: block;">
						<a
							href="<%=basePath%>course/courseQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self"
							style="font-weight: bold; color: black; text-decoration: underline;">����γ�</a>
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
				<table width="100%" border="0">
					<tr>
						<th align="center" valign="middle" nowrap="nowrap"><label
							for="courseId">�������ڣ�</label><input type="text" name="courseId"
							id="courseId" onfocus="WdatePicker()" onclick="WdatePicker()"></th>
						<th align="center" valign="middle" nowrap="nowrap"><label
							for="courseName">�γ����ƣ�</label><input type="text"
							name="courseName" id="courseName"></th>
						<th align="center" valign="middle" nowrap="nowrap"><label
							for="courseIntro">�γ����飺</label><input type="text"
							name="courseIntro" id="courseIntro"></th>
						<th align="center" valign="middle" nowrap="nowrap"><input
							type="button" name="search" id="search" value="����"
							onclick="queriesCourse('<%=basePath%>queriesCourse')"></th>
						<th><img id="moreImg"
							src="<%=basePath%>course/images/unfold.jpg" width="14"
							height="14" alt="����" longdesc="����" style="cursor: pointer;"
							onclick="moreSearch('<%=basePath%>course/images')"></th>
					</tr>
					<tr id="moreTr" style="display: none;">
						<%-- ����ľ�ȷ�������� --%>
						<th align="center" valign="middle" nowrap="nowrap"><label
							for="courseSystem">�γ���ϵ��</label><input type="text"
							name="courseSystem" id="courseSystem"></th>
						<th align="center" valign="middle" nowrap="nowrap"><label
							for="jobDirection">��ҵ����</label><input type="text"
							name="jobDirection" id="jobDirection"></th>
					</tr>
				</table>
				<hr>
				<table width="100%" border="1" cellpadding="10" id="searchResult">
				</table>
			</td>
		</tr>
	</table>
</body>
</html>