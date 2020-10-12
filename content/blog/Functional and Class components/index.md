---
title: Functional components and Class components
date: "2020-10-10T22:12:03.284Z"
description: "Uses of functional and class components"
tags: ['2020', 'React', 'Components', 'Begineer']
disqus: true
---

![for a repo](./Functional.jpg)

### What is react components?
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and returns HTML via a render function.

> In the world of React, there are two ways of writing a React component. One uses a function and the other uses a class. Recently functional components are becoming more and more popular.

This article will help you understand the differences between functional and class components by walking through each one with sample code so that you can dive into the world of modern React!

First of all, the clear difference is the syntax. Just like in their names, a functional component is just a plain JavaScript function that returns JSX. A class component is a JavaScript class that extends React.Component which has a render method. A bit confusing? Let’s take a look into a simple example.

```
import React from "react";
 
const FunctionalComponent = () => {
 return <h1>Hello, world</h1>;
};
```

As you can see, a functional component is a function that returns JSX. If you are not familiar with arrow functions introduced in ES6, you can also check out the example below without.

```
import React from "react";

function FunctionalComponent() {
 return <h1>Hello, world</h1>;
}
```

On the other hand, when defining a class component, you have to make a class that extends `React.Component`. The JSX to render will be returned inside the render method.

```
import React, { Component } from "react";

class ClassComponent extends Component {
 render() {
   return <h1>Hello, world</h1>;
 }
}
```
Below is the same example but without using destructuring. If you are not familiar with destructuring, you can learn more about destructuring and arrow functions introduced in ES6!

```
import React from "react";

class ClassComponent extends React.Component {
 render() {
   return <h1>Hello, world</h1>;
 }
}
```
#### Passing props
Passing props can be confusing, but let’s see how they are written in both class and functional components. Let’s say we are passing props of the name “Nishant” like below.

```
<Hello name="Nishant" />
```

```
function Hello(props){
   return <div>Hello {props.name}</div>
}
```

Here’s the same component, but written in ES6:
```
const Hello = ({name}) => <div>Hello {name}</div>
```

Class components with props:

```
class ClassComponent extends React.Component {
  render() {
    const { name } = this.props;
    return <h1>Hello, { name }</h1>;
 }
}
```

Since it is a class, you need to use this to refer to props. And of course, we can use destructuring to get name inside props while utilizing class-based components.

#### Difference between Functional comonents and Class components

|Functional Comonents| Class Components |
|--|--|
| There is no render method used in functional components. | It must have the render() method returning HTML |
| A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element. | A class component requires you to extend from React. Component and create a render function which returns a React element. |
| | |
