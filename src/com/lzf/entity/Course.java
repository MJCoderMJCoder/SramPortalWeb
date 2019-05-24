/**
 * 
 */
package com.lzf.entity;

/**
 * @author zhifengfei
 *	课程实体类
 */
public class Course {
	
	private String courseId; //课程编号
	private String courseName; //课程名字
	private String courseDetail; //课程培训详细信息
	private String courseSystem; //课程体系
	private String jobDirection; //就业方向
	private String courseImage; //与课程相关的图片（）
	
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
	
	//构造函数
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
	
	//toString()方法;
	@Override
	public String toString() {
		return "Course [courseId=" + courseId + ", courseName=" + courseName
				+ ", courseDetail=" + courseDetail + ", courseSystem="
				+ courseSystem + ", jobDirection=" + jobDirection
				+ ", courseImage=" + courseImage + "]";
	}
}
