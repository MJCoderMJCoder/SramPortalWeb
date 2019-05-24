package com.lzf.control.news;

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

import com.lzf.entity.News;
import com.lzf.service.INewsService;
import com.lzf.service.implement.NewsService;

/**
 * Servlet implementation class RecruitmentServlet
 */
@WebServlet(description = "RecruitmentServlet", urlPatterns = { "/queriesRecruitment" })
public class RecruitmentServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	INewsService newsService = new NewsService(); // ��ͼ��ͨ���ӿ���ҵ���߼��㽻��

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 * 
	 *      doGet����ֻ����ǰ����ʾ��recruitment.jspר�ã�������Ƹ
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("GBK");
		response.setContentType("text/html; charset=GBK");
		News news = new News("", "", "", "");
		List<News> list = newsService.queries(news);
		List<News> recruitmentList = new ArrayList<News>();
		for (News c : list) {
			if ((((c.getNewsTitle()).indexOf("������")) < 0)
					&& ((c.getNewsTitle().indexOf("������Ƹ") >= 0))) {
				recruitmentList.add(c);
			}
		}
		request.setAttribute("recruitmentList", recruitmentList);
		request.getRequestDispatcher("recruitment.jsp").forward(request,
				response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}
