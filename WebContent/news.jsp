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
<script type="text/javascript" language="javascript"
	src="javascript/index.js" charset="GBK"></script>
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
				href="<%=basePath%>queriesCompany" target="_self"><span>��˾���</span></a></td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>queriesNews" target="_self"><span
					style="color: blue; background-color: white;">���Ŷ�̬</span></a></td>
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
	<table width="100%" border="0" cellpadding="10">
		<tr>
			<td align="center" valign="middle" bgcolor="#FFFFFF"><br />
				<table width="90%" cellspacing="10">
					<tr>
						<td colspan="3" rowspan="6" align="left" valign="top"><span
							id="newsBig"><marquee behavior="alternate"
									direction="left" loop="-1" scrollamount="566"
									scrolldelay="1500" onmouseover="this.stop()"
									onmouseout="this.start()" name="newsBig"> <img
									src="images/infoSafety2.jpg" longdesc="��Ϣ��ȫ" /> <img
									src="images/JavaCourse.jpg" longdesc="Java�γ���ѵ" /> <img
									src="images/UIDesign.jpg" longdesc="UI�������" /></marquee> </span>
							<div id="choice">
								<a href="javascript:;" onclick="imgSelector(1)"><span>1</span></a>
								<a href="javascript:;" onclick="imgSelector(2)"><span>2</span></a>
								<a href="javascript:;" onclick="imgSelector(3)"><span>3</span></a>
							</div></td>
						<td width="17%" rowspan="2" align="right" valign="top"><img
							class="newsMicro" src="images/newsTest01.jpg" width="297"
							height="200" longdesc="����ʾ��" /></td>
						<td width="33%" align="left" valign="top" nowrap="nowrap"
							class="newsTitle">�ж�˼��&mdash;&mdash;2015��˼��Ƽ�Ա������</td>
					</tr>
					<tr>
						<td width="33%" align="left" valign="top">7��24�գ�ɽ��˼��Ƽ����޹�˾ȫ��Ա���˳�ǰ����ɽ����2015��ȵ�Ա�����Ρ�
							������̫��ɽ��´�Ĳ�ɽ�ǹ��Ҽ�AAAA�羰�������������ķ羰��&ldquo;���Ϲ¶�&rdquo;����ʷ��ʶ����������εĲ�ɽ���������Ϲ¶��Ĺ���չ������������Ȼ��⡢̽Ѱ����...</td>
					</tr>
					<tr>
						<td rowspan="2" align="right" valign="top"><img
							class="newsMicro" src="images/newsTest02.jpg" width="297"
							height="200" longdesc="����ʾ��" /></td>
						<td width="33%" align="left" valign="top" nowrap="nowrap"
							class="newsTitle">ɽ��˼��μ�̫ԭ�е����ڴ��ռ佨����̸��</td>
					</tr>
					<tr>
						<td width="33%" align="left" valign="top">2015��8��6�գ������Ľֱ�������--�����Ⱦ������ڴ��ռ佨����̸�ᣬʡ��Э����ϯ���ö𣬾���ʡ�ڴ��ռ䷢չ������е��С��ҹ�˾ʦ�ľ���ʦ�μ���̸��
							��̸�������ɽ���ڴ��ռ�ķ�չ�͸��ڴ��ռ����״�������ۣ���һ������ԡ�....</td>
					</tr>
					<tr>
						<td rowspan="2" align="right" valign="top"><img
							src="images/newsTest03.jpg" alt="" width="297" height="200"
							class="newsMicro" longdesc="����ʾ��" /></td>
						<td width="33%" align="left" valign="top" nowrap="nowrap"
							class="newsTitle">����˼������ʦ��ѡ�й������ѧ��߼���Ա</td>
					</tr>
					<tr>
						<td width="33%" align="left" valign="top">2015��7�£��й������ѧ�ᣨCCF���߼���Ա����ίԱ����ݡ�CCF��Ա���������ύ�����CCF�߼���Ա��ѡ�˽�������������ѡ��42λCCF�߼���Ա��˼��Ƽ��ܾ���������ʦ��Ϊ��ѡ�߼���Ա��ѡ֮һ��
							CCF�߼���Ա...</td>
					</tr>
					<tr>
						<td width="13%" rowspan="2" align="left" valign="top"><img
							src="images/H3C.jpg" alt="" width="297" height="200"
							class="newsMicro" longdesc="����ʾ��" /></td>
						<td width="13%" rowspan="2" align="left" valign="top"><img
							src="images/infoSafety.jpg" alt="" width="297" height="200"
							class="newsMicro" longdesc="����ʾ��" /></td>
						<td width="24%" rowspan="2" align="left" valign="top"><img
							src="images/UI.jpg" alt="" width="297" height="200"
							class="newsMicro" longdesc="����ʾ��" /></td>
						<td rowspan="2" align="right" valign="top"><img
							src="images/newsTest04.jpg" alt="" width="297" height="200"
							class="newsMicro" longdesc="����ʾ��" /></td>
						<td width="33%" align="left" valign="top" nowrap="nowrap"
							class="newsTitle">��ӭ��ʡί��������һ��ݰ��˼��Ƽ�����</td>
					</tr>
					<tr>
						<td width="33%" align="left" valign="top">2015��7��22�����磬��ʡί���������һ����������˼��Ƽ��������괴�´�ҵ���ŵȹ���������е��С���˾�ܾ���������ʦ�����������±���ʦ���з��ֹ�˾�ܾ����ŷ���ʦ���ܾ�������ʦ�ľ���ʦ�Ƚ����˽Ӵ�����...</td>
					</tr>
				</table></td>
		</tr>
		<tr>
			<td align="center" valign="middle"><img
				src="images/separate.png" width="1158" height="3" longdesc="�ָ���" /></td>
		</tr>
		<tr>
			<td align="center" valign="middle"><br />
				<table width="90%" border="0">
					<tr>
						<th align="left" valign="bottom" class="headline">�������Ŷ�̬</th>
					</tr>
				</table></td>
		</tr>
		<tr>
			<td align="center" valign="middle" id="articleList"><c:forEach
					var="news" items="${newsList }">
					<table width="90%" border="0" class="article">
						<tr>
							<td rowspan="2" align="left" valign="top" class="microTd"><img
								src="<%=basePath %>newsImages/${news.newsImage }" alt="��˾���ͼƬ"
								class="micro" /></td>
							<td align="left" valign="middle" nowrap="nowrap"
								class="newsTitle">${news.newsTitle }</td>
							<th align="right" valign="middle" nowrap="nowrap"><fmt:parseDate
									pattern="yyyyMMddHHmmss" value="${news.newsId}" var="time" />
								<fmt:formatDate value="${time }" pattern="yyyy-MM-dd" /></th>
						</tr>
						<tr>
							<td colspan="2" valign="top" class="detail">${news.newsDetail }</td>
						</tr>
					</table>
				</c:forEach></td>
		</tr>
	</table>
	<br />
	<jsp:include page="bottom.jsp" />
</body>
</html>