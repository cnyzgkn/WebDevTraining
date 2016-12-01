//for...in主要是为遍历对象,不适用于遍历数组
//数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。
//for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
//某些情况下，for...in循环会以任意顺序遍历键名

//for...of提供了遍历所有数据结构的统一操作接口

var numbers = [ 1, 2, 3, 4, 5];
document.writeln("for loop ");
for(let i = 0; i < numbers.length; i++)
	document.writeln(numbers[i]);
document.writeln("forEach loop ");
numbers.forEach( function(i) {
	document.writeln(i);
})
document.writeln("for ... in loop ");
for (i in numbers)
	document.writeln(i);
document.writeln("for ... of loop ");
for (i of numbers)
	document.writeln(i)

var letters = [ "a", "b", "c" ];
document.writeln("for ... in loop ");
for (i in letters)
	document.writeln(i);
document.writeln("for ... of loop ");
for (i of letters)
	document.writeln(i);

// array comprehension is not supported in Chrome. Use it in FireFox
//var sqrt = [for (i of [ 1, 2, 3 ]) i*i ];
//document.writeln(sqrt);

//var cross = [for (i of numbers) for (j of letters) i+j];
//document.writeln(cross);


