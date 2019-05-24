/**
 * 
 */
package com.lzf.service.implement;

import java.util.List;

import com.lzf.dao.IManagerDao;
import com.lzf.dao.implement.ManagerDao;
import com.lzf.entity.Manager;
import com.lzf.service.IManagerService;

/**
 * @author zhifengfei 管理员的业务逻辑层
 */
public class ManagerService implements IManagerService {

	IManagerDao managerDao = new ManagerDao(); // 业务逻辑层通过接口（IManagerDao）与数据访问层交互

	@Override
	public int addManager(Manager manager) {
		int i = managerDao.addManager(manager);
		return i;
	}

	@Override
	public int deleteManager(Manager manager) {
		int i = managerDao.deleteManager(manager);
		return i;
	}

	@Override
	public int updateManager(Manager manager) {
		int i = managerDao.updateManager(manager);
		return i;
	}

	@Override
	public Manager select(Manager manager) {
		Manager managerReturn = managerDao.select(manager);
		return managerReturn;
	}

	@Override
	public Manager login(Manager manager) {
		Manager managerReturn = managerDao.login(manager);
		return managerReturn;
	}

	@Override
	public List<Manager> queries(Manager manager) {
		List<Manager> list = managerDao.queries(manager);
		return list;
	}

}
