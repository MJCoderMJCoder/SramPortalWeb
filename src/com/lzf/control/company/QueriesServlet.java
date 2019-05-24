package com.lzf.control.company;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URL;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.lzf.entity.Company;
import com.lzf.service.ICompanyService;
import com.lzf.service.implement.CompanyService;

/**
 * Servlet implementation class QueriesServlet
 */
@WebServlet(description = "QueriesServlet", urlPatterns = { "/queriesCompany" })
public class QueriesServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	ICompanyService companyService = new CompanyService(); // ��ͼ��ͨ���ӿ���ҵ���߼��㽻��

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 * 
	 *      doGet����ֻ����ǰ����ʾ��company.jspר�ã�
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("GBK");
		response.setContentType("text/html; charset=GBK");
		Company company = new Company("", "", "", "");
		List<Company> list = companyService.queries(company);
		List<Company> companyList = new ArrayList<Company>();
		for (Company c : list) {
			if (((c.getCompanyName()).indexOf("������")) < 0) {
				companyList.add(c);
			}
		}
		request.setAttribute("companyList", companyList);
		request.getRequestDispatcher("company.jsp").forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("GBK");
		response.setContentType("text/html; charset=GBK");
		// Ϊ�˽��ajax��ֵ�������������⣨��ҪURLDecoder.decode(s, enc);һ�Σ��൱�ڽ���encode��
		String companyId = URLDecoder.decode(request.getParameter("companyId"),
				"utf-8").replace("-", "");
		String companyName = URLDecoder.decode(
				request.getParameter("companyName"), "utf-8");
		String companyIntro = URLDecoder.decode(
				request.getParameter("companyIntro"), "utf-8");
		Company company = new Company(companyId, companyName, companyIntro, "");
		List<Company> list = companyService.queries(company);
		PrintWriter out = response.getWriter();
		out.print("<tr><th align='center' valign='middle' nowrap='nowrap' scope='col'>��˾���ͼƬ</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>��˾�����</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>��˾������</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>��˾������飨���֣�</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>����</th></tr>");
		for (Company c : list) {
			String deleteUrl = "\"" + request.getScheme() + "://"
					+ request.getServerName() + ":" + request.getServerPort()
					+ request.getContextPath()
					+ "/deleteCompany?deleteCompanyId=" + c.getCompanyId()
					+ "&deleteCompanyImage=" + c.getCompanyImage() + "\"";
			String updateUrl = request.getScheme() + "://"
					+ request.getServerName() + ":" + request.getServerPort()
					+ request.getContextPath()
					+ "/selectCompany?selectCompanyId=" + c.getCompanyId();
			String companyImage = request.getScheme() + "://"
					+ request.getServerName() + ":" + request.getServerPort()
					+ request.getContextPath() + "/companyImages/"
					+ c.getCompanyImage() + "?liuzhifeng=" + Math.random();
			out.print("<tr><td align='center' valign='middle' scope='col' nowrap='nowrap'>"
					+ "<img src='"
					+ companyImage
					+ "' width='80' height='40' alt='��˾���ͼƬ'>"
					+ "</td>"
					+ "<td align='center' valign='middle' scope='col' nowrap='nowrap'>"
					+ c.getCompanyId()
					+ "</td><td align='center' valign='middle' scope='col' nowrap='nowrap'>"
					+ c.getCompanyName()
					+ "</td>"
					+ "<td align='center' valign='middle' scope='col' class='queriesCompanyIntro'>"
					+ c.getCompanyIntro()
					+ "</td>"
					+ "<td align='center' valign='middle' scope='col' nowrap='nowrap'>"
					+ "<input type='button' name='delete' id='delete' value='ɾ��' onclick='deleteCompany("
					+ deleteUrl
					+ ")'>&nbsp;&nbsp;"
					+ "<a href='"
					+ updateUrl
					+ "' target='_self'><input type='button' name='update' id='update' value='�޸�'></a>"
					+ "</td></tr>");
		}
	}
}
