package com.lzf.control.grade;

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
import com.lzf.entity.Grade;
import com.lzf.service.IGradeService;
import com.lzf.service.implement.GradeService;

/**
 * Servlet implementation class QueriesServlet
 */
@WebServlet(description = "QueriesServlet", urlPatterns = { "/queriesGrade" })
public class QueriesServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	IGradeService gradeService = new GradeService(); // 视图层通过接口与业务逻辑层交互

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response) doGet方法在学生或是教师选班级时调用
	 * 
	 *      暂时性的预测方案（还未进行具体测试的编程实现），所以等待实现ing
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("GBK");
		response.setContentType("text/html; charset=GBK");
		Course course = new Course("", "", "", "", "", "");
		Grade grade = new Grade("", course, "", "");
		List<Grade> list = gradeService.queries(grade);
		PrintWriter out = response.getWriter();
		for (Grade c : list) {
			out.print("<option value='" + c.getGradeId() + "'>"
					+ c.getGradeName() + "</option>");
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
		String gradeId = URLDecoder.decode(request.getParameter("gradeId"),
				"utf-8").replace("-", "");
		String gradeName = URLDecoder.decode(request.getParameter("gradeName"),
				"utf-8");
		String gradeCount = URLDecoder.decode(
				request.getParameter("gradeCount"), "utf-8");
		String courseName = URLDecoder.decode(
				request.getParameter("gradeCourseName"), "utf-8"); // 班级课程名称
		String courseSystem = URLDecoder.decode(
				request.getParameter("gradeCourseSystem"), "utf-8"); // 班级课程体系
		String jobDirection = URLDecoder.decode(
				request.getParameter("gradeCourseJob"), "utf-8"); // 班级课程就业方向
		String courseDetail = URLDecoder.decode(
				request.getParameter("gradeCourseDetail"), "utf-8"); // 班级课程详情
		Course gradeCourse = new Course("", courseName, courseDetail,
				courseSystem, jobDirection, ""); // 班级课程
		Grade grade = new Grade(gradeId, gradeCourse, gradeName, gradeCount);
		List<Grade> list = gradeService.queries(grade);
		PrintWriter out = response.getWriter();
		out.print("<tr><th align='center' valign='middle' nowrap='nowrap' scope='col'>课程图片</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>班级编号</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>班级名称</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>班级人数</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>班级课程</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>就业方向</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>操作</th></tr>");
		for (Grade c : list) {
			if (!(c.getGradeId().equals("无"))) {

				String deleteUrl = "\"" + request.getScheme() + "://"
						+ request.getServerName() + ":"
						+ request.getServerPort() + request.getContextPath()
						+ "/deleteGrade?deleteGradeId=" + c.getGradeId() + "\"";
				String updateUrl = request.getScheme() + "://"
						+ request.getServerName() + ":"
						+ request.getServerPort() + request.getContextPath()
						+ "/selectGrade?selectGradeId=" + c.getGradeId();
				String gradeCourseImage = request.getScheme() + "://"
						+ request.getServerName() + ":"
						+ request.getServerPort() + request.getContextPath()
						+ "/courseImages/"
						+ c.getGradeCourse().getCourseImage() + "?liuzhifeng="
						+ Math.random();
				out.print("<tr><td align='center' valign='middle' scope='col' nowrap='nowrap'>"
						+ "<img src='"
						+ gradeCourseImage
						+ "' width='80' height='40' alt='课程图片'>"
						+ "</td>"
						+ "<td align='center' valign='middle' scope='col' nowrap='nowrap'>"
						+ c.getGradeId()
						+ "</td><td align='center' valign='middle' scope='col' nowrap='nowrap'>"
						+ c.getGradeName()
						+ "</td>"
						+ "<td align='center' valign='middle' scope='col' nowrap='nowrap'>"
						+ c.getGradeCount()
						+ "</td>"
						+ "<td align='center' valign='middle' scope='col' nowrap='nowrap'>"
						+ c.getGradeCourse().getCourseName()
						+ "</td>"
						+ "<td align='center' valign='middle' scope='col' class='queriesGradeIntro'>"
						+ c.getGradeCourse().getJobDirection()
						+ "</td>"
						+ "<td align='center' valign='middle' scope='col' nowrap='nowrap'>"
						+ "<input type='button' name='delete' id='delete' value='删除' onclick='deleteGrade("
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
