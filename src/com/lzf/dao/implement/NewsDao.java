/**
 * 
 */
package com.lzf.dao.implement;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.lzf.dao.INewsDao;
import com.lzf.entity.News;
import com.lzf.util.ManageMySQL;

/**
 * @author zhifengfei ������Ϣ�����ݷ��ʲ�
 */
public class NewsDao implements INewsDao {

	@Override
	public int addNews(News news) {
		int i = 0; // i������֤�Ƿ���ӳɹ�
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("insert into news values (?, ?, ?, ?)");
			pstmt.setString(1, news.getNewsId());
			pstmt.setString(2, news.getNewsTitle());
			pstmt.setString(3, news.getNewsDetail());
			pstmt.setString(4, news.getNewsImage());
			i = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return i;
	}

	@Override
	public int deleteNews(News news) {
		int i = 0; // i������֤�Ƿ�ɾ���ɹ�
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("delete from news where newsId = ?");
			pstmt.setString(1, news.getNewsId());
			i = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return i;
	}

	@Override
	public int updateNews(News news) {
		int i = 0; // i������֤�Ƿ���³ɹ�
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("update news set newsTitle= ?, newsDetail = ?,"
							+ " newsImage = ? where newsId = ?");
			pstmt.setString(1, news.getNewsTitle());
			pstmt.setString(2, news.getNewsDetail());
			pstmt.setString(3, news.getNewsImage());
			pstmt.setString(4, news.getNewsId());
			i = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return i;
	}

	@Override
	public News select(News news) {
		News newsReturn = new News(); // ���ز�ѯ�����һ���γ̵�ȫ����Ϣ��
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("select * from news where newsId = ?");
			pstmt.setString(1, news.getNewsId());
			ResultSet rs = pstmt.executeQuery(); // ��ȡ��ѯ�����
			while (rs.next()) {
				newsReturn.setNewsId(rs.getString(1));
				newsReturn.setNewsTitle(rs.getString(2));
				newsReturn.setNewsDetail(rs.getString(3));
				newsReturn.setNewsImage(rs.getString(4));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return newsReturn;
	}

	@Override
	public List<News> queries(News news) {
		List<News> list = new ArrayList<News>(); // ���ز�ѯ�����һȺ�γ̵�ȫ����Ϣ��
		try {
			Connection conn = ManageMySQL.getConnection();

			// ��־���ĵ���᣺�м�SQL���Ա����Է־䣨�Է־�Ϊ���壩�Ļ��У��򲻿��һ��ж�����SQL�־����������ԡ�
			PreparedStatement pstmt = conn
					.prepareStatement("select * from news where newsId like ? and "
							+ "newsTitle like ? and newsDetail like ? and newsImage like ? order by newsId desc");
			pstmt.setString(1, "%" + news.getNewsId() + "%");
			pstmt.setString(2, "%" + news.getNewsTitle() + "%");
			pstmt.setString(3, "%" + news.getNewsDetail() + "%");
			pstmt.setString(4, "%" + news.getNewsImage() + "%");
			ResultSet rs = pstmt.executeQuery(); // ��ȡ��ѯ�����
			while (rs.next()) {
				News newsReturn = new News();
				newsReturn.setNewsId(rs.getString(1));
				newsReturn.setNewsTitle(rs.getString(2));
				newsReturn.setNewsDetail(rs.getString(3));
				newsReturn.setNewsImage(rs.getString(4));
				list.add(newsReturn);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return list;
	}
}
