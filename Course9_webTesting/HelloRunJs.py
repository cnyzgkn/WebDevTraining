#coding=utf-8
from selenium import webdriver
#from selenium.webdriver.common.desired_capabilities import DesiredCapabilities    
#import time

# enable browser logging
#logCapabilities = DesiredCapabilities.CHROME
#logCapabilities['loggingPrefs'] = { 'browser':'ALL' }

#browser = webdriver.Chrome(desired_capabilities=logCapabilities)
browser = webdriver.Chrome()
browser.get("http://www.baidu.com")
browser.execute_script('return 5')
#browser.execute_script("console.log('Nothing to see here')");
#browser.execute_script("console.warn('This is your first warning!')");
#browser.execute_script("console.error('This is serious!!!')");

#print log
#for entry in browser.get_log('browser'):
#    print(entry)

browser.quit()