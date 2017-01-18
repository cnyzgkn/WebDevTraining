/*
//1. 加减法函数
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

document.writeln(add(1, 3));
document.writeln(subtract(1, 3));


//2. 使用prototype实现Calculator
var Calculator = function() {};
//给Calculator对象的prototype属性赋值对象字面量来设定Calculator对象的原型
Calculator.prototype = {
    add: function (x, y) {
        return x + y;
    },

    subtract: function (x, y) {
        return x - y;
    }
};
document.writeln((new Calculator()).add(1, 3));
document.writeln((new Calculator()).subtract(1, 3));


//3. 实现private/public
var Person = function(name,gender){
    this.name = name; //public variable
    this.gender = gender; //public variable    
    var _privateVariable = "PRIVATE VALUE"; //private variable   
    //function defined inside object constructor is private function
    function privateMethod(){   
        _privateVariable = "private value"; 
        document.writeln("privateMethod called " + _privateVariable);             
    }
    this.publicMethod = function()
    {
    	document.writeln("privateMethod called inside public wrapper");
    	privateMethod();
    } 
    //this.sayHello = function(){
    //	document.writeln("Name " + this.name + " Gender " + this.gender);
	//}       
}

Person.prototype.sayHello = function(){
    document.writeln("Name " + this.name + " Gender " + this.gender);
} 

var me = new Person("Alex","male");      
me.sayHello(); 
//me.privateMethod();//error
//me.publicMethod();//OK
//document.writeln(me._privateVariable);//undefined
*/

//4. 在赋值原型prototype的时候使用function立即执行的表达式
var Calculator = function() {};
Calculator.prototype = function () {
    add = function (x, y) {
        return x + y;
    }
    subtract = function (x, y) {
        return x - y;
    }
    privateMethod = function()
    {	
    	document.writeln("privateMethod");
    }
    return {
        Add: add,
        Subtract: subtract,
        PrivateMethod: privateMethod
    }
} ();
/*
document.writeln((new Calculator()).Add(1, 3));
document.writeln((new Calculator()).Subtract(1, 3));
document.writeln((new Calculator()).PrivateMethod()); //error
*/
document.writeln(Calculator.prototype.Add(1, 3));

var a = 10
document.writeln(a);