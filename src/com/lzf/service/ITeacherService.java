/**
 * 
 */
package com.lzf.service;

import java.util.List;

import com.lzf.entity.Teacher;

/**
 * @author zhifengfei ��ʦ��ҵ���߼���
 */
public interface ITeacherService {
	public int addTeacher(Teacher teacher); // ��ӽ�ʦ

	public int deleteTeacher(Teacher teacher); // ɾ����ʦ

	public int updateTeacher(Teacher teacher); // �޸Ľ�ʦ��Ϣ

	public Teacher select(Teacher teacher); // ��ѯ������ʦ

	public Teacher login(Teacher teacher); // ��ѯ������ʦ

	public List<Teacher> queries(Teacher teacher); // ��ѯ�����ʦ
}
