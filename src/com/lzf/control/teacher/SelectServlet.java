package com.lzf.control.teacher;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLDecoder;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.lzf.entity.Course;
import com.lzf.entity.Grade;
import com.lzf.entity.Teacher;
import com.lzf.service.ITeacherService;
import com.lzf.service.implement.TeacherService;

/**
 * Servlet implementation class SelectServlet
 */
@WebServlet(description = "SelectServlet", urlPatterns = { "/selectTeacher" })
public class SelectServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	ITeacherService teacherService = new TeacherService(); // ��ͼ��ͨ���ӿ���ҵ���߼��㽻��

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("GBK");
		response.setContentType("text/html; charset=GBK");
		String id = request.getParameter("selectTeacherId");
		Course gradeCourse = new Course("", "", "", "", "", "");
		Grade teacherGrade = new Grade("", gradeCourse, "", "");
		Teacher teacher = new Teacher(id, "", "", "", "", "", "", "", "", "",
				teacherGrade, "");
		Teacher teacherTemp = teacherService.select(teacher);
		request.setAttribute("teacher", teacherTemp);
		request.getRequestDispatcher(
				"teacher/teacherUpdate.jsp?liuzhifeng=" + Math.random())
				.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 * 
	 *      doPost()����ֻ����֤�����֤���Ƿ����ʱ���ã�Ϊ���Ա���ṩ���㣬�������Ա���Ƿ��Ѿ����ڣ�AJAX����
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("GBK");
		response.setContentType("text/html; charset=GBK");
		String id = URLDecoder.decode(request.getParameter("id"), "utf-8");
		Course gradeCourse = new Course("", "", "", "", "", "");
		Grade teacherGrade = new Grade("", gradeCourse, "", "");
		Teacher teacher = new Teacher(id, "", "", "", "", "", "", "", "", "",
				teacherGrade, "");
		Teacher teacherTemp = teacherService.select(teacher);
		PrintWriter out = response.getWriter();
		if ((teacherTemp.getId()) != null) {
			out.print("�ý�ʦ�Ѵ���");
		} else {
			out.print("");
		}
	}
}
