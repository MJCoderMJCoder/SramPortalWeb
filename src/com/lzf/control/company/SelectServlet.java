package com.lzf.control.company;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.lzf.entity.Company;
import com.lzf.service.ICompanyService;
import com.lzf.service.implement.CompanyService;

/**
 * Servlet implementation class SelectServlet
 */
@WebServlet(description = "SelectServlet", urlPatterns = { "/selectCompany" })
public class SelectServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	ICompanyService companyService = new CompanyService(); // 视图层通过接口与业务逻辑层交互

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("GBK");
		response.setContentType("text/html; charset=GBK");
		String companyId = request.getParameter("selectCompanyId");
		Company company = new Company(companyId, "", "", "");
		Company companyTemp = companyService.select(company);
		request.setAttribute("company", companyTemp);
		request.getRequestDispatcher("company/companyUpdate.jsp?liuzhifeng="+Math.random()).forward(
				request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

}
