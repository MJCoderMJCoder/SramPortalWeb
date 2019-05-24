package com.lzf.control.manager;

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

import com.lzf.entity.Manager;
import com.lzf.service.IManagerService;
import com.lzf.service.implement.ManagerService;

/**
 * Servlet implementation class DeleteServlet
 */
@WebServlet(description = "DeleteServlet", urlPatterns = { "/deleteManager" })
public class DeleteServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	IManagerService managerService = new ManagerService(); // 视图层通过接口与业务逻辑层交互

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
		String deleteManagerImage = request.getParameter("deleteManagerImage");

		// 得到上传文件的保存目录(将上传的文件存放于WEB-INF目录下，不允许外界直接访问，保证上传文件的安全)
		String savePath = this.getServletContext().getRealPath(
				"/managerImages/" + deleteManagerImage);
		File file = new File(savePath);
		if (file.isFile()) {
			file.delete();
		} // 删除图片

		request.setCharacterEncoding("GBK");
		response.setContentType("text/html; charset=GBK");
		PrintWriter out = response.getWriter();
		String deleteManagerId = request.getParameter("deleteManagerId");
		Manager deleteManager = new Manager(deleteManagerId, "", "", "", "",
				"", "", "", "", "", "");
		int i = managerService.deleteManager(deleteManager);
		if (i == 1) {
			String managerId = URLDecoder.decode(
					request.getParameter("managerId"), "utf-8")
					.replace("-", "");
			String name = URLDecoder.decode(request.getParameter("name"),
					"utf-8");
			String managerPosition = URLDecoder.decode(
					request.getParameter("managerPosition"), "utf-8");
			String school = URLDecoder.decode(request.getParameter("school"),
					"utf-8");
			String address = URLDecoder.decode(request.getParameter("address"),
					"utf-8");
			String phone = URLDecoder.decode(request.getParameter("phone"),
					"utf-8");
			String birthday = URLDecoder.decode(
					request.getParameter("birthday"), "utf-8").replace("-", "");
			String gender = URLDecoder.decode(request.getParameter("gender"),
					"utf-8");
			String id = URLDecoder.decode(request.getParameter("id"), "utf-8");
			Manager manager = new Manager(id, name, gender, birthday, phone,
					address, school, "", managerId, "", managerPosition);
			List<Manager> list = managerService.queries(manager);
			out.print("<tr><th align='center' valign='middle' nowrap='nowrap' scope='col'>员工照片</th>"
					+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>员工账号</th>"
					+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>员工职称</th>"
					+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>员工姓名</th>"
					+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>联系方式</th>"
					+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>毕业院校</th>"
					+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>操作</th></tr>");
			for (Manager c : list) {
				if ((!(c.getManagerId().equals("liuzhifeng")))
						&& (!(c.getManagerId().equals(((Manager) request
								.getSession().getAttribute("manager"))
								.getManagerId())))) {
					String deleteUrl = "\"" + request.getScheme() + "://"
							+ request.getServerName() + ":"
							+ request.getServerPort()
							+ request.getContextPath()
							+ "/deleteManager?deleteManagerId=" + c.getId()
							+ "&deleteManagerImage=" + c.getImage() + "\"";
					String updateUrl = request.getScheme() + "://"
							+ request.getServerName() + ":"
							+ request.getServerPort()
							+ request.getContextPath()
							+ "/selectManager?selectManagerId=" + c.getId();
					String managerImage = request.getScheme() + "://"
							+ request.getServerName() + ":"
							+ request.getServerPort()
							+ request.getContextPath() + "/managerImages/"
							+ c.getImage() + "?liuzhifeng=" + Math.random();
					out.print("<tr><td align='center' valign='middle' scope='col' nowrap='nowrap'>"
							+ "<img src='"
							+ managerImage
							+ "' width='80' height='40' alt='员工照片'>"
							+ "</td>"
							+ "<td align='center' valign='middle' scope='col' nowrap='nowrap'>"
							+ c.getManagerId()
							+ "</td><td align='center' valign='middle' scope='col' nowrap='nowrap'>"
							+ c.getManagerPosition()
							+ "</td>"
							+ "<td align='center' valign='middle' scope='col' nowrap='nowrap'>"
							+ c.getName()
							+ "</td>"
							+ "<td align='center' valign='middle' scope='col' nowrap='nowrap'>"
							+ c.getPhone()
							+ "</td>"
							+ "<td align='center' valign='middle' scope='col' nowrap='nowrap'>"
							+ c.getSchool()
							+ "</td>"
							+ "<td align='center' valign='middle' scope='col' nowrap='nowrap'>"
							+ "<input type='button' name='delete' id='delete' value='删除' onclick='deleteManager("
							+ deleteUrl
							+ ")'>&nbsp;&nbsp;"
							+ "<a href='"
							+ updateUrl
							+ "' target='_self'><input type='button' name='update' id='update' value='修改'></a>"
							+ "</td></tr>");
				}
			}
		} else {
			out.print("<tr><td align='center' valign='middle' scope='col' nowrap='nowrap'>删除失败</td></tr>");
		}
	}

}
