/**
 * 
 */
package com.lzf.entity;

/**
 * @author zhifengfei
 *	学员实体类
 */
public class Student extends Person {

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
	
	private String stuId; //学号（工牌号、账号）
	private String stuPassword; //学生密码
	/*
	 * 学生班级（外键关联到班级表，且cascade及级联：在父表上update/delete记录时，同步update/delete掉子表的匹配记录）
	 */
	private Grade stuGrade; //所属班级
	private String stuJobCompany; //学员就业公司
	private String stuJobAddress; //学员就业地
	private String stuJobPay; //学员就业工资
	private String stuJobTime; //学员就业时间
	
	public String getStuId() {
		return stuId;
	}
	public void setStuId(String stuId) {
		this.stuId = stuId;
	}
	public String getStuPassword() {
		return stuPassword;
	}
	public void setStuPassword(String stuPassword) {
		this.stuPassword = stuPassword;
	}
	public Grade getStuGrade() {
		return stuGrade;
	}
	public void setStuGrade(Grade stuGrade) {
		this.stuGrade = stuGrade;
	}
	public String getStuJobCompany() {
		return stuJobCompany;
	}
	public void setStuJobCompany(String stuJobCompany) {
		this.stuJobCompany = stuJobCompany;
	}
	public String getStuJobAddress() {
		return stuJobAddress;
	}
	public void setStuJobAddress(String stuJobAddress) {
		this.stuJobAddress = stuJobAddress;
	}
	public String getStuJobPay() {
		return stuJobPay;
	}
	public void setStuJobPay(String stuJobPay) {
		this.stuJobPay = stuJobPay;
	}
	public String getStuJobTime() {
		return stuJobTime;
	}
	public void setStuJobTime(String stuJobTime) {
		this.stuJobTime = stuJobTime;
	}
	
	//构造函数
	public Student() {
		super();
	}

	public Student(String id, String name, String gender, String birthday,
			String phone, String address, String school, String image,
			String stuId, String stuPassword, Grade stuGrade,
			String stuJobCompany, String stuJobAddress, String stuJobPay,
			String stuJobTime) {
		super(id, name, gender, birthday, phone, address, school, image);
		this.stuId = stuId;
		this.stuPassword = stuPassword;
		this.stuGrade = stuGrade;
		this.stuJobCompany = stuJobCompany;
		this.stuJobAddress = stuJobAddress;
		this.stuJobPay = stuJobPay;
		this.stuJobTime = stuJobTime;
	}

	//toString()方法;
	@Override
	public String toString() {
		return "Student [stuId=" + stuId + ", stuPassword=" + stuPassword
				+ ", stuGrade=" + stuGrade + ", stuJobCompany=" + stuJobCompany
				+ ", stuJobAddress=" + stuJobAddress + ", stuJobPay="
				+ stuJobPay + ", stuJobTime=" + stuJobTime + ", toString()="
				+ super.toString() + "]";
	}
}
