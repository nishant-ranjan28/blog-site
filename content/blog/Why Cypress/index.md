---
title: Why Cypress?
date: "2020-01-19T22:12:03.284Z"
description: "Why Cypress is in trend?"
disqus: true
---

**Why Should You Switch to Cypress for Modern Web Testing?**
![Cypress: Credit of the image DZone](https://cdn-images-1.medium.com/max/1600/1*4fvrvDkoDHXxQpXsOsCpzA.png)

>Cypress is a JavaScript-based end-to-end testing framework that doesn't use Selenium at all. It is built on top of Mocha, which is again a feature-rich JavaScript test framework running on and in the browser, making asynchronous testing simple and fun. Cypress also uses a BDD/TDD assertion library and a browser that can be paired with any JavaScript testing framework.

Before we go in details some key points about **Cypress** :
- **It's for Frontend Developers!**
- **It's JavaScript Only!**
- **It's Mocha Only!**
- **It's Chrome Only!**
- **It Runs in the Browser!**
- **It Has Built-In Server Mocking!**

Challenges in Modern Web Testing
- Dealing with XHR calls and web services
- Short deployment sprints, and major time involved in testing
- Security of data
- Very expensive to maintain due to lack of infrastructure for testing
- Dynamic behavior of application due to modern development frameworks

These are some associated with Selenium. Selenium has been a major player in E2E web application testing for a decade now, but the modern web is different today. In order to overcome these shortcomings of Selenium, Cypress comes into the picture here.

###Let's explore why Cypress?

- **Automatic waiting**: Cypress automatically waits for the DOM to load, elements to become visible, the animation to be completed, the XHR and AJAX calls to be finished, and much more. Hence, there is no need to define implicit and explicit waits.

- **Real-Time Reloads**: Cypress is intelligent enough to know that after saving your test file (xyz_spec.js file), you are going to run it again, so it automatically triggers the run next to your browser as soon as you press to save your file. Hence, there is no need to manually trigger the run.

###How it's different from other automation testing tool?

- **Architecture**: Most testing tools operate by running outside of the browser and executing remote commands across the network. Cypress is the exact opposite. Cypress is executed in the same run loop as your application.

- **Works on Network Layer**: Cypress also operates at the network layer by reading and altering web traffic on the fly. This enables Cypress to not only modify everything coming in and out of the browser but also to change the code that may interfere with its ability to automate the browser. Cypress ultimately controls the entire automation process from top to bottom.

- **A New Kind of Testing**: Having ultimate control over your application, the network traffic, and native access to every host object unlocks a new way of testing that has never been possible before. Instead of being "locked out" of your application and not being able to easily control it, Cypress instead lets you alter any aspect of how your application works.

> We might think to switch our tactics and use Cypress as our primary E2E tool. It works as expected and makes our lives a lot easier. I have used Cypress way too little to like it very much and think this is the tool we require. Anyway, do try Cypress.