---
title: 10 useful JavaScript Array methods to simplify your codes
date: "2021-04-25T22:12:03.284Z"
description: "Javascript methods"
tags: ['2021', 'Javascript', 'VanilaJs', 'Beginners']
disqus: true
---

### 1. filter()

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

```
const words = ['HTML', 'CSS', 'JavaScript', 'Python', 'Java'];
const longWords = words.filter(word => word.length > 4);
console.log(longWords); 

Output: ["JavaScript", "Python"]
```

### 2. forEach()

The `forEach()` method executes a provided function once for each array element.

```
const words = ['HTML', 'CSS', 'JavaScript'];
words.forEach(word => console.log(word));

Output:
HTML
CSS
JavaScript
```

### 3. some()

The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

```
const myArray = [1,2,3,4,5];
const evenEsists = myArray.some(element => element % 2 === 0);
console.log (evenEsists); 

Output: true
```

### 4. every()

The `every()` method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

```
const myArray = [1,2,3,4,5];
const evenEsists = myArray.every(element => element % 2 === 0);
console.log (evenEsists); 

Output: false
```
### 5. includes()

The `includes()` method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

```
const numbers = [1,2,3,4,5];
console.log(numbers.includes(2)); Output: true
console.log(numbers.includes(8)); Output: false
```

### 6. map()

The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

```
const numbers = [1,2,3,4,5];
const doubled = numbers.map(x => x * 2);
console.log(doubled) 

Output: [2,4,6,8,10]
```

### 7. reduce()

The `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

```
const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce((x,y) => x+y);

console.log(sum); 

Output: 100
```

### 8. sort()

The `sort()` method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.

```
const techs = ['HTML', 'CSS', 'JavaScript'];
techs.sort();
console.log(techs); 

Output: ['CSS', 'HTML', 'JavaScript']

const numbers = [1, 30, 4, 21, 10000];
numbers.sort((x, y) => x - y);
console.log(numbers); 

Output: [1, 4, 21, 30, 10000]
```

### 9. find()

The `find()` method returns the value of the first element in the provided array that satisfies the provided testing function.

```
const { element } = require("prop-types");

const numbers = [7, 14, 8, 128, 56];
const found = numbers.find(element => element >10);
console.log(found); 

Output: 14
```

### 10. findIndex()

The `findIndex()` method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

```
const numbers = [5, 12, 8, 130, 44];

const indexFpund = numbers.findIndex(element => element > 15);

console.log(indexFpund); 

Output: 3
```