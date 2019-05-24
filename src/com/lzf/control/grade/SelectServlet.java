package com.lzf.control.grade;

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
import com.lzf.service.IGradeService;
import com.lzf.service.implement.GradeService;

/**
 * Servlet implementation class SelectServlet
 */
@WebServlet(description = "SelectServlet", urlPatterns = { "/selectGrade" })
public class SelectServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	IGradeService gradeService = new GradeService(); // 视图层通过接口与业务逻辑层交互

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("GBK");
		response.setContentType("text/html; charset=GBK");
		String gradeId = new String(request.getParameter("selectGradeId")
				.getBytes("iso8859-1"), "GBK");
		Course gradeCourse = new Course();
		Grade grade = new Grade(gradeId, gradeCourse, "", "");
		Grade gradeTemp = gradeService.select(grade); // 为更新班级信息时提供数据的grade对象
		request.setAttribute("grade", gradeTemp);
		request.getRequestDispatcher(
				"grade/gradeUpdate.jsp?liuzhifeng=" + Math.random()).forward(
				request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response) doPost()方法在老师或学生选择班级时调用（为老师或学生选择班级提供方便，即为其提供更多已选班级的详情）
	 * 
	 *      暂时性的预测方案（还未进行具体测试的编程实现），所以等待实现ing
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("GBK");
		response.setContentType("text/html; charset=GBK");
		String gradeId = URLDecoder.decode(request.getParameter("gradeId"),
				"utf-8");
		Course course = new Course("", "", "", "", "", "");
		Grade grade = new Grade(gradeId, course, "", "");
		Grade gradeTemp = gradeService.select(grade);
		String urlImage = request.getScheme() + "://" + request.getServerName()
				+ ":" + request.getServerPort() + request.getContextPath()
				+ "/courseImages/"
				+ gradeTemp.getGradeCourse().getCourseImage() + "?liuzhifeng="
				+ Math.random();
		PrintWriter out = response.getWriter();
		out.print("<table width='100%' border='0'><tr><td align='left' valign='middle'></td>"
				+ "<td align='right' valign='middle' id='closeGradeDetail' onclick='closeGradeDetail()'>关闭"
				+ "&nbsp;</td></tr><tr><td align='left' valign='middle'>班级名称："
				+ gradeTemp.getGradeName()
				+ "</td><td rowspan='5' align='right' valign='middle'><img src='"
				+ urlImage
				+ "' width='200' height='130' alt='班级课程图片'></td></tr><tr align='left' valign='middle'>"
				+ "<td>班级人数："
				+ gradeTemp.getGradeCount()
				+ "</td></tr><tr align='left' valign='middle'><td>班级课程："
				+ gradeTemp.getGradeCourse().getCourseName()
				+ "</td></tr><tr align='left' valign='middle'><td>课程体系："
				+ gradeTemp.getGradeCourse().getCourseSystem()
				+ "</td></tr><tr align='left' valign='middle'><td>就业方向："
				+ gradeTemp.getGradeCourse().getJobDirection()
				+ "</td></tr><tr><td colspan='2'><hr>"
				+ gradeTemp.getGradeCourse().getCourseDetail()
				+ "</td></tr></table>");

	}
}
