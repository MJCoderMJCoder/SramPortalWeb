/**
 * 
 */
package com.lzf.entity;

/**
 * @author zhifengfei
 *	教师实体类
 */
public class Teacher extends Person {

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
	
	private String teacherId; //教师编号（工牌号、账号）
	private String teacherPassword; //教师密码
	/*
	 * 教师所带班级（外键关联到班级表，且cascade及级联：在父表上update/delete记录时，同步update/delete掉子表的匹配记录）
	 */
	private Grade teacherGrade; //所带班级
	private String teacherExperience; //教师工作经历
	
	public String getTeacherId() {
		return teacherId;
	}
	public void setTeacherId(String teacherId) {
		this.teacherId = teacherId;
	}
	public String getTeacherPassword() {
		return teacherPassword;
	}
	public void setTeacherPassword(String teacherPassword) {
		this.teacherPassword = teacherPassword;
	}
	public Grade getTeacherGrade() {
		return teacherGrade;
	}
	public void setTeacherGrade(Grade teacherGrade) {
		this.teacherGrade = teacherGrade;
	}
	public String getTeacherExperience() {
		return teacherExperience;
	}
	public void setTeacherExperience(String teacherExperience) {
		this.teacherExperience = teacherExperience;
	}
	
	//构造函数
	public Teacher() {
		super();
	}
	public Teacher(String id, String name, String gender, String birthday,
			String phone, String address, String school, String image,
			String teacherId, String teacherPassword, Grade teacherGrade,
			String teacherExperience) {
		super(id, name, gender, birthday, phone, address, school, image);
		this.teacherId = teacherId;
		this.teacherPassword = teacherPassword;
		this.teacherGrade = teacherGrade;
		this.teacherExperience = teacherExperience;
	}
	
	//toString()方法;
	@Override
	public String toString() {
		return "Teacher [teacherId=" + teacherId + ", teacherPassword="
				+ teacherPassword + ", teacherGrade=" + teacherGrade
				+ ", teacherExperience=" + teacherExperience + ", toString()="
				+ super.toString() + "]";
	}
}
