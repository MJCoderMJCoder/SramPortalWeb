/**
 * 
 */
package com.lzf.entity;

/**
 * @author zhifengfei
 *	班级实体类
 */
public class Grade {
	
	private String gradeId; //班级编号
	/*
	 * 班级课程方向（外键关联到课程表，且cascade及级联：在父表上update/delete记录时，同步update/delete掉子表的匹配记录）
	 */
	private Course gradeCourse;
	private String gradeName; //班级全称（由班级课程方向和班级编号组成）
	private String gradeCount; //班级人数
	
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
	
	//构造函数
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
	
	//toString()方法;
	@Override
	public String toString() {
		return "Grade [gradeId=" + gradeId + ", gradeCourse=" + gradeCourse
				+ ", gradeName=" + gradeName + ", gradeCount=" + gradeCount
				+ "]";
	}
	
}
