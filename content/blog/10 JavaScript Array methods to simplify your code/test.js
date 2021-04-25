

const techs = ['HTML', 'CSS', 'JavaScript'];
techs.sort();
console.log(techs); //['CSS', 'HTML', 'JavaScript']

const numbers = [1, 30, 4, 21, 10000];
numbers.sort((x, y) => x - y);
console.log(numbers); //[1, 4, 21, 30, 10000]