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

import com.lzf.dao.IStudentDao;
import com.lzf.entity.Course;
import com.lzf.entity.Grade;
import com.lzf.entity.Student;
import com.lzf.util.ManageMySQL;

/**
 * @author zhifengfei ѧԱ�����ݷ��ʲ�(ֻ�в�ѯ�Ǵ���ͼ�еõ�����)
 */
public class StudentDao implements IStudentDao {

	@Override
	public int addStudent(Student student) {
		int i = 0; // i������֤�Ƿ���ӳɹ�
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("insert into student values (?, ?, ?, ?,"
							+ " ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
			pstmt.setString(1, student.getId());
			pstmt.setString(2, student.getName());
			pstmt.setString(3, student.getGender());
			pstmt.setString(4, student.getBirthday());
			pstmt.setString(5, student.getPhone());
			pstmt.setString(6, student.getAddress());
			pstmt.setString(7, student.getSchool());
			pstmt.setString(8, student.getImage());
			pstmt.setString(9, student.getStuId());
			pstmt.setString(10, student.getStuPassword());
			pstmt.setString(11, student.getStuGrade().getGradeId());
			pstmt.setString(12, student.getStuJobCompany());
			pstmt.setString(13, student.getStuJobAddress());
			pstmt.setString(14, student.getStuJobPay());
			pstmt.setString(15, student.getStuJobTime());
			i = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return i;
	}

	@Override
	public int deleteStudent(Student student) {
		int i = 0; // i������֤�Ƿ�ɾ���ɹ�
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("delete from student where id = ?");
			pstmt.setString(1, student.getId());
			i = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return i;
	}

	@Override
	public int updateStudent(Student student) {
		int i = 0; // i������֤�Ƿ���³ɹ�
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("update student set name = ?, gender = ?,"
							+ " birthday = ?, phone = ?, address = ?, school = ?, image = ?, stuId = ?, "
							+ "stuPassword = ?, stuGrade = ?, stuJobCompany = ?, stuJobAddress = ?, "
							+ "stuJobPay = ?, stuJobTime = ? where id = ?");
			pstmt.setString(1, student.getName());
			pstmt.setString(2, student.getGender());
			pstmt.setString(3, student.getBirthday());
			pstmt.setString(4, student.getPhone());
			pstmt.setString(5, student.getAddress());
			pstmt.setString(6, student.getSchool());
			pstmt.setString(7, student.getImage());
			pstmt.setString(8, student.getStuId());
			pstmt.setString(9, student.getStuPassword());
			pstmt.setString(10, student.getStuGrade().getGradeId());
			pstmt.setString(11, student.getStuJobCompany());
			pstmt.setString(12, student.getStuJobAddress());
			pstmt.setString(13, student.getStuJobPay());
			pstmt.setString(14, student.getStuJobTime());
			pstmt.setString(15, student.getId());
			i = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return i;
	}

	@Override
	public Student select(Student student) {
		Student studentReturn = new Student(); // ���ز�ѯ�����һ���γ̵�ȫ����Ϣ��
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("select * from studentGrade where id = ?");
			pstmt.setString(1, student.getId());
			ResultSet rs = pstmt.executeQuery(); // ��ȡ��ѯ�����
			while (rs.next()) {
				Course course = new Course(rs.getString("courseId"),
						rs.getString("courseName"),
						rs.getString("courseDetail"),
						rs.getString("courseSystem"),
						rs.getString("jobDirection"),
						rs.getString("courseImage"));
				Grade grade = new Grade(rs.getString("gradeId"), course,
						rs.getString("gradeName"), rs.getString("gradeCount"));
				studentReturn.setId(rs.getString("id"));
				studentReturn.setName(rs.getString("name"));
				studentReturn.setGender(rs.getString("gender"));
				studentReturn.setBirthday(rs.getString("birthday"));
				studentReturn.setPhone(rs.getString("phone"));
				studentReturn.setAddress(rs.getString("address"));
				studentReturn.setSchool(rs.getString("school"));
				studentReturn.setImage(rs.getString("image"));
				studentReturn.setStuId(rs.getString("stuId"));
				studentReturn.setStuPassword(rs.getString("stuPassword"));
				studentReturn.setStuGrade(grade);
				studentReturn.setStuJobCompany(rs.getString("stuJobCompany"));
				studentReturn.setStuJobAddress(rs.getString("stuJobAddress"));
				studentReturn.setStuJobPay(rs.getString("stuJobPay"));
				studentReturn.setStuJobTime(rs.getString("stuJobTime"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return studentReturn;
	}

	@Override
	public Student login(Student student) {
		Student studentReturn = new Student(); // ���ز�ѯ�����һ���γ̵�ȫ����Ϣ��
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("select * from studentGrade where stuId = ?");
			pstmt.setString(1, student.getStuId());
			ResultSet rs = pstmt.executeQuery(); // ��ȡ��ѯ�����
			while (rs.next()) {
				Course course = new Course(rs.getString("courseId"),
						rs.getString("courseName"),
						rs.getString("courseDetail"),
						rs.getString("courseSystem"),
						rs.getString("jobDirection"),
						rs.getString("courseImage"));
				Grade grade = new Grade(rs.getString("gradeId"), course,
						rs.getString("gradeName"), rs.getString("gradeCount"));
				studentReturn.setId(rs.getString("id"));
				studentReturn.setName(rs.getString("name"));
				studentReturn.setGender(rs.getString("gender"));
				studentReturn.setBirthday(rs.getString("birthday"));
				studentReturn.setPhone(rs.getString("phone"));
				studentReturn.setAddress(rs.getString("address"));
				studentReturn.setSchool(rs.getString("school"));
				studentReturn.setImage(rs.getString("image"));
				studentReturn.setStuId(rs.getString("stuId"));
				studentReturn.setStuPassword(rs.getString("stuPassword"));
				studentReturn.setStuGrade(grade);
				studentReturn.setStuJobCompany(rs.getString("stuJobCompany"));
				studentReturn.setStuJobAddress(rs.getString("stuJobAddress"));
				studentReturn.setStuJobPay(rs.getString("stuJobPay"));
				studentReturn.setStuJobTime(rs.getString("stuJobTime"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return studentReturn;
	}

	@Override
	public List<Student> queries(Student student) {
		List<Student> list = new ArrayList<Student>(); // ���ز�ѯ�����һȺ�γ̵�ȫ����Ϣ��
		try {
			Connection conn = ManageMySQL.getConnection();

			// ��־���ĵ���᣺�м�SQL���Ա����Է־䣨�Է־�Ϊ���壩�Ļ��У��򲻿��һ��ж�����SQL�־����������ԡ�
			PreparedStatement pstmt = conn
					.prepareStatement("select * from studentGrade where id like ? and name "
							+ "like ? and gender like ? and birthday like ? and phone like ? and address like ? and "
							+ "school like ? and stuId like ? and stuJobCompany like ? and stuJobAddress like ? and "
							+ "stuJobPay like ? and stuJobTime like ?  and gradeId like ? and gradeName like ? and "
							+ "gradeCount like ? and courseId like ? and courseName like ? and courseDetail like ? and "
							+ "courseSystem like ? and jobDirection like ? order by stuId desc");
			pstmt.setString(1, "%" + student.getId() + "%");
			pstmt.setString(2, "%" + student.getName() + "%");
			pstmt.setString(3, "%" + student.getGender() + "%");
			pstmt.setString(4, "%" + student.getBirthday() + "%");
			pstmt.setString(5, "%" + student.getPhone() + "%");
			pstmt.setString(6, "%" + student.getAddress() + "%");
			pstmt.setString(7, "%" + student.getSchool() + "%");
			pstmt.setString(8, "%" + student.getStuId() + "%");
			pstmt.setString(9, "%" + student.getStuJobCompany() + "%");
			pstmt.setString(10, "%" + student.getStuJobAddress() + "%");
			pstmt.setString(11, "%" + student.getStuJobPay() + "%");
			pstmt.setString(12, "%" + student.getStuJobTime() + "%");
			pstmt.setString(13, "%" + student.getStuGrade().getGradeId() + "%");
			pstmt.setString(14, "%" + student.getStuGrade().getGradeName()
					+ "%");
			pstmt.setString(15, "%" + student.getStuGrade().getGradeCount()
					+ "%");
			pstmt.setString(16, "%"
					+ student.getStuGrade().getGradeCourse().getCourseId()
					+ "%");
			pstmt.setString(17, "%"
					+ student.getStuGrade().getGradeCourse().getCourseName()
					+ "%");
			pstmt.setString(18, "%"
					+ student.getStuGrade().getGradeCourse().getCourseDetail()
					+ "%");
			pstmt.setString(19, "%"
					+ student.getStuGrade().getGradeCourse().getCourseSystem()
					+ "%");
			pstmt.setString(20, "%"
					+ student.getStuGrade().getGradeCourse().getJobDirection()
					+ "%");
			ResultSet rs = pstmt.executeQuery(); // ��ȡ��ѯ�����
			while (rs.next()) {
				Course course = new Course(rs.getString("courseId"),
						rs.getString("courseName"),
						rs.getString("courseDetail"),
						rs.getString("courseSystem"),
						rs.getString("jobDirection"),
						rs.getString("courseImage"));
				Grade grade = new Grade(rs.getString("gradeId"), course,
						rs.getString("gradeName"), rs.getString("gradeCount"));

				Student studentReturn = new Student();
				studentReturn.setId(rs.getString("id"));
				studentReturn.setName(rs.getString("name"));
				studentReturn.setGender(rs.getString("gender"));
				studentReturn.setBirthday(rs.getString("birthday"));
				studentReturn.setPhone(rs.getString("phone"));
				studentReturn.setAddress(rs.getString("address"));
				studentReturn.setSchool(rs.getString("school"));
				studentReturn.setImage(rs.getString("image"));
				studentReturn.setStuId(rs.getString("stuId"));
				studentReturn.setStuPassword(rs.getString("stuPassword"));
				studentReturn.setStuGrade(grade);
				studentReturn.setStuJobCompany(rs.getString("stuJobCompany"));
				studentReturn.setStuJobAddress(rs.getString("stuJobAddress"));
				studentReturn.setStuJobPay(rs.getString("stuJobPay"));
				studentReturn.setStuJobTime(rs.getString("stuJobTime"));
				list.add(studentReturn);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return list;
	}

}
