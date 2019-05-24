/**
 * 
 */
package com.lzf.service;

import java.util.List;

import com.lzf.entity.Company;

/**
 * @author zhifengfei
 *	公司（简介）的业务逻辑层
 */
public interface ICompanyService {
	public int addCompany(Company company); //添加公司简介信息
	public int deleteCompany(Company company); //删除公司简介信息
	public int updateCompany(Company company); //修改公司简介信息
	public Company select(Company company); //查询单个公司简介信息
	public List<Company> queries(Company company); //查询多个公司简介信息
}
