---
title: Smoke testing vs Sanity testing
date: "2020-09-25T22:12:03.284Z"
description: "In this article, we see what is Smoke Testing and Sanity Testing and also the difference between Smoke and Sanity Testing."
tags: ['2020', 'Automation', 'Selenium', 'Interview Questions']
disqus: true
---

![image credit: https://blog.testproject.io/](https://blog.testproject.io/wp-content/uploads/2020/05/31-05-1.jpg)

### What is Smoke Testing in Software Testing?
Smoke Testing is done to make sure if the build we received from the development team is testable or not. It is also called as “Day 0” check. It is done at the “build level”.

It helps not to waste the testing time to simply testing the whole application when the key features don’t work or the key bugs have not been fixed yet. Here our focus will be on primary and core application work flow.

#### How to Conduct Smoke Testing?
To conduct smoke testing, we don’t write test cases. We just pick the necessary test cases from already written test cases.

Do we really write test cases for all testing types? Here in this article, we have given clear idea on choosing testing types to write test cases.

As mentioned earlier, here in Smoke Testing, our main focus will be on core application work flow. So we pick the test cases from our test suite which cover major functionality of the application. In general, we pick minimal number of test cases that won’t take more than half an hour to execute.

**Real Time Example:** Assume, you are working for an eCommerce site. When a new build is released for testing, as a Software QA you have to make sure whether the core functionalities are working or not. So you try to access the eCommerce site and add an item in to your cart to place an order. That’s a major flow in most of the eCommerce sites. If this flow works, you can say this build is passed. You can move on to functional testing on the same build.

### What is Sanity Testing in Software Testing?
Sanity Testing is done during the release phase to check for the main functionalities of the application without going deeper. It is also called as a subset of Regression testing. It is done at the “release level”.

At times due to release time constraints rigorous regression testing can’t be done to the build, sanity testing does that part by checking main functionalities.

Most of the times, we don’t get enough time to complete the whole testing. Especially in Agile Methodology, we will get pressure from the Product owners to complete testing in few hours or end of the day. In this scenarios we choose Sanity Testing. Sanity Testing plays a key role in these kind of situations.

#### How to Conduct Sanity Testing?
Same like Smoke testing, we don’t write separate test cases for Sanity testing. We just pick the necessary test cases from already written test cases.

**Real Time Example:** Let’s take the same example as above. Assume you are working on an eCommerce site. A new feature is released which is related to Search functionality. Here your main focus should be on the Search functionality. Once you make sure that the Search functionality is working fine then you move on to other major functionality such as payment flow.

|SMOKE TESTING| SANITY TESTING |
|--|--|
| Smoke Test is done to make sure if the build we received from the development team is testable or not | Sanity Test is done during the release phase to check for the main functionalities of the application without going deeper |
| Smoke Testing is performed by both Developers and Testers | Sanity Testing is performed by Testers alone |
| Smoke Testing exercises the entire application from end to end | Sanity Testing exercises only the particular component of the entire application |
| Smoke Testing, build may be either stable or unstable | Sanity Testing, build is relatively stable |
