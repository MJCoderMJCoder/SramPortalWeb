/**
 * 
 */
package com.lzf.service.implement;

import java.util.List;

import com.lzf.dao.ITeacherDao;
import com.lzf.dao.implement.TeacherDao;
import com.lzf.entity.Teacher;
import com.lzf.service.ITeacherService;
import com.sun.org.apache.bcel.internal.generic.DLOAD;

/**
 * @author zhifengfei 教师的业务逻辑层
 */
public class TeacherService implements ITeacherService {

	ITeacherDao teacherDao = new TeacherDao(); // 业务逻辑层通过接口（ITeacherDao）与数据访问层交互

	@Override
	public int addTeacher(Teacher teacher) {
		int i = teacherDao.addTeacher(teacher);
		return i;
	}

	@Override
	public int deleteTeacher(Teacher teacher) {
		int i = teacherDao.deleteTeacher(teacher);
		return i;
	}

	@Override
	public int updateTeacher(Teacher teacher) {
		int i = teacherDao.updateTeacher(teacher);
		return i;
	}

	@Override
	public Teacher select(Teacher teacher) {
		Teacher teacherReturn = teacherDao.select(teacher);
		return teacherReturn;
	}

	@Override
	public Teacher login(Teacher teacher) {
		Teacher teacherReturn = teacherDao.login(teacher);
		return teacherReturn;
	}

	@Override
	public List<Teacher> queries(Teacher teacher) {
		List<Teacher> list = teacherDao.queries(teacher);
		return list;
	}
}
