/**
 * 
 */
package com.lzf.entity;

/**
 * @author zhifengfei
 * ��News���мȿ��Է������Ź��桢Ҳ���Է���������Ƹ��Ϣ����������Ϣʵ���ࣩ
 */
public class News {
	
	private String newsId; //���ű�ţ�����ɷ�������������ɣ�
	private String newsTitle; //���ű���
	private String newsDetail; //������ϸ��Ϣ
	private String newsImage; //����ͼƬ
	
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
	
	//���캯��
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
	
	//toString()����;
	@Override
	public String toString() {
		return "News [newsId=" + newsId + ", newsTitle=" + newsTitle
				+ ", newsDetail=" + newsDetail + ", newsImage=" + newsImage
				+ "]";
	}
}
