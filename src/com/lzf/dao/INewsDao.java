/**
 * 
 */
package com.lzf.dao;

import java.util.List;

import com.lzf.entity.News;

/**
 * @author zhifengfei
 *	新闻消息的数据访问层
 */
public interface INewsDao {
	public int addNews(News news); //添加新闻
	public int deleteNews(News news); //删除新闻
	public int updateNews(News news); //修改新闻
	public News select(News news); //查询单个新闻
	public List<News> queries(News news); //查询多个新闻
}
