/**
 * 
 */
package com.lzf.dao;

import java.util.List;

import com.lzf.entity.News;

/**
 * @author zhifengfei
 *	������Ϣ�����ݷ��ʲ�
 */
public interface INewsDao {
	public int addNews(News news); //�������
	public int deleteNews(News news); //ɾ������
	public int updateNews(News news); //�޸�����
	public News select(News news); //��ѯ��������
	public List<News> queries(News news); //��ѯ�������
}
