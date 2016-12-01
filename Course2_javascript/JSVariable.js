//'use strict';

function varA() {
	a = 10; 
}
varA();
document.writeln("a == " + a); 

const PI = 3.14;
//PI = 3; //Uncaught TypeError

function foo() {
    var n = 1;
    document.writeln("n == " + n); 
}

foo();



