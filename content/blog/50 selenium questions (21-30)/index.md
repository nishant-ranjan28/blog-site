---
title: Frequently asked Selenium interview questions and answers - Part 1 (Q#21 to Q#30)
date: "2020-08-24T22:12:03.284Z"
description: "Interview Questions"
tags: ['2020', 'Automation', 'Selenium', 'Interview Questions']
disqus: true
---

## Top 50 Selenium Interview Questions and Answers (Q#21-Q#30)

![Interview questions](https://www.techtrainersonline.com/wp-content/uploads/2019/10/Selenium-Interview-questions.jpg)

Previous posts of frequently asked Selenium interview questions and answers for freshers are [Q#1-Q#10](https://nishantranjan.in/50%20selenium%20questions%20%281-10%29/), [Q#11-Q#20](https://nishantranjan.in/50%20selenium%20questions%20(11-20)/)

#### 21. Can Selenium handle window pop-ups?
Selenium does not support handling pop-ups. Alert is used to display a warning message. It is a pop-up window that comes up on the screen.

A few methods using which this can be achieved:

* **Void dismiss():** This method is called when the ‘Cancel’ button is clicked in the alert box.
* **Void accept():** This method is called when you click on the ‘OK’ button of the alert.
* **String getText():** This method is called to capture the alert message.
* **Void sendKeys(String stringToSed):** This is called when you want to send some data to alert box.

#### 22. What is a Robot class?
The Robot class provides control over the mouse and keyboard devices.

The methods include:

* **KeyPress():** This method is called when you want to press any key.
* **KeyRelease():** This method is used to release the pressed key on the keyboard.
* **MouseMove():** This method is called when you want to move the mouse pointer in the X and Y co-ordinates.
* **MousePress():** This is used to press the left button of the mouse.
* **MouseMove():** This method helps in releasing the pressed button of the mouse.

#### 23. How to handle multiple windows in Selenium?
A window handle is a unique identifier that holds the address of all the windows. This is basically a pointer to a window, which returns the string value.

* **get.windowhandle():** helps in getting the window handle of the current window.
* **get.windowhandles():** helps in getting the handles of all the windows opened.
* **set:** helps to set the window handles which is in the form of a string.
* **switch to:** helps in switching between the windows.
* **action:** helps to perform certain actions on the windows.

Example:

```
package com.test.selenium;

import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class HandleWindow {

	public static void main(String[] args) throws InterruptedException {
		browserURL();
		Window();
	}

	static WebDriver driver = null;

	public static void browserURL() throws InterruptedException {
		WebDriverManager.firefoxdriver().setup();
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		System.out.println("Browser Successfully launched");

		// PageScreenshot.TakeFullScreenshot(driver);
	}

	public static void Window() throws InterruptedException {
		String url = "https://demoqa.com/browser-windows";
		driver.get(url);
		// Get Window Details
		String parentWindowHandle = driver.getWindowHandle();
		System.out.println("Parent window's handle -> " + parentWindowHandle);
		System.out.println("URL detected");

//		// Scroll the page
//		JavascriptExecutor js = (JavascriptExecutor) driver;
//		js.executeScript("window.scrollBy(0,250)");

		WebElement clickElement = driver.findElement(By.id("windowButton"));

		for (int i = 0; i < 3; i++) {
			clickElement.click();
			Thread.sleep(3000);
		}

		// Get All open window details
		Set<String> allWindowHandles = driver.getWindowHandles();
		String lastWindowHandle = "";

		//Open Multiple Window with loop. (Same Link)
		/*
		 *
		 * for(String handle : allWindowHandles) {
		 * System.out.println("Window handle - > " + handle); }
		 */

		for (String handle : allWindowHandles) {
			System.out.println("Switching to window - > " + handle);
			System.out.println("Navigating to google.com");
			driver.switchTo().window(handle); // Switch to the desired window first and then execute commands using
												// driver
			driver.get("http://google.com");
			lastWindowHandle = handle;
		}
		
		//Switch to parent window
		driver.switchTo().window(parentWindowHandle);
		driver.close();
		//No focused window, explicitly switching back.
		driver.switchTo().window(lastWindowHandle);
		driver.get(url);
		System.out.println("Back to base");
	}
}
```
#### 24. How to send ALT/SHIFT/CONTROL key in Selenium WebDriver?
When we generally use **ALT/SHIFT/CONTROL** keys, we hold onto those keys and click other buttons to achieve the special functionality. So it is not enough just to specify keys.ALT or keys.SHIFT or keys.**CONTROL** functions.

For the purpose of holding onto these keys while subsequent keys are pressed, we need to define two more methods: **keyDown(modifier_key)** and **keyUp(modifier_key)**

Parameters: Modifier_key (keys.ALT or **Keys.SHIFT** or Keys.CONTROL)
Purpose: Performs a modifier key press and does not release the modifier key. Subsequent interactions may assume it’s kept pressed.

Parameters: Modifier_key (keys.ALT or Keys.SHIFT or **Keys.CONTROL**)
Purpose: Performs a key release.
Hence with a combination of these two methods, we can capture the special function of a particular key.

Example:

```
{
String baseUrl = &ldquo;https://www.facebook.com&rdquo;;
WebDriver driver = new FirefoxDriver();
 
driver.get("baseUrl");
WebElement txtUserName = driver.findElement(By.id(&ldquo;Email&rdquo;);
 
Actions builder = new Actions(driver);
Action seriesOfActions = builder
 .moveToElement(txtUerName)
 .click()
 .keyDown(txtUserName, Keys.SHIFT)
 .sendKeys(txtUserName, &ldquo;hello&rdquo;)
 .keyUp(txtUserName, Keys.SHIFT)
 .doubleClick(txtUserName);
 .contextClick();
 .build();
seriesOfActions.perform();
}
```

#### 25. How to take screenshots in WebDriver?

Example (Method 1): 

```
package com.test.selenium;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.io.FileHandler;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;

public class TakeScreenshot {

	static WebDriver driver = null;

	@Test
	public void TakeScreenshotFileHandler() throws InterruptedException, IOException {

		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		
		driver.manage().window().maximize();

		String url = "https://google.com";
		driver.get(url);
		
		Thread.sleep(5000);
		
		EventFiringWebDriver edriver = new EventFiringWebDriver(driver);
		File screenshot = edriver.getScreenshotAs(OutputType.FILE);
		
		//File Utils uses copyFil method to story the screenshot
		FileUtils.copyFile(screenshot, new File("test.png"));
		
		//File Handler uses copy method to store the screenshot
		FileHandler.copy(screenshot, new File("test.png"));
		
		Thread.sleep(5000);
		
		driver.close();
		
		}
}
```

Example (Method 2):

```
package com.test.selenium;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.assertthat.selenium_shutterbug.core.Shutterbug;

import io.github.bonigarcia.wdm.WebDriverManager;

public class PageScreenshot {
	
	static WebDriver driver = null;
	
	public static void main(String[] args) throws InterruptedException {
		TakeFullScreenshot(driver);
	}
	
	public static void TakeFullScreenshot(WebDriver driver) throws InterruptedException {

		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		
		String url = "https://github.com";
		driver.get(url);
		
		//It will create a folder called screenshot to store the evidence.
		//We can pass path as parameter in save method.
		
		Shutterbug.shootPage(driver).save();
		
		//Shutterbug.shootPage(driver).withName("Example").save();
		
		driver.close();
	}
}
```

#### 26. How do you upload a file using Selenium WebDriver?
To upload a file we can simply use the command element.send_keys(file path). But there is a prerequisite before we upload the file. We have to use the html tag: ‘input’ and attribute type should be ‘file’. Take a look at the below example where we are identifying the web element first and then uploading the file.

Example (Syntax): 
```
<input type="file" name="uploaded_file" size="50" class="pole_plik">
element = driver.find_element_by_id(&rdquo;uploaded_file")
element.send_keys("C:myfile.txt")
```

#### 27. Can we enter text without using sendKeys()?
Yes. We can enter/ send text without using sendKeys() method. We can do it using JavaScriptExecutor.

How do we do it?
Using DOM method of, identification of an element, we can go to that particular document and then get the element by its ID (here login) and then send the text by value. Look at the sample code below:

```
JavascriptExecutor jse = (JavascriptExecutor) driver;
jse.executeScript("document.getElementById(&lsquo;Login').value=Test text without sendkeys");

```

#### 28. What Is The Difference Between MaxSessions Vs. MaxInstances Properties in Selenium Grid?
MaxInstances is the no. of browser instances of the same version of the browser that can run on the remote machine.

Let’s see an example below:
```
-browser browserName=InternetExplorer,version=6,maxInstances=2,platform=WINDOWS
-browser browserName=firefox,version=11,maxInstances=2,platform=WINDOWS
```
As per the above example, it will allow us to run 4 instances of both IE and Firefox at the same time (in parallel) in a remote machine.

MaxSession says how many browsers, independent of the type & version, can run in parallel on the remote machine.

It supersedes the “MaxInstances” setting.

If maxSession=1 then no more than a single browser would run. If maxSession=2 then any of the below combinations can run at a time irrespective of what MaxInstances we have defined.
2 Internet Explorer
2 Firefox
1 Internet Explorer + 1 Firefox

#### 29. How to mouse hover on a web element using WebDriver?
By using Actions class

Syntax:

```
WebElement ele = driver.findElement(By.xpath("xpath"));
//Create object 'action' of an Actions class
Actions action = new Actions(driver);
//Mouseover on an element
action.moveToElement(ele).perform();
```

#### 30. How to scroll down a page using JavaScript in Selenium?
We can scroll down a page by using window.scrollBy() function.

Example:

```
((JavascriptExecutor) driver).executeScript("window.scrollBy(0,500)");
```

