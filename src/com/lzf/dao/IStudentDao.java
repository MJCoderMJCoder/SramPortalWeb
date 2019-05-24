/**
 * 
 */
package com.lzf.dao;

import java.util.List;

import com.lzf.entity.Student;

/**
 * @author zhifengfei 学员的数据访问层
 */
public interface IStudentDao {
	public int addStudent(Student student); // 添加学员

	public int deleteStudent(Student student); // 删除学员

	public int updateStudent(Student student); // 修改学员

	public Student select(Student student); // 查询单个学员

	public Student login(Student student); // 查询单个学员(登录的时候)

	public List<Student> queries(Student student); // 查询多个学员
}
