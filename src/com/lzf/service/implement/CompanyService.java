/**
 * 
 */
package com.lzf.service.implement;

import java.util.List;

import com.lzf.dao.ICompanyDao;
import com.lzf.dao.implement.CompanyDao;
import com.lzf.entity.Company;
import com.lzf.service.ICompanyService;

/**
 * @author zhifengfei
 *	课程的业务逻辑层
 */
public class CompanyService implements ICompanyService {
	
	ICompanyDao companyDao = new CompanyDao();	//业务逻辑层通过接口（ICompanyDao）与数据访问层交互

	@Override
	public int addCompany(Company company) {
		int i = companyDao.addCompany(company);
		return i;
	}

	@Override
	public int deleteCompany(Company company) {
		int i = companyDao.deleteCompany(company);
		return i;
	}

	@Override
	public int updateCompany(Company company) {
		int i = companyDao.updateCompany(company);
		return i;
	}

	@Override
	public Company select(Company company) {
		Company companyReturn = companyDao.select(company);
		return companyReturn;
	}

	@Override
	public List<Company> queries(Company company) {
		List<Company> list = companyDao.queries(company);
		return list;
	}
}
