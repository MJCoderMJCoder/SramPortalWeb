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

import com.lzf.dao.IGradeDao;
import com.lzf.entity.Course;
import com.lzf.entity.Grade;
import com.lzf.util.ManageMySQL;

/**
 * @author zhifengfei �༶�����ݷ��ʲ�(����ͼ�в�ѯ)
 */
public class GradeDao implements IGradeDao {

	@Override
	public int addGrade(Grade grade) {
		int i = 0; // i������֤�Ƿ���ӳɹ�
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("insert into grade values (?, ?, ?, ?)");
			pstmt.setString(1, grade.getGradeId());
			pstmt.setString(2, grade.getGradeCourse().getCourseId());
			pstmt.setString(3, grade.getGradeName());
			pstmt.setString(4, grade.getGradeCount());
			i = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return i;
	}

	@Override
	public int deleteGrade(Grade grade) {
		int i = 0; // i������֤�Ƿ�ɾ���ɹ�
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("delete from grade where gradeId = ?");
			pstmt.setString(1, grade.getGradeId());
			i = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return i;
	}

	@Override
	public int updateGrade(Grade grade) {
		int i = 0; // i������֤�Ƿ���³ɹ�
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("update grade set gradeCourse= ?, gradeName = ?,"
							+ " gradeCount = ? where gradeId = ?");
			pstmt.setString(1, grade.getGradeCourse().getCourseId());
			pstmt.setString(2, grade.getGradeName());
			pstmt.setString(3, grade.getGradeCount());
			pstmt.setString(4, grade.getGradeId());
			i = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return i;
	}

	@Override
	public Grade select(Grade grade) {
		Grade gradeReturn = new Grade(); // ���ز�ѯ�����һ���γ̵�ȫ����Ϣ��
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("select * from gradeCourse where gradeId = ?");
			pstmt.setString(1, grade.getGradeId());
			ResultSet rs = pstmt.executeQuery(); // ��ȡ��ѯ�����
			while (rs.next()) {
				Course course = new Course(rs.getString("courseId"),
						rs.getString("courseName"),
						rs.getString("courseDetail"),
						rs.getString("courseSystem"),
						rs.getString("jobDirection"),
						rs.getString("courseImage"));
				gradeReturn.setGradeId(rs.getString("gradeId"));
				gradeReturn.setGradeCourse(course);
				gradeReturn.setGradeName(rs.getString("gradeName"));
				gradeReturn.setGradeCount(rs.getString("gradeCount"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return gradeReturn;
	}

	@Override
	public List<Grade> queries(Grade grade) {
		List<Grade> list = new ArrayList<Grade>(); // ���ز�ѯ�����һȺ�γ̵�ȫ����Ϣ��
		try {
			Connection conn = ManageMySQL.getConnection();

			// ��־���ĵ���᣺�м�SQL���Ա����Է־䣨�Է־�Ϊ���壩�Ļ��У��򲻿��һ��ж�����SQL�־����������ԡ�
			PreparedStatement pstmt = conn
					.prepareStatement("select * from gradeCourse "
							+ "where gradeId like ? and gradeName like ? and gradeCount like ? and courseId like ? "
							+ "and courseName like ? and courseDetail like ? and courseSystem like ? "
							+ "and jobDirection like ? order by gradeId desc");
			pstmt.setString(1, "%" + grade.getGradeId() + "%");
			pstmt.setString(2, "%" + grade.getGradeName() + "%");
			pstmt.setString(3, "%" + grade.getGradeCount() + "%");
			pstmt.setString(4, "%" + grade.getGradeCourse().getCourseId() + "%");
			pstmt.setString(5, "%" + grade.getGradeCourse().getCourseName()
					+ "%");
			pstmt.setString(6, "%" + grade.getGradeCourse().getCourseDetail()
					+ "%");
			pstmt.setString(7, "%" + grade.getGradeCourse().getCourseSystem()
					+ "%");
			pstmt.setString(8, "%" + grade.getGradeCourse().getJobDirection()
					+ "%");
			ResultSet rs = pstmt.executeQuery(); // ��ȡ��ѯ�����
			while (rs.next()) {
				Grade gradeReturn = new Grade();
				Course course = new Course(rs.getString("courseId"),
						rs.getString("courseName"),
						rs.getString("courseDetail"),
						rs.getString("courseSystem"),
						rs.getString("jobDirection"),
						rs.getString("courseImage"));
				gradeReturn.setGradeId(rs.getString("gradeId"));
				gradeReturn.setGradeCourse(course);
				gradeReturn.setGradeName(rs.getString("gradeName"));
				gradeReturn.setGradeCount(rs.getString("gradeCount"));
				list.add(gradeReturn);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return list;
	}
}
