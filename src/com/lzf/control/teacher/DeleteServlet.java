package com.lzf.control.teacher;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLDecoder;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.lzf.entity.Course;
import com.lzf.entity.Grade;
import com.lzf.entity.Teacher;
import com.lzf.service.ITeacherService;
import com.lzf.service.implement.TeacherService;

/**
 * Servlet implementation class DeleteServlet
 */
@WebServlet(description = "DeleteServlet", urlPatterns = { "/deleteTeacher" })
public class DeleteServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	ITeacherService teacherService = new TeacherService(); // ��ͼ��ͨ���ӿ���ҵ���߼��㽻��

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		String deleteTeacherImage = request.getParameter("deleteTeacherImage");

		// �õ��ϴ��ļ��ı���Ŀ¼(���ϴ����ļ������WEB-INFĿ¼�£����������ֱ�ӷ��ʣ���֤�ϴ��ļ��İ�ȫ)
		String savePath = this.getServletContext().getRealPath(
				"/teacherImages/" + deleteTeacherImage);
		File file = new File(savePath);
		if (file.isFile()) {
			file.delete();
		} // ɾ��ͼƬ

		request.setCharacterEncoding("GBK");
		response.setContentType("text/html; charset=GBK");
		PrintWriter out = response.getWriter();
		String deleteTeacherId = request.getParameter("deleteTeacherId");
		Course gradeCourseTemp = new Course("", "", "", "", "", "");
		Grade teacherGradeTemp = new Grade("", gradeCourseTemp, "", "");
		Teacher deleteTeacher = new Teacher(deleteTeacherId, "", "", "", "",
				"", "", "", "", "", teacherGradeTemp, "");
		int i = teacherService.deleteTeacher(deleteTeacher);
		if (i == 1) {
			String teacherId = URLDecoder.decode(
					request.getParameter("teacherId"), "utf-8")
					.replace("-", "");
			String name = URLDecoder.decode(request.getParameter("name"),
					"utf-8");
			String gradeName = URLDecoder.decode(
					request.getParameter("gradeName"), "utf-8");
			String school = URLDecoder.decode(request.getParameter("school"),
					"utf-8");
			String address = URLDecoder.decode(request.getParameter("address"),
					"utf-8");
			String phone = URLDecoder.decode(request.getParameter("phone"),
					"utf-8");
			String birthday = URLDecoder.decode(
					request.getParameter("birthday"), "utf-8").replace("-", "");
			String gender = URLDecoder.decode(request.getParameter("gender"),
					"utf-8");
			String id = URLDecoder.decode(request.getParameter("id"), "utf-8");
			String teacherExperience = URLDecoder.decode(
					request.getParameter("teacherExperience"), "utf-8");
			String gradeCount = URLDecoder.decode(
					request.getParameter("gradeCount"), "utf-8");
			String courseName = URLDecoder.decode(
					request.getParameter("courseName"), "utf-8");
			String courseSystem = URLDecoder.decode(
					request.getParameter("courseSystem"), "utf-8");
			String courseDetail = URLDecoder.decode(
					request.getParameter("courseDetail"), "utf-8");
			String jobDirection = URLDecoder.decode(
					request.getParameter("jobDirection"), "utf-8");

			Course gradeCourse = new Course("", courseName, courseDetail,
					courseSystem, jobDirection, "");
			Grade teacherGrade = new Grade("", gradeCourse, gradeName,
					gradeCount);
			Teacher teacher = new Teacher(id, name, gender, birthday, phone,
					address, school, "", teacherId, "", teacherGrade,
					teacherExperience);
			List<Teacher> list = teacherService.queries(teacher);
			out.print("<tr><th align='center' valign='middle' nowrap='nowrap' scope='col'>��ʦ��Ƭ</th>"
					+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>��ʦ�˺�</th>"
					+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>���̰༶</th>"
					+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>�༶�γ�</th>"
					+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>��ʦ����</th>"
					+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>��ϵ��ʽ</th>"
					+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>��ҵԺУ</th>"
					+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>����</th></tr>");
			for (Teacher c : list) {
				String deleteUrl = "\"" + request.getScheme() + "://"
						+ request.getServerName() + ":"
						+ request.getServerPort() + request.getContextPath()
						+ "/deleteTeacher?deleteTeacherId=" + c.getId()
						+ "&deleteTeacherImage=" + c.getImage() + "\"";
				String updateUrl = request.getScheme() + "://"
						+ request.getServerName() + ":"
						+ request.getServerPort() + request.getContextPath()
						+ "/selectTeacher?selectTeacherId=" + c.getId();
				String teacherImage = request.getScheme() + "://"
						+ request.getServerName() + ":"
						+ request.getServerPort() + request.getContextPath()
						+ "/teacherImages/" + c.getImage() + "?liuzhifeng="
						+ Math.random();
				out.print("<tr><td align='center' valign='middle' scope='col' nowrap='nowrap'>"
						+ "<img src='"
						+ teacherImage
						+ "' width='80' height='40' alt='Ա����Ƭ'>"
						+ "</td>"
						+ "<td align='center' valign='middle' scope='col' nowrap='nowrap'>"
						+ c.getTeacherId()
						+ "</td><td align='center' valign='middle' scope='col' nowrap='nowrap'>"
						+ c.getTeacherGrade().getGradeName()
						+ "</td>"
						+ "<td align='center' valign='middle' scope='col' nowrap='nowrap'>"
						+ c.getTeacherGrade().getGradeCourse().getCourseName()
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
						+ "<input type='button' name='delete' id='delete' value='ɾ��' onclick='deleteTeacher("
						+ deleteUrl
						+ ")'>&nbsp;&nbsp;"
						+ "<a href='"
						+ updateUrl
						+ "' target='_self'><input type='button' name='update' id='update' value='�޸�'></a>"
						+ "</td></tr>");
			}
		} else {
			out.print("<tr><td align='center' valign='middle' scope='col' nowrap='nowrap'>ɾ��ʧ��</td></tr>");
		}
	}

}
