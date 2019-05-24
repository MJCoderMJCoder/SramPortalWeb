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
<link href="<%=basePath%>news/CascadingStyleSheets/news.css"
	rel="stylesheet" type="text/css" />
<script src="<%=basePath%>news/javascript/news.js" language="javascript"
	type="text/javascript"></script>

<%-- �����ؼ����ÿ�ʼ --%>
<script src="<%=basePath%>MyDate/WdatePicker.js" language="javascript"
	type="text/javascript"></script>
<%-- �����ؼ����ý��� --%>
<title>��Ӽ��</title>
</head>
<body onload="queriesNews('<%=basePath%>queriesNews')">
	<table width="100%" border="0">
		<tr>
			<td width="10%" valign="top">
				<dl>
					<dt onclick="packupOrUnfold('company','<%=basePath%>news/images')">
						<h3>
							<img id="companyImg" src="<%=basePath%>news/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('course','<%=basePath%>news/images')">
						<h3>
							<img id="courseImg" src="<%=basePath%>news/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('grade','<%=basePath%>news/images')">
						<h3>
							<img id="gradeImg" src="<%=basePath%>news/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('manager','<%=basePath%>news/images')">
						<h3>
							<img id="managerImg" src="<%=basePath%>news/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('news','<%=basePath%>news/images')">
						<h3>
							<img id="newsImg" src="<%=basePath%>news/images/packup.jpg"
								width="12" height="12" alt="չ��" longdesc="չ��"> ���Ź���
						</h3>
					</dt>
					<dd id="newsAdd" style="display: block;">
						<a
							href="<%=basePath%>news/newsAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">�������</a>
					</dd>
					<dd id="newsManager" style="display: block;">
						<a
							href="<%=basePath%>news/newsQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self"
							style="font-weight: bold; color: black; text-decoration: underline;">��������</a>
					</dd>
				</dl>
				<dl>
					<dt onclick="packupOrUnfold('student','<%=basePath%>news/images')">
						<h3>
							<img id="studentImg" src="<%=basePath%>news/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('teacher','<%=basePath%>news/images')">
						<h3>
							<img id="teacherImg" src="<%=basePath%>news/images/unfold.jpg"
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
							for="newsId">���ŷ������ڣ�</label><input type="text" name="newsId"
							id="newsId" onfocus="WdatePicker()" onclick="WdatePicker()"></th>
						<th align="center" valign="middle" nowrap="nowrap"><label
							for="newsName">���ű��⣺</label> <input type="text" name="newsName"
							id="newsName"></th>
						<th align="center" valign="middle" nowrap="nowrap"><label
							for="newsIntro">�������飺</label> <input type="text"
							name="newsIntro" id="newsIntro"></th>
						<th align="center" valign="middle" nowrap="nowrap"><input
							type="button" name="search" id="search" value="����"
							onclick="queriesNews('<%=basePath%>queriesNews')"></th>
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