package com.lzf.control.manager;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLDecoder;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.lzf.entity.Manager;
import com.lzf.service.IManagerService;
import com.lzf.service.implement.ManagerService;

/**
 * Servlet implementation class SelectServlet
 */
@WebServlet(description = "LoginServlet", urlPatterns = { "/loginManager" })
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	IManagerService managerService = new ManagerService(); // ��ͼ��ͨ���ӿ���ҵ���߼��㽻��

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 * 
	 *      doGet()���������ڰ�ȫ�˳�
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		response.setHeader("Cache-Control", "no-cache"); // HTTP 1.1
		response.setHeader("Pragma", "no-cache"); // HTTP 1.0
		response.setDateHeader("Expires", 0); // ��ֹ������������
		request.getSession().invalidate();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 * 
	 *      doPost()�����ڵ�½
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("GBK");
		response.setContentType("text/html; charset=GBK");
		String managerId = URLDecoder.decode(request.getParameter("managerId"),
				"utf-8");
		String managerPassword = URLDecoder.decode(
				request.getParameter("managerPassword"), "utf-8");
		Manager manager = new Manager("", "", "", "", "", "", "", "",
				managerId, managerPassword, "");
		Manager managerTemp = managerService.login(manager);
		HttpSession session = request.getSession();
		session.setAttribute("manager", managerTemp);
		PrintWriter printWriter = response.getWriter();
		/**
		 * ==�Ƚϵ��������洢�������ڴ��е��׵�ַ
		 * 
		 * equals�Ƚϵ������������ֵ
		 */
		if ((managerTemp.getManagerId()) != null) {
			if (((managerTemp.getManagerId()).equals(managerId))
					&& ((managerTemp.getManagerPassword())
							.equals(managerPassword))) {
				printWriter.print("OK");
			} else {
				printWriter.print("passwordNo"); // password�����벻��ȷ
			}
		} else {
			printWriter.print("idNo"); // �˺Ų���ȷ
		}
	}
}
