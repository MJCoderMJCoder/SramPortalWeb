package com.lzf.control.student;

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
import com.lzf.entity.Student;
import com.lzf.service.IStudentService;
import com.lzf.service.implement.StudentService;

/**
 * Servlet implementation class SelectServlet
 */
@WebServlet(description = "LoginServlet", urlPatterns = { "/loginStudent" })
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	IStudentService studentService = new StudentService(); // ��ͼ��ͨ���ӿ���ҵ���߼��㽻��

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
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
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("GBK");
		response.setContentType("text/html; charset=GBK");
		String stuId = URLDecoder
				.decode(request.getParameter("stuId"), "utf-8");
		String password = URLDecoder.decode(request.getParameter("password"),
				"utf-8");
		Course gradeCourse = new Course("", "", "", "", "", "");
		Grade stuGrade = new Grade("", gradeCourse, "", "");
		Student student = new Student("", "", "", "", "", "", "", "", stuId,
				"", stuGrade, "", "", "", "");
		Student studentTemp = studentService.login(student);
		HttpSession session = request.getSession();
		session.setAttribute("student", studentTemp);
		PrintWriter printWriter = response.getWriter();
		/**
		 * ==�Ƚϵ��������洢�������ڴ��е��׵�ַ
		 * 
		 * equals�Ƚϵ������������ֵ
		 */
		if ((studentTemp.getStuId()) != null) {
			if (((studentTemp.getStuId()).equals(stuId))
					&& ((studentTemp.getStuPassword()).equals(password))) {
				printWriter.print("OK");
			} else {
				printWriter.print("passwordNo"); // password�����벻��ȷ
			}
		} else {
			printWriter.print("stuIdNo"); // �˺Ų���ȷ
		}
	}
}
