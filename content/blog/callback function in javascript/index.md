---
title: Callback function in javascript
date: "2020-11-09T22:40:32.169Z"
description: "In this blog you will learn about callback functions in JavaScript."
tags: ["2020","callback", "javascript"]
disqus: true
--- 

### What is callback function?

_**A callback is a function passed into another function as an argument to be executed later.**_

![Callback function in Javascript](https://i.ytimg.com/vi/KiLB8sViPMA/maxresdefault.jpg)

In Javascript every function is a first class object, which means that every function is an Object and can be used like any other object(String, Number etc.).

> A callback function, also known as a higher-order function.

> The use of a callback function is also known as a callback pattern.

Example:
```
function task1 (){
  console.log("Print this after 3 sec");
}

function task2(){
  console.log("Run it immediately)
}

setTimeout(task1, 3000)

task2()
```
Note: When passing a callback function as a parameter to another function we are only passing the callback function definition.

### Why do we need Callback Functions?

Callbacks are necessary for asynchronous programming, including waiting for a user request, making a request to another server and doing something with the response, loading a file, etc.



### How to create a Callback Function?

To start, let's understand first example which I have mentioned above. As you can see task2 function is getting used as parameter.

```
function task2(){
  console.log("Run it immediately)
}

setTimeout(task2, 3000)
```

Here `task2` function will display the message after 3 seconds. It is an example of callback function.

#### What is an Anonymous Function?
We can define a function directly inside another function, instead of calling it.

Example:
```
setTimeout(function task2(){
  console.log("Run it immediately)
}, 3000)
```

#### Callback in Arrow function
We can also write the same callback function as an ES6 arrow function, which is a newer type of function in JavaScript:

Example:
```
setTimeout(() => { 
    console.log("This message is shown after 3 seconds");
}, 3000);
```

#### Handle events using callback?
We can use callback functions for event declarations. If we want to do some action only after user click the button. 

Example:
```
document.queryselector("#callback-btn")
    .addEventListener("click", function() {    
      console.log("User has clicked on the button!");
});
```

### Summary
JavaScript callback functions are wonderful and powerful to use and they provide great benefits to your web applications and code. You should use them when the need arises; look for ways to refactor your code for Abstraction, Maintainability, and Readability with callback functions.

**Thanks for reading :)**