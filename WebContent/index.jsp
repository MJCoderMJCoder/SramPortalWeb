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
<title>˼���Ż���վ</title>
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
					style="color: blue; background-color: white;">˼����ҳ</span></a></td>
			<td align="center" valign="middle" nowrap="nowrap"><a
				href="<%=basePath%>queriesCompany" target="_self"><span>��˾���</span></a></td>
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
			<td align="center" valign="middle"><table width="90%" border="0"
					cellspacing="10">
					<tr>
						<th align="left" valign="top" nowrap="nowrap" class="headline">�γ�ר��</th>
						<th align="left" valign="top" nowrap="nowrap" class="headline">��ҵ��̬</th>
						<th align="left" valign="top" nowrap="nowrap" class="headline">������Ƹ</th>
					</tr>
					<tr>
						<td align="left" valign="top"><img class="micro"
							src="images/course.gif" longdesc="�γ�ʵѵ" /><strong>��ѵ��Ϊ�����׶�</strong>
							<p>�γ�ʵѵ����Ŀʵѵ����ҵʵѵ��ѧ����ʵѵ��Ŀ����Ĵ����£�ͨ����ɶ����ҵ����Ŀ�ķ�������ƺͿ�����ϵͳ���տ�����ҵ�������Ŀ�����������ƹ淶����������...</p></td>
						<td align="left" valign="top"><img src="images/job.jpg"
							class="micro" longdesc="ʦ������" /><strong>��ҵ���� </strong>
							<p>1. Ƕ��ʽ�����������ʦ 2. Ƕ��ʽϵͳά������ʦ 3. J2EE�����������ʦ 4. C/C++�������ʦ
								5. UI��ƹ���ʦ 6. .Net�������ʦ 7. ������Թ���ʦ 8. ϵͳ����֧�ֹ���ʦ...</p></td>
						<td align="left" valign="top"><img src="images/recruit.jpg"
							class="micro" longdesc="������Ƹ" /><strong>��λ�Դ�</strong>
							<p>�ͷ�ÿ���˵�Ǳ�ܣ��ɾ���������δ���г�����ǿ����ǿ�����롣��˾�����š���׼�����Ρ����񡢷�չ...</p></td>

					</tr>
					<tr>
						<td align="left" valign="top" nowrap="nowrap">��Ϣ��ȫ</td>
						<td align="left" valign="top" nowrap="nowrap">��� ��н��100000
							ְλ��JAVA��������ʦ</td>
						<td align="left" valign="top" nowrap="nowrap">��Ƹ�� ��Ŀ���������ص� ��
							����</td>
					</tr>
					<tr>
						<td align="left" valign="top" nowrap="nowrap">Java/�ƶ�������</td>
						<td align="left" valign="top" nowrap="nowrap">Ԭ�� ��н��100000
							ְλ��JAVA��������ʦ</td>
						<td align="left" valign="top" nowrap="nowrap">��Ƹ ��
							JAVA��ʦ�������ص� ��̫ԭ</td>
					</tr>
					<tr>
						<td align="left" valign="top" nowrap="nowrap">Ƕ��ʽ/������</td>
						<td align="left" valign="top" nowrap="nowrap">Ѧɺ ��н��100000
							ְλ��ǰ�˽����������ʦ</td>
						<td align="left" valign="top" nowrap="nowrap">��Ƹ �� ��ҵרԱ�������ص�
							������</td>
					</tr>
					<tr>
						<td align="left" valign="top" nowrap="nowrap">UI��ǰ����ƣ�</td>
						<td align="left" valign="top" nowrap="nowrap">���� ��н��100000
							ְλ��JAVA��������ʦ</td>
						<td align="left" valign="top" nowrap="nowrap">��Ƹ �������� �� �����ص�
							�� ̫ԭ</td>
					</tr>
				</table></td>
		</tr>
		<tr>
			<td align="center" valign="middle"><img
				src="images/separate.png" width="1158" height="3" longdesc="�ָ���" /></td>
		</tr>
		<tr>
			<td align="center" valign="middle"><table width="90%" border="0"
					cellspacing="10">
					<tr>
						<th align="left" valign="top" class="headline">ʦ������</th>
					</tr>
					<tr>
						<td align="center" valign="middle"><img
							src="images/teacher.jpg" width="1158" height="623"
							longdesc="ʦ������" /></td>
					</tr>
				</table></td>
		</tr>
	</table>
	<jsp:include page="bottom.jsp" />
</body>
</html>