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
<link href="<%=basePath%>company/CascadingStyleSheets/company.css"
	rel="stylesheet" type="text/css" />
<script src="<%=basePath%>company/javascript/company.js"
	language="javascript" type="text/javascript"></script>

<title>��Ӽ��</title>
</head>
<body>
	<table width="100%" border="0">
		<tr>
			<td width="10%" valign="top">
				<dl>
					<dt
						onclick="packupOrUnfold('company','<%=basePath%>company/images')">
						<h3>
							<img id="companyImg" src="<%=basePath%>company/images/packup.jpg"
								width="12" height="12" alt="չ��" longdesc="չ��"> ��˾���
						</h3>
					</dt>
					<dd id="companyAdd" style="display: block;">
						<a
							href="<%=basePath%>company/companyAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">��Ӽ��</a>
					</dd>
					<dd id="companyManager" style="display: block;">
						<a
							href="<%=basePath%>company/companyQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self"
							style="font-weight: bold; color: black; text-decoration: underline;">������</a>
					</dd>
				</dl>
				<dl>
					<dt
						onclick="packupOrUnfold('course','<%=basePath%>company/images')">
						<h3>
							<img id="courseImg" src="<%=basePath%>company/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('grade','<%=basePath%>company/images')">
						<h3>
							<img id="gradeImg" src="<%=basePath%>company/images/unfold.jpg"
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
						onclick="packupOrUnfold('manager','<%=basePath%>company/images')">
						<h3>
							<img id="managerImg" src="<%=basePath%>company/images/unfold.jpg"
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
					<dt onclick="packupOrUnfold('news','<%=basePath%>company/images')">
						<h3>
							<img id="newsImg" src="<%=basePath%>company/images/unfold.jpg"
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
						onclick="packupOrUnfold('student','<%=basePath%>company/images')">
						<h3>
							<img id="studentImg" src="<%=basePath%>company/images/unfold.jpg"
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
						onclick="packupOrUnfold('teacher','<%=basePath%>company/images')">
						<h3>
							<img id="teacherImg" src="<%=basePath%>company/images/unfold.jpg"
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
				<h1>�޸ĳɹ�</h1>
				<table width="100%" border="0">
					<tr>
						<td width="40%" align="right" valign="middle"><label
							for="companyId">��˾����ţ�</label> <input name="companyId"
							type="text" id="companyId" value="${company.companyId }"
							maxlength="14" readonly></td>
						<td align="center" valign="middle">&nbsp;</td>
						<td width="40%" rowspan="2" align="left" valign="middle"><img
							src="<%=basePath %>companyImages/${company.companyImage }?liuzhifeng=<%=Math.random()%>"
							width="200" height="100" alt="��˾���ͼƬ" longdesc="��˾���ͼƬ"></td>
					</tr>
					<tr align="center">
						<td align="right" valign="middle"><label for="companyName">��˾�����⣺</label>
							<input name="companyName" type="text" id="companyName"
							maxlength="20" readonly value="${company.companyName }"></td>
						<td align="center" valign="middle">&nbsp;</td>
					</tr>
					<tr>
						<td colspan="3" align="center" valign="middle"><label
							for="companyIntro"> <br>��˾�������<br>
						</label></td>
					</tr>
					<tr>
						<td colspan="3" align="center" valign="middle"></td>
					</tr>
					<tr align="right">
						<td colspan="3" align="center" valign="middle">
							<div
								style="width: 70%; border-top-width: 1px; border-top-style: solid; border-top-color: gray; padding-top: 10px; text-align: left;">
								<c:out value="${company.companyIntro}" escapeXml="false"></c:out>
							</div>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>