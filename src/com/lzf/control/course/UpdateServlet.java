package com.lzf.control.course;

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

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import com.lzf.entity.Course;
import com.lzf.service.ICourseService;
import com.lzf.service.implement.CourseService;

/**
 * Servlet implementation class UpdateServlet
 */
@WebServlet(description = "UpdateServlet", urlPatterns = { "/updateCourse" })
public class UpdateServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	ICourseService courseService = new CourseService(); // 视图层通过接口与业务逻辑层交互

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

		Map<String, String> map = new Hashtable<String, String>();

		// 得到上传文件的保存目录(将上传的文件存放于WEB-INF目录下，不允许外界直接访问，保证上传文件的安全)
		String savePath = this.getServletContext().getRealPath("/courseImages");
		File file = new File(savePath);
		// 判断上传文件的保存目录是否存在
		if (!file.exists() && !file.isDirectory()) {
			// 创建目录(目录不存在，需要创建)
			file.mkdir();
		}
		try {
			// 使用Apache文件上传组件处理文件上传步骤：
			// 1、创建一个DiskFileItemFactory工厂
			DiskFileItemFactory factory = new DiskFileItemFactory();
			// 2、创建一个文件上传解析器
			ServletFileUpload upload = new ServletFileUpload(factory);
			// 解决上传文件名的中文乱码
			upload.setHeaderEncoding("GBK");
			// 3、判断提交上来的数据是否是上传表单的数据
			if (!ServletFileUpload.isMultipartContent(request)) {
				// 按照传统方式获取数据
				return;
			}
			// 4、使用ServletFileUpload解析器解析上传数据，
			// 解析结果返回的是一个List<FileItem>集合，每一个FileItem对应一个Form表单的输入项
			List<FileItem> list = upload.parseRequest(request);
			for (FileItem item : list) {
				String name;
				String value;
				// 如果fileitem中封装的是普通输入项的数据
				if (item.isFormField()) {
					name = item.getFieldName();
					// 解决普通输入项的数据的中文乱码问题
					value = item.getString("GBK");
					// value = new String(value.getBytes("iso8859-1"),"UTF-8");
				} else {// 如果fileitem中封装的是上传文件
					name = item.getFieldName();
					// 得到上传的文件名称，
					String filename = item.getName();
					Course courseTemp = courseService.select(new Course(map
							.get("courseId"), "", "", "", "", ""));
					if (filename == null || filename.trim().equals("")) {
						value = courseTemp.getCourseImage();
						map.put(name, value);
						continue;
					} else {

						// 得到上传文件的保存目录(将上传的文件存放于WEB-INF目录下，不允许外界直接访问，保证上传文件的安全)
						String deleteCourseImage = this.getServletContext()
								.getRealPath(
										"/courseImages/"
												+ courseTemp.getCourseImage());
						File deleteFile = new File(deleteCourseImage);
						if (deleteFile.isFile()) {
							deleteFile.delete();
						} // 删除原来的图片

						// 注意：不同的浏览器提交的文件名是不一样的，有些浏览器提交上来的文件名是带有路径的，如：
						// c:\a\b\1.txt，而有些只是单纯的文件名，如：1.txt
						// 处理获取到的上传文件的文件名的路径部分，只保留文件名部分
						value = map.get("courseId")
								+ filename.substring(filename.lastIndexOf("."));
						// 获取item中的上传文件的输入流
						InputStream in = item.getInputStream();
						// 创建一个文件输出流
						FileOutputStream out = new FileOutputStream(savePath
								+ "\\" + value);
						// 创建一个缓冲区
						byte buffer[] = new byte[1024];
						// 判断输入流中的数据是否已经读完的标识
						int len = 0;
						// 循环将输入流读入到缓冲区当中，(len=in.read(buffer))>0就表示in里面还有数据
						while ((len = in.read(buffer)) > 0) {
							// 使用FileOutputStream输出流将缓冲区的数据写入到指定的目录(savePath +
							// "\\"
							// + filename)当中
							out.write(buffer, 0, len);
						}
						// 关闭输入流
						in.close();
						// 关闭输出流
						out.close();
						// 删除处理文件上传时生成的临时文件
						item.delete();
					}
				}
				map.put(name, value);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		Course course = new Course(map.get("courseId"), map.get("courseName"),
				map.get("courseIntro"), map.get("courseSystem"),
				map.get("jobDirection"), map.get("courseImage"));
		request.setAttribute("course", course);
		int i = courseService.updateCourse(course);
		response.setContentType("text/html; charset=GBK");
		request.setCharacterEncoding("GBK");
		if (i == 1) {
			request.getRequestDispatcher(
					"course/courseUpdateSuccess.jsp?liuzhifeng="
							+ Math.random()).forward(request, response);
		} else {
			response.getWriter()
					.print("<script>alert('很抱歉，修改失败'); window.location.href='course/courseQueries.jsp?liuzhifeng='+Math.random();</script>");
		}
	}
}
