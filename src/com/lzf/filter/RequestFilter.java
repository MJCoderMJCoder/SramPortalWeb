package com.lzf.filter;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.DispatcherType;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.lzf.entity.Manager;
import com.lzf.entity.Teacher;

/**
 * Servlet Filter implementation class RequestFilter
 */
@WebFilter(dispatcherTypes = { DispatcherType.REQUEST, DispatcherType.FORWARD }, description = "RequestFilter", urlPatterns = { "/*" })
public class RequestFilter implements Filter {

	/**
	 * Default constructor.
	 */
	public RequestFilter() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see Filter#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest req, ServletResponse resp,
			FilterChain chain) throws IOException, ServletException {
		HttpServletRequest request = (HttpServletRequest) req;
		HttpServletResponse response = (HttpServletResponse) resp;
		response.setContentType("text/html; charset=GBK");
		request.setCharacterEncoding("GBK");
		String basePath = request.getScheme() + "://" + request.getServerName()
				+ ":" + request.getServerPort() + request.getContextPath();
		// TODO Auto-generated method stub
		// place your code here
		StringBuffer requestURL = request.getRequestURL();
		if ((requestURL.indexOf("company/companyAdd.jsp") >= 0)
				|| (requestURL.indexOf("addCompany") >= 0)
				|| (requestURL.indexOf("company/companyAddSuccess.jsp") >= 0)
				|| (requestURL.indexOf("company/companyQueries.jsp") >= 0)
				|| (requestURL.indexOf("deleteCompany") >= 0)
				|| (requestURL.indexOf("company/companyUpdate.jsp") >= 0)
				|| (requestURL.indexOf("updateCompany") >= 0)
				|| (requestURL.indexOf("company/companyUpdateSuccess.jsp") >= 0)
				|| (requestURL.indexOf("course/courseAdd.jsp") >= 0)
				|| (requestURL.indexOf("addCourse") >= 0)
				|| (requestURL.indexOf("course/courseAddSuccess.jsp") >= 0)
				|| (requestURL.indexOf("course/courseQueries.jsp") >= 0)
				|| (requestURL.indexOf("deleteCourse") >= 0)
				|| (requestURL.indexOf("course/courseUpdate.jsp") >= 0)
				|| (requestURL.indexOf("updateCourse") >= 0)
				|| (requestURL.indexOf("course/courseUpdateSuccess.jsp") >= 0)
				|| (requestURL.indexOf("grade/gradeAdd.jsp") >= 0)
				|| (requestURL.indexOf("addGrade") >= 0)
				|| (requestURL.indexOf("grade/gradeAddSuccess.jsp") >= 0)
				|| (requestURL.indexOf("grade/gradeQueries.jsp") >= 0)
				|| (requestURL.indexOf("deleteGrade") >= 0)
				|| (requestURL.indexOf("grade/gradeUpdate.jsp") >= 0)
				|| (requestURL.indexOf("updateGrade") >= 0)
				|| (requestURL.indexOf("grade/gradeUpdateSuccess.jsp") >= 0)
				|| (requestURL.indexOf("manager/managerAdd.jsp") >= 0)
				|| (requestURL.indexOf("addManager") >= 0)
				|| (requestURL.indexOf("manager/managerAddSuccess.jsp") >= 0)
				|| (requestURL.indexOf("manager/managerInfo.jsp") >= 0)
				|| (requestURL.indexOf("manager/managerQueries.jsp") >= 0)
				|| (requestURL.indexOf("deleteManager") >= 0)
				|| (requestURL.indexOf("manager/managerUpdate.jsp") >= 0)
				|| (requestURL.indexOf("updateManager") >= 0)
				|| (requestURL.indexOf("manager/managerUpdateSuccess.jsp") >= 0)
				|| (requestURL.indexOf("news/newsAdd.jsp") >= 0)
				|| (requestURL.indexOf("addNews") >= 0)
				|| (requestURL.indexOf("news/newsAddSuccess.jsp") >= 0)
				|| (requestURL.indexOf("news/newsQueries.jsp") >= 0)
				|| (requestURL.indexOf("deleteNews") >= 0)
				|| (requestURL.indexOf("news/newsUpdate.jsp") >= 0)
				|| (requestURL.indexOf("updateNews") >= 0)
				|| (requestURL.indexOf("news/newsUpdateSuccess.jsp") >= 0)
				|| (requestURL.indexOf("student/studentQueries.jsp") >= 0)
				|| (requestURL.indexOf("deleteStudent") >= 0)
				|| (requestURL.indexOf("student/studentUpdate.jsp") >= 0)
				|| (requestURL.indexOf("modifiedStudent") >= 0)
				|| (requestURL.indexOf("student/studentUpdateSuccess.jsp") >= 0)
				|| (requestURL.indexOf("teacher/teacherAdd.jsp") >= 0)
				|| (requestURL.indexOf("addTeacher") >= 0)
				|| (requestURL.indexOf("teacher/teacherAddSuccess.jsp") >= 0)
				|| (requestURL.indexOf("teacher/teacherInfo.jsp") >= 0)
				|| (requestURL.indexOf("teacher/teacherQueries.jsp") >= 0)
				|| (requestURL.indexOf("deleteTeacher") >= 0)
				|| (requestURL.indexOf("teacher/teacherUpdate.jsp") >= 0)
				|| (requestURL.indexOf("updateTeacher") >= 0)
				|| (requestURL.indexOf("teacher/teacherUpdateSuccess.jsp") >= 0)) {
			if ((((Teacher) request.getSession().getAttribute("teacher"))) != null) {
				if ((requestURL.indexOf("course/courseAdd.jsp") >= 0)
						|| (requestURL.indexOf("addCourse") >= 0)
						|| (requestURL.indexOf("course/courseAddSuccess.jsp") >= 0)
						|| (requestURL.indexOf("course/courseQueries.jsp") >= 0)
						|| (requestURL.indexOf("deleteCourse") >= 0)
						|| (requestURL.indexOf("course/courseUpdate.jsp") >= 0)
						|| (requestURL.indexOf("updateCourse") >= 0)
						|| (requestURL
								.indexOf("course/courseUpdateSuccess.jsp") >= 0)
						|| (requestURL.indexOf("grade/gradeAdd.jsp") >= 0)
						|| (requestURL.indexOf("addGrade") >= 0)
						|| (requestURL.indexOf("grade/gradeAddSuccess.jsp") >= 0)
						|| (requestURL.indexOf("grade/gradeQueries.jsp") >= 0)
						|| (requestURL.indexOf("deleteGrade") >= 0)
						|| (requestURL.indexOf("grade/gradeUpdate.jsp") >= 0)
						|| (requestURL.indexOf("updateGrade") >= 0)
						|| (requestURL.indexOf("grade/gradeUpdateSuccess.jsp") >= 0)
						|| (requestURL.indexOf("student/studentQueries.jsp") >= 0)
						|| (requestURL.indexOf("deleteStudent") >= 0)
						|| (requestURL.indexOf("student/studentUpdate.jsp") >= 0)
						|| (requestURL.indexOf("modifiedStudent") >= 0)
						|| (requestURL
								.indexOf("student/studentUpdateSuccess.jsp") >= 0)
						|| (requestURL.indexOf("teacher/teacherInfo.jsp") >= 0)) {
					// pass the request along the filter chain
					chain.doFilter(request, response);
				} else {
					response.getWriter().print(
							"<script>alert('教师不具有该系统功能的访问权限'); window.top.location.href='"
									+ basePath + "/teacher'</script>");
				}

			} else if ((((Manager) request.getSession().getAttribute("manager"))) != null) {
				if ((((Manager) request.getSession().getAttribute("manager"))
						.getManagerPosition()).equals("超级管理")) {
					// pass the request along the filter chain
					chain.doFilter(request, response);
				} else if ((((Manager) request.getSession().getAttribute(
						"manager")).getManagerPosition()).equals("公司管理")) {
					if ((requestURL.indexOf("company/companyAdd.jsp") >= 0)
							|| (requestURL.indexOf("addCompany") >= 0)
							|| (requestURL
									.indexOf("company/companyAddSuccess.jsp") >= 0)
							|| (requestURL
									.indexOf("company/companyQueries.jsp") >= 0)
							|| (requestURL.indexOf("deleteCompany") >= 0)
							|| (requestURL.indexOf("company/companyUpdate.jsp") >= 0)
							|| (requestURL.indexOf("updateCompany") >= 0)
							|| (requestURL
									.indexOf("company/companyUpdateSuccess.jsp") >= 0)
							|| (requestURL.indexOf("manager/managerInfo.jsp") >= 0)) {
						// pass the request along the filter chain
						chain.doFilter(request, response);
					} else {
						response.getWriter().print(
								"<script>alert('公司管理不具有该系统功能的访问权限'); window.top.location.href='"
										+ basePath + "/manager'</script>");
					}
				} else if ((((Manager) request.getSession().getAttribute(
						"manager")).getManagerPosition()).equals("课程管理")) {
					if ((requestURL.indexOf("course/courseAdd.jsp") >= 0)
							|| (requestURL.indexOf("addCourse") >= 0)
							|| (requestURL
									.indexOf("course/courseAddSuccess.jsp") >= 0)
							|| (requestURL.indexOf("course/courseQueries.jsp") >= 0)
							|| (requestURL.indexOf("deleteCourse") >= 0)
							|| (requestURL.indexOf("course/courseUpdate.jsp") >= 0)
							|| (requestURL.indexOf("updateCourse") >= 0)
							|| (requestURL
									.indexOf("course/courseUpdateSuccess.jsp") >= 0)
							|| (requestURL.indexOf("manager/managerInfo.jsp") >= 0)) {
						// pass the request along the filter chain
						chain.doFilter(request, response);
					} else {
						response.getWriter().print(
								"<script>alert('课程管理不具有该系统功能的访问权限'); window.top.location.href='"
										+ basePath + "/manager'</script>");
					}
				} else if ((((Manager) request.getSession().getAttribute(
						"manager")).getManagerPosition()).equals("班级管理")) {
					if ((requestURL.indexOf("grade/gradeAdd.jsp") >= 0)
							|| (requestURL.indexOf("addGrade") >= 0)
							|| (requestURL.indexOf("grade/gradeAddSuccess.jsp") >= 0)
							|| (requestURL.indexOf("grade/gradeQueries.jsp") >= 0)
							|| (requestURL.indexOf("deleteGrade") >= 0)
							|| (requestURL.indexOf("grade/gradeUpdate.jsp") >= 0)
							|| (requestURL.indexOf("updateGrade") >= 0)
							|| (requestURL
									.indexOf("grade/gradeUpdateSuccess.jsp") >= 0)
							|| (requestURL.indexOf("manager/managerInfo.jsp") >= 0)) {
						// pass the request along the filter chain
						chain.doFilter(request, response);
					} else {
						response.getWriter().print(
								"<script>alert('班级管理不具有该系统功能的访问权限'); window.top.location.href='"
										+ basePath + "/manager'</script>");
					}
				} else if ((((Manager) request.getSession().getAttribute(
						"manager")).getManagerPosition()).equals("职工管理")) {
					if ((requestURL.indexOf("manager/managerAdd.jsp") >= 0)
							|| (requestURL.indexOf("addManager") >= 0)
							|| (requestURL
									.indexOf("manager/managerAddSuccess.jsp") >= 0)
							|| (requestURL.indexOf("manager/managerInfo.jsp") >= 0)
							|| (requestURL
									.indexOf("manager/managerQueries.jsp") >= 0)
							|| (requestURL.indexOf("deleteManager") >= 0)
							|| (requestURL.indexOf("manager/managerUpdate.jsp") >= 0)
							|| (requestURL.indexOf("updateManager") >= 0)
							|| (requestURL
									.indexOf("manager/managerUpdateSuccess.jsp") >= 0)) {
						// pass the request along the filter chain
						chain.doFilter(request, response);
					} else {
						response.getWriter().print(
								"<script>alert('职工管理不具有该系统功能的访问权限'); window.top.location.href='"
										+ basePath + "/manager'</script>");
					}
				} else if ((((Manager) request.getSession().getAttribute(
						"manager")).getManagerPosition()).equals("新闻管理")) {
					if ((requestURL.indexOf("news/newsAdd.jsp") >= 0)
							|| (requestURL.indexOf("addNews") >= 0)
							|| (requestURL.indexOf("news/newsAddSuccess.jsp") >= 0)
							|| (requestURL.indexOf("news/newsQueries.jsp") >= 0)
							|| (requestURL.indexOf("deleteNews") >= 0)
							|| (requestURL.indexOf("news/newsUpdate.jsp") >= 0)
							|| (requestURL.indexOf("updateNews") >= 0)
							|| (requestURL
									.indexOf("news/newsUpdateSuccess.jsp") >= 0)
							|| (requestURL.indexOf("manager/managerInfo.jsp") >= 0)) {
						// pass the request along the filter chain
						chain.doFilter(request, response);
					} else {
						response.getWriter().print(
								"<script>alert('新闻管理不具有该系统功能的访问权限'); window.top.location.href='"
										+ basePath + "/manager'</script>");
					}
				} else if ((((Manager) request.getSession().getAttribute(
						"manager")).getManagerPosition()).equals("学生管理")) {
					if ((requestURL.indexOf("student/studentQueries.jsp") >= 0)
							|| (requestURL.indexOf("deleteStudent") >= 0)
							|| (requestURL.indexOf("student/studentUpdate.jsp") >= 0)
							|| (requestURL.indexOf("modifiedStudent") >= 0)
							|| (requestURL
									.indexOf("student/studentUpdateSuccess.jsp") >= 0)
							|| (requestURL.indexOf("manager/managerInfo.jsp") >= 0)) {
						// pass the request along the filter chain
						chain.doFilter(request, response);
					} else {
						response.getWriter().print(
								"<script>alert('学生管理不具有该系统功能的访问权限'); window.top.location.href='"
										+ basePath + "/manager'</script>");
					}
				} else if ((((Manager) request.getSession().getAttribute(
						"manager")).getManagerPosition()).equals("教师管理")) {
					if ((requestURL.indexOf("teacher/teacherAdd.jsp") >= 0)
							|| (requestURL.indexOf("addTeacher") >= 0)
							|| (requestURL
									.indexOf("teacher/teacherAddSuccess.jsp") >= 0)
							|| (requestURL
									.indexOf("teacher/teacherQueries.jsp") >= 0)
							|| (requestURL.indexOf("deleteTeacher") >= 0)
							|| (requestURL.indexOf("teacher/teacherUpdate.jsp") >= 0)
							|| (requestURL.indexOf("updateTeacher") >= 0)
							|| (requestURL
									.indexOf("teacher/teacherUpdateSuccess.jsp") >= 0)
							|| (requestURL.indexOf("manager/managerInfo.jsp") >= 0)) {
						// pass the request along the filter chain
						chain.doFilter(request, response);
					} else {
						response.getWriter().print(
								"<script>alert('教师管理不具有该系统功能的访问权限'); window.top.location.href='"
										+ basePath + "/manager'</script>");
					}
				}

			} else {
				response.getWriter().print(
						"<script>alert('登录之后才具有相应的访问权限'); window.top.location.href='"
								+ basePath + "/backstage'</script>");
			}
		} else {
			// pass the request along the filter chain
			chain.doFilter(request, response);
		}
	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
		// TODO Auto-generated method stub
	}

}
