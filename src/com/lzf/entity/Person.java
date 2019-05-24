/**
 * 
 */
package com.lzf.entity;

/**
 * @author zhifengfei
 * Person类为管理员、教师、学院等实体类的父类
 */
public class Person {
	
	private String id; //身份证号
	private String name; //姓名
	private String gender; //性别
	private String birthday; //出生日期
	private String phone; //联系方式
	private String address; //联系地址
	private String school; //毕业院校
	private String image; //个人照片（可选）
	
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
	
	//构造函数
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
	
	//toString()方法;
	@Override
	public String toString() {
		return "Person [id=" + id + ", name=" + name + ", gender=" + gender
				+ ", birthday=" + birthday + ", phone=" + phone + ", address="
				+ address + ", school=" + school + ", image=" + image + "]";
	}
}
