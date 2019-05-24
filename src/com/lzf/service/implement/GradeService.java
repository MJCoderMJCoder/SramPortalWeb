/**
 * 
 */
package com.lzf.service.implement;

import java.util.List;

import com.lzf.dao.IGradeDao;
import com.lzf.dao.implement.GradeDao;
import com.lzf.entity.Grade;
import com.lzf.service.IGradeService;

/**
 * @author zhifengfei
 *	�༶��ҵ���߼���
 */
public class GradeService implements IGradeService {
	
	IGradeDao gradeDao = new GradeDao(); //ҵ���߼���ͨ���ӿڣ�IGradeDao�������ݷ��ʲ㽻��

	@Override
	public int addGrade(Grade grade) {
		int i = gradeDao.addGrade(grade);
		return i;
	}

	@Override
	public int deleteGrade(Grade grade) {
		int i = gradeDao.deleteGrade(grade);
		return i;
	}

	@Override
	public int updateGrade(Grade grade) {
		int i = gradeDao.updateGrade(grade);
		return i;
	}

	@Override
	public Grade select(Grade grade) {
		Grade gradeReturn = gradeDao.select(grade);
		return gradeReturn;
	}

	@Override
	public List<Grade> queries(Grade grade) {
		List<Grade> list = gradeDao.queries(grade);
		return list;
	}

}
