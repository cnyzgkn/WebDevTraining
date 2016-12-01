//箭头函数
var f = v => v;
//等同于
var f = function(v) {
  return v;
};

//如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
var f = () => 5;
// 等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};

//嵌套的箭头函数
function insert(value) {
  return {into: function (array) {
    return {after: function (afterValue) {
      array.splice(array.indexOf(afterValue) + 1, 0, value);
      return array;
    }};
  }};
}
// 等同于
insert(2).into([1, 3]).after(1); //[1, 2, 3]