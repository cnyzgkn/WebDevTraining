//ES5数据类型：Undefined、Null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）
//第七种：Symbol

let s = Symbol();
document.writeln(typeof s);// "symbol"

var s1 = Symbol('foo');
var s2 = Symbol('bar');

s1 // Symbol(foo)
s2 // Symbol(bar)

document.writeln(s1.toString()); // "Symbol(foo)"
document.writeln(s2.toString()); // "Symbol(bar)"
document.writeln(s1 === s2); // false


//表示独一无二的值，用于对象的属性名
var mySymbol = Symbol();

// 第一种写法
var a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
var a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"


//获得属性名
var obj = {};
var a = Symbol('a');
var b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'World';

var objectSymbols = Object.getOwnPropertySymbols(obj);

document.writeln(objectSymbols); // [Symbol(a), Symbol(b)]