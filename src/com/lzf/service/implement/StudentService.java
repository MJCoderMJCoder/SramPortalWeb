/**
 * 
 */
package com.lzf.service.implement;

import java.util.List;

import com.lzf.dao.IStudentDao;
import com.lzf.dao.implement.StudentDao;
import com.lzf.entity.Student;
import com.lzf.service.IStudentService;

/**
 * @author zhifengfei 学员的业务逻辑层
 */
public class StudentService implements IStudentService {

	IStudentDao studentDao = new StudentDao(); // 业务逻辑层通过接口（IStudentDao）与数据访问层交互

	@Override
	public int addStudent(Student student) {
		int i = studentDao.addStudent(student);
		return i;
	}

	@Override
	public int deleteStudent(Student student) {
		int i = studentDao.deleteStudent(student);
		return i;
	}

	@Override
	public int updateStudent(Student student) {
		int i = studentDao.updateStudent(student);
		return i;
	}

	@Override
	public Student select(Student student) {
		Student studentReturn = studentDao.select(student);
		return studentReturn;
	}

	@Override
	public Student login(Student student) {
		Student studentReturn = studentDao.login(student);
		return studentReturn;
	}

	@Override
	public List<Student> queries(Student student) {
		List<Student> list = studentDao.queries(student);
		return list;
	}

}
