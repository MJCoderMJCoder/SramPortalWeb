/**
 * 
 */
package com.lzf.service;

import java.util.List;

import com.lzf.entity.News;

/**
 * @author zhifengfei
 *	������Ϣ��ҵ���߼���
 */
public interface INewsService {
	public int addNews(News news); //�������
	public int deleteNews(News news); //ɾ������
	public int updateNews(News news); //�޸�����
	public News select(News news); //��ѯ��������
	public List<News> queries(News news); //��ѯ�������
}
