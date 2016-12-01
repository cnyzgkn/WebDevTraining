//属性的简洁表示法：属性名为变量名, 属性值为变量值
var foo = 'bar';
var baz = {foo};
// 等同于
var baz = {foo: foo};

function f(x, y) {
  return {x, y};
}
// 等同于
function f(x, y) {
  return {x: x, y: y};
}

f(1, 2); // Object {x: 1, y: 2}

//方法也可以简写
var o = {
  method() {
    return "Hello!";
  }
};
// 等同于
var o = {
  method: function() {
    return "Hello!";
  }
};

//例子
var birth = '2000/01/01';

var Person = {
  name: '张三',
  //等同于birth: birth
  birth,
  // 等同于hello: function ()...
  hello() { console.log('我的名字是', this.name); }
};

//对象比较 Object.is
document.writeln(+0 === -0); //true
document.writeln(NaN === NaN); // false
document.writeln(Object.is(+0, -0)); // false
document.writeln(Object.is(NaN, NaN)); // true