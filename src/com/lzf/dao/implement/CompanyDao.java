/**
 * 
 */
package com.lzf.dao.implement;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.lzf.dao.ICompanyDao;
import com.lzf.entity.Company;
import com.lzf.util.ManageMySQL;

/**
 * @author zhifengfei 公司的数据访问层
 */
public class CompanyDao implements ICompanyDao {

	@Override
	public int addCompany(Company company) {
		int i = 0; // i用来验证是否添加成功
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("insert into company values (?, ?, ?, ?)");
			pstmt.setString(1, company.getCompanyId());
			pstmt.setString(2, company.getCompanyName());
			pstmt.setString(3, company.getCompanyIntro());
			pstmt.setString(4, company.getCompanyImage());
			i = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return i;
	}

	@Override
	public int deleteCompany(Company company) {
		int i = 0; // i用来验证是否删除成功
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("delete from company where companyId = ?");
			pstmt.setString(1, company.getCompanyId());
			i = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return i;
	}

	@Override
	public int updateCompany(Company company) {
		int i = 0; // i用来验证是否更新成功
		try {
			Connection conn = ManageMySQL.getConnection();

			PreparedStatement pstmt = conn
					.prepareStatement("update company set companyName= ?, "
							+ "companyIntro = ?, companyImage = ? where companyId = ?");
			pstmt.setString(1, company.getCompanyName());
			pstmt.setString(2, company.getCompanyIntro());
			pstmt.setString(3, company.getCompanyImage());
			pstmt.setString(4, company.getCompanyId());
			i = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return i;
	}

	@Override
	public Company select(Company company) {
		Company companyReturn = new Company(); // 返回查询结果（一个课程的全部信息）
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("select * from company where companyId = ?");
			pstmt.setString(1, company.getCompanyId());
			ResultSet rs = pstmt.executeQuery(); // 获取查询结果集
			while (rs.next()) {
				companyReturn.setCompanyId(rs.getString(1));
				companyReturn.setCompanyName(rs.getString(2));
				companyReturn.setCompanyIntro(rs.getString(3));
				companyReturn.setCompanyImage(rs.getString(4));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return companyReturn;
	}

	@Override
	public List<Company> queries(Company company) {
		List<Company> list = new ArrayList<Company>(); // 返回查询结果（一群课程的全部信息）
		try {
			Connection conn = ManageMySQL.getConnection();

			// 刘志峰心得体会：切记SQL语言必须以分句（以分句为整体）的换行，万不可乱换行而打乱SQL分句代码的整体性。
			PreparedStatement pstmt = conn
					.prepareStatement("select * from company where companyId like ? and "
							+ "companyName like ? and companyIntro like ? and companyImage like ? order by companyId desc");
			pstmt.setString(1, "%" + company.getCompanyId() + "%");
			pstmt.setString(2, "%" + company.getCompanyName() + "%");
			pstmt.setString(3, "%" + company.getCompanyIntro() + "%");
			pstmt.setString(4, "%" + company.getCompanyImage() + "%");
			ResultSet rs = pstmt.executeQuery(); // 获取查询结果集
			while (rs.next()) {
				Company companyReturn = new Company();
				companyReturn.setCompanyId(rs.getString(1));
				companyReturn.setCompanyName(rs.getString(2));
				companyReturn.setCompanyIntro(rs.getString(3));
				companyReturn.setCompanyImage(rs.getString(4));
				list.add(companyReturn);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return list;
	}
}
