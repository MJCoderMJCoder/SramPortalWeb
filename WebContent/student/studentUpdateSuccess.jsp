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

<title>��ӿγ�</title>
</head>
<body>
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
						onclick="packupOrUnfold('student','<%=basePath%>student/images')">
						<h3>
							<img id="studentImg" src="<%=basePath%>student/images/unfold.jpg"
								width="12" height="12" alt="չ��" longdesc="չ��"> ��ʦ����
						</h3>
					</dt>
					<dd id="studentAdd" style="display: none;">
						<a
							href="<%=basePath%>student/studentAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">��ӽ�ʦ</a>
					</dd>
					<dd id="studentManager" style="display: none;">
						<a
							href="<%=basePath%>student/studentQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">�����ʦ</a>
					</dd>
				</dl>
			</td>
			<td align="center" valign="top">
				<h1>�޸ĳɹ�</h1>
				<table width="50%" border="0" cellpadding="5">
					<tr>
						<td width="50%" align="left" valign="middle"></td>
						<td width="50%" rowspan="10" align="right" valign="middle"><img
							src="<%=basePath%>studentImages/${student.image }" width="200"
							height="290" alt="��Ƭ"></td>
					</tr>
					<tr>
						<td align="left" valign="middle" nowrap="nowrap">ѧԱ�˺ţ�${student.stuId }</td>
					</tr>
					<tr>
						<td align="left" valign="middle" nowrap="nowrap">�����༶��<span
							onclick="showGradeDetail()">${student.stuGrade.gradeName }</span></td>
					</tr>
					<tr style="display: none;" id="gradeDetailTr">
						<td>
							<div id="gradeDetail">
								<table width="100%" border="0">
									<tr>
										<td align='right' valign='middle' id='closeGradeDetail'
											onclick='closeGradeDetail()'>�ر�&nbsp;</td>
									</tr>
									<tr>
										<td><table width="100%" border="0" cellpadding="10">
												<tr>
													<td align="left" valign="middle" nowrap="nowrap">�༶���ƣ�${student.stuGrade.gradeName }</td>
													<td rowspan="5" align="right" valign="middle"><img
														src="<%=basePath%>courseImages/${student.stuGrade.gradeCourse.courseImage}"
														width="163" height="88" alt="�γ�ͼƬ"></td>
												</tr>
												<tr align="left" valign="middle">
													<td nowrap="nowrap">�༶������${student.stuGrade.gradeCount }</td>
												</tr>
												<tr align="left" valign="middle">
													<td nowrap="nowrap">�༶�γ̣�${student.stuGrade.gradeCourse.courseName }</td>
												</tr>
												<tr align="left" valign="middle">
													<td nowrap="nowrap">�γ���ϵ��${student.stuGrade.gradeCourse.courseSystem }</td>
												</tr>
												<tr align="left" valign="middle">
													<td nowrap="nowrap">��ҵ����${student.stuGrade.gradeCourse.jobDirection }</td>
												</tr>
												<tr>
													<td colspan="2"><hr>
														${student.stuGrade.gradeCourse.courseDetail }</td>
												</tr>
											</table></td>
									</tr>
								</table>
							</div>
						</td>
					</tr>
					<tr>
						<td align="left" valign="middle" nowrap="nowrap">�������ڣ�${student.birthday }</td>
					</tr>
					<tr>
						<td align="left" valign="middle" nowrap="nowrap">���֤�ţ�${student.id }</td>
					</tr>
					<tr>
						<td align="left" valign="middle" nowrap="nowrap">ѧԱ������${student.name }</td>
					</tr>
					<tr>
						<td align="left" valign="middle" nowrap="nowrap">ѧԱ�Ա�${student.gender }</td>
					</tr>

					<tr>
						<td align="left" valign="middle" nowrap="nowrap">��ϵ��ʽ��${student.phone }���ֻ��ţ�</td>
					</tr>
					<tr>
						<td align="left" valign="middle" nowrap="nowrap">��ϵ��ַ��${student.address }</td>
					</tr>
					<tr>
						<td align="left" valign="middle" nowrap="nowrap">��ҵԺУ��${student.school }</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>