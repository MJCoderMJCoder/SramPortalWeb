/**
 * 
 */
package com.lzf.service;

import java.util.List;

import com.lzf.entity.Student;

/**
 * @author zhifengfei ѧԱ��ҵ���߼���
 */
public interface IStudentService {
	public int addStudent(Student student); // ����ѧԱ

	public int deleteStudent(Student student); // ɾ��ѧԱ

	public int updateStudent(Student student); // �޸�ѧԱ

	public Student select(Student student); // ��ѯ����ѧԱ

	public Student login(Student student); // ��ѯ����ѧԱ

	public List<Student> queries(Student student); // ��ѯ���ѧԱ
}