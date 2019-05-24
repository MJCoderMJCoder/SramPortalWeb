/**
 * 
 */
package com.lzf.entity;

/**
 * @author zhifengfei
 * Person��Ϊ����Ա����ʦ��ѧԺ��ʵ����ĸ���
 */
public class Person {
	
	private String id; //���֤��
	private String name; //����
	private String gender; //�Ա�
	private String birthday; //��������
	private String phone; //��ϵ��ʽ
	private String address; //��ϵ��ַ
	private String school; //��ҵԺУ
	private String image; //������Ƭ����ѡ��
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getBirthday() {
		return birthday;
	}
	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getSchool() {
		return school;
	}
	public void setSchool(String school) {
		this.school = school;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	
	//���캯��
	public Person() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Person(String id, String name, String gender, String birthday,
			String phone, String address, String school, String image) {
		super();
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.birthday = birthday;
		this.phone = phone;
		this.address = address;
		this.school = school;
		this.image = image;
	}
	
	//toString()����;
	@Override
	public String toString() {
		return "Person [id=" + id + ", name=" + name + ", gender=" + gender
				+ ", birthday=" + birthday + ", phone=" + phone + ", address="
				+ address + ", school=" + school + ", image=" + image + "]";
	}
}
