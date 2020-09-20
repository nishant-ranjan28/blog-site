---
title: Frequently asked Selenium interview questions and answers - Part 5 (Q#41 to Q#50)
date: "2020-09-21T22:12:03.284Z"
description: "Interview Questions"
tags: ['2020', 'Automation', 'Selenium', 'Interview Questions']
disqus: true
---

## Top 50 Selenium Interview Questions and Answers (Q#41-Q#50)

![Interview questions](https://www.techtrainersonline.com/wp-content/uploads/2019/10/Selenium-Interview-questions.jpg)

Previous posts of frequently asked Selenium interview questions and answers for freshers are [Q#1-Q#10](https://nishantranjan.in/50%20selenium%20questions%20%281-10%29/), [Q#11-Q#20](https://nishantranjan.in/50%20selenium%20questions%20(11-20)/), [Q#21-Q#30](https://nishantranjan.in/50%20selenium%20questions%20(21-30)/), [Q#31-Q#40](https://nishantranjan.in/50%20selenium%20questions%20(31-40)/)

#### 41. How can you use the Recovery Scenario in Selenium WebDriver?
By using “Try Catch Block” within Selenium WebDriver Java tests.

```
try {
     driver.get("www.softwaretestingmaterial.com");
}catch(Exception e){
     System.out.println(e.getMessage());
}
```
#### 42. Can we handle colors in Web Driver?
Yes, we can handle colors in Web Driver using the getCssValue(arg0) function. It will help in getting the color by sending the 'color' string as an argument.

#### 43. How is Webdriver beneficial over Selenium Server?
Webdriver does not require the Selenium Server because it uses a completely different technology. It provides Selenium RC functionality, which provides backward compatibility to Selenium 1.0. Also, it makes a direct call to the various browsers for making automation. At the same time, in the case of Selenium RC, it requires the Selenium Server to input the Javascript into the browser.

#### 44. Differentiate between Type Keys and Type Commands in Selenium?
Types Keys collects the different value attributes using the JavaScript while the Type Commands imitates like an actual user typing.

#### 45. How to do drag and drop in Selenium?
Using Action class, drag and drop can be performed in Selenium.

Sample code:

```
Actions builder = new Actions(driver);
Action dragAndDrop = builder.clickAndHold(SourceElement)
.moveToElement(TargetElement)
.release(TargetElement)
.build();
dragAndDrop.perform();
```

#### 46. How to handle hidden elements in Selenium WebDriver?
Using javaScript executor we can handle hidden elements.

syntax:

```
(JavascriptExecutor(driver))
.executeScript("document.getElementsByClassName(locator).click();");
```

#### 47. What is the default priority of a test method in TestNG?
The default priority of a test when not specified is integer value 0. So, if we have one test case with priority 1 and one without any priority then the test without any priority value will get executed first.

#### 48. How to prevent a test case from running using TestNG?
A Test method can be disabled from getting executed by setting the “enabled” attribute as false.

```
//In case of a test method
@Test(enabled = false)
public void testMethod1() {
  //Test logic
}
  
  
//In case of test method belonging to a group
@Test(groups = {"NegativeTests"}, enabled = false)
public void testMethod2() {
  //Test logic
}
```

#### 49. What is the use of @Factory annotation in TestNG?
@Factory annotation helps in the dynamic execution of test cases. Using @Factory annotation we can pass parameters to the whole test class at run time. The parameters passed can be used by one or more test methods of that class.
Example – there are two classes TestClass and the TestFactory class. Because of the @Factory annotation, the test methods in class TestClass will run twice with the data “k1” and “k2”.

```
public class TestClass{
    private String str;
  
    //Constructor
    public TestClass(String str) {
        this.str = str;
    }
  
    @Test
    public void TestMethod() {
        System.out.println(str);
    }
}
  
public class TestFactory{
    //The test methods in class TestClass will run twice with data "k1" and "k2"
    @Factory
    public Object[] factoryMethod() {
        return new Object[] { new TestClass("K1"), new TestClass("k2") };
    }
}
```

#### 50. Explain the template for over all Exit report?
* Name of the project:
* Test Lead:
* Summary:-
* SIT: No of Test case passed,Failed,N/A. Defects Open,closed,Deferred.
* Reason for defects deferred and NA scripts.
* Regression:- No of Test case passed,Failed,N/A. Defects Open,closed,Deferred.
* Reason for defects deferred and NA scripts.
* UAT:- No of Test case passed,Failed,N/A. Defects Open,closed,Deferred.
* Reason for defects deferred and NA scripts.
* Test case execution status and count:-
* List of Open defects:-
* Defect summary:-

