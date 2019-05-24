/**
 * 
 */
package com.lzf.entity;

/**
 * @author zhifengfei
 *	管理员（包括班主任）实体类
 */
public class Manager extends Person {

	/**
	 * @param id
	 * @param name
	 * @param gender
	 * @param birthday
	 * @param phone
	 * @param address
	 * @param school
	 * @param image
	 */
	private String managerId; //管理员账号
	private String managerPassword; //管理员密码
	private String managerPosition; //管理员职位（管理员权限）
	
	public String getManagerId() {
		return managerId;
	}
	public void setManagerId(String managerId) {
		this.managerId = managerId;
	}
	public String getManagerPassword() {
		return managerPassword;
	}
	public void setManagerPassword(String managerPassword) {
		this.managerPassword = managerPassword;
	}
	public String getManagerPosition() {
		return managerPosition;
	}
	public void setManagerPosition(String managerPosition) {
		this.managerPosition = managerPosition;
	}
	
	//构造函数
	public Manager() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Manager(String id, String name, String gender, String birthday,
			String phone, String address, String school, String image,
			String managerId, String managerPassword, String managerPosition) {
		super(id, name, gender, birthday, phone, address, school, image);
		this.managerId = managerId;
		this.managerPassword = managerPassword;
		this.managerPosition = managerPosition;
	}
	
	//toString()方法;
	@Override
	public String toString() {
		return "Manager [managerId=" + managerId + ", managerPassword="
				+ managerPassword + ", managerPosition=" + managerPosition
				+ ", toString()=" + super.toString() + "]";
	}
}
