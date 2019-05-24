/**
 * 
 */
package com.lzf.service.implement;

import java.util.List;

import com.lzf.dao.ICourseDao;
import com.lzf.dao.implement.CourseDao;
import com.lzf.entity.Course;
import com.lzf.service.ICourseService;

/**
 * @author zhifengfei
 *	课程的业务逻辑层
 */
public class CourseService implements ICourseService {
	
	ICourseDao courseDao = new CourseDao(); //业务逻辑层通过接口（ICourseDao）与数据访问层交互

	@Override
	public int addCourse(Course course) {
		int i = courseDao.addCourse(course);
		return i;
	}

	@Override
	public int deleteCourse(Course course) {
		int i = courseDao.deleteCourse(course);
		return i;
	}

	@Override
	public int updateCourse(Course course) {
		int i = courseDao.updateCourse(course);
		return i;
	}

	@Override
	public Course select(Course course) {
		Course courseReturn = courseDao.select(course);
		return courseReturn;
	}

	@Override
	public List<Course> queries(Course course) {
		List<Course> list = courseDao.queries(course);
		return list;
	}

}
