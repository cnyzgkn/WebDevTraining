//闭包定义：函数和函数内部能访问到的变量（也叫环境）的总和
{
var local = 'varaible'; //变量
function simpleClosure() {  //函数
	document.writeln(local); //函数内可访问变量
}
}

//闭包根源：JS函数内部可以使用函数外部的变量，闭包是JS函数作用域的副产品
//闭包目的：隐藏变量
//实现手段：函数套函数，然后return一个函数
function foo(){
  var local = 1; //需要local为局部变量，所以放在函数内
  function bar(){
    local++;
    return local;
  };
  return bar; //如果不return，就无法使用这个闭包
  //改成window.bar = bar也是一样的，只要让外面可以访问到这个bar函数
}

var func = foo();
document.writeln(func());


//闭包导致内存泄露？IE6的bug，使用完闭包之后，依然回收不了闭包里面引用的变量

function createClosure() {
	var n = 1;

    return {
    set: function (x) { n = x; },
    get: function () { return n; }
  };
}

var calc = createClosure();
//calc是一个对象，这个对象有get和set两个方法
//运行时内部会开辟一块内存，内存里存放n的值，并让这块内存对calc可见
document.writeln("createClosure.n == " + calc.get());

calc.set(calc.get()+10);
document.writeln("createClosure.n == " + calc.get());
