/**
 * 
 */
package com.lzf.service;

import java.util.List;

import com.lzf.entity.Teacher;

/**
 * @author zhifengfei 教师的业务逻辑层
 */
public interface ITeacherService {
	public int addTeacher(Teacher teacher); // 添加教师

	public int deleteTeacher(Teacher teacher); // 删除教师

	public int updateTeacher(Teacher teacher); // 修改教师信息

	public Teacher select(Teacher teacher); // 查询单个教师

	public Teacher login(Teacher teacher); // 查询单个教师

	public List<Teacher> queries(Teacher teacher); // 查询多个教师
}
