/**
 * 
 */
package com.lzf.service;

import java.util.List;

import com.lzf.entity.Grade;

/**
 * @author zhifengfei
 *	�༶��ҵ���߼���
 */
public interface IGradeService {
	public int addGrade(Grade grade); //��Ӱ༶
	public int deleteGrade(Grade grade); //ɾ���༶
	public int updateGrade(Grade grade); //�޸İ༶
	public Grade select(Grade grade); //��ѯ�����༶
	public List<Grade> queries(Grade grade); //��ѯ����༶
}
