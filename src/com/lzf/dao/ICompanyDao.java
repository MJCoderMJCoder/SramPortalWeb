/**
 * 
 */
package com.lzf.dao;

import java.util.List;

import com.lzf.entity.Company;

/**
 * @author zhifengfei ��˾����飩�����ݷ��ʲ�
 */
public interface ICompanyDao {
	public int addCompany(Company company); // ��ӹ�˾�����Ϣ

	public int deleteCompany(Company company); // ɾ����˾�����Ϣ

	public int updateCompany(Company company); // �޸Ĺ�˾�����Ϣ

	public Company select(Company company); // ��ѯ������˾�����Ϣ

	public List<Company> queries(Company company); // ��ѯ�����˾�����Ϣ
}
