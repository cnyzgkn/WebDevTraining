//1. 函数声明 Function declaration
//在进入上下文阶段创建
function add(x, y)
{
	return x + y;
}

function globalFD() {
  //inside another function
  return function innerFD() {
    document.writeln("innerFD");
  }
}

var x = globalFD();
document.writeln(x.innerFD());

document.writeln(add(1,2));
document.writeln(add.length);
document.writeln(add.constructor);
document.writeln(add.call);
document.writeln(add.apply);
document.writeln(add.prototype);
document.writeln(typeof add.constructor);
document.writeln(typeof add.call);
document.writeln(typeof add.apply);
document.writeln(typeof add.prototype);

//2. 函数表达式 Function expression
//在代码执行阶段创建
var multiply = function()
{
	return arguments[0]*arguments[1];
}
document.writeln(multiply(3,5));

//区别：如果FE有一个名称，就很难与FD区分，诀窍：FE总是处在表达式的位置
// 圆括号（分组操作符）内只能是表达式
(function foo() {});
 
// 在数组初始化器内只能是表达式
[function bar() {}];
 
// 逗号也只能操作表达式
1, function baz() {};

//作用：
//将一个函数作为参数传递给其它函数
function foo(callback) {
  callback();
}
 
foo(function bar() {
  document.writeln('foo.bar');
});
 
foo(function baz() {
  document.writeln('foo.baz');
});

//用于闭包，创建后直接调用
var foo1 = {};
 
(function init() {
  var x = 10;
  foo1.bar1 = function () {
    document.writeln(x);
  };
})();
 
foo1.bar1(); // 10;
 
document.writeln(x); // "x" 未定义