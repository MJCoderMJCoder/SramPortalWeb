package com.lzf.control.course;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URL;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.lzf.entity.Course;
import com.lzf.service.ICourseService;
import com.lzf.service.implement.CourseService;

/**
 * Servlet implementation class QueriesServlet
 */
@WebServlet(description = "QueriesServlet", urlPatterns = { "/queriesCourse" })
public class QueriesServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	ICourseService courseService = new CourseService(); // ��ͼ��ͨ���ӿ���ҵ���߼��㽻��

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response) doGet�����ڰ༶ѡ��ʱ����
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("GBK");
		response.setContentType("text/html; charset=GBK");
		Course course = new Course("", "", "", "", "", "");
		List<Course> list = courseService.queries(course);
		PrintWriter out = response.getWriter();
		for (Course c : list) {
			out.print("<option value='" + c.getCourseId() + "'>"
					+ c.getCourseName() + "</option>");
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("GBK");
		response.setContentType("text/html; charset=GBK");
		// Ϊ�˽��ajax��ֵ�������������⣨��ҪURLDecoder.decode(s, enc);һ�Σ��൱�ڽ���encode��
		String courseId = URLDecoder.decode(request.getParameter("courseId"),
				"utf-8").replace("-", "");
		String courseName = URLDecoder.decode(
				request.getParameter("courseName"), "utf-8");
		String courseDetail = URLDecoder.decode(
				request.getParameter("courseIntro"), "utf-8");
		String courseSystem = URLDecoder.decode(
				request.getParameter("courseSystem"), "utf-8");
		String jobDirection = URLDecoder.decode(
				request.getParameter("jobDirection"), "utf-8");
		Course course = new Course(courseId, courseName, courseDetail,
				courseSystem, jobDirection, "");
		List<Course> list = courseService.queries(course);
		PrintWriter out = response.getWriter();
		out.print("<tr><th align='center' valign='middle' nowrap='nowrap' scope='col'>�γ�ͼƬ</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>�γ̱��</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>�γ�����</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>�γ���ϵ</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>��ҵ����</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>�γ�����(����)</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>����</th></tr>");
		for (Course c : list) {
			if (!(c.getCourseId().equals("��"))) {
				String deleteUrl = "\"" + request.getScheme() + "://"
						+ request.getServerName() + ":"
						+ request.getServerPort() + request.getContextPath()
						+ "/deleteCourse?deleteCourseId=" + c.getCourseId()
						+ "&deleteCourseImage=" + c.getCourseImage() + "\"";
				String updateUrl = request.getScheme() + "://"
						+ request.getServerName() + ":"
						+ request.getServerPort() + request.getContextPath()
						+ "/selectCourse?selectCourseId=" + c.getCourseId();
				String courseImage = request.getScheme() + "://"
						+ request.getServerName() + ":"
						+ request.getServerPort() + request.getContextPath()
						+ "/courseImages/" + c.getCourseImage()
						+ "?liuzhifeng=" + Math.random();
				out.print("<tr><td align='center' valign='middle' scope='col' nowrap='nowrap'>"
						+ "<img src='"
						+ courseImage
						+ "' width='80' height='40' alt='�γ�ͼƬ'>"
						+ "</td>"
						+ "<td align='center' valign='middle' scope='col' nowrap='nowrap'>"
						+ c.getCourseId()
						+ "</td><td align='center' valign='middle' scope='col' nowrap='nowrap'>"
						+ c.getCourseName()
						+ "</td>"
						+ "<td align='center' valign='middle' scope='col' nowrap='nowrap'>"
						+ c.getCourseSystem()
						+ "</td>"
						+ "<td align='center' valign='middle' scope='col' nowrap='nowrap'>"
						+ c.getJobDirection()
						+ "</td>"
						+ "<td align='center' valign='middle' scope='col' class='queriesCourseIntro'>"
						+ c.getCourseDetail()
						+ "</td>"
						+ "<td align='center' valign='middle' scope='col' nowrap='nowrap'>"
						+ "<input type='button' name='delete' id='delete' value='ɾ��' onclick='deleteCourse("
						+ deleteUrl
						+ ")'>&nbsp;&nbsp;"
						+ "<a href='"
						+ updateUrl
						+ "' target='_self'><input type='button' name='update' id='update' value='�޸�'></a>"
						+ "</td></tr>");
			}
		}
	}
}