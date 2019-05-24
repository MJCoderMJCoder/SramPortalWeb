/**
 * 
 */
package com.lzf.entity;

/**
 * @author zhifengfei
 *	公司实体类
 */
public class Company {
	
	private String companyId; //公司编号（编号由更新公司信息时的日期组成，以便记录公司各个阶段的发展状况及成果）
	private String companyName; //公司名称
	private String companyIntro; //公司简介
	private String companyImage; //与公司相关的图片（）
	
	public String getCompanyId() {
		return companyId;
	}
	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getCompanyIntro() {
		return companyIntro;
	}
	public void setCompanyIntro(String companyIntro) {
		this.companyIntro = companyIntro;
	}
	public String getCompanyImage() {
		return companyImage;
	}
	public void setCompanyImage(String companyImage) {
		this.companyImage = companyImage;
	}
	
	//构造函数
	public Company() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Company(String companyId, String companyName, String companyIntro,
			String companyImage) {
		super();
		this.companyId = companyId;
		this.companyName = companyName;
		this.companyIntro = companyIntro;
		this.companyImage = companyImage;
	}
	
	//toString()方法;
	@Override
	public String toString() {
		return "Company [companyId=" + companyId + ", companyName="
				+ companyName + ", companyIntro=" + companyIntro
				+ ", companyImage=" + companyImage + "]";
	}
}
