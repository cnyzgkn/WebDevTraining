class Point {
//constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。
//一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
//constructor方法默认返回实例对象（即this）
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static classMethod() {
  	return "classMethod";
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

if(Point.prototype.constructor === Point) // true
	document.writeln("Point.prototype.constructor === Point");

//生成实例必须用new
// 报错
//var point = Point(2, 3);
// 正确
var point = new Point(2, 3);

point.toString(); // (2, 3)
Point.classMethod();

//实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）
point.hasOwnProperty('x') // true
point.hasOwnProperty('y') // true
point.hasOwnProperty('toString') // false
point.__proto__.hasOwnProperty('toString') // true

//类的所有实例共享一个原型对象
var p1 = new Point(2,3);
var p2 = new Point(3,2);
document.writeln(p1.__proto__ === p2.__proto__); //true

//可以通过实例的__proto__属性为Class添加方法
p1.__proto__.printName = function () { return 'Oops' };
document.writeln(p1.printName()); // "Oops"
document.writeln(p2.printName()); // "Oops"
var p3 = new Point(4,2);
document.writeln(p3.printName()); // "Oops"

//与函数一样，类也可以使用表达式的形式定义，常用于立即执行的Class
let person = new class {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    document.writeln(this.name);
  }
}('Sam');
person.sayName(); // "Sam"

//ES6中的继承实质上是语法糖（syntactic sugar）
//super()必须且只能在constructor方法中调用，否则新建实例时会报错
//super()在子类的 constructor里必须先于this调用
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}

let cp = new ColorPoint(25, 8, 'green');

document.writeln(cp instanceof ColorPoint); // true
document.writeln(cp instanceof Point); // true

//（1）子类的__proto__属性，表示构造函数的继承，总是指向父类。
//（2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。
class A {
}

class B extends A {
}

document.writeln(B.__proto__ === A); // true
document.writeln(B.prototype.__proto__ === A.prototype); // true

//ES6允许继承原生构造函数定义子类
class MyArray extends Array {
  constructor(...args) {
    super(...args);
  }
}

var arr = new MyArray();
arr[0] = 12;
document.writeln(arr.length); // 1

arr.length = 0;
document.writeln(arr[0]); // undefined