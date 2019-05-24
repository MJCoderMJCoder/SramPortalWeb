/**
 * 
 */
package com.lzf.entity;

/**
 * @author zhifengfei
 *	��ʦʵ����
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
	
	private String teacherId; //��ʦ��ţ����ƺš��˺ţ�
	private String teacherPassword; //��ʦ����
	/*
	 * ��ʦ�����༶������������༶����cascade���������ڸ�����update/delete��¼ʱ��ͬ��update/delete���ӱ��ƥ���¼��
	 */
	private Grade teacherGrade; //�����༶
	private String teacherExperience; //��ʦ��������
	
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
	
	//���캯��
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
	
	//toString()����;
	@Override
	public String toString() {
		return "Teacher [teacherId=" + teacherId + ", teacherPassword="
				+ teacherPassword + ", teacherGrade=" + teacherGrade
				+ ", teacherExperience=" + teacherExperience + ", toString()="
				+ super.toString() + "]";
	}
}
