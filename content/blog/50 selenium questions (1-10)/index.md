---
title: Frequently asked Selenium interview questions and answers - Part 1 (Q#1 to Q#10)
date: "2020-07-31T22:12:03.284Z"
description: "Interview Questions"
tags: ['2020', 'Automation', 'Selenium', 'Interview Questions']
disqus: true
---

Before I begin discussing the questions, I’d like to emphasize that Manual testing is time-consuming, tedious, boring, and prone to errors. This gave rise to automation testing and in-turn, demand for Selenium automation testers.

#### Benifits of automation testing:
* 70% faster than the manual testing
* Wider test coverage of application features
* Reliable in results
* Ensure Consistency
* Saves Time and Cost
* Improves accuracy
* Increases Efficiency
* Better speed in executing tests
* Re-usable test scripts
* Test Frequently and thoroughly
* More cycle of execution can be achieved through automation

## Top 50 Selenium Interview Questions and Answers (Q#1-Q#10)

1. #### Explain the different exceptions in Selenium WebDriver.
Exceptions in Selenium are similar to exceptions in other programming languages. The most common exceptions in Selenium are:

=> **TimeoutException**: This exception is thrown when a command performing an operation does not complete in the stipulated time

=> **NoSuchElementException**: This exception is thrown when an element with given attributes is not found on the web page

=> **ElementNotVisibleException**: This exception is thrown when the element is present in DOM (Document Object Model), but not visible on the web page

=> **StaleElementException**: This exception is thrown when the element is either deleted or no longer attached to the DOM

2. #### What are the testing types that can be supported by Selenium?
Selenium supports the following types of testing:

=> **Functional Testing**

=> **Regression Testing**

3. #### What is Selenese?
Selenese is the set of selenium commands which are used to test your web application.

You can even make use of:

=> Actions: Used for performing operations

=> Assertions: Used as checkpoints

=> Accessors: Used for storing a value in a particular variable

4. #### What is the difference between assert and verify commands?
Assert: Assert command checks whether the given condition is true or false. Let’s say we assert whether the given element is present on the web page or not. If the condition is true then the program control will execute the next test step but if the condition is false, the execution would stop and no further test would be executed.

Verify: Verify command also checks whether the given condition is true or false. Irrespective of the condition being true or false, the program execution doesn’t halt i.e. any failure during verification would not stop the execution and all the test steps would be executed.

5. #### What is POM (Page Object Model)? What are its advantages?
Page Object Model is a design pattern for creating an Object Repository for web UI elements. Each web page in the application is required to have it’s own corresponding page class. The page class is thus responsible for finding the WebElements in that page and then perform operations on those WebElements.

The advantages of using POM are:

=> Allows us to separate operations and flows in the UI from Verification – improves code readability

=> Since the Object Repository is independent of Test Cases, multiple tests can use the same Object Repository

=> Reusability of code

6. #### What are the different types of WAIT statements in Selenium WebDriver? Or the question can be framed like this: How do you achieve synchronization in WebDriver?
=> Implicit Wait

=> Explicit Wait

**Implicit Wait:** Implicit waits are used to provide a default waiting time (say 30 seconds) between each consecutive test step/command across the entire test script. Thus, the subsequent test step would only execute when the 30 seconds have elapsed after executing the previous test step/command.

**Explicit Wait:** Explicit waits are used to halt the execution till the time a particular condition is met or the maximum time has elapsed. Unlike Implicit waits, explicit waits are applied for a particular instance only.

7. #### What are the different ways of locating a web element in Selenium?
=> ID

=> ClassName

=> Name

=> TagName

=> LinkText

=> PartialLinkText

=> Xpath

=> CSS Selector

=> DOM

8. #### What is the use of JavaScriptExecutor?
JavaScriptExecutor is an interface which provides a mechanism to execute Javascript through the Selenium WebDriver. It provides “executescript” and “executeAsyncScript” methods, to run JavaScript in the context of the currently selected frame or window. An example of that is:

```
JavascriptExecutor js = (JavascriptExecutor) driver; 
js.executeScript(Script,Arguments);
```

9. #### Explain XPath Absolute and XPath attributes.
**XPath Absolute:** XPath Absolute enables users to mention the complete XPath location from the root HTML tag to the specific elements.

```
Syntax: //html/body/tag1[index]/tag2[index]/.../tagN[index]
Example: //html/body/div[2]/div/div[2]/div/div/div/fieldset/form/div[1]/input[1]
```

**XPath Attributes:** XPath Attributes is always recommended when you don't have a suitable id or name attribute for the element you want to locate.
```
Syntax: //htmltag[@attribute1='value1' and @attribute2='value2']
Example: //input[@id='passwd' and @placeholder='password']
```

10. #### What is the difference between findElement() and findElements()?
=> **findElement():** It is used to find the first element within the current page using the given "locating mechanism". It returns a single WebElement.

=> **findElements():** It uses the given "locating mechanism" to find all the elements within the current page. It returns a list of web elements.