/**
 * 
 */
package com.lzf.service;

import java.util.List;

import com.lzf.entity.Manager;

/**
 * @author zhifengfei 管理员的业务逻辑层
 */
public interface IManagerService {
	public int addManager(Manager manager); // 添加管理员

	public int deleteManager(Manager manager); // 删除管理员

	public int updateManager(Manager manager); // 修改管理员信息

	public Manager select(Manager manager); // 查询单个管理员

	public Manager login(Manager manager); // 查询单个管理员

	public List<Manager> queries(Manager manager); // 查询多个管理员
}
