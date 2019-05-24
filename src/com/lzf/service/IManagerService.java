/**
 * 
 */
package com.lzf.service;

import java.util.List;

import com.lzf.entity.Manager;

/**
 * @author zhifengfei ����Ա��ҵ���߼���
 */
public interface IManagerService {
	public int addManager(Manager manager); // ��ӹ���Ա

	public int deleteManager(Manager manager); // ɾ������Ա

	public int updateManager(Manager manager); // �޸Ĺ���Ա��Ϣ

	public Manager select(Manager manager); // ��ѯ��������Ա

	public Manager login(Manager manager); // ��ѯ��������Ա

	public List<Manager> queries(Manager manager); // ��ѯ�������Ա
}
