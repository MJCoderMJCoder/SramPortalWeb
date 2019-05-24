/**
 * 
 */
package com.lzf.entity;

/**
 * @author zhifengfei
 *	ѧԱʵ����
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
	
	private String stuId; //ѧ�ţ����ƺš��˺ţ�
	private String stuPassword; //ѧ������
	/*
	 * ѧ���༶������������༶����cascade���������ڸ�����update/delete��¼ʱ��ͬ��update/delete���ӱ��ƥ���¼��
	 */
	private Grade stuGrade; //�����༶
	private String stuJobCompany; //ѧԱ��ҵ��˾
	private String stuJobAddress; //ѧԱ��ҵ��
	private String stuJobPay; //ѧԱ��ҵ����
	private String stuJobTime; //ѧԱ��ҵʱ��
	
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
	
	//���캯��
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

	//toString()����;
	@Override
	public String toString() {
		return "Student [stuId=" + stuId + ", stuPassword=" + stuPassword
				+ ", stuGrade=" + stuGrade + ", stuJobCompany=" + stuJobCompany
				+ ", stuJobAddress=" + stuJobAddress + ", stuJobPay="
				+ stuJobPay + ", stuJobTime=" + stuJobTime + ", toString()="
				+ super.toString() + "]";
	}
}
