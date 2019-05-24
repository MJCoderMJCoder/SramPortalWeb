package com.lzf.control.news;

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

import com.lzf.entity.News;
import com.lzf.service.INewsService;
import com.lzf.service.implement.NewsService;

/**
 * Servlet implementation class UpdateServlet
 */
@WebServlet(description = "UpdateServlet", urlPatterns = { "/updateNews" })
public class UpdateServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	INewsService newsService = new NewsService(); // 视图层通过接口与业务逻辑层交互

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
		String savePath = this.getServletContext().getRealPath("/newsImages");
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
					News newsTemp = newsService.select(new News(map
							.get("newsId"), "", "", ""));
					if (filename == null || filename.trim().equals("")) {
						value = newsTemp.getNewsImage();
						map.put(name, value);
						continue;
					} else {

						// 得到上传文件的保存目录(将上传的文件存放于WEB-INF目录下，不允许外界直接访问，保证上传文件的安全)
						String deleteNewsImage = this.getServletContext()
								.getRealPath(
										"/newsImages/"
												+ newsTemp.getNewsImage());
						File deleteFile = new File(deleteNewsImage);
						if (deleteFile.isFile()) {
							deleteFile.delete();
						} // 删除原来的图片

						// 注意：不同的浏览器提交的文件名是不一样的，有些浏览器提交上来的文件名是带有路径的，如：
						// c:\a\b\1.txt，而有些只是单纯的文件名，如：1.txt
						// 处理获取到的上传文件的文件名的路径部分，只保留文件名部分
						value = map.get("newsId")
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
		News news = new News(map.get("newsId"), map.get("newsName"),
				map.get("newsIntro"), map.get("newsImage"));
		request.setAttribute("news", news);
		int i = newsService.updateNews(news);
		response.setContentType("text/html; charset=GBK");
		request.setCharacterEncoding("GBK");
		if (i == 1) {
			request.getRequestDispatcher(
					"news/newsUpdateSuccess.jsp?liuzhifeng=" + Math.random())
					.forward(request, response);
		} else {
			response.getWriter()
					.print("<script>alert('很抱歉，修改失败。'); window.location.href='news/newsQueries.jsp?liuzhifeng='+Math.random();</script>");
		}
	}
}
