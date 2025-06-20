package com.entity.vo;

import com.entity.ShanshixinxiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
 

/**
 * 膳食信息
 * 手机端接口返回实体辅助类 
 * （主要作用去除一些不必要的字段）
 * @author 
 * @email 
 * @date 2023-05-13 12:25:08
 */
public class ShanshixinxiVO  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 日期
	 */
		
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 
	private Date riqi;
		
	/**
	 * 早餐
	 */
	
	private String zaocan;
		
	/**
	 * 午餐
	 */
	
	private String wucan;
		
	/**
	 * 晚餐
	 */
	
	private String wancan;
		
	/**
	 * 点心
	 */
	
	private String dianxin;
		
	/**
	 * 水果
	 */
	
	private String shuiguo;
		
	/**
	 * 价格
	 */
	
	private String jiage;
				
	
	/**
	 * 设置：日期
	 */
	 
	public void setRiqi(Date riqi) {
		this.riqi = riqi;
	}
	
	/**
	 * 获取：日期
	 */
	public Date getRiqi() {
		return riqi;
	}
				
	
	/**
	 * 设置：早餐
	 */
	 
	public void setZaocan(String zaocan) {
		this.zaocan = zaocan;
	}
	
	/**
	 * 获取：早餐
	 */
	public String getZaocan() {
		return zaocan;
	}
				
	
	/**
	 * 设置：午餐
	 */
	 
	public void setWucan(String wucan) {
		this.wucan = wucan;
	}
	
	/**
	 * 获取：午餐
	 */
	public String getWucan() {
		return wucan;
	}
				
	
	/**
	 * 设置：晚餐
	 */
	 
	public void setWancan(String wancan) {
		this.wancan = wancan;
	}
	
	/**
	 * 获取：晚餐
	 */
	public String getWancan() {
		return wancan;
	}
				
	
	/**
	 * 设置：点心
	 */
	 
	public void setDianxin(String dianxin) {
		this.dianxin = dianxin;
	}
	
	/**
	 * 获取：点心
	 */
	public String getDianxin() {
		return dianxin;
	}
				
	
	/**
	 * 设置：水果
	 */
	 
	public void setShuiguo(String shuiguo) {
		this.shuiguo = shuiguo;
	}
	
	/**
	 * 获取：水果
	 */
	public String getShuiguo() {
		return shuiguo;
	}
				
	
	/**
	 * 设置：价格
	 */
	 
	public void setJiage(String jiage) {
		this.jiage = jiage;
	}
	
	/**
	 * 获取：价格
	 */
	public String getJiage() {
		return jiage;
	}
			
}
