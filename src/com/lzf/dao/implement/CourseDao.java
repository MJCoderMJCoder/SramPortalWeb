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

import com.lzf.dao.ICourseDao;
import com.lzf.entity.Course;
import com.lzf.util.ManageMySQL;

/**
 * @author zhifengfei 课程数据访问层
 */
public class CourseDao implements ICourseDao {

	@Override
	public int addCourse(Course course) {
		int i = 0; // i用来验证是否添加成功
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("insert into course values (?, ?, ?, ?, ?, ?)");
			pstmt.setString(1, course.getCourseId());
			pstmt.setString(2, course.getCourseName());
			pstmt.setString(3, course.getCourseDetail());
			pstmt.setString(4, course.getCourseSystem());
			pstmt.setString(5, course.getJobDirection());
			pstmt.setString(6, course.getCourseImage());
			i = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return i;
	}

	@Override
	public int deleteCourse(Course course) {
		int i = 0; // i用来验证是否删除成功
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("delete from course where courseId = ?");
			pstmt.setString(1, course.getCourseId());
			i = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return i;
	}

	@Override
	public int updateCourse(Course course) {
		int i = 0; // i用来验证是否更新成功
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("update course set courseName= ?, courseDetail = ?,"
							+ " courseSystem = ?, jobDirection = ?, courseImage = ? where courseId = ?");
			pstmt.setString(1, course.getCourseName());
			pstmt.setString(2, course.getCourseDetail());
			pstmt.setString(3, course.getCourseSystem());
			pstmt.setString(4, course.getJobDirection());
			pstmt.setString(5, course.getCourseImage());
			pstmt.setString(6, course.getCourseId());
			i = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return i;
	}

	@Override
	public Course select(Course course) {
		Course courseReturn = new Course(); // 返回查询结果（一个课程的全部信息）
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("select * from course where courseId = ?");
			pstmt.setString(1, course.getCourseId());
			ResultSet rs = pstmt.executeQuery(); // 获取查询结果集
			while (rs.next()) {
				courseReturn.setCourseId(rs.getString(1));
				courseReturn.setCourseName(rs.getString(2));
				courseReturn.setCourseDetail(rs.getString(3));
				courseReturn.setCourseSystem(rs.getString(4));
				courseReturn.setJobDirection(rs.getString(5));
				courseReturn.setCourseImage(rs.getString(6));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return courseReturn;
	}

	@Override
	public List<Course> queries(Course course) {
		List<Course> list = new ArrayList<Course>(); // 返回查询结果（一群课程的全部信息）
		try {
			Connection conn = ManageMySQL.getConnection();

			// 刘志峰心得体会：切记SQL语言必须以分句（以分句为整体）的换行，万不可乱换行而打乱SQL分句代码的整体性。
			PreparedStatement pstmt = conn
					.prepareStatement("select * from course where courseId like ? and "
							+ "courseName like ? and courseDetail like ? and courseSystem like ? and jobDirection like ?"
							+ " and courseImage like ? order by courseId desc");
			pstmt.setString(1, "%" + course.getCourseId() + "%");
			pstmt.setString(2, "%" + course.getCourseName() + "%");
			pstmt.setString(3, "%" + course.getCourseDetail() + "%");
			pstmt.setString(4, "%" + course.getCourseSystem() + "%");
			pstmt.setString(5, "%" + course.getJobDirection() + "%");
			pstmt.setString(6, "%" + course.getCourseImage() + "%");
			ResultSet rs = pstmt.executeQuery(); // 获取查询结果集
			while (rs.next()) {
				Course courseReturn = new Course();
				courseReturn.setCourseId(rs.getString(1));
				courseReturn.setCourseName(rs.getString(2));
				courseReturn.setCourseDetail(rs.getString(3));
				courseReturn.setCourseSystem(rs.getString(4));
				courseReturn.setJobDirection(rs.getString(5));
				courseReturn.setCourseImage(rs.getString(6));
				list.add(courseReturn);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return list;
	}
}
