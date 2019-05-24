package com.lzf.control.course;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLDecoder;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.lzf.entity.Course;
import com.lzf.service.ICourseService;
import com.lzf.service.implement.CourseService;

/**
 * Servlet implementation class SelectServlet
 */
@WebServlet(description = "SelectServlet", urlPatterns = { "/selectCourse" })
public class SelectServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	ICourseService courseService = new CourseService(); // ��ͼ��ͨ���ӿ���ҵ���߼��㽻��

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("GBK");
		response.setContentType("text/html; charset=GBK");
		String courseId = new String(request.getParameter("selectCourseId")
				.getBytes("iso8859-1"), "GBK");
		Course course = new Course(courseId, "", "", "", "", "");
		Course courseTemp = courseService.select(course);
		request.setAttribute("course", courseTemp);
		request.getRequestDispatcher(
				"course/courseUpdate.jsp?liuzhifeng=" + Math.random()).forward(
				request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response) doPost()����ֻ�ڰ༶ѡ��ʱ���ã�Ϊ�༶ѡ���ṩ���㣬��Ϊ���ṩ������ѡ�γ̵����飩
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("GBK");
		response.setContentType("text/html; charset=GBK");
		String courseId = URLDecoder.decode(request.getParameter("courseId"),
				"utf-8");
		System.out.println(courseId);
		Course course = new Course(courseId, "", "", "", "", "");
		Course courseTemp = courseService.select(course);
		String urlImage = request.getScheme() + "://" + request.getServerName()
				+ ":" + request.getServerPort() + request.getContextPath()
				+ "/courseImages/" + courseTemp.getCourseImage()
				+ "?liuzhifeng=" + Math.random();
		PrintWriter out = response.getWriter();
		out.print("<table width='100%' border='0'><tr><td align='left' valign='middle'></td>"
				+ "<td align='right' valign='middle' id='closeGradeDetail' onclick='hideCourse()'>�ر�"
				+ "&nbsp;</td></tr><tr><td align='left' valign='middle'>�γ����ƣ�"
				+ courseTemp.getCourseName()
				+ "</td><td rowspan='3' align='right' valign='middle'><img src='"
				+ urlImage
				+ "' width='163' height='88' alt='�γ�ͼƬ'></td> </tr><tr><td align='left' valign='middle'>�γ���ϵ��"
				+ courseTemp.getCourseSystem()
				+ "</td></tr><tr><td align='left' valign='middle'>��ҵ����"
				+ courseTemp.getJobDirection()
				+ "</td></tr><tr><td colspan='2' align='left' valign='middle'><hr>"
				+ courseTemp.getCourseDetail() + "</td></tr></table>");

	}
}
