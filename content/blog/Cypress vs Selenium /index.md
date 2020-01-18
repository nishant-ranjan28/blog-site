---
title: Selenium vs Cypress
date: "2020-01-16T22:12:03.284Z"
description: "Difference between Selenium and Cypress"
---

What are the basic differences between Selenium and Cypress? Why Cypress is the trend in today's market?
 
### [Selenium](https://selenium.dev/) WebDriver
WebDriver is a tool for writing automated tests of websites. It aims to mimic the behavior of a real user, and as such interacts with the HTML of the application.

### [Cypress](https://cypress.io)

Cypress is an End-to-End javascript Testing framework, which comes with a lot of inbuilt features that you will require in any automation tool. Cypress uses **Mocha** testing framework and **chai** assertion library in its framework and mainly it's not built on top of selenium, it's a new driver that operates within your application and this allows very good control over your frontend and backend of the application.
 
**Difference between Selenium and Cypress**
 
| Selenium | Cypress |
|--|--|
| Selenium is open source and released under the Apache 2.0 license. | Cypress was also released as open-source under the MIT license. However, compared to Selenium, not all parts are open source, e.g. the dashboard in Cypress is a closed source. |
| Selenium Supports Multiple browsers (Chrome, Firefox, Opera, IE) | Cypress supports only Chrome and Electron browsers |
| Selenium tests can be written in many languages (Java, Python, Javascript, Ruby, C#) | Cypress tests can only be written in JavaScript |
| Support Native Events | Not supported as of February 2019. |
| Selenium runs outside of the browser and communicates with the browser through the network. | Unlike Selenium, Cypress runs inside the browser in the JavaScript runtime environment. |