---
title: JSX in react?
date: "2020-10-18T22:12:03.284Z"
description: ""
tags: ['2020', 'React', 'Javascript', 'JSX']
disqus: true
---

### What is JSX?
JSX is an extension to javascript. It is a template script where you will have the power of using HTML and Javascript together.

Example:

```
const companyName= 'BigBinary';
const element = <h1>Hello, {companyName}</h1>; //JSX
```
The above example illustrates JSX. In the first line, we declared a constant – company name, which is a String. It is not a JSX.

In the second line, we declared a constant by element. This funny tag syntax is neither a string nor HTML. It is a JSX. CompanyName is been enclosed within flower curly braces in HTML element h1 with opening and closing tags.

```
import React from 'react'

export default function Test() {
  const company = "BigBinary";
  return (
    <div>
      <h1>Hello, {company}</h1>
    </div>
  )
}

```

It will render the message **Hello BigBinary** in the web page.

![BigBinary](BigBinary.jpg)

Therefore, we can say that JSX syntax helps us render content in the UI.

### Why Use JSX?
There are several reasons why JSX is a good idea:

**It has a low barrier to entry.** JSX is as close to plain HTML and CSS as it currently gets. With JSX, you can easily embed pieces of JavaScript in your templates without having to learn an additional templating language and having to deal with complex levels of abstraction. Any person familiar with HTML, CSS, and JavaScript should have no problem reading and understanding JSX templates.

**TypeScript support.** TypeScript supports the compilation of TSX files with type-checking. This means that, if you make a mistake in the name of an element or an attribute type, the compilation will fail and you’ll see an error message pointing to your mistake. Popular IDEs such as VS Code also support TSX files and provide code-completion, refactoring, and other useful features.

**Security.** JSX takes care of the usual output sanitization issues to prevent attacks such as cross-site scripting.

##### Another example of JSX using class components:
```
import React, { Component } from 'react'

class Test extends Component {
  render() {
    var myStyle = {
      fontSize: 80,
      fontFamily: 'Courier',
      color: '#003300'
    }
    return (
      <div>
        <h1 style={myStyle}>www.nishantranjan.in</h1>
      </div>
    );
  } 
}
export default Test;
```
Output:

![Nishant](nishantranjan.jpg)
