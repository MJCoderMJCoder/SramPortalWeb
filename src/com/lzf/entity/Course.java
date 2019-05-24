/**
 * 
 */
package com.lzf.entity;

/**
 * @author zhifengfei
 *	�γ�ʵ����
 */
public class Course {
	
	private String courseId; //�γ̱��
	private String courseName; //�γ�����
	private String courseDetail; //�γ���ѵ��ϸ��Ϣ
	private String courseSystem; //�γ���ϵ
	private String jobDirection; //��ҵ����
	private String courseImage; //��γ���ص�ͼƬ����
	
	public String getCourseId() {
		return courseId;
	}
	public void setCourseId(String courseId) {
		this.courseId = courseId;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public String getCourseDetail() {
		return courseDetail;
	}
	public void setCourseDetail(String courseDetail) {
		this.courseDetail = courseDetail;
	}
	public String getCourseSystem() {
		return courseSystem;
	}
	public void setCourseSystem(String courseSystem) {
		this.courseSystem = courseSystem;
	}
	public String getJobDirection() {
		return jobDirection;
	}
	public void setJobDirection(String jobDirection) {
		this.jobDirection = jobDirection;
	}
	public String getCourseImage() {
		return courseImage;
	}
	public void setCourseImage(String courseImage) {
		this.courseImage = courseImage;
	}
	
	//���캯��
	public Course() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Course(String courseId, String courseName, String courseDetail,
			String courseSystem, String jobDirection, String courseImage) {
		super();
		this.courseId = courseId;
		this.courseName = courseName;
		this.courseDetail = courseDetail;
		this.courseSystem = courseSystem;
		this.jobDirection = jobDirection;
		this.courseImage = courseImage;
	}
	
	//toString()����;
	@Override
	public String toString() {
		return "Course [courseId=" + courseId + ", courseName=" + courseName
				+ ", courseDetail=" + courseDetail + ", courseSystem="
				+ courseSystem + ", jobDirection=" + jobDirection
				+ ", courseImage=" + courseImage + "]";
	}
}
