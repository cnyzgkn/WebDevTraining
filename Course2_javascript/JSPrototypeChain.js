'use strict';

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
