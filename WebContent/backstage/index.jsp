<%@ page language="java" contentType="text/html; charset=GBK"
	pageEncoding="GBK"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=GBK">
<link href="index.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="index.js"></script>
<title>˼���Ż���վ</title>
</head>
<body>
	<table width="100%" border="0" cellpadding="70" cellspacing="70">
		<tr>
			<td width="50%" align="center" valign="middle"><form
					name="form1" method="post" action="">
					<table width="100%" border="0" cellpadding="15" cellspacing="15"
						class="formTable">
						<tr>
							<th align="center" valign="middle" nowrap="nowrap">�����¼</th>
						</tr>
						<tr>
							<td align="center" valign="middle" nowrap="nowrap"><label
								for="managerId">�˺ţ� </label><input name="managerId" type="text"
								id="managerId" maxlength="14"> <font color="red"
								id="managerIdHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="center" valign="middle" nowrap="nowrap"><label
								for="managerPassword">���룺 </label><input name="managerPassword"
								type="password" id="managerPassword" maxlength="20"> <font
								color="red" id="managerPasswordHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="center" valign="middle" nowrap="nowrap"><input
								type="button" name="managerSubmit" id="managerSubmit"
								onclick="checkLogin('manager')" value="��¼">&nbsp;&nbsp;&nbsp;&nbsp;
								<input type="reset" name="managerReset" id="managerReset"
								value="����"></td>
						</tr>
					</table>
				</form></td>
			<td width="50%" align="center" valign="middle"><form
					name="form2" method="post" action="">
					<table width="100%" border="0" cellpadding="15" cellspacing="15"
						class="formTable">
						<tr>
							<th align="center" valign="middle" nowrap="nowrap">��ʦ��¼</th>
						</tr>
						<tr>
							<td align="center" valign="middle" nowrap="nowrap"><label
								for="teacherId">�˺ţ� </label><input name="teacherId" type="text"
								id="teacherId" maxlength="14"> <font color="red"
								id="teacherIdHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="center" valign="middle" nowrap="nowrap"><label
								for="teacherPassword">���룺 </label><input name="teacherPassword"
								type="password" id="teacherPassword" maxlength="20"> <font
								color="red" id="teacherPasswordHint" size="1">*</font></td>
						</tr>
						<tr>
							<td align="center" valign="middle" nowrap="nowrap"><input
								type="button" name="teacherSubmit" id="teacherSubmit"
								onclick="checkLogin('teacher')" value="��¼">&nbsp;&nbsp;&nbsp;&nbsp;
								<input type="reset" name="teacherReset" id="teacherReset"
								value="����"></td>
						</tr>
					</table>
				</form></td>
		</tr>
	</table>
	<div id="copy">Copyright &copy; 2015-2016 ɽ��˼��Ƽ����޹�˾��Ȩ���� Inc.All
		Rights Reserved.</div>
</body>
</html>