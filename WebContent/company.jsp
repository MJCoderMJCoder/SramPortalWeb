<%@ page contentType="text/html; charset=GBK" language="java"
	import="java.sql.*" errorPage=""%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=GBK" />
<title>˼���Ż���վ</title>
<link href="CascadingStyleSheets/index.css" rel="stylesheet"
	type="text/css" />

<%--xheditor���� ��ʼ--%>
<script type="text/javascript"
	src="<%=basePath%>xheditor/jquery-1.7.2.min.js"></script>
<script type="text/javascript"
	src="<%=basePath%>xheditor/xheditor-1.2.2.min.js"></script>
<script type="text/javascript"
	src="<%=basePath%>xheditor/xheditor_lang/zh-cn.js"></script>
<%--xheditor���� ����--%>
</head>

<body>
	<jsp:include page="top.jsp" />
	<br />
	<table class="banner" width="100%" background="images/bannerBg.jpg">
		<tr>
			<td align="center" valign="middle" nowrap="nowrap">&nbsp;</td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>" target="_self"><span>˼����ҳ</span></a></td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>queriesCompany" target="_self"><span
					style="color: blue; background-color: white;">��˾���</span></a></td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>queriesNews" target="_self"><span>���Ŷ�̬</span></a></td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>coursePrefecture" target="_self"><span>�γ�ר��</span></a></td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>queriesStudent" target="_self"><span>��ҵ��Ϣ</span></a></td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>queriesTeacher" target="_self"><span>ʦ������</span></a></td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>queriesRecruitment" target="_self"><span>������Ƹ</span></a></td>
			<td align="center" valign="middle" nowrap="nowrap">&nbsp;</td>
		</tr>
	</table>

	<br />
	<table width="100%" border="0" cellpadding="10">
		<tr>
			<td align="center" valign="middle"><table width="90%" border="0"
					cellspacing="10">
					<tr>
						<td width="33%" align="left" valign="top"><img
							class="companyProfileMiddle" src="images/companyProfile.jpg"
							longdesc="��˾���" /></td>
						<td colspan="2" rowspan="2" align="center" valign="top"><img
							src="images/events.png" width="536" height="700" longdesc="��˾���¼�" /></td>
						<td width="30%" rowspan="2" align="left" valign="top"><img
							class="companyProfileBig" src="images/building.jpg"
							longdesc="��˾���" />
							<ul>
								<li>
									<p>
										<strong>ҵ�����</strong>��
									</p>
									<p>1���߶�ʵѵ��</p>
									<p>2�� ����з���</p>
									<p>3�� ��������</p>
									<p>4�� �˲������</p>
									<p>5�� ��������</p>
									<p>6�� ��Ϣ�������밲ȫ���������</p>
								</li>
								<li><strong>�˲Ŷ���</strong>��˼��Ƽ���רְ��ʦ35�������в�ʿ1����˶ʿ�о���9����ѧʿ24�������н�ʦ�߱�&ldquo;˫ʦ����&rdquo;��ӵ�д���ҵ�������飬������ʵ������֪ʶ�ͽϸߵĽ�ѧˮƽ���־��н�ǿרҵʵ�������ͷḻʵ�����顣
								</li>
							</ul></td>
					</tr>
					<tr>
						<td align="left" valign="top"><p>ɽ��˼��Ƽ����޹�˾�����¼��˼��Ƽ���������2010�꣬��˾��ռ�����10070ƽ���ף���ӵ��λ�ڴ���ֵ�300ƽ���׵Ĵ�ҵ��ѵ���ء���˾�ṩʵѵ��λ��2500������ʡ�����Ĵ�ѧ�����ʵѵ���ء�ɽ��ʡ����ί���Ƶ�ʡ��Ψһһ������˲�ʵѵ���ء�ɽ��ʡ���¼�����ҵ���������϶����ڴ��ռ䣬�Լ�������ɽ��ʡί�����&ldquo;ɽ�����괴ҵ��ҵ��ϰ����&rdquo;��</p>
							<p>˼��Ƽ������ű�׼�����Ρ����񡢷�չ�������һ���������ṩ������߶�ʵѵ������з��������ݼ����������������˲��������ҵ��ѵ����֡�O2O�����������������Ϣ�������밲ȫ��������ĸ��¼�����ҵ����˾Ŀǰ���漰����ҵ���и߶�ʵѵ��ʦ����ǲ���ڴ��ռ䡢����з����о��������������������ȡ�</p>
							<p>��˾�ĺ���ҵ��Ϊ������߶�ʵѵ���ص����������˲Ŷ�������������˲����������У�����ѧԱ������ͱ��֣�ͨ�����ˣ������д�ҵ�����ѧԱ�ڴ�ҵ��ѵ���ؽ��д�ҵ�������ṩ��ҵ��ѯ����֡���˾�ѻ�ø��¼�����ҵ��֤��˫����֤��</p>
							<p>˼��Ƽ������й��ص����&mdash;&mdash;�������Ϻ������ݡ����ڡ������������������������ݡ�̫ԭ�ȵ���ȫ����70��ԺУչ��������������Ϊ�ͻ��ṩ�˲������������˲��������ҵ���ֵȷ��񡣹�˾ÿ��ΪIBM���������롢����������˼���¡�����Ͱ͡��й����š����������IT��ҵ����1000��������˲ţ��ǹ��������������У�����Ϊ�����ȫ���Խ�������Ʒ�ơ�</p></td>
					</tr>
				</table></td>
		</tr>
		<tr>
			<td align="center" valign="middle"><img
				src="images/sramSlogan.png" width="1158" height="100"
				longdesc="˼�����" /></td>
		</tr>
		<tr>
			<td align="center" valign="middle"><br />
				<table width="90%" border="0">
					<tr>
						<th align="left" valign="bottom" class="headline">�˽����</th>
					</tr>
				</table></td>
		</tr>
		<tr>
			<td align="center" valign="middle" id="articleList"><c:forEach
					var="company" items="${companyList }">
					<table width="90%" border="0" class="article">
						<tr>
							<td rowspan="2" align="left" valign="top" class="microTd"><img
								src="<%=basePath %>companyImages/${company.companyImage }"
								alt="��˾���ͼƬ" class="micro" /></td>
							<td align="left" valign="middle" nowrap="nowrap"
								class="newsTitle">${company.companyName }</td>
							<th align="right" valign="middle" nowrap="nowrap"><fmt:parseDate
									pattern="yyyyMMddHHmmss" value="${company.companyId}"
									var="time" /> <fmt:formatDate value="${time }"
									pattern="yyyy-MM-dd" /></th>
						</tr>
						<tr>
							<td colspan="2" valign="top" class="detail">${company.companyIntro }</td>
						</tr>
					</table>
				</c:forEach></td>
		</tr>
	</table>
	<br />
	<jsp:include page="bottom.jsp" />
</body>
</html>