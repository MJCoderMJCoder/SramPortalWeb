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
<title>ע�ᱨ��</title>
</head>
<body onload="topLogin()">
	<jsp:include page="top.jsp" />
	<!-- �������� -->
	<br />
	<table width="100%" border="0" cellpadding="10">
		<tr>
			<td align="center" valign="middle"><table width="90%" border="0"
					cellspacing="5" id="circleLine">
					<tr>
						<td align="left" valign="middle" nowrap="nowrap"><div
								class="circle" style="background-color: blue;">1</div>
							<div class="line" style="background-color: blue;"></div></td>
						<td align="left" valign="middle" nowrap="nowrap"><div
								class="circle" style="background-color: blue;">2</div>
							<div class="line" style="background-color: blue;"></div></td>
						<td align="left" valign="middle" nowrap="nowrap"><div
								class="circle" style="background-color: blue;">3</div>
							<div class="line" style="background-color: blue;"></div></td>
						<td align="left" valign="middle" nowrap="nowrap"><div
								class="circle" style="background-color: blue;">&radic;</div></td>
					</tr>
					<tr>
						<td align="left" valign="bottom" nowrap="nowrap" class="process"
							style="color: blue;">��¼��Ϣ</td>
						<td align="left" valign="bottom" nowrap="nowrap" class="process"
							style="color: blue;">�����Ϣ</td>
						<td align="left" valign="bottom" nowrap="nowrap" class="process"
							style="color: blue;">��ҵ����</td>
						<td align="left" valign="bottom" nowrap="nowrap" class="process"
							style="color: blue;">&nbsp;&nbsp;���</td>
					</tr>
				</table></td>
		</tr>
		<tr>
			<td align="center" valign="middle">
				<table width="95%" border="0" cellspacing="15" cellpadding="15"
					id="complete">
					<tr>
						<td align="center" valign="middle"><img
							src="images/registerSuccess.png" height="444"
							onclick="returnHome('<%=basePath%>')"></td>
					</tr>
					<tr>
						<td align="center" valign="middle"><table>
								<tr>
									<td id="olLi">��ܰ��ʾ��
										<ol>
											<li>�����ɹ��������ĵȴ�����Ա��ˣ���Ϊ����������Ӧ�İ༶��ѵ�γ̡����������뼰ʱ��˼����ϵ��</li>
											<li>�ڴ��ڼ�����ܽ��յ�˼��ĵ绰ȷ�ϣ��뱣���ֻ�ͨѶ��ͨ��</li>
										</ol>
									</td>
								</tr>
							</table></td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<br />
	<!-- �ײ���ʼ -->
	<jsp:include page="bottom.jsp" />
</body>
</html>