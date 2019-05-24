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
<%--xheditor引用 开始--%>
<script type="text/javascript"
	src="<%=basePath%>xheditor/jquery-1.7.2.min.js"></script>
<script type="text/javascript"
	src="<%=basePath%>xheditor/xheditor-1.2.2.min.js"></script>
<script type="text/javascript"
	src="<%=basePath%>xheditor/xheditor_lang/zh-cn.js"></script>
<%--xheditor引用 结束--%>
<title>修改简介</title>
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
								width="12" height="12" alt="展开" longdesc="展开"> 公司简介
						</h3>
					</dt>
					<dd id="companyAdd" style="display: block;">
						<a
							href="<%=basePath%>company/companyAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">添加简介</a>
					</dd>
					<dd id="companyManager" style="display: block;">
						<a
							href="<%=basePath%>company/companyQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self"
							style="font-weight: bold; color: black; text-decoration: underline;">管理简介</a>
					</dd>
				</dl>
				<dl>
					<dt
						onclick="packupOrUnfold('course','<%=basePath%>company/images')">
						<h3>
							<img id="courseImg" src="<%=basePath%>company/images/unfold.jpg"
								width="12" height="12" alt="展开" longdesc="展开"> 课程管理
						</h3>
					</dt>
					<dd id="courseAdd" style="display: none;">
						<a
							href="<%=basePath%>course/courseAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">添加课程</a>
					</dd>
					<dd id="courseManager" style="display: none;">
						<a
							href="<%=basePath%>course/courseQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">管理课程</a>
					</dd>
				</dl>
				<dl>
					<dt onclick="packupOrUnfold('grade','<%=basePath%>company/images')">
						<h3>
							<img id="gradeImg" src="<%=basePath%>company/images/unfold.jpg"
								width="12" height="12" alt="展开" longdesc="展开"> 班级管理
						</h3>
					</dt>
					<dd id="gradeAdd" style="display: none;">
						<a
							href="<%=basePath%>grade/gradeAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">添加班级</a>
					</dd>
					<dd id="gradeManager" style="display: none;">
						<a
							href="<%=basePath%>grade/gradeQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">管理班级</a>
					</dd>
				</dl>
				<dl>
					<dt
						onclick="packupOrUnfold('manager','<%=basePath%>company/images')">
						<h3>
							<img id="managerImg" src="<%=basePath%>company/images/unfold.jpg"
								width="12" height="12" alt="展开" longdesc="展开"> 员工管理
						</h3>
					</dt>
					<dd id="managerAdd" style="display: none;">
						<a
							href="<%=basePath%>manager/managerAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">添加员工</a>
					</dd>
					<dd id="managerManager" style="display: none;">
						<a
							href="<%=basePath%>manager/managerQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">管理员工</a>
					</dd>
				</dl>
				<dl>
					<dt onclick="packupOrUnfold('news','<%=basePath%>company/images')">
						<h3>
							<img id="newsImg" src="<%=basePath%>company/images/unfold.jpg"
								width="12" height="12" alt="展开" longdesc="展开"> 新闻管理
						</h3>
					</dt>
					<dd id="newsAdd" style="display: none;">
						<a
							href="<%=basePath%>news/newsAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">添加新闻</a>
					</dd>
					<dd id="newsManager" style="display: none;">
						<a
							href="<%=basePath%>news/newsQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">管理新闻</a>
					</dd>
				</dl>
				<dl>
					<dt
						onclick="packupOrUnfold('student','<%=basePath%>company/images')">
						<h3>
							<img id="studentImg" src="<%=basePath%>company/images/unfold.jpg"
								width="12" height="12" alt="展开" longdesc="展开"> 学员管理
						</h3>
					</dt>
					<dd id="studentManager" style="display: none;">
						<a
							href="<%=basePath%>student/studentQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">管理学员</a>
					</dd>
				</dl>
				<dl>
					<dt
						onclick="packupOrUnfold('teacher','<%=basePath%>company/images')">
						<h3>
							<img id="teacherImg" src="<%=basePath%>company/images/unfold.jpg"
								width="12" height="12" alt="展开" longdesc="展开"> 教师管理
						</h3>
					</dt>
					<dd id="teacherAdd" style="display: none;">
						<a
							href="<%=basePath%>teacher/teacherAdd.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">添加教师</a>
					</dd>
					<dd id="teacherManager" style="display: none;">
						<a
							href="<%=basePath%>teacher/teacherQueries.jsp?liuzhifeng=<%=Math.random()%>"
							target="_self">管理教师</a>
					</dd>
				</dl>
			</td>
			<td align="center" valign="top"><form
					action="<%=basePath%>updateCompany" method="post"
					enctype="multipart/form-data" name="form1">
					<table width="100%" border="0">
						<tr>
							<td align="right" valign="middle" nowrap="nowrap"><label
								for="companyId">公司简介编号：</label> <input name="companyId"
								type="text" id="companyId" maxlength="14" readonly
								value="${company.companyId }"></td>
							<td align="left" valign="middle" nowrap="nowrap"><font
								color="red" size="1">*</font></td>
							<td rowspan="2" align="left" valign="middle" nowrap="nowrap"
								id="image"><img
								src="<%=basePath%>companyImages/${company.companyImage }?liuzhifeng=<%=Math.random()%>"
								width="200" height="100" alt="公司简介图片" longdesc="公司简介图片"
								onmouseover="onmouseoverUpdate()"
								onmouseout="onmouseoutUpdate()"></td>
						</tr>

						<tr>
							<td align="right" valign="middle" nowrap="nowrap"><label
								for="companyName">公司简介标题：</label> <input name="companyName"
								type="text" id="companyName" maxlength="20"
								onblur="verifyCompanyUpdate('companyName')"
								value="${company.companyName }"></td>
							<td align="left" valign="middle" nowrap="nowrap"><font
								color="red" id="companyNameHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle" nowrap="nowrap"><label
								for="companyImage">图片：</label> <input type="file"
								name="companyImage" id="companyImage"
								onblur="verifyCompanyUpdate('companyImage')"
								value="${company.companyImage }"></td>
							<td colspan="2" align="left" valign="middle"><font
								color="red" id="companyImageHint" size="1">*</font></td>
						</tr>
						<tr>
							<td colspan="3" align="center" valign="middle" nowrap="nowrap"><br>公司简介详情<font
								color="red" id="companyIntroHint" size="1">*</font><br></td>
						</tr>
						<tr align="right">
							<td colspan="3" align="center" valign="middle" nowrap="nowrap"><textarea
									class="xheditor" name="companyIntro" id="companyIntro"
									cols="120" rows="20">${company.companyIntro }</textarea></td>
						</tr>
						<tr>
							<td width="45%" align="right" valign="middle" nowrap="nowrap"><input
								type="button" name="button" id="button" value="提交"
								onclick="verifyCompanyUpdate('submit')"></td>
							<td align="center" valign="middle" nowrap="nowrap"><a
								href="javascript:;" onclick="lock()"
								style="font-size: small; text-decoration: none;">一键锁定</a></td>
							<td width="45%" align="left" valign="middle" nowrap="nowrap"><input
								type="reset" name="reset" id="reset" value="重置"></td>
						</tr>
					</table>
				</form></td>
		</tr>
	</table>
</body>
</html>