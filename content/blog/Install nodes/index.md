---
title: Install node in mac and Windows
date: "2020-04-05T22:12:03.284Z"
description: ""
tags: ['2020', 'node', 'mac', 'windows']
disqus: true
---
Node.js® is a version of Chrome’s V8 JavaScript runtime engine. It can also be used for developing native desktop applications. It has an in-built package manager called npm which stands for node package manager. Using npm, one can install packages that run on node.js. All packages are available on npm’s website npmjs.com.

![Install node](https://www.dyclassroom.com/image/topic/howto-mac/mac-node-homebrew/mac-node-homebrew.png)

### Installing node in mac through brew:
First, we need to install homebrew in MAC
- Please execute the below command in terminal to install brew
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
- Close the terminal and open it again
- Run brew update to update brew to latest version
```
brew update
```
- Run brew doctor as a safe measure to make sure your system is ready to brew
```
brew doctor
```
Now execute the below command in terminal to install nodeJs
```
brew install node
```

### Installing node in Windows through brew:
Installing NodeJs and NPM can be done like any other windows application using the installer downloaded from Node.js website.

- Download the Windows installer package from Node.js website (nodejs.org).
- Run the downloaded msi package.
- Accept the license agreement and click NEXT a few times until you get below screen.
- Observe that Setup window shows following packages:
    1. Node.js runtime (actual node executable)
    2. npm package manager (that node package manager we discussed previously)
    3. Online documentation shortcuts (few links to help)
    4. Add to PATH (This makes node and npm commands to be executable from any path in command prompt.)
![Install node](https://i2.wp.com/www.webdriverjs.com/wp-content/uploads/2016/11/Nodejs-Install-Dialog.png?w=495)

- Optional – Restart your Windows OS. This will help you to be safe in case Add to PATH step does not reflect.