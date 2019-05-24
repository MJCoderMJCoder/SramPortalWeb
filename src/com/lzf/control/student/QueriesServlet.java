package com.lzf.control.student;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.List;

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
 * Servlet implementation class QueriesServlet
 */
@WebServlet(description = "QueriesServlet", urlPatterns = { "/queriesStudent" })
public class QueriesServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	IStudentService studentService = new StudentService(); // 视图层通过接口与业务逻辑层交互

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 * 
	 *      doGet方法只用于前端显示（job.jsp专用）
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		Course course = new Course("", "", "", "", "", "");
		Grade grade = new Grade("", course, "", "");
		Student student = new Student("", "", "", "", "", "", "", "", "", "",
				grade, "", "", "", "");
		List<Student> list = studentService.queries(student);
		List<Student> stuList = new ArrayList<Student>();
		for (Student s : list) {
			if (!(s.getStuGrade().getGradeId().equals("无"))) {
				stuList.add(s);
			}
		}
		request.setAttribute("stuList", stuList);
		request.getRequestDispatcher("job.jsp").forward(request, response);
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
		String stuId = URLDecoder
				.decode(request.getParameter("stuId"), "utf-8")
				.replace("-", "");
		String stuJobCompany = URLDecoder.decode(
				request.getParameter("stuJobCompany"), "utf-8");
		String stuJobAddress = URLDecoder.decode(
				request.getParameter("stuJobAddress"), "utf-8");
		String stuJobPay = URLDecoder.decode(request.getParameter("stuJobPay"),
				"utf-8");
		String stuJobTime = URLDecoder.decode(
				request.getParameter("stuJobTime"), "utf-8").replace("-", "");
		String id = URLDecoder.decode(request.getParameter("id"), "utf-8");
		String name = URLDecoder.decode(request.getParameter("name"), "utf-8");
		String gender = URLDecoder.decode(request.getParameter("gender"),
				"utf-8");
		String birthday = URLDecoder.decode(request.getParameter("birthday"),
				"utf-8").replace("-", "");
		String phone = URLDecoder
				.decode(request.getParameter("phone"), "utf-8");
		String address = URLDecoder.decode(request.getParameter("address"),
				"utf-8");
		String school = URLDecoder.decode(request.getParameter("school"),
				"utf-8");
		String gradeName = URLDecoder.decode(request.getParameter("gradeName"),
				"utf-8");
		String courseName = URLDecoder.decode(
				request.getParameter("courseName"), "utf-8");
		String courseSystem = URLDecoder.decode(
				request.getParameter("courseSystem"), "utf-8");
		String courseDetail = URLDecoder.decode(
				request.getParameter("courseDetail"), "utf-8");
		Course course = new Course("", courseName, courseDetail, courseSystem,
				"", "");
		Grade grade = new Grade("", course, gradeName, "");
		Student student = new Student(id, name, gender, birthday, phone,
				address, school, "", stuId, "", grade, stuJobCompany,
				stuJobAddress, stuJobPay, stuJobTime);
		List<Student> list = studentService.queries(student);
		PrintWriter out = response.getWriter();
		out.print("<tr><th align='center' valign='middle' nowrap='nowrap' scope='col'>学员照片</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>学员账号</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>所属班级</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>学员姓名</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>联系方式</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>毕业院校</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>就职公司</th>"
				+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>操作</th></tr>");
		for (Student c : list) {
			String deleteUrl = "\"" + request.getScheme() + "://"
					+ request.getServerName() + ":" + request.getServerPort()
					+ request.getContextPath()
					+ "/deleteStudent?deleteStudentId=" + c.getId()
					+ "&deleteStudentImage=" + c.getImage() + "\"";
			String updateUrl = request.getScheme() + "://"
					+ request.getServerName() + ":" + request.getServerPort()
					+ request.getContextPath()
					+ "/selectStudent?selectStudentId=" + c.getId();
			String studentImage = request.getScheme() + "://"
					+ request.getServerName() + ":" + request.getServerPort()
					+ request.getContextPath() + "/studentImages/"
					+ c.getImage() + "?liuzhifeng=" + Math.random();
			out.print("<tr><td align='center' valign='middle' scope='col' nowrap='nowrap'>"
					+ "<img src='"
					+ studentImage
					+ "' width='80' height='40' alt='员工照片'>"
					+ "</td>"
					+ "<td align='center' valign='middle' scope='col' nowrap='nowrap'>"
					+ c.getStuId()
					+ "</td><td align='center' valign='middle' scope='col' nowrap='nowrap'>"
					+ c.getStuGrade().getGradeName()
					+ "</td>"
					+ "<td align='center' valign='middle' scope='col' nowrap='nowrap'>"
					+ c.getName()
					+ "</td>"
					+ "<td align='center' valign='middle' scope='col' nowrap='nowrap'>"
					+ c.getPhone()
					+ "</td>"
					+ "<td align='center' valign='middle' scope='col' nowrap='nowrap'>"
					+ c.getSchool()
					+ "</td>"
					+ "<td align='center' valign='middle' scope='col' nowrap='nowrap'>"
					+ c.getStuJobCompany()
					+ "</td>"
					+ "<td align='center' valign='middle' scope='col' nowrap='nowrap'>"
					+ "<input type='button' name='delete' id='delete' value='删除' onclick='deleteStudent("
					+ deleteUrl
					+ ")'>&nbsp;&nbsp;"
					+ "<a href='"
					+ updateUrl
					+ "' target='_self'><input type='button' name='update' id='update' value='修改'></a>"
					+ "</td></tr>");
		}
	}
}
