/**
 * 
 */
package com.lzf.entity;

/**
 * @author zhifengfei
 * 在News类中既可以发布新闻公告、也可以发布人力招聘信息。（新闻消息实体类）
 */
public class News {
	
	private String newsId; //新闻编号（编号由发布新闻日期组成）
	private String newsTitle; //新闻标题
	private String newsDetail; //新闻详细信息
	private String newsImage; //新闻图片
	
	public String getNewsId() {
		return newsId;
	}
	public void setNewsId(String newsId) {
		this.newsId = newsId;
	}
	public String getNewsTitle() {
		return newsTitle;
	}
	public void setNewsTitle(String newsTitle) {
		this.newsTitle = newsTitle;
	}
	public String getNewsDetail() {
		return newsDetail;
	}
	public void setNewsDetail(String newsDetail) {
		this.newsDetail = newsDetail;
	}
	public String getNewsImage() {
		return newsImage;
	}
	public void setNewsImage(String newsImage) {
		this.newsImage = newsImage;
	}
	
	//构造函数
	public News() {
		super();
		// TODO Auto-generated constructor stub
	}
	public News(String newsId, String newsTitle, String newsDetail,
			String newsImage) {
		super();
		this.newsId = newsId;
		this.newsTitle = newsTitle;
		this.newsDetail = newsDetail;
		this.newsImage = newsImage;
	}
	
	//toString()方法;
	@Override
	public String toString() {
		return "News [newsId=" + newsId + ", newsTitle=" + newsTitle
				+ ", newsDetail=" + newsDetail + ", newsImage=" + newsImage
				+ "]";
	}
}
