//'use strict';

var a = 1, b = '2', c = true, d, e = null, f = function(){}
//typeof这会返回一个javascript基本类型的实例的类型
typeof a === 'number'; // true
typeof b === 'string';    // true
typeof c === 'boolean'; // true
typeof d === 'undefined'; // true
typeof e === 'object'; // true
typeof f === 'function'; // true

function Person(name)   
{   
   this.name=name;   
   this.showMe=function()   
   {   
      alert(this.name);   
   }   
};   

typeof Person;//"function"
typeof (new Person());//"object"

var oStringObject = new String("hello world"); 
document.writeln(typeof oStringObject); 

function varIn() {
	//var inVar = 10; 
	inVar = 10; 
}
varIn();
document.writeln("inVar == " + inVar); 

const PI = 3.14;
//PI = 3; //Uncaught TypeError

//“+"操作符会执行相加操作和字符串连接操作
document.writeln("1" + "2");

//声明提升：变量函数的声明会被提升到当前函数主体的顶部，不管这个声明语句是否出现在了不可到达的地方
function bar() {
    // 这个条件成立吗？
    //var foo;
    if (! foo) {
        var foo = 10;
    }
    alert(foo);
}
bar();






