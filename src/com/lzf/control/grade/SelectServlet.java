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

	IGradeService gradeService = new GradeService(); // ��ͼ��ͨ���ӿ���ҵ���߼��㽻��

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
		Grade gradeTemp = gradeService.select(grade); // Ϊ���°༶��Ϣʱ�ṩ���ݵ�grade����
		request.setAttribute("grade", gradeTemp);
		request.getRequestDispatcher(
				"grade/gradeUpdate.jsp?liuzhifeng=" + Math.random()).forward(
				request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response) doPost()��������ʦ��ѧ��ѡ��༶ʱ���ã�Ϊ��ʦ��ѧ��ѡ��༶�ṩ���㣬��Ϊ���ṩ������ѡ�༶�����飩
	 * 
	 *      ��ʱ�Ե�Ԥ�ⷽ������δ���о�����Եı��ʵ�֣������Եȴ�ʵ��ing
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
				+ "<td align='right' valign='middle' id='closeGradeDetail' onclick='closeGradeDetail()'>�ر�"
				+ "&nbsp;</td></tr><tr><td align='left' valign='middle'>�༶���ƣ�"
				+ gradeTemp.getGradeName()
				+ "</td><td rowspan='5' align='right' valign='middle'><img src='"
				+ urlImage
				+ "' width='200' height='130' alt='�༶�γ�ͼƬ'></td></tr><tr align='left' valign='middle'>"
				+ "<td>�༶������"
				+ gradeTemp.getGradeCount()
				+ "</td></tr><tr align='left' valign='middle'><td>�༶�γ̣�"
				+ gradeTemp.getGradeCourse().getCourseName()
				+ "</td></tr><tr align='left' valign='middle'><td>�γ���ϵ��"
				+ gradeTemp.getGradeCourse().getCourseSystem()
				+ "</td></tr><tr align='left' valign='middle'><td>��ҵ����"
				+ gradeTemp.getGradeCourse().getJobDirection()
				+ "</td></tr><tr><td colspan='2'><hr>"
				+ gradeTemp.getGradeCourse().getCourseDetail()
				+ "</td></tr></table>");

	}
}
