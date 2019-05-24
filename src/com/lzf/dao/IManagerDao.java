/**
 * 
 */
package com.lzf.dao;

import java.util.List;

import com.lzf.entity.Manager;

/**
 * @author zhifengfei 管理员的数据访问层
 */
public interface IManagerDao {
	public int addManager(Manager manager); // 添加管理员

	public int deleteManager(Manager manager); // 删除管理员

	public int updateManager(Manager manager); // 修改管理员信息

	public Manager select(Manager manager); // 查询单个管理员

	public Manager login(Manager manager); // 查询单个管理员

	public List<Manager> queries(Manager manager); // 查询多个管理员
}
