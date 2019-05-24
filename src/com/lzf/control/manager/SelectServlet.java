package com.lzf.control.manager;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLDecoder;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.lzf.entity.Manager;
import com.lzf.service.IManagerService;
import com.lzf.service.implement.ManagerService;

/**
 * Servlet implementation class SelectServlet
 */
@WebServlet(description = "SelectServlet", urlPatterns = { "/selectManager" })
public class SelectServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	IManagerService managerService = new ManagerService(); // 视图层通过接口与业务逻辑层交互

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("GBK");
		response.setContentType("text/html; charset=GBK");
		String id = request.getParameter("selectManagerId");
		Manager manager = new Manager(id, "", "", "", "", "", "", "", "", "",
				"");
		Manager managerTemp = managerService.select(manager);
		request.setAttribute("manager", managerTemp);
		request.getRequestDispatcher(
				"manager/managerUpdate.jsp?liuzhifeng=" + Math.random())
				.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 * 
	 *      doPost()方法只在验证该身份证号是否可用时调用（为添加员工提供方便，即测验该员工是否已经存在）AJAX调用
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("GBK");
		response.setContentType("text/html; charset=GBK");
		String id = URLDecoder.decode(request.getParameter("id"), "utf-8");
		Manager manager = new Manager(id, "", "", "", "", "", "", "", "", "",
				"");
		Manager managerTemp = managerService.select(manager);
		PrintWriter out = response.getWriter();
		if ((managerTemp.getId()) != null) {
			out.print("该员工已存在");
		} else {
			out.print("");
		}
	}
}
