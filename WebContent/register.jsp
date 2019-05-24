<%@page import="com.lzf.util.GenerateId"%>
<%@ page language="java" contentType="text/html; charset=GBK"
	pageEncoding="GBK"%>
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
<link href="CascadingStyleSheets/register.css" rel="stylesheet"
	type="text/css" />
<script src="<%=basePath%>javascript/register.js" language="javascript"
	type="text/javascript"></script>
<%-- 日历控件引用开始 --%>
<script src="<%=basePath%>MyDate/WdatePicker.js" language="javascript"
	type="text/javascript"></script>
<%-- 日历控件引用结束 --%>
<title>注册报名</title>
</head>
<body onload="topLogin()">
	<jsp:include page="top.jsp" />
	<!-- 顶部结束 -->
	<br />
	<table width="100%" border="0" cellpadding="10">
		<tr>
			<td align="center" valign="middle"><table width="90%" border="0"
					cellspacing="5" id="circleLine">
					<tr>
						<td align="left" valign="middle" nowrap="nowrap"><div
								class="circle" style="background-color: blue;">1</div>
							<div class="line"></div></td>
						<td align="left" valign="middle" nowrap="nowrap"><div
								class="circle">2</div>
							<div class="line"></div></td>
						<td align="left" valign="middle" nowrap="nowrap"><div
								class="circle">3</div>
							<div class="line"></div></td>
						<td align="left" valign="middle" nowrap="nowrap"><div
								class="circle">&radic;</div></td>
					</tr>
					<tr>
						<td align="left" valign="bottom" nowrap="nowrap" class="process"
							style="color: blue;">登录信息</td>
						<td align="left" valign="bottom" nowrap="nowrap" class="process">身份信息</td>
						<td align="left" valign="bottom" nowrap="nowrap" class="process">就业意向</td>
						<td align="left" valign="bottom" nowrap="nowrap" class="process">&nbsp;&nbsp;完成</td>
					</tr>
				</table></td>
		</tr>
		<tr>
			<td align="center" valign="middle"><form
					action="<%=basePath%>addStudent" method="post"
					enctype="multipart/form-data" name="form1">
					<table width="95%" border="0" cellspacing="15" cellpadding="15"
						id="login">
						<tr>
							<td align="right" valign="middle" nowrap="nowrap"><label
								for="stuId">学员账号：</label> <input name="stuId" type="text"
								id="stuId" maxlength="14" readonly
								value="<%=GenerateId.generateId()%>"></td>
							<td width="170" align="left" valign="middle"><font
								color="red" size="1">*</font></td>
							<td colspan="2" align="right" valign="middle" nowrap="nowrap"><label
								for="stuPassword">学员密码：</label> <input name="stuPassword"
								type="password" id="stuPassword" maxlength="20"
								onblur="verifyStudent('stuPassword')"></td>
							<td width="190" align="left" valign="middle"><font
								color="red" id="stuPasswordHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle" nowrap="nowrap"><label
								for="">确认密码：</label> <input name="verifyPassword"
								type="password" id="verifyPassword"
								onblur="verifyStudent('verifyPassword')" maxlength="20"></td>
							<td align="left" valign="middle"><font color="red"
								id="verifyPasswordHint" size="1">*</font></td>
							<td align="right" valign="middle" nowrap="nowrap"><input
								name="captcha" type="text" id="captcha"
								onblur="verifyStudent('captcha')" size="10" maxlength="4" /></td>
							<td width="90" align="left" valign="middle" nowrap="nowrap"><img
								id="randImage" alt="captcha" name="randImage" src="captcha.jsp"
								width="85" height="25" border="1" onmousedown="getCaptcha()" /></td>
							<td align="left" valign="middle"><font color="red"
								id="captchaHint" size="1">*</font></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td><input type="hidden" id="captchaValue" /></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><input type="button"
								name="button" id="button" value="下一步"
								onclick="verifyStudent('login')"></td>
							<td align="center" valign="middle">&nbsp;</td>
							<td align="center" valign="middle"><input type="button"
								name="button" id="button" value="重置"
								onclick="verifyStudent('loginReset')"></td>
							<td align="center" valign="middle"></td>
							<td align="center" valign="middle">&nbsp;</td>
						</tr>
					</table>
					<table width="95%" border="0" cellspacing="15" cellpadding="15"
						id="identity" style="display: none;">
						<tr>
							<td align="right" valign="middle" nowrap="nowrap"><label
								for="birthday">出生日期：</label> <input type="text" name="birthday"
								id="birthday" onfocus="WdatePicker()" onclick="WdatePicker()"
								onblur="verifyStudent('birthday')"></td>
							<td width="170" align="left" valign="middle" nowrap="nowrap"><font
								color="red" id="birthdayHint" size="1">*</font></td>
							<td align="right" valign="middle" nowrap="nowrap"><label
								for="id">身份证号：</label> <input name="id" type="text" id="id"
								maxlength="18" onfocus="idBirthday()"
								onblur="verifyStudent('id')"><input type="hidden"
								id="idExist" /></td>
							<td width="190" align="left" valign="middle"><font
								color="red" id="idHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle" nowrap="nowrap"><label
								for="name">学员姓名：</label> <input name="name" type="text"
								id="name" maxlength="17" onblur="verifyStudent('name')"></td>
							<td align="left" valign="middle"><font color="red"
								id="nameHint" size="1">*</font></td>
							<td align="right" valign="middle" nowrap="nowrap">
								<table width="230">
									<tr>
										<td width="99" align="left" valign="middle">学员性别：</td>
										<td width="87" align="left" valign="middle"><label>
												<input name="gender" type="radio" id="gender_0" value="男">
												男
										</label></td>
										<td width="76" align="left" valign="middle"><label>
												<input type="radio" name="gender" value="女" id="gender_1"
												checked="CHECKED"> 女
										</label></td>
									</tr>
								</table>
							</td>
							<td align="left" valign="middle"><font color="red"
								id="genderHint" size="1">*</font></td>
						</tr>

						<tr>
							<td align="right" valign="middle" nowrap="nowrap"><label
								for="phone">联系方式：</label> <input name="phone" type="text"
								id="phone" maxlength="11" onblur="verifyStudent('phone')"></td>
							<td align="left" valign="middle"><font color="red"
								id="phoneHint" size="1">*</font></td>
							<td align="right" valign="middle" nowrap="nowrap"><label
								for="address">联系地址：</label> <input name="address" type="text"
								id="address" maxlength="40" onblur="verifyStudent('address')"></td>
							<td align="left" valign="middle"><font color="red"
								id="addressHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle" nowrap="nowrap"><label
								for="school">毕业院校：</label> <input name="school" type="text"
								id="school" maxlength="40" onblur="verifyStudent('school')"></td>
							<td align="left" valign="middle"><font color="red"
								id="schoolHint" size="1">*</font></td>
							<td align="right" valign="middle" nowrap="nowrap"><label
								for="studentImage">照片：</label> <input name="studentImage"
								type="file" id="studentImage"
								onblur="verifyStudent('studentImage')"></td>
							<td align="left" valign="middle"><font color="red"
								id="studentImageHint" size="1">*</font></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><input type="button"
								name="button" id="button" value="下一步"
								onclick="verifyStudent('identity')"></td>
							<td align="center" valign="middle">&nbsp;</td>
							<td align="center" valign="middle"><input type="button"
								name="button" id="button" value="重置"
								onclick="verifyStudent('identityReset')"></td>
							<td align="center" valign="middle">&nbsp;</td>
						</tr>
					</table>
					<table width="95%" border="0" cellspacing="15" cellpadding="15"
						id="job" style="display: none;">
						<tr>
							<td align="right" valign="middle"><label for="stuJobCompany">理想公司：</label>
								<input name="stuJobCompany" type="text" id="stuJobCompany"
								maxlength="20"></td>
							<td width="170" align="left" valign="middle"><font
								color="red" id="stuJobCompanyHint" size="1">*</font></td>
							<td align="right" valign="middle"><label for="stuJobAddress">工作地点：</label>
								<input name="stuJobAddress" type="text" id="stuJobAddress"
								maxlength="40"></td>
							<td width="190" align="left" valign="middle"><font
								color="red" id="stuJobAddressHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><label for="stuJobPay">渴望年薪：</label>
								<input name="stuJobPay" type="text" id="stuJobPay"
								onblur="verifyStudent('stuJobPay')" maxlength="7"></td>
							<td align="left" valign="middle"><font color="red"
								id="stuJobPayHint" size="1">*</font></td>
							<td align="right" valign="middle"><label for="stuJobTime">就业时间：</label>
								<input type="text" name="stuJobTime" id="stuJobTime"
								onfocus="WdatePicker()" onclick="WdatePicker()"></td>
							<td align="left" valign="middle"><font color="red"
								id="stuJobTimeHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="center" valign="middle" colspan="4"><font
								color="gray" size="1">温馨提示：请认真填写就业意向的相关信息，
									管理员将会根据以上信息为你提供最佳、最优且最适合的培训课程。</font></td>
						</tr>
						<tr>
							<td align="right" valign="middle"><input type="button"
								name="buttonSubmit" id="buttonSubmit" value="注册报名"
								onclick="verifyStudent('job')"></td>
							<td align="center" valign="middle">&nbsp;</td>
							<td align="center" valign="middle"><input type="button"
								name="button" id="button" value="重置"
								onclick="verifyStudent('jobReset')"></td>
							<td align="center" valign="middle">&nbsp;</td>
						</tr>
					</table>
					<table width="95%" border="0" cellspacing="15" cellpadding="15"
						id="complete" style="display: none;">
						<tr>
							<td align="center" valign="middle"><img
								src="images/registerSuccess.png" height="444"></td>
						</tr>
						<tr>
							<td align="center" valign="middle"><table>
									<tr>
										<td id="olLi">温馨提示：
											<ol>
												<li>报名成功后请耐心等待管理员审核，并为你合理分配相应的班级培训课程。如有问题请及时与思软联系。</li>
												<li>在此期间你可能接收到思软的电话确认，请保持手机通讯畅通。</li>
											</ol>
										</td>
									</tr>
								</table></td>
						</tr>
					</table>
				</form></td>
		</tr>
	</table>
	<br />
	<!-- 底部开始 -->
	<jsp:include page="bottom.jsp" />
</body>
</html>