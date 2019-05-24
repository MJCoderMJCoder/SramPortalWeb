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
<body>
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
			<td align="center" valign="top">
				<h1>��ӳɹ�</h1>
				<table width="100%" border="0">
					<tr>
						<td align="right" valign="middle"><label for="gradeId">�༶��ţ�</label>
							<input name="gradeId" type="text" id="gradeId" readonly
							value="${grade.gradeId }"></td>
						<td align="center" valign="middle">&nbsp;</td>
						<td align="left" valign="middle"><label for="gradeName">�༶���ƣ�</label>
							<input name="gradeName" type="text" id="gradeName" readonly
							value="${grade.gradeName }"></td>
					</tr>
					<tr>
						<td align="right" valign="middle"><label for="gradeCount">�༶������</label>
							<input name="gradeCount" type="text" id="gradeCount" readonly
							value="${grade.gradeCount }"></td>
						<td align="center" valign="middle">&nbsp;</td>
						<td align="left" valign="middle"><label for="gradeCourse">�༶�γ̣�</label>
							<input name="gradeCourseText" type="text" id="gradeCourseText"
							value="${grade.gradeCourse.courseName }" readonly></td>
					</tr>
					<tr>
						<td align="right" valign="middle">&nbsp;</td>
						<td align="center" valign="middle">&nbsp;</td>
						<td align="left" valign="middle">&nbsp;</td>
					</tr>
					<tr>
						<td colspan="3" align="center" valign="bottom"><p>�����Ǹð༶�Ŀγ���Ϣ
							</p>
							<p>
							<div id="courseDetail" style="display: block;">
								<table width="100%" border="0">
									<tr>
										<td align="left" valign="middle">�γ����ƣ�${grade.gradeCourse.courseName }</td>
										<td rowspan="3" align="right" valign="middle"><img
											src="<%=basePath %>courseImages/${grade.gradeCourse.courseImage }"
											width="163" height="88" alt="�γ�ͼƬ"></td>
									</tr>
									<tr>
										<td align="left" valign="middle">�γ���ϵ��${grade.gradeCourse.courseSystem }</td>
									</tr>
									<tr>
										<td align="left" valign="middle">��ҵ����${grade.gradeCourse.jobDirection }</td>
									</tr>
									<tr>
										<td colspan="2" align="left" valign="middle"><hr>${grade.gradeCourse.courseDetail }</td>
									</tr>
								</table>
							</div>
							</p></td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>