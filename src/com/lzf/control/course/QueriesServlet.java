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

	ICourseService courseService = new CourseService(); // 视图层通过接口与业务逻辑层交互

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response) doGet方法在班级选课时调用
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
		// 为了解决ajax传值的中文乱码问题（需要URLDecoder.decode(s, enc);一次；相当于解码encode）
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
		out.print("<tr><th align='center' valign='middle' nowrap='nowrap' scope='col'>课程图片</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>课程编号</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>课程名称</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>课程体系</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>就业方向</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>课程详情(部分)</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>操作</th></tr>");
		for (Course c : list) {
			if (!(c.getCourseId().equals("无"))) {
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
						+ "' width='80' height='40' alt='课程图片'>"
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
						+ "<input type='button' name='delete' id='delete' value='删除' onclick='deleteCourse("
						+ deleteUrl
						+ ")'>&nbsp;&nbsp;"
						+ "<a href='"
						+ updateUrl
						+ "' target='_self'><input type='button' name='update' id='update' value='修改'></a>"
						+ "</td></tr>");
			}
		}
	}
}
