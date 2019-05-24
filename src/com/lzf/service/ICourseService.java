/**
 * 
 */
package com.lzf.service;

import java.util.List;

import com.lzf.entity.Course;

/**
 * @author zhifengfei
 *	课程的业务逻辑层
 */
public interface ICourseService {
	public int addCourse(Course course); //添加课程
	public int deleteCourse(Course course); //删除课程
	public int updateCourse(Course course); //修改课程
	public Course select(Course course); //查询单门课程
	public List<Course> queries(Course course); //查询多门课程
}
