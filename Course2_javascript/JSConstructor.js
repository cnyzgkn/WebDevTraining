function Foo(y) {
  this.y = y;
}
 
Foo.prototype.x = 10;
 

Foo.prototype.calculate = function (z) {
  return this.x + this.y + z;
};
 

var b = new Foo(20);
var c = new Foo(30);
 
// 调用继承的方法
b.calculate(30); // 60
c.calculate(40); // 80

if(b.__proto__ === Foo.prototype)
  document.writeln("b's prototype is Foo.prototype  "); 
if(c.__proto__ === Foo.prototype)
  document.writeln("c's prototype is Foo.prototype  "); 
if(b.constructor === Foo)
  document.writeln("b's constructor is Foo  "); 
if(c.constructor === Foo)
  document.writeln("c's constructor is Foo  "); 
if(Foo.prototype.constructor === Foo)
  document.writeln("Foo.prototype's constructor is Foo  "); 
if(b.calculate === b.__proto__.calculate)
  document.writeln("b's calculate is b.__proto__.calculate  "); 