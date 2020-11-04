---
title: var, let and const in ES6
date: "2020-11-04T22:40:32.169Z"
description: "ES6 (also known as ECMAScript 2015) has major changes over JavaScript’s syntax and brings new features that didn’t exist before."
tags: ["2020","javascript", "ES6", "var", "let", "const"]
disqus: true
---

ES6 is important to learn because one reason is that, it makes JavaScript better and easier to write, and also ES6 is being used together with today’s modern web technologies like React, Node.js and so on.

![Var let and const](var-let-const.jpg)

## Var
Variables, declared with var, are either function-scoped or global-scoped. They are visible through blocks.

> "var" has no block scope.

#### Scope of var
Scope essentially means where these variables are available for use. var declarations are globally scoped or function/locally scoped.

Example of var:
```
var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 2
```
Output:
```
> 2
> 2
```

> “var” tolerates redeclarations
If we declare the same variable with let twice in the same scope, that’s an error:
```
var user = "Pete";

var user = "John"; // this "var" does nothing (already declared)
// ...it doesn't trigger an error

alert(user); // John
```

Problem with var:
```
for(var i = 1; i < 10; i++) {
  console.log(i);
} 
console.log(i);    // What do we expect here?
```

![enter image description here](https://miro.medium.com/max/928/1*3Ol4GcpXx1HmdveODHKlCA.png)

Everything seems fine till here. But what about the second console.log?

![enter image description here](https://miro.medium.com/max/600/1*mw_ut_4f46jziMo0LXTZfw.png)

The second console.log is outside of the for loop and the local variable “i” still gets printed, whereas it supposed to be undefined.


## let
`let` is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm. It also signals that the variable will be used only in the block it’s defined in, which is not always the entire containing function.

> A let variable can be updated but not redeclared.

An example of trying to redeclare a let variable:

```
<script>
let points = 50;
let points = 60;
</script>
```
In the console I get an error:
```
Uncaught SyntaxError: Identifier 'points' has already been declared
```
However, It can be updated:

```
let points = 50;
points = 60;
// In console:
points
// Returns:
60
```

#### Scope of let
If I declare a let variable at the global scope, then redeclare it within a block (curly brackets) as in the example below, I will not get an error in the console, but it will not actually redeclare let.

```
let points = 50;
let winner = false;

if(points > 40) {
  let winner = true;
}
```

If I call `winner`, It will return `false`.

##### Curious what's happening?
Because `let winner = false` and `let winner = true`, are actually two separate variables because they are scoped differently, even though they have the same name.

First `winner` is scoped to the window (globally) and another `winner` is scoped to the block (between the curly brackets).

In the above example if we change both `let` variables to var, then call winner in the console it returns true because it is not inside a function. (**Remember: var is function scoped.**) The var variable is being redeclared within its scope, which is the window in this case.

```
let points = 50;
var winner = false;
if(points > 40) {
  var winner = true;
}
```

If I call `winner`, It now returns: `true`

## Const
Variables declared with the `const` maintain constant values. `const` declarations share some similarities with let declarations.

> const cannot be updated or re-declared

Example:

```
// If I define the const variable:
const key = 'BigBinary';
// Then try to redeclare it:
key = 'Aceinvoice'
```
Output:
```
// I get the following error:
Uncaught TypeError: Assignment to constant variable.
```

**_There is a limitations/conditions to this, though. If I create a const variable that is an object, the attributes of that object can be updated._**

```
// Creating my company object:
const company = {
  name: 'BigBinary',
  employees: 50
}

// Calling company in the console:
company

// It returns:
{name: "BigBinary", employees: 50}

// If I then redeclare the employees attribute:
company.employees = 100

// When I call it:
company

// It returns:
{name: "BigBinary", employees: 100}
```

#### Summary:

| Keyword | Function vs Block-scope | Redefinable? |
|--|--|--|
| var | function-scope |Yes
| let | block-scope |Yes
| const | block-scope |No

To know the difference in scoping of `let` and `var`, please read about [hositing](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting).

**Thank you for reading :)**
