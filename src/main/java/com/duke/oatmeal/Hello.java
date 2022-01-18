package com.duke.oatmeal;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class Hello {
	final static Logger LOG = LogManager.getLogger(Hello.class);
	
	
	
	public static void main(String[] args) {
		
		LOG.debug("=======================");
		LOG.debug("Hello, world!!!");
		LOG.debug("=======================");
	}
}
