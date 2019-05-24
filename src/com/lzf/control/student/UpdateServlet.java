package com.lzf.control.student;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import com.lzf.entity.Course;
import com.lzf.entity.Grade;
import com.lzf.entity.Student;
import com.lzf.service.IStudentService;
import com.lzf.service.implement.GradeService;
import com.lzf.service.implement.StudentService;

/**
 * Servlet implementation class UpdateServlet
 * 
 * UpdateServlet��ֻ����ǰ��ҳ�棨studentInfo.jspר�ã�
 */
@WebServlet(description = "UpdateServlet", urlPatterns = { "/updateStudent" })
public class UpdateServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	IStudentService studentService = new StudentService(); // ��ͼ��ͨ���ӿ���ҵ���߼��㽻��

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
	 * 
	 *      ��doPost()����ֻ����ǰ��ҳ�棨studentInfo.jspר�ã�
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		response.setContentType("text/html; charset=GBK");
		request.setCharacterEncoding("GBK");

		String basePath = request.getScheme() + "://" + request.getServerName()
				+ ":" + request.getServerPort() + request.getContextPath()
				+ "/";
		if ((request.getSession().getAttribute("student")) == null) {
			response.getWriter().print(
					"<script>alert('���Ѱ�ȫ�˳����޷������κ��޸�'); window.location.href='"
							+ basePath + "'</script>");
		} else {

			Map<String, String> map = new Hashtable<String, String>();

			// �õ��ϴ��ļ��ı���Ŀ¼(���ϴ����ļ������WEB-INFĿ¼�£����������ֱ�ӷ��ʣ���֤�ϴ��ļ��İ�ȫ)
			String savePath = this.getServletContext().getRealPath(
					"/studentImages");
			File file = new File(savePath);
			// �ж��ϴ��ļ��ı���Ŀ¼�Ƿ����
			if (!file.exists() && !file.isDirectory()) {
				// ����Ŀ¼(Ŀ¼�����ڣ���Ҫ����)
				file.mkdir();
			}
			try {
				// ʹ��Apache�ļ��ϴ���������ļ��ϴ����裺
				// 1������һ��DiskFileItemFactory����
				DiskFileItemFactory factory = new DiskFileItemFactory();
				// 2������һ���ļ��ϴ�������
				ServletFileUpload upload = new ServletFileUpload(factory);
				// ����ϴ��ļ�������������
				upload.setHeaderEncoding("GBK");
				// 3���ж��ύ�����������Ƿ����ϴ���������
				if (!ServletFileUpload.isMultipartContent(request)) {
					// ���մ�ͳ��ʽ��ȡ����
					return;
				}
				// 4��ʹ��ServletFileUpload�����������ϴ����ݣ�
				// ����������ص���һ��List<FileItem>���ϣ�ÿһ��FileItem��Ӧһ��Form����������
				List<FileItem> list = upload.parseRequest(request);
				for (FileItem item : list) {
					String name;
					String value;
					// ���fileitem�з�װ������ͨ�����������
					if (item.isFormField()) {
						name = item.getFieldName();
						// �����ͨ����������ݵ�������������
						value = item.getString("GBK");
						// value = new
						// String(value.getBytes("iso8859-1"),"UTF-8");
					} else {// ���fileitem�з�װ�����ϴ��ļ�
						Course gradeCourse = new Course("", "", "", "", "", "");
						Grade studentGrade = new Grade("", gradeCourse, "", "");
						Student studentTemp = studentService
								.select(new Student(map.get("id"), "", "", "",
										"", "", "", "", "", "", studentGrade,
										"", "", "", ""));
						name = item.getFieldName();
						// �õ��ϴ����ļ����ƣ�
						String filename = item.getName();
						if (filename == null || filename.trim().equals("")) {
							value = studentTemp.getImage();
							map.put(name, value);
							continue;
						} else {

							// �õ��ϴ��ļ��ı���Ŀ¼(���ϴ����ļ������WEB-INFĿ¼�£����������ֱ�ӷ��ʣ���֤�ϴ��ļ��İ�ȫ)
							String deleteStudentImage = this
									.getServletContext().getRealPath(
											"/studentImages/"
													+ studentTemp.getImage());
							File deleteFile = new File(deleteStudentImage);
							if (deleteFile.isFile()) {
								deleteFile.delete();
							} // ɾ��ԭ����ͼƬ

							// ע�⣺��ͬ��������ύ���ļ����ǲ�һ���ģ���Щ������ύ�������ļ����Ǵ���·���ģ��磺
							// c:\a\b\1.txt������Щֻ�ǵ������ļ������磺1.txt
							// �����ȡ�����ϴ��ļ����ļ�����·�����֣�ֻ�����ļ�������
							value = map.get("studentId")
									+ filename.substring(filename
											.lastIndexOf("."));
							// ��ȡitem�е��ϴ��ļ���������
							InputStream in = item.getInputStream();
							// ����һ���ļ������
							FileOutputStream out = new FileOutputStream(
									savePath + "\\" + value);
							// ����һ��������
							byte buffer[] = new byte[1024];
							// �ж��������е������Ƿ��Ѿ�����ı�ʶ
							int len = 0;
							// ѭ�������������뵽���������У�(len=in.read(buffer))>0�ͱ�ʾin���滹������
							while ((len = in.read(buffer)) > 0) {
								// ʹ��FileOutputStream�������������������д�뵽ָ����Ŀ¼(savePath
								// +
								// "\\"
								// + filename)����
								out.write(buffer, 0, len);
							}
							// �ر�������
							in.close();
							// �ر������
							out.close();
							// ɾ�������ļ��ϴ�ʱ���ɵ���ʱ�ļ�
							item.delete();
						}
					}
					map.put(name, value);
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
			Course gradeCourse = new Course("", "", "", "", "", "");
			Grade studentGrade = new GradeService().select(new Grade(map
					.get("studentGrade"), gradeCourse, "", ""));
			Student student = new Student(map.get("id"), map.get("name"),
					map.get("gender"), map.get("birthday").replace("-", ""),
					map.get("phone"), map.get("address"), map.get("school"),
					map.get("studentImage"), map.get("stuId"),
					map.get("stuPassword"), studentGrade,
					map.get("stuJobCompany"), map.get("stuJobAddress"),
					map.get("stuJobPay"), map.get("stuJobTime"));
			int i = studentService.updateStudent(student);
			if (i == 1) {
				response.setHeader("Cache-Control", "no-cache"); // HTTP 1.1
				response.setHeader("Pragma", "no-cache"); // HTTP 1.0
				response.setDateHeader("Expires", 0); // ��ֹ������������
				request.getSession().invalidate();
				HttpSession session = request.getSession();
				session.setAttribute("student", student);
				response.getWriter()
						.print("<script>alert('�޸ĳɹ�'); window.location.href='studentInfo.jsp?liuzhifeng='+Math.random();</script>");
			} else {
				response.getWriter()
						.print("<script>alert('�ܱ�Ǹ���޸�ʧ��'); window.location.href='studentInfo.jsp?liuzhifeng='+Math.random();</script>");
			}
		}
	}
}
