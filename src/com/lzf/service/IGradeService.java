/**
 * 
 */
package com.lzf.service;

import java.util.List;

import com.lzf.entity.Grade;

/**
 * @author zhifengfei
 *	班级的业务逻辑层
 */
public interface IGradeService {
	public int addGrade(Grade grade); //添加班级
	public int deleteGrade(Grade grade); //删除班级
	public int updateGrade(Grade grade); //修改班级
	public Grade select(Grade grade); //查询单个班级
	public List<Grade> queries(Grade grade); //查询多个班级
}
