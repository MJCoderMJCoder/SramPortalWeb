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
<title>思软门户网站</title>
<link href="CascadingStyleSheets/index.css" rel="stylesheet"
	type="text/css" />

<%--xheditor引用 开始--%>
<script type="text/javascript"
	src="<%=basePath%>xheditor/jquery-1.7.2.min.js"></script>
<script type="text/javascript"
	src="<%=basePath%>xheditor/xheditor-1.2.2.min.js"></script>
<script type="text/javascript"
	src="<%=basePath%>xheditor/xheditor_lang/zh-cn.js"></script>
<%--xheditor引用 结束--%>
</head>

<body>
	<jsp:include page="top.jsp" />
	<br />
	<table class="banner" width="100%" background="images/bannerBg.jpg">
		<tr>
			<td align="center" valign="middle" nowrap="nowrap">&nbsp;</td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>" target="_self"><span>思软首页</span></a></td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>queriesCompany" target="_self"><span
					style="color: blue; background-color: white;">公司简介</span></a></td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>queriesNews" target="_self"><span>新闻动态</span></a></td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>coursePrefecture" target="_self"><span>课程专区</span></a></td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>queriesStudent" target="_self"><span>就业信息</span></a></td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>queriesTeacher" target="_self"><span>师资力量</span></a></td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>queriesRecruitment" target="_self"><span>人力招聘</span></a></td>
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
							longdesc="公司简介" /></td>
						<td colspan="2" rowspan="2" align="center" valign="top"><img
							src="images/events.png" width="536" height="700" longdesc="公司大事记" /></td>
						<td width="30%" rowspan="2" align="left" valign="top"><img
							class="companyProfileBig" src="images/building.jpg"
							longdesc="公司简介" />
							<ul>
								<li>
									<p>
										<strong>业务介绍</strong>：
									</p>
									<p>1、高端实训：</p>
									<p>2、 软件研发：</p>
									<p>3、 电子商务：</p>
									<p>4、 人才外包：</p>
									<p>5、 技术服务：</p>
									<p>6、 信息化建设与安全解决方案：</p>
								</li>
								<li><strong>人才队伍</strong>：思软科技有专职教师35名，其中博士1名，硕士研究生9名，学士24名。所有教师具备&ldquo;双师素质&rdquo;，拥有大企业工作经验，既有扎实的理论知识和较高的教学水平，又具有较强专业实践能力和丰富实践经验。
								</li>
							</ul></td>
					</tr>
					<tr>
						<td align="left" valign="top"><p>山西思软科技有限公司（以下简称思软科技）成立于2010年，公司总占地面积10070平方米，并拥有位于创意街的300平方米的创业培训基地。公司提供实训工位近2500个，是省内最大的大学生软件实训基地、山西省经信委挂牌的省内唯一一家软件人才实训基地、山西省高新技术企业、高新区认定的众创空间，以及共青团山西省委授予的&ldquo;山西青年创业就业见习基地&rdquo;。</p>
							<p>思软科技秉承着标准、责任、服务、发展的理念，是一家致力于提供计算机高端实训、软件研发、大数据技术服务、软件外包、人才外包、创业培训与扶持、O2O教育、电子商务机信息化建设与安全解决方案的高新技术企业。公司目前所涉及到的业务有高端实训、师资派遣、众创空间、软件研发、研究生联合培养、会务服务等。</p>
							<p>公司的核心业务为计算机高端实训，重点服务于软件人才队伍的培养，在人才培养过程中，根据学员的意向和表现，通过考核，对于有创业意向的学员在创业培训基地进行创业辅导并提供创业咨询与扶持。公司已获得高新技术企业认证、双软认证。</p>
							<p>思软科技已在中国重点城市&mdash;&mdash;北京、上海、广州、深圳、西安、大连、哈尔滨、苏州、太原等地与全国近70所院校展开合作，致力于为客户提供人才培养方案、人才输出、创业扶持等服务。公司每年为IBM、神州数码、北大方正、文思创新、阿里巴巴、中国电信、东华软件等IT企业培养1000多名软件人才，是国内真正意义的以校企合作为导向的全国性教育服务品牌。</p></td>
					</tr>
				</table></td>
		</tr>
		<tr>
			<td align="center" valign="middle"><img
				src="images/sramSlogan.png" width="1158" height="100"
				longdesc="思软标语" /></td>
		</tr>
		<tr>
			<td align="center" valign="middle"><br />
				<table width="90%" border="0">
					<tr>
						<th align="left" valign="bottom" class="headline">了解更多</th>
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
								alt="公司简介图片" class="micro" /></td>
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