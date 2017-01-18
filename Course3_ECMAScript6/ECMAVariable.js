//let声明的变量只在let命令所在的代码块内有效。
{
  let a = 10;
  var b = 1;
}

//document.writeln("a == " + a); // ReferenceError: a is not defined.
document.writeln("b == " + b); 

//适合用于for循环内
for (var i = 0; i < 10; i++) {}
document.writeln("i == " + i);  //ReferenceError: i is not defined

//避免变量提升
document.writeln("foo == " + foo);  // 输出undefined
document.writeln("bar == " + bar);   // 报错ReferenceError

var foo = 2;
let bar = 2;

/*
//解构Destructuring
let [head, ...tail] = [1, 2, 3, 4];
document.writeln("head == " + head);  // 1
document.writeln("tail == " + tail);  // [2, 3, 4]

//扩展运算符（...）
// ES5
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// ES6
//const itemsCopy = [...items];
*/