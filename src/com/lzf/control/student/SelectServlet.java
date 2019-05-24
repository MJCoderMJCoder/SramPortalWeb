package com.lzf.control.student;

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
import com.lzf.entity.Student;
import com.lzf.service.IStudentService;
import com.lzf.service.implement.StudentService;

/**
 * Servlet implementation class SelectServlet
 */
@WebServlet(description = "SelectServlet", urlPatterns = { "/selectStudent" })
public class SelectServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	IStudentService studentService = new StudentService(); // ��ͼ��ͨ���ӿ���ҵ���߼��㽻��

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("GBK");
		response.setContentType("text/html; charset=GBK");

		String id = request.getParameter("selectStudentId");
		Course gradeCourse = new Course("", "", "", "", "", "");
		Grade stuGrade = new Grade("", gradeCourse, "", "");
		Student student = new Student(id, "", "", "", "", "", "", "", "", "",
				stuGrade, "", "", "", "");
		Student studentTemp = studentService.select(student);
		request.setAttribute("student", studentTemp);
		request.getRequestDispatcher(
				"student/studentUpdate.jsp?liuzhifeng=" + Math.random())
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
		Grade stuGrade = new Grade("", gradeCourse, "", "");
		Student student = new Student(id, "", "", "", "", "", "", "", "", "",
				stuGrade, "", "", "", "");
		Student studentTemp = studentService.select(student);
		PrintWriter out = response.getWriter();
		if ((studentTemp.getId()) != null) {
			out.print("��Ա���Ѵ���");
		} else {
			out.print("");
		}
	}
}
