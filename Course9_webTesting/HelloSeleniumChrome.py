#coding=utf-8
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
import time

browser = webdriver.Chrome()

browser.get("http://www.baidu.com")
time.sleep(1)

browser.maximize_window()  
time.sleep(1)

browser.find_element_by_id("kw").send_keys("selenium")
browser.find_element_by_id("su").click()




time.sleep(5)
browser.quit()