package com.lzf.control.company;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLDecoder;
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
 * Servlet implementation class DeleteServlet
 */
@WebServlet(description = "DeleteServlet", urlPatterns = { "/deleteCompany" })
public class DeleteServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	ICompanyService companyService = new CompanyService(); // ��ͼ��ͨ���ӿ���ҵ���߼��㽻��

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		String deleteCompanyImage = request.getParameter("deleteCompanyImage");
		// �õ��ϴ��ļ��ı���Ŀ¼(���ϴ����ļ������WEB-INFĿ¼�£����������ֱ�ӷ��ʣ���֤�ϴ��ļ��İ�ȫ)
		String savePath = this.getServletContext().getRealPath(
				"/companyImages/" + deleteCompanyImage);
		File file = new File(savePath);
		if (file.isFile()) {
			file.delete();
		} // ɾ��ͼƬ

		request.setCharacterEncoding("GBK");
		response.setContentType("text/html; charset=GBK");
		PrintWriter out = response.getWriter();
		String deleteCompanyId = request.getParameter("deleteCompanyId");
		Company deleteCompany = new Company(deleteCompanyId, "", "", "");
		int i = companyService.deleteCompany(deleteCompany);
		if (i == 1) {
			String companyId = URLDecoder.decode(
					request.getParameter("companyId"), "utf-8")
					.replace("-", "");
			String companyName = URLDecoder.decode(
					request.getParameter("companyName"), "utf-8");
			String companyIntro = URLDecoder.decode(
					request.getParameter("companyIntro"), "utf-8");
			Company company = new Company(companyId, companyName, companyIntro,
					"");
			List<Company> list = companyService.queries(company);
			out.print("<tr><th align='center' valign='middle' nowrap='nowrap' scope='col'>��˾���ͼƬ</th>"
					+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>��˾�����</th>"
					+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>��˾������</th>"
					+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>��˾������飨���֣�</th>"
					+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>����</th></tr>");
			for (Company c : list) {
				String deleteUrl = "\"" + request.getScheme() + "://"
						+ request.getServerName() + ":"
						+ request.getServerPort() + request.getContextPath()
						+ "/deleteCompany?deleteCompanyId=" + c.getCompanyId()
						+ "&deleteCompanyImage=" + c.getCompanyImage() + "\"";
				String updateUrl = request.getScheme() + "://"
						+ request.getServerName() + ":"
						+ request.getServerPort() + request.getContextPath()
						+ "/selectCompany?selectCompanyId=" + c.getCompanyId();
				String companyImage = request.getScheme() + "://"
						+ request.getServerName() + ":"
						+ request.getServerPort() + request.getContextPath()
						+ "/companyImages/" + c.getCompanyImage()
						+ "?liuzhifeng=" + Math.random();
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
		} else {
			out.print("<tr><td align='center' valign='middle' scope='col' nowrap='nowrap'>ɾ��ʧ��</td></tr>");
		}
	}

}
