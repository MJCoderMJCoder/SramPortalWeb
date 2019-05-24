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
<script type="text/javascript" language="javascript"
	src="javascript/index.js" charset="GBK"></script>
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
				href="<%=basePath%>queriesCompany" target="_self"><span>公司简介</span></a></td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>queriesNews" target="_self"><span
					style="color: blue; background-color: white;">新闻动态</span></a></td>
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
									src="images/infoSafety2.jpg" longdesc="信息安全" /> <img
									src="images/JavaCourse.jpg" longdesc="Java课程培训" /> <img
									src="images/UIDesign.jpg" longdesc="UI界面设计" /></marquee> </span>
							<div id="choice">
								<a href="javascript:;" onclick="imgSelector(1)"><span>1</span></a>
								<a href="javascript:;" onclick="imgSelector(2)"><span>2</span></a>
								<a href="javascript:;" onclick="imgSelector(3)"><span>3</span></a>
							</div></td>
						<td width="17%" rowspan="2" align="right" valign="top"><img
							class="newsMicro" src="images/newsTest01.jpg" width="297"
							height="200" longdesc="新闻示例" /></td>
						<td width="33%" align="left" valign="top" nowrap="nowrap"
							class="newsTitle">感恩思软&mdash;&mdash;2015年思软科技员工旅游</td>
					</tr>
					<tr>
						<td width="33%" align="left" valign="top">7月24日，山西思软科技有限公司全体员工乘车前往藏山进行2015年度的员工旅游。
							坐落在太行山西麓的藏山是国家级AAAA风景区，以其秀丽的风景和&ldquo;赵氏孤儿&rdquo;的历史典故而闻名。本次的藏山旅游以赵氏孤儿的故事展开，以领略自然风光、探寻忠义...</td>
					</tr>
					<tr>
						<td rowspan="2" align="right" valign="top"><img
							class="newsMicro" src="images/newsTest02.jpg" width="297"
							height="200" longdesc="新闻示例" /></td>
						<td width="33%" align="left" valign="top" nowrap="nowrap"
							class="newsTitle">山西思软参加太原市调研众创空间建设座谈会</td>
					</tr>
					<tr>
						<td width="33%" align="left" valign="top">2015年8月6日，在中心街北三号线--创咖啡举行了众创空间建设座谈会，省政协副主席李悦娥，就我省众创空间发展情况进行调研。我公司师文娟老师参加座谈。
							座谈会上针对山西众创空间的发展和各众创空间的现状进行讨论，大家积极发言。....</td>
					</tr>
					<tr>
						<td rowspan="2" align="right" valign="top"><img
							src="images/newsTest03.jpg" alt="" width="297" height="200"
							class="newsMicro" longdesc="新闻示例" /></td>
						<td width="33%" align="left" valign="top" nowrap="nowrap"
							class="newsTitle">恭贺思软赵老师当选中国计算机学会高级会员</td>
					</tr>
					<tr>
						<td width="33%" align="left" valign="top">2015年7月，中国计算机学会（CCF）高级会员评审委员会根据《CCF会员条例》对提交申请的CCF高级会员候选人进行评审，最终评选出42位CCF高级会员。思软科技总经理赵鹏老师成为当选高级会员人选之一。
							CCF高级会员...</td>
					</tr>
					<tr>
						<td width="13%" rowspan="2" align="left" valign="top"><img
							src="images/H3C.jpg" alt="" width="297" height="200"
							class="newsMicro" longdesc="新闻示例" /></td>
						<td width="13%" rowspan="2" align="left" valign="top"><img
							src="images/infoSafety.jpg" alt="" width="297" height="200"
							class="newsMicro" longdesc="新闻示例" /></td>
						<td width="24%" rowspan="2" align="left" valign="top"><img
							src="images/UI.jpg" alt="" width="297" height="200"
							class="newsMicro" longdesc="新闻示例" /></td>
						<td rowspan="2" align="right" valign="top"><img
							src="images/newsTest04.jpg" alt="" width="297" height="200"
							class="newsMicro" longdesc="新闻示例" /></td>
						<td width="33%" align="left" valign="top" nowrap="nowrap"
							class="newsTitle">欢迎团省委赵雁峰书记一行莅临思软科技调研</td>
					</tr>
					<tr>
						<td width="33%" align="left" valign="top">2015年7月22日上午，团省委书记赵雁峰等一行五人来到思软科技，就青年创新创业创优等工作情况进行调研。公司总经理赵鹏老师，常务副总李勇兵老师，研发分公司总经理张帆老师，总经办主任师文娟老师等进行了接待工作...</td>
					</tr>
				</table></td>
		</tr>
		<tr>
			<td align="center" valign="middle"><img
				src="images/separate.png" width="1158" height="3" longdesc="分割线" /></td>
		</tr>
		<tr>
			<td align="center" valign="middle"><br />
				<table width="90%" border="0">
					<tr>
						<th align="left" valign="bottom" class="headline">更多新闻动态</th>
					</tr>
				</table></td>
		</tr>
		<tr>
			<td align="center" valign="middle" id="articleList"><c:forEach
					var="news" items="${newsList }">
					<table width="90%" border="0" class="article">
						<tr>
							<td rowspan="2" align="left" valign="top" class="microTd"><img
								src="<%=basePath %>newsImages/${news.newsImage }" alt="公司简介图片"
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