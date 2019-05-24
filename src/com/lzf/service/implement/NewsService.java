/**
 * 
 */
package com.lzf.service.implement;

import java.util.List;

import com.lzf.dao.INewsDao;
import com.lzf.dao.implement.NewsDao;
import com.lzf.entity.News;
import com.lzf.service.INewsService;

/**
 * @author zhifengfei
 *	������Ϣ��ҵ���߼���
 */
public class NewsService implements INewsService {
	
	INewsDao newsDao = new NewsDao(); //ҵ���߼���ͨ���ӿڣ�INewsDao�������ݷ��ʲ㽻��

	@Override
	public int addNews(News news) {
		int i = newsDao.addNews(news);
		return i;
	}

	@Override
	public int deleteNews(News news) {
		int i = newsDao.deleteNews(news);
		return i;
	}

	@Override
	public int updateNews(News news) {
		int i = newsDao.updateNews(news);
		return i;
	}

	@Override
	public News select(News news) {
		News newsReturn = newsDao.select(news);
		return newsReturn;
	}

	@Override
	public List<News> queries(News news) {
		List<News> list = newsDao.queries(news);
		return list;
	}
}
