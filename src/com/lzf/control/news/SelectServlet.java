package com.lzf.control.news;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.lzf.entity.News;
import com.lzf.service.INewsService;
import com.lzf.service.implement.NewsService;

/**
 * Servlet implementation class SelectServlet
 */
@WebServlet(description = "SelectServlet", urlPatterns = { "/selectNews" })
public class SelectServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	INewsService newsService = new NewsService(); // 视图层通过接口与业务逻辑层交互

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("GBK");
		response.setContentType("text/html; charset=GBK");
		String newsId = request.getParameter("selectNewsId");
		News news = new News(newsId, "", "", "");
		News newsTemp = newsService.select(news);
		request.setAttribute("news", newsTemp);
		request.getRequestDispatcher(
				"news/newsUpdate.jsp?liuzhifeng=" + Math.random()).forward(
				request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

}
