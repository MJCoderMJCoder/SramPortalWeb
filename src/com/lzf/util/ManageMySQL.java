/**
 * 
 */
package com.lzf.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * @author zhifengfei
 *
 */
public class ManageMySQL {
	
	private static Connection conn = null;
	private static PreparedStatement pstmt = null;
	private static ResultSet rs = null;
	private static String dbDriver = "com.mysql.jdbc.Driver";
	private static String dbUrl = "jdbc:mysql://localhost:3306/sramportal?useUnicode=true&characterEncoding=GBK";
	
	//获取数据库连接
	public static Connection getConnection(){
		try {
			Class.forName(dbDriver);
			conn = DriverManager.getConnection(dbUrl, "root","6003"); 
		} catch (Exception e) { 
			e.printStackTrace();
		}
		return conn;
	}
	
	//关闭数据库
	public static void closeDb() {
		try {
			if(rs!=null) {
				rs.close();
			}
			if(pstmt!=null) {
				pstmt.close();
			}
			if(conn!=null) {
				conn.close();
			} 
		} catch (SQLException e) { 
			e.printStackTrace();
		}
	}
}
