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
<%--xheditor���� ��ʼ--%>
<script type="text/javascript"
	src="<%=basePath%>xheditor/jquery-1.7.2.min.js"></script>
<script type="text/javascript"
	src="<%=basePath%>xheditor/xheditor-1.2.2.min.js"></script>
<script type="text/javascript"
	src="<%=basePath%>xheditor/xheditor_lang/zh-cn.js"></script>
<%--xheditor���� ����--%>
<title>��Ӽ��</title>
</head>
<body>
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
							target="_self"
							style="font-weight: bold; color: black; text-decoration: underline;">�������</a>
					</dd>
					<dd id="newsManager" style="display: block;">
						<a
							href="<%=basePath%>news/newsQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">��������</a>
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
			<td align="center" valign="top"><form
					action="<%=basePath%>addNews" method="post"
					enctype="multipart/form-data" name="form1">
					<table width="100%" border="0">
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="newsId">���ű�ţ�</label> <input name="newsId" type="text"
								id="newsId" maxlength="14" readonly
								value="<%=GenerateId.generateId()%>"></td>
							<td align="left" valign="middle"><font color="red" size="1">*</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="newsType">�������ͣ�</label> <select name="newsType" size="1"
								id="newsType" onblur="newsTypeChange('newsType')">
									<option value="һ������" selected="selected">һ������</option>
									<option value="������Ƹ">������Ƹ</option>
							</select></td>
							<td align="left" valign="middle"><font color="red"
								id="newsTypeHint" size="1">*</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="newsName">���ű��⣺</label> <input name="newsName" type="text"
								id="newsName" maxlength="17" onblur="verifyNews('newsName')"></td>
							<td align="left" valign="middle"><font color="red"
								id="newsNameHint" size="1">*���ű��ⲻ��Ϊ��</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><label
								for="newsImage">ͼƬ��</label> <input type="file" name="newsImage"
								id="newsImage" onblur="verifyNews('newsImage')"></td>
							<td align="left" valign="middle"><font color="red"
								id="newsImageHint" size="1">*����ͼƬ����Ϊ�գ�ͼƬ��ʽ��jpg��png��gif��</font></td>
						</tr>
						<tr>
							<td colspan="2" align="right" valign="middle"><br> ��������<br></td>
							<td align="left" valign="middle"><br> <font color="red"
								id="newsIntroHint" size="1">*</font><br></td>
						</tr>
						<tr align="right">
							<td colspan="3" align="center" valign="middle"><textarea
									class="xheditor" name="newsIntro" id="newsIntro" cols="115"
									rows="20"></textarea></td>
						</tr>
						<tr>
							<td width="45%" align="right" valign="middle"><input
								type="button" name="button" id="button" value="�ύ"
								onclick="verifyNews('submit')"></td>
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