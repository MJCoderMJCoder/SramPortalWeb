<%@ page contentType="text/html; charset=GBK" language="java"
	import="java.sql.*" errorPage=""%>

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
</head>

<body>
	<jsp:include page="top.jsp" />
	<br />
	<table class="banner" width="100%" background="images/bannerBg.jpg">
		<tr>
			<td align="center" valign="middle" nowrap="nowrap">&nbsp;</td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>" target="_self"><span
					style="color: blue; background-color: white;">思软首页</span></a></td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>queriesCompany" target="_self"><span>公司简介</span></a></td>
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
			<td align="center" valign="middle"><table width="90%" border="0"
					cellspacing="10">
					<tr>
						<th align="left" valign="top" nowrap="nowrap" class="headline">课程专区</th>
						<th align="left" valign="top" nowrap="nowrap" class="headline">就业动态</th>
						<th align="left" valign="top" nowrap="nowrap" class="headline">人力招聘</th>
					</tr>
					<tr>
						<td align="left" valign="top"><img class="micro"
							src="images/course.gif" longdesc="课程实训" /><strong>培训分为三个阶段</strong>
							<p>课程实训、项目实训、企业实训，学生在实训项目经理的带领下，通过完成多个企业级项目的分析、设计和开发，系统掌握开发企业级软件项目过程所需的设计规范、开发流程...</p></td>
						<td align="left" valign="top"><img src="images/job.jpg"
							class="micro" longdesc="师资力量" /><strong>就业方向 </strong>
							<p>1. 嵌入式软件开发工程师 2. 嵌入式系统维护工程师 3. J2EE软件开发工程师 4. C/C++软件工程师
								5. UI设计工程师 6. .Net软件工程师 7. 软件测试工程师 8. 系统技术支持工程师...</p></td>
						<td align="left" valign="top"><img src="images/recruit.jpg"
							class="micro" longdesc="人力招聘" /><strong>虚位以待</strong>
							<p>释放每个人的潜能，成就我们引领未来市场、从强到更强的梦想。公司将本着“标准、责任、服务、发展...</p></td>

					</tr>
					<tr>
						<td align="left" valign="top" nowrap="nowrap">信息安全</td>
						<td align="left" valign="top" nowrap="nowrap">李昕 年薪：100000
							职位：JAVA开发工程师</td>
						<td align="left" valign="top" nowrap="nowrap">招聘： 项目经理，工作地点 ：
							北京</td>
					</tr>
					<tr>
						<td align="left" valign="top" nowrap="nowrap">Java/移动互联网</td>
						<td align="left" valign="top" nowrap="nowrap">袁浩 年薪：100000
							职位：JAVA开发工程师</td>
						<td align="left" valign="top" nowrap="nowrap">招聘 ：
							JAVA讲师，工作地点 ：太原</td>
					</tr>
					<tr>
						<td align="left" valign="top" nowrap="nowrap">嵌入式/互联网</td>
						<td align="left" valign="top" nowrap="nowrap">薛珊 年薪：100000
							职位：前端解决方案工程师</td>
						<td align="left" valign="top" nowrap="nowrap">招聘 ： 就业专员，工作地点
							：北京</td>
					</tr>
					<tr>
						<td align="left" valign="top" nowrap="nowrap">UI（前端设计）</td>
						<td align="left" valign="top" nowrap="nowrap">赵鑫 年薪：100000
							职位：JAVA开发工程师</td>
						<td align="left" valign="top" nowrap="nowrap">招聘 ：班主任 ， 工作地点
							： 太原</td>
					</tr>
				</table></td>
		</tr>
		<tr>
			<td align="center" valign="middle"><img
				src="images/separate.png" width="1158" height="3" longdesc="分割线" /></td>
		</tr>
		<tr>
			<td align="center" valign="middle"><table width="90%" border="0"
					cellspacing="10">
					<tr>
						<th align="left" valign="top" class="headline">师资力量</th>
					</tr>
					<tr>
						<td align="center" valign="middle"><img
							src="images/teacher.jpg" width="1158" height="623"
							longdesc="师资力量" /></td>
					</tr>
				</table></td>
		</tr>
	</table>
	<jsp:include page="bottom.jsp" />
</body>
</html>