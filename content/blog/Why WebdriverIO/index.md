---
title: What is  WebdriverIO?
date: "2020-04-05T22:12:03.284Z"
description: "why you should consider using WebdriverIO for testing"
tags: ['2020', 'Automation', 'webdriverIO', 'Javascript']
disqus: true
---
WebdriverIO is a custom implementation for selenium's W3C webdriver API. It is written in Javascript and packaged into 'npm' and runs on Node.js.

![WebdriverIO](https://i2.wp.com/grantnorwood.com/app/uploads/2017/07/webdriver-io-logo.png?w=1680&ssl=1)

### Main Features of WebdriverIO:
- WebdriverIO is a good automation tool which can automate both web applications and native mobile Apps.
- It has integrated test runner which helps us to write asynchronous commands in a synchronous way so that we don’t need to care about how to handle a Promise to avoid racing conditions.
- It has 'wdio setup wizard' which makes our project setup very easy.
- We can write our own javascript functions test.
- The test runner also comes with a variety of hooks that allow us to interfere into the test process in order to e.g. take screenshots if an error occurs or modify the test procedure according to a previous test result.
- WebdriverIO services will be helpful to integrate our test to third party tools like 'Appium'.

### Installation steps:

To install webdriverIO, you will need node to be installed in your system. Please go through below mentioned post to install it.

[Install node in mac and windows](https://nishantranjan.in/Install%20nodes/)

- Setup your project
Before installing dependencies, we will need to initialize a new NPM project. This will allow us to use the CLI to install dependencies in your project.
```
$ mkdir webdriverio-test && cd webdriverio-test
$ npm init -y
```
The -y will answer 'yes' to all the prompts, giving you a standard NPM project. Feel free to omit the -y if you'd like to specify your own project details.

- Install WebdriverIO CLI
```
$ npm i --save-dev @wdio/cli
```

- Generate configuration file
Next, we will generate a configuration file to store our WebdriverIO settings.

To do that, just run the configuration utility:
```
$ npx wdio config -y
```
That's it! The configurator will install all required packages for you and create a config file called wdio.conf.js.

[**In next post we will run our first spec using webdriverIO.**](https://nishantranjan.in/run%20test%20in%20webdriverIO/)