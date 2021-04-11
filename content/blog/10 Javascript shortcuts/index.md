---
title: 10 JavaScript Shorthand Techniques that will save your time
date: "2021-04-12T22:12:03.284Z"
description: ""
tags: ['2021', 'Javascript', 'VanilaJs', 'Beginners']
disqus: true
---

The shorthand techniques of any programming language help you to write more clean and optimized code and let you achieve your goal with less coding. Let’s discuss some of the shorthand techniques of JavaScript one by one.


### 1. Declaring variables

```
//General way
let x; 
let y = 20; 

//Shorthand 
let x, y = 20;
```

### 2. Exponent Power
We can use Math.pow() method to find the power of a number. There is a shorter syntax to do it with a double asterisk (**).

```
//Longhand 
const power = Math.pow(4, 3); // 64 

// Shorthand 
const power = 4**3; // 64
```

### 3. Repeat a string multiple times
To repeat a string a specified number of times you can use a `for loop`. But using the repeat() method we can do it in a single line.

```
//Longhand 
let str = ''; 
for(let i = 0; i < 5; i ++) { 
  str += 'Hello '; 
} 
console.log(str); // Hello Hello Hello Hello Hello 

// Shorthand 
'Hello '.repeat(5);
```

### 4. String into a Number
There are built-in methods like `parseInt` and `parseFloat` available to convert a string into numbers. We can also do this by simply providing a unary operator (+) in front of the string value.

```
//Longhand 
let total = parseInt('453'); 
let average = parseFloat('42.6'); 

//Shorthand 
let total = +'453'; 
let average = +'42.6';
```

### 5. Template Literals
This is my favorite. We normally use the + operator to concatenate string values with variables. With the `ES6` template literals we can do it more simply.

```
//Longhand 
console.log('You got a missed call from ' + number + ' at ' + time); 

//Shorthand 
console.log(`You got a missed call from ${number} at ${time}`);
```

### 6. Arrow Function
The most useful shorthand and we often use it. 

```
//Longhand 
function add(num1, num2) { 
   return num1 + num2; 
} 

//Shorthand 
const add = (num1, num2) => num1 + num2;
```

### 7. AND(&&) Short circuit evaluation
If you are calling a function only if a variable is true, then you can use AND(&&) short circuit as an alternative for this.

```
//Longhand 
if (isLoggedin) {
 goToHomepage(); 
} 

//Shorthand 
isLoggedin && goToHomepage();
```

### 8. Assigning values to multiple variables
We can assign values to multiple variables in one line with array destructuring.

```
//Longhand 
let a, b, c; 
a = 5; 
b = 8; 
c = 12;
 
//Shorthand 
let [a, b, c] = [5, 8, 12];
```

### 9. Find max and min number in the array
We can use for loop to loop through each value of the array and find the max or min value. We can also use the `Array.reduce()` method to find the max and min numbers in the array.

But using a spread operator we can do it in a single line.

```
// Shorthand 
const arr = [2, 8, 15, 4]; 
Math.max(...arr); // 15 
Math.min(...arr); // 2
```

### 10. Merging of arrays

```
let arr1 = [20, 30]; 
//Longhand 
let arr2 = arr1.concat([60, 80]); 
// [20, 30, 60, 80] 

//Shorthand 
let arr2 = [...arr1, 60, 80]; 
// [20, 30, 60, 80]
```