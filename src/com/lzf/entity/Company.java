/**
 * 
 */
package com.lzf.entity;

/**
 * @author zhifengfei
 *	��˾ʵ����
 */
public class Company {
	
	private String companyId; //��˾��ţ�����ɸ��¹�˾��Ϣʱ��������ɣ��Ա��¼��˾�����׶εķ�չ״�����ɹ���
	private String companyName; //��˾����
	private String companyIntro; //��˾���
	private String companyImage; //�빫˾��ص�ͼƬ����
	
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
	
	//���캯��
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
	
	//toString()����;
	@Override
	public String toString() {
		return "Company [companyId=" + companyId + ", companyName="
				+ companyName + ", companyIntro=" + companyIntro
				+ ", companyImage=" + companyImage + "]";
	}
}
