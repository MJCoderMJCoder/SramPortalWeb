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
 * @author zhifengfei 新闻消息的数据访问层
 */
public class NewsDao implements INewsDao {

	@Override
	public int addNews(News news) {
		int i = 0; // i用来验证是否添加成功
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
		int i = 0; // i用来验证是否删除成功
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
		int i = 0; // i用来验证是否更新成功
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
		News newsReturn = new News(); // 返回查询结果（一个课程的全部信息）
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("select * from news where newsId = ?");
			pstmt.setString(1, news.getNewsId());
			ResultSet rs = pstmt.executeQuery(); // 获取查询结果集
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
		List<News> list = new ArrayList<News>(); // 返回查询结果（一群课程的全部信息）
		try {
			Connection conn = ManageMySQL.getConnection();

			// 刘志峰心得体会：切记SQL语言必须以分句（以分句为整体）的换行，万不可乱换行而打乱SQL分句代码的整体性。
			PreparedStatement pstmt = conn
					.prepareStatement("select * from news where newsId like ? and "
							+ "newsTitle like ? and newsDetail like ? and newsImage like ? order by newsId desc");
			pstmt.setString(1, "%" + news.getNewsId() + "%");
			pstmt.setString(2, "%" + news.getNewsTitle() + "%");
			pstmt.setString(3, "%" + news.getNewsDetail() + "%");
			pstmt.setString(4, "%" + news.getNewsImage() + "%");
			ResultSet rs = pstmt.executeQuery(); // 获取查询结果集
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
