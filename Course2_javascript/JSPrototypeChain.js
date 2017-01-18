//'use strict';
//1. prototype inheritance
var a = {
  x: 10,
  calculate: function (z) {
    return this.x + this.y + z
  }
};

var b = {
  y: 20,
  __proto__: a
};
 
var c = {
  y: 30,
  __proto__: a
};

document.writeln("b cal 30 == " + b.calculate(30)); // 60
document.writeln("c cal 30 == " + c.calculate(30)); // 70

if(b.__proto__ === a)
	document.writeln("b's prototype is a"); 
if(c.__proto__ === a)
	document.writeln("c's prototype is a"); 
if(a.__proto__ === Object)
  document.writeln("a's prototype is Object");
if(a.__proto__ === Object.prototype )
  document.writeln("a's prototype is Object.__proto__ ");
document.writeln(typeof Object.prototype); 
document.writeln(typeof Object); 

//2. 常用prototype
//arr ----> Array.prototype ----> Object.prototype ----> null
var arr = [1, 2, 3];
//Array.prototype defines indexOf() shift() so you can use them in all Array objects

//foo ----> Function.prototype ----> Object.prototype ----> null
function foo() {
    return 0;
}
//Function.prototype defines apply() eval() so you can use them in all Function objects

//3. constructor构造函数
//不写new就是普通函数，默认返回undefined
function Student(name) {
    "use strict";
    this.name = name;
    this.hello = function () {
        document.writeln('Hello,' + this.name + '!');
    }
}

//写了new就变成构造函数，this指向新创建的对象并默认返回this，不需要在最后写return this
var xiaoming = new Student('Xiaoming');
xiaoming.name; // 'Xiaoming'
xiaoming.hello(); // Hello, Xiaoming!
var xiaohong = new Student('Xiaohong');
var xiaojun = new Student('Xiaojun');
//xiaoming ↘
//xiaohong -→ Student.prototype ----> Object.prototype ----> null
//xiaojun  ↗

//忘记写new
//strict模式下，this.name = name将报错，因为this绑定为undefined
//非strict模式下，this.name = name不报错，因为this绑定为window，于是无意间创建了全局变量name，并且返回undefined
var wrongName = Student('WrongName');
document.writeln(wrongName); //this绑定为全局对象window