package com.lzf.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class GenerateId {
	
	public static String generateId(){
		Date date = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("YYYYMMddHHmmss");
		String current = dateFormat.format(date);
		return current;
	}
}
