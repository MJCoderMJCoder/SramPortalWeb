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

import com.lzf.dao.IManagerDao;
import com.lzf.entity.Manager;
import com.lzf.util.ManageMySQL;

/**
 * @author zhifengfei ����Ա���ݷ��ʲ�
 */
public class ManagerDao implements IManagerDao {

	@Override
	public int addManager(Manager manager) {
		int i = 0; // i������֤�Ƿ���ӳɹ�
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("insert into manager values (?, ?, ?, ?, ?, ?,"
							+ " ?, ?, ?, ?, ?)");
			pstmt.setString(1, manager.getId());
			pstmt.setString(2, manager.getName());
			pstmt.setString(3, manager.getGender());
			pstmt.setString(4, manager.getBirthday());
			pstmt.setString(5, manager.getPhone());
			pstmt.setString(6, manager.getAddress());
			pstmt.setString(7, manager.getSchool());
			pstmt.setString(8, manager.getImage());
			pstmt.setString(9, manager.getManagerId());
			pstmt.setString(10, manager.getManagerPassword());
			pstmt.setString(11, manager.getManagerPosition());
			i = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return i;
	}

	@Override
	public int deleteManager(Manager manager) {
		int i = 0; // i������֤�Ƿ�ɾ���ɹ�
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("delete from manager where id = ?");
			pstmt.setString(1, manager.getId());
			i = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return i;
	}

	@Override
	public int updateManager(Manager manager) {
		int i = 0; // i������֤�Ƿ���³ɹ�
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("update manager set name = ?, gender = ?,"
							+ " birthday = ?, phone = ?, address = ?, school = ?, image = ?, managerId = ?, "
							+ "managerPassword = ?, managerPosition = ? where id = ?");
			pstmt.setString(1, manager.getName());
			pstmt.setString(2, manager.getGender());
			pstmt.setString(3, manager.getBirthday());
			pstmt.setString(4, manager.getPhone());
			pstmt.setString(5, manager.getAddress());
			pstmt.setString(6, manager.getSchool());
			pstmt.setString(7, manager.getImage());
			pstmt.setString(8, manager.getManagerId());
			pstmt.setString(9, manager.getManagerPassword());
			pstmt.setString(10, manager.getManagerPosition());
			pstmt.setString(11, manager.getId());
			i = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return i;
	}

	@Override
	public Manager select(Manager manager) {
		Manager managerReturn = new Manager(); // ���ز�ѯ�����һ������Ա��ȫ����Ϣ��
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("select * from manager where id = ?");
			pstmt.setString(1, manager.getId());
			ResultSet rs = pstmt.executeQuery(); // ��ȡ��ѯ�����
			while (rs.next()) {
				managerReturn.setId(rs.getString(1));
				managerReturn.setName(rs.getString(2));
				managerReturn.setGender(rs.getString(3));
				managerReturn.setBirthday(rs.getString(4));
				managerReturn.setPhone(rs.getString(5));
				managerReturn.setAddress(rs.getString(6));
				managerReturn.setSchool(rs.getString(7));
				managerReturn.setImage(rs.getString(8));
				managerReturn.setManagerId(rs.getString(9));
				managerReturn.setManagerPassword(rs.getString(10));
				managerReturn.setManagerPosition(rs.getString(11));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return managerReturn;
	}

	@Override
	public Manager login(Manager manager) {
		Manager managerReturn = new Manager(); // ���ز�ѯ�����һ������Ա��ȫ����Ϣ��
		try {
			Connection conn = ManageMySQL.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("select * from manager where managerId = ?");
			pstmt.setString(1, manager.getManagerId());
			ResultSet rs = pstmt.executeQuery(); // ��ȡ��ѯ�����
			while (rs.next()) {
				managerReturn.setId(rs.getString(1));
				managerReturn.setName(rs.getString(2));
				managerReturn.setGender(rs.getString(3));
				managerReturn.setBirthday(rs.getString(4));
				managerReturn.setPhone(rs.getString(5));
				managerReturn.setAddress(rs.getString(6));
				managerReturn.setSchool(rs.getString(7));
				managerReturn.setImage(rs.getString(8));
				managerReturn.setManagerId(rs.getString(9));
				managerReturn.setManagerPassword(rs.getString(10));
				managerReturn.setManagerPosition(rs.getString(11));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return managerReturn;
	}

	@Override
	public List<Manager> queries(Manager manager) {
		List<Manager> list = new ArrayList<Manager>(); // ���ز�ѯ�������һȺ����Ա��ȫ����Ϣ��
		try {
			Connection conn = ManageMySQL.getConnection();

			// ��־���ĵ���᣺�м�SQL���Ա����Է־䣨�Է־�Ϊ���壩�Ļ��У��򲻿��һ��ж�����SQL�־����������ԡ�
			PreparedStatement pstmt = conn
					.prepareStatement("select * from manager where id like ? and name "
							+ "like ? and gender like ? and birthday like ? and phone like ? and address like ? and "
							+ "school like ? and managerId like ? and managerPosition like ? order by managerId desc");
			pstmt.setString(1, "%" + manager.getId() + "%");
			pstmt.setString(2, "%" + manager.getName() + "%");
			pstmt.setString(3, "%" + manager.getGender() + "%");
			pstmt.setString(4, "%" + manager.getBirthday() + "%");
			pstmt.setString(5, "%" + manager.getPhone() + "%");
			pstmt.setString(6, "%" + manager.getAddress() + "%");
			pstmt.setString(7, "%" + manager.getSchool() + "%");
			pstmt.setString(8, "%" + manager.getManagerId() + "%");
			pstmt.setString(9, "%" + manager.getManagerPosition() + "%");
			ResultSet rs = pstmt.executeQuery(); // ��ȡ��ѯ�����
			while (rs.next()) {
				Manager managerReturn = new Manager();
				managerReturn.setId(rs.getString(1));
				managerReturn.setName(rs.getString(2));
				managerReturn.setGender(rs.getString(3));
				managerReturn.setBirthday(rs.getString(4));
				managerReturn.setPhone(rs.getString(5));
				managerReturn.setAddress(rs.getString(6));
				managerReturn.setSchool(rs.getString(7));
				managerReturn.setImage(rs.getString(8));
				managerReturn.setManagerId(rs.getString(9));
				managerReturn.setManagerPassword(rs.getString(10));
				managerReturn.setManagerPosition(rs.getString(11));
				list.add(managerReturn);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ManageMySQL.closeDb();
		}
		return list;
	}
}
