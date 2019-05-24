package com.lzf.control.news;

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

import com.lzf.entity.News;
import com.lzf.service.INewsService;
import com.lzf.service.implement.NewsService;

/**
 * Servlet implementation class DeleteServlet
 */
@WebServlet(description = "DeleteServlet", urlPatterns = { "/deleteNews" })
public class DeleteServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	INewsService newsService = new NewsService(); // ��ͼ��ͨ���ӿ���ҵ���߼��㽻��

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
		String deleteNewsImage = request.getParameter("deleteNewsImage");
		// �õ��ϴ��ļ��ı���Ŀ¼(���ϴ����ļ������WEB-INFĿ¼�£����������ֱ�ӷ��ʣ���֤�ϴ��ļ��İ�ȫ)
		String savePath = this.getServletContext().getRealPath(
				"/newsImages/" + deleteNewsImage);
		File file = new File(savePath);
		if (file.isFile()) {
			file.delete();
		} // ɾ��ͼƬ

		request.setCharacterEncoding("GBK");
		response.setContentType("text/html; charset=GBK");
		PrintWriter out = response.getWriter();
		String deleteNewsId = request.getParameter("deleteNewsId");
		News deleteNews = new News(deleteNewsId, "", "", "");
		int i = newsService.deleteNews(deleteNews);
		if (i == 1) {
			String newsId = URLDecoder.decode(request.getParameter("newsId"),
					"utf-8").replace("-", "");
			String newsName = URLDecoder.decode(
					request.getParameter("newsName"), "utf-8");
			String newsIntro = URLDecoder.decode(
					request.getParameter("newsIntro"), "utf-8");
			News news = new News(newsId, newsName, newsIntro, "");
			List<News> list = newsService.queries(news);
			out.print("<tr><th align='center' valign='middle' nowrap='nowrap' scope='col'>����ͼƬ</th>"
					+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>���ű��</th>"
					+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>���ű���</th>"
					+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>�������飨���֣�</th>"
					+ "<th align='center' valign='middle' nowrap='nowrap' scope='col'>����</th></tr>");
			for (News c : list) {
				String deleteUrl = "\"" + request.getScheme() + "://"
						+ request.getServerName() + ":"
						+ request.getServerPort() + request.getContextPath()
						+ "/deleteNews?deleteNewsId=" + c.getNewsId()
						+ "&deleteNewsImage=" + c.getNewsImage() + "\"";
				String updateUrl = request.getScheme() + "://"
						+ request.getServerName() + ":"
						+ request.getServerPort() + request.getContextPath()
						+ "/selectNews?selectNewsId=" + c.getNewsId();
				String newsImage = request.getScheme() + "://"
						+ request.getServerName() + ":"
						+ request.getServerPort() + request.getContextPath()
						+ "/newsImages/" + c.getNewsImage() + "?liuzhifeng="
						+ Math.random();
				out.print("<tr><td align='center' valign='middle' scope='col' nowrap='nowrap'>"
						+ "<img src='"
						+ newsImage
						+ "' width='80' height='40' alt='����ͼƬ'>"
						+ "</td>"
						+ "<td align='center' valign='middle' scope='col' nowrap='nowrap'>"
						+ c.getNewsId()
						+ "</td><td align='center' valign='middle' scope='col' nowrap='nowrap'>"
						+ c.getNewsTitle()
						+ "</td>"
						+ "<td align='center' valign='middle' scope='col' class='queriesNewsIntro'>"
						+ c.getNewsDetail()
						+ "</td>"
						+ "<td align='center' valign='middle' scope='col' nowrap='nowrap'>"
						+ "<input type='button' name='delete' id='delete' value='ɾ��' onclick='deleteNews("
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
