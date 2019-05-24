package com.lzf.control.course;

/**
 * 该类只用于前端显示（course.jsp专用）
 */

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.lzf.entity.Company;
import com.lzf.entity.Course;
import com.lzf.service.ICourseService;
import com.lzf.service.implement.CourseService;

/**
 * Servlet implementation class Course
 */
@WebServlet(description = "CoursePrefecture", urlPatterns = { "/coursePrefecture" })
public class CoursePrefecture extends HttpServlet {
	private static final long serialVersionUID = 1L;

	ICourseService courseService = new CourseService(); // 视图层通过接口与业务逻辑层交互

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("GBK");
		response.setContentType("text/html; charset=GBK");
		Course course = new Course("", "", "", "", "", "");
		List<Course> list = courseService.queries(course);
		List<Course> courseList = new ArrayList<Course>();
		for (Course c : list) {
			if (((c.getCourseName()).indexOf("已锁定")) < 0
					&& ((c.getCourseName()).indexOf("无")) < 0) {
				courseList.add(c);
			}
		}
		request.setAttribute("courseList", courseList);
		request.getRequestDispatcher("course.jsp").forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
