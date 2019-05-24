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

import com.lzf.dao.ITeacherDao;
import com.lzf.entity.Course;
import com.lzf.entity.Grade;
import com.lzf.entity.Teacher;
import com.lzf.util.ManageMySQL;

/**
 * @author zhifengfei 教师数据访问层(只有查询是从视图中得到数据)
 */
public class TeacherDao implements ITeacherDao {

	@Override
	public int addTeacher(Teacher teacher) {
		int i = 0; // i用来验证是否添加成功
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("insert into teacher values (?, ?, ?, ?, ?, ?,"
							+ " ?, ?, ?, ?, ?, ?)");
			pstmt.setString(1, teacher.getId());
			pstmt.setString(2, teacher.getName());
			pstmt.setString(3, teacher.getGender());
			pstmt.setString(4, teacher.getBirthday());
			pstmt.setString(5, teacher.getPhone());
			pstmt.setString(6, teacher.getAddress());
			pstmt.setString(7, teacher.getSchool());
			pstmt.setString(8, teacher.getImage());
			pstmt.setString(9, teacher.getTeacherId());
			pstmt.setString(10, teacher.getTeacherPassword());
			pstmt.setString(11, teacher.getTeacherGrade().getGradeId());
			pstmt.setString(12, teacher.getTeacherExperience());
			i = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return i;
	}

	@Override
	public int deleteTeacher(Teacher teacher) {
		int i = 0; // i用来验证是否删除成功
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("delete from teacher where id = ?");
			pstmt.setString(1, teacher.getId());
			i = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return i;
	}

	@Override
	public int updateTeacher(Teacher teacher) {
		int i = 0; // i用来验证是否更新成功
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("update teacher set name = ?, gender = ?,"
							+ " birthday = ?, phone = ?, address = ?, school = ?, image = ?, teacherId = ?, "
							+ "teacherPassword = ?, teacherGrade = ?, teacherExperience = ? where id = ?");
			pstmt.setString(1, teacher.getName());
			pstmt.setString(2, teacher.getGender());
			pstmt.setString(3, teacher.getBirthday());
			pstmt.setString(4, teacher.getPhone());
			pstmt.setString(5, teacher.getAddress());
			pstmt.setString(6, teacher.getSchool());
			pstmt.setString(7, teacher.getImage());
			pstmt.setString(8, teacher.getTeacherId());
			pstmt.setString(9, teacher.getTeacherPassword());
			pstmt.setString(10, teacher.getTeacherGrade().getGradeId());
			pstmt.setString(11, teacher.getTeacherExperience());
			pstmt.setString(12, teacher.getId());
			i = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return i;
	}

