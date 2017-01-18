#coding=utf-8
import os 
import os.path 
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from PIL import Image
from PIL import ImageGrab
from datetime import datetime, time, timedelta
import time

# return True if element is visible within 2 seconds, otherwise False
def is_visible(browser, locator, ByType=By.ID, timeout=2):
    try:
        WebDriverWait(browser, timeout).until(EC.visibility_of_element_located((ByType, locator)))
        return True
    except TimeoutException:
        return False

#prepare to test
def prepareTest(browser, canvas):
	if(is_visible(browser, "实验", By.LINK_TEXT)):
		browser.find_element(By.LINK_TEXT, "实验").click()
	if(is_visible(browser, "fixCanvasSize")):
		browser.find_element(By.ID, "fixCanvasSize").click()
	print("before resize canvas width == " + str(canvas.size['width']) + " height == " + str(canvas.size['height']))
	if(is_visible(browser, "800×600")):
		browser.find_element(By.ID, "800×600").click()
	print("after resize canvas width == " + str(canvas.size['width']) + " height == " + str(canvas.size['height']))

#line line parallel
def testLineLineParallel(browser, canvas):
	if(is_visible(browser, "创建和修改", By.LINK_TEXT)):
		browser.find_element(By.LINK_TEXT, "创建和修改").click()
	if(is_visible(browser, "drawModelLine")):
		browser.find_element(By.ID, "drawModelLine").click()
	#1st line
	ActionChains(browser).move_to_element_with_offset(canvas, 500, 200).click().perform()
	ActionChains(browser).move_to_element_with_offset(canvas, 900, 300).click().perform()
	ActionChains(browser).send_keys(Keys.ESCAPE).perform()
	#2nd line
	if(is_visible(browser, "drawModelLine")):
		browser.find_element(By.ID, "drawModelLine").click()
	ActionChains(browser).move_to_element_with_offset(canvas, 1000, 600).click().perform()
	ActionChains(browser).move_to_element_with_offset(canvas, 1200, 100).click().perform()
	ActionChains(browser).send_keys(Keys.ESCAPE).perform()
	#parallel command
	if(is_visible(browser, "实验", By.LINK_TEXT)):
		browser.find_element(By.LINK_TEXT, "实验").click()
	if(is_visible(browser, "actionCreateLineParallel")):
		browser.find_element(By.ID, "actionCreateLineParallel").click()

#draw extrusion
def testDrawExtrusion(browser, canvas):
	if(is_visible(browser, "实验", By.LINK_TEXT)):
		browser.find_element(By.LINK_TEXT, "实验").click()
	if(is_visible(browser, "drawExtrusion")):
		browser.find_element(By.ID, "drawExtrusion").click()
	ActionChains(browser).move_to_element_with_offset(canvas, 600, 400).click().perform()
	ActionChains(browser).move_to_element_with_offset(canvas, 900, 600).click().perform()
	if(is_visible(browser, "ExtrusionEditPanel-endOff")):
		browser.find_element(By.ID, "ExtrusionEditPanel-endOff").clear()
		browser.find_element(By.ID, "ExtrusionEditPanel-endOff").send_keys("800")
	if(is_visible(browser, "ExtrusionEditPanel_OK")):
		browser.find_element(By.ID, "ExtrusionEditPanel_OK").click()


#rotate by drag-drop
def testRotate(browser, canvas):
	size = canvas.size
	width = size['width']
	height = size['height']
	#print("width == " + str(width))
	#print("height == " + str(height))
	#ActionChains(browser).move_to_element_with_offset(canvas, width/2, height/2).drag_and_drop_by_offset(canvas, width/2, height/6).perform()
	ActionChains(browser) \
	.move_to_element_with_offset(canvas, 200, 200) \
	.click_and_hold() \
	.move_by_offset(0, -100) \
	.move_by_offset(200, 0) \
	.release() \
	.perform()
	time.sleep(1)
	ActionChains(browser).click_and_hold().move_by_offset(100, 100).release().perform()

#capture screen
def captureScreen(browser, picFilePath):
	browser.save_screenshot(picFilePath)

#capture element
def captureElement(element, picFilePath):
	location = element.location
	size = element.size
	left = location['x']
	top = location['y']
	right = location['x'] + size['width']
	bottom = location['y'] + size['height']
	print("element location: left == " + str(left) + " right == " + str(right) + " top == " + str(top) + " bottom == " + str(bottom))
	# uses PIL library to open image in memory
	im = Image.open('screenshot.png') 
	im = im.crop((left, top, right, bottom)) # defines crop points
	#pos = (left, top, right, bottom)
	#im = ImageGrab.grab(pos)
	im.save(picFilePath) # saves new cropped image

#capture screen unique
def captureScreenUnique(browser):
	browser.save_screenshot("screen_%s.png" % datetime.now().strftime("%Y%m%d.%H%M%S.%f")[:-3])

#capture canvas unique
def captureCanvasUnique(canvas):
	captureElement(canvas, "canvas_%s.png" % datetime.now().strftime("%Y%m%d.%H%M%S.%f")[:-3])

#main
def main():
	browser = webdriver.Chrome()
	#browser = webdriver.Firefox()

	browser.get("http://localhost:8080/")
	#browser.get("http://web.gbmp.tech:8080/")

	#browser.implicitly_wait(30)
	browser.maximize_window()  
	#browser.set_window_size(1600, 1000)
	
	if(is_visible(browser, "canvas")):
		canvas = browser.find_element(By.ID, "canvas").find_element(By.TAG_NAME, "canvas")

	#print("before resize canvas width == " + str(canvas.size['width']) + " height == " + str(canvas.size['height']))
	#browser.execute_script('arguments[0].width = 600;', canvas)
	#browser.execute_script('arguments[0].height = 400;', canvas)
	#canvas.size['width'] = 800;
	#canvas.size['height'] = 600;
	#print("after resize canvas width == " + str(canvas.size['width']) + " height == " + str(canvas.size['height']))

	prepareTest(browser, canvas)
	testLineLineParallel(browser, canvas)
	testDrawExtrusion(browser, canvas)
	testRotate(browser, canvas)

	if(os.path.isfile('screenshot.png')):
		os.remove('screenshot.png')
	browser.save_screenshot('screenshot.png') # saves screenshot of entire page
	#captureScreenUnique(browser)
	captureCanvasUnique(canvas)
	os.remove('screenshot.png')

	#time.sleep(10)

	#print("browser log is " + str(browser.get_log('browser')))
	#print("driver log is " + str(browser.get_log('driver')))
	#print("client log is " + str(browser.get_log('client')))
	#print("server log is " + str(browser.get_log('server')))

	browser.quit()

if __name__ == '__main__':
	main()

