package com.lzf.control.teacher;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLDecoder;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.lzf.entity.Course;
import com.lzf.entity.Grade;
import com.lzf.entity.Teacher;
import com.lzf.service.ITeacherService;
import com.lzf.service.implement.TeacherService;

/**
 * Servlet implementation class SelectServlet
 */
@WebServlet(description = "LoginServlet", urlPatterns = { "/loginTeacher" })
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	ITeacherService teacherService = new TeacherService(); // ��ͼ��ͨ���ӿ���ҵ���߼��㽻��

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
	 *      doPost()���������ڵ�¼
	 * 
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("GBK");
		response.setContentType("text/html; charset=GBK");
		String teacherId = URLDecoder.decode(request.getParameter("teacherId"),
				"utf-8");
		String teacherPassword = URLDecoder.decode(
				request.getParameter("teacherPassword"), "utf-8");
		Course gradeCourse = new Course("", "", "", "", "", "");
		Grade teacherGrade = new Grade("", gradeCourse, "", "");
		Teacher teacher = new Teacher("", "", "", "", "", "", "", "",
				teacherId, teacherPassword, teacherGrade, "");
		Teacher teacherTemp = teacherService.login(teacher);
		HttpSession session = request.getSession();
		session.setAttribute("teacher", teacherTemp);
		PrintWriter printWriter = response.getWriter();
		/**
		 * ==�Ƚϵ��������洢�������ڴ��е��׵�ַ
		 * 
		 * equals�Ƚϵ������������ֵ
		 */
		if ((teacherTemp.getTeacherId()) != null) {
			if (((teacherTemp.getTeacherId()).equals(teacherId))
					&& ((teacherTemp.getTeacherPassword())
							.equals(teacherPassword))) {
				printWriter.print("OK");
			} else {
				printWriter.print("passwordNo"); // password�����벻��ȷ
			}
		} else {
			printWriter.print("idNo"); // �˺Ų���ȷ
		}
	}
}
