/**
 * 
 */
package com.lzf.dao;

import java.util.List;

import com.lzf.entity.Company;

/**
 * @author zhifengfei 公司（简介）的数据访问层
 */
public interface ICompanyDao {
	public int addCompany(Company company); // 添加公司简介信息

	public int deleteCompany(Company company); // 删除公司简介信息

	public int updateCompany(Company company); // 修改公司简介信息

	public Company select(Company company); // 查询单个公司简介信息

	public List<Company> queries(Company company); // 查询多个公司简介信息
}