	@Override
	public Teacher select(Teacher teacher) {
		Teacher teacherReturn = new Teacher(); // 返回查询结果（一个管理员的全部信息）
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("select * from teacherGrade where id = ?");
			pstmt.setString(1, teacher.getId());
			ResultSet rs = pstmt.executeQuery(); // 获取查询结果集
			while (rs.next()) {
				Course course = new Course(rs.getString("courseId"),
						rs.getString("courseName"),
						rs.getString("courseDetail"),
						rs.getString("courseSystem"),
						rs.getString("jobDirection"),
						rs.getString("courseImage"));
				Grade grade = new Grade(rs.getString("gradeId"), course,
						rs.getString("gradeName"), rs.getString("gradeCount"));
				teacherReturn.setId(rs.getString("id"));
				teacherReturn.setName(rs.getString("name"));
				teacherReturn.setGender(rs.getString("gender"));
				teacherReturn.setBirthday(rs.getString("birthday"));
				teacherReturn.setPhone(rs.getString("phone"));
				teacherReturn.setAddress(rs.getString("address"));
				teacherReturn.setSchool(rs.getString("school"));
				teacherReturn.setImage(rs.getString("image"));
				teacherReturn.setTeacherId(rs.getString("teacherId"));
				teacherReturn.setTeacherPassword(rs
						.getString("teacherPassword"));
				teacherReturn.setTeacherGrade(grade);
				teacherReturn.setTeacherExperience(rs
						.getString("teacherExperience"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return teacherReturn;
	}

	@Override
	public Teacher login(Teacher teacher) {
		Teacher teacherReturn = new Teacher(); // 返回查询结果（一个管理员的全部信息）
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("select * from teacherGrade where teacherId = ?");
			pstmt.setString(1, teacher.getTeacherId());
			ResultSet rs = pstmt.executeQuery(); // 获取查询结果集
			while (rs.next()) {
				Course course = new Course(rs.getString("courseId"),
						rs.getString("courseName"),
						rs.getString("courseDetail"),
						rs.getString("courseSystem"),
						rs.getString("jobDirection"),
						rs.getString("courseImage"));
				Grade grade = new Grade(rs.getString("gradeId"), course,
						rs.getString("gradeName"), rs.getString("gradeCount"));
				teacherReturn.setId(rs.getString("id"));
				teacherReturn.setName(rs.getString("name"));
				teacherReturn.setGender(rs.getString("gender"));
				teacherReturn.setBirthday(rs.getString("birthday"));
				teacherReturn.setPhone(rs.getString("phone"));
				teacherReturn.setAddress(rs.getString("address"));
				teacherReturn.setSchool(rs.getString("school"));
				teacherReturn.setImage(rs.getString("image"));
				teacherReturn.setTeacherId(rs.getString("teacherId"));
				teacherReturn.setTeacherPassword(rs
						.getString("teacherPassword"));
				teacherReturn.setTeacherGrade(grade);
				teacherReturn.setTeacherExperience(rs
						.getString("teacherExperience"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return teacherReturn;
	}

	@Override
	public List<Teacher> queries(Teacher teacher) {
		List<Teacher> list = new ArrayList<Teacher>(); // 返回查询结果集（一群管理员的全部信息）
		try {
			Connection conn = ManageMySQL.getConnection();

			// 刘志峰心得体会：切记SQL语言必须以分句（以分句为整体）的换行，万不可乱换行而打乱SQL分句代码的整体性。
			PreparedStatement pstmt = conn
					.prepareStatement("select * from teacherGrade where id like ? and name "
							+ "like ? and gender like ? and birthday like ? and phone like ? and address like ? and "
							+ "school like ? and teacherId like ? and teacherExperience like ? and gradeId like ? and "
							+ "gradeName like ? and gradeCount like ? and courseId like ? and courseName like ? and "
							+ "courseDetail like ? and courseSystem like ? and jobDirection like ? order by teacherId desc");
			pstmt.setString(1, "%" + teacher.getId() + "%");
			pstmt.setString(2, "%" + teacher.getName() + "%");
			pstmt.setString(3, "%" + teacher.getGender() + "%");
			pstmt.setString(4, "%" + teacher.getBirthday() + "%");
			pstmt.setString(5, "%" + teacher.getPhone() + "%");
			pstmt.setString(6, "%" + teacher.getAddress() + "%");
			pstmt.setString(7, "%" + teacher.getSchool() + "%");
			pstmt.setString(8, "%" + teacher.getTeacherId() + "%");
			pstmt.setString(9, "%" + teacher.getTeacherExperience() + "%");
			pstmt.setString(10, "%" + teacher.getTeacherGrade().getGradeId()
					+ "%");
			pstmt.setString(11, "%" + teacher.getTeacherGrade().getGradeName()
					+ "%");
			pstmt.setString(12, "%" + teacher.getTeacherGrade().getGradeCount()
					+ "%");
			pstmt.setString(13, "%"
					+ teacher.getTeacherGrade().getGradeCourse().getCourseId()
					+ "%");
			pstmt.setString(14, "%"
					+ teacher.getTeacherGrade().getGradeCourse()
							.getCourseName() + "%");
			pstmt.setString(15, "%"
					+ teacher.getTeacherGrade().getGradeCourse()
							.getCourseDetail() + "%");
			pstmt.setString(16, "%"
					+ teacher.getTeacherGrade().getGradeCourse()
							.getCourseSystem() + "%");
			pstmt.setString(17, "%"
					+ teacher.getTeacherGrade().getGradeCourse()
							.getJobDirection() + "%");
			ResultSet rs = pstmt.executeQuery(); // 获取查询结果集
			while (rs.next()) {
				Course course = new Course(rs.getString("courseId"),
						rs.getString("courseName"),
						rs.getString("courseDetail"),
						rs.getString("courseSystem"),
						rs.getString("jobDirection"),
						rs.getString("courseImage"));
				Grade grade = new Grade(rs.getString("gradeId"), course,
						rs.getString("gradeName"), rs.getString("gradeCount"));

				Teacher teacherReturn = new Teacher();
				teacherReturn.setId(rs.getString("id"));
				teacherReturn.setName(rs.getString("name"));
				teacherReturn.setGender(rs.getString("gender"));
				teacherReturn.setBirthday(rs.getString("birthday"));
				teacherReturn.setPhone(rs.getString("phone"));
				teacherReturn.setAddress(rs.getString("address"));
				teacherReturn.setSchool(rs.getString("school"));
				teacherReturn.setImage(rs.getString("image"));
				teacherReturn.setTeacherId(rs.getString("teacherId"));
				teacherReturn.setTeacherPassword(rs
						.getString("teacherPassword"));
				teacherReturn.setTeacherGrade(grade);
				teacherReturn.setTeacherExperience(rs
						.getString("teacherExperience"));
				list.add(teacherReturn);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return list;
	}
}
