/**
 * 
 */
package com.lzf.service;

import java.util.List;

import com.lzf.entity.Course;

/**
 * @author zhifengfei
 *	�γ̵�ҵ���߼���
 */
public interface ICourseService {
	public int addCourse(Course course); //��ӿγ�
	public int deleteCourse(Course course); //ɾ���γ�
	public int updateCourse(Course course); //�޸Ŀγ�
	public Course select(Course course); //��ѯ���ſγ�
	public List<Course> queries(Course course); //��ѯ���ſγ�
}
