package com.lzf.control.manager;

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

import com.lzf.entity.Manager;
import com.lzf.service.IManagerService;
import com.lzf.service.implement.ManagerService;

/**
 * Servlet implementation class ManagerServlet
 */
@WebServlet(description = "managerAdd", urlPatterns = { "/addManager" })
public class AddServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	IManagerService managerService = new ManagerService(); // ��ͼ��ͨ���ӿ���ҵ���߼��㽻��

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

		// �õ��ϴ��ļ��ı���Ŀ¼(���ϴ����ļ������WEB-INFĿ¼�£����������ֱ�ӷ��ʣ���֤�ϴ��ļ��İ�ȫ)
		String savePath = this.getServletContext()
				.getRealPath("/managerImages");
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
					// value = new String(value.getBytes("iso8859-1"),"UTF-8");
				} else {// ���fileitem�з�װ�����ϴ��ļ�
					name = item.getFieldName();
					// �õ��ϴ����ļ����ƣ�
					String filename = item.getName();
					if (filename == null || filename.trim().equals("")) {
						continue;
					}
					// ע�⣺��ͬ��������ύ���ļ����ǲ�һ���ģ���Щ������ύ�������ļ����Ǵ���·���ģ��磺
					// c:\a\b\1.txt������Щֻ�ǵ������ļ������磺1.txt
					// �����ȡ�����ϴ��ļ����ļ�����·�����֣�ֻ�����ļ�������
					value = map.get("managerId")
							+ filename.substring(filename.lastIndexOf("."));
					// ��ȡitem�е��ϴ��ļ���������
					InputStream in = item.getInputStream();
					// ����һ���ļ������
					FileOutputStream out = new FileOutputStream(savePath + "\\"
							+ value);
					// ����һ��������
					byte buffer[] = new byte[1024];
					// �ж��������е������Ƿ��Ѿ�����ı�ʶ
					int len = 0;
					// ѭ�������������뵽���������У�(len=in.read(buffer))>0�ͱ�ʾin���滹������
					while ((len = in.read(buffer)) > 0) {
						// ʹ��FileOutputStream�������������������д�뵽ָ����Ŀ¼(savePath + "\\"
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
				map.put(name, value);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		Manager manager = new Manager(map.get("id"), map.get("name"),
				map.get("gender"), map.get("birthday").replace("-", ""),
				map.get("phone"), map.get("address"), map.get("school"),
				map.get("managerImage"), map.get("managerId"),
				map.get("managerPassword"), map.get("managerPosition"));
		request.setAttribute("manager", manager);
		int i = managerService.addManager(manager);
		response.setContentType("text/html; charset=GBK");
		request.setCharacterEncoding("GBK");
		if (i == 1) {
			request.getRequestDispatcher(
					"manager/managerAddSuccess.jsp?liuzhifeng=" + Math.random())
					.forward(request, response);
		} else {
			response.getWriter()
					.print("<script>alert('�ܱ�Ǹ�����ʧ��'); window.location.href='manager/managerAdd.jsp?liuzhifeng='+Math.random();</script>");
		}
	}
}