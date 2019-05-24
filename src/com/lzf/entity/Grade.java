/**
 * 
 */
package com.lzf.entity;

/**
 * @author zhifengfei
 *	�༶ʵ����
 */
public class Grade {
	
	private String gradeId; //�༶���
	/*
	 * �༶�γ̷�������������γ̱���cascade���������ڸ�����update/delete��¼ʱ��ͬ��update/delete���ӱ��ƥ���¼��
	 */
	private Course gradeCourse;
	private String gradeName; //�༶ȫ�ƣ��ɰ༶�γ̷���Ͱ༶�����ɣ�
	private String gradeCount; //�༶����
	
	public String getGradeId() {
		return gradeId;
	}
	public void setGradeId(String gradeId) {
		this.gradeId = gradeId;
	}
	public Course getGradeCourse() {
		return gradeCourse;
	}
	public void setGradeCourse(Course gradeCourse) {
		this.gradeCourse = gradeCourse;
	}
	public String getGradeName() {
		return gradeName;
	}
	public void setGradeName(String gradeName) {
		this.gradeName = gradeName;
	}
	public String getGradeCount() {
		return gradeCount;
	}
	public void setGradeCount(String gradeCount) {
		this.gradeCount = gradeCount;
	}
	
	//���캯��
	public Grade() {
		super();
	}
	public Grade(String gradeId, Course gradeCourse, String gradeName,
			String gradeCount) {
		super();
		this.gradeId = gradeId;
		this.gradeCourse = gradeCourse;
		this.gradeName = gradeName;
		this.gradeCount = gradeCount;
	}
	
	//toString()����;
	@Override
	public String toString() {
		return "Grade [gradeId=" + gradeId + ", gradeCourse=" + gradeCourse
				+ ", gradeName=" + gradeName + ", gradeCount=" + gradeCount
				+ "]";
	}
	
}
