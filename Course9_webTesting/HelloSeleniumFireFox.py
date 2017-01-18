#coding=utf-8
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
import time

browser = webdriver.Firefox()
browser.get("http://www.baidu.com")
time.sleep(1)

browser.maximize_window()  
time.sleep(1)

browser.find_element_by_id("kw").send_keys("selenium")
browser.find_element_by_id("su").click()
time.sleep(1)

time.sleep(2)
browser.quit()