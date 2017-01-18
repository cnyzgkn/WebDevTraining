'use strict'

function Person(name, money) {
	this.name = name;
	this.money = money;
	this.sayHello = function(){
	document.writeln('I am ' + this.name);
	}
}

var person1 = new Person('Alice', 10);
var person2 = new Person('Bob', 20);
var person3 = new Person('Cindy', 30);
var person4 = new Person('Trump', 40);
var person5 = new Person('Cindy', 50);
var person6 = new Person('Tom', 40);

var people = [person1, person2, person3, person4, person5, person6];

// indexOf 返回在该数组中第一个找到的元素位置，如果它不存在则返回-1
document.writeln("found: ", people.indexOf(person3) != -1);

// filter
var theOne = people.filter( function(Person) {
	return Person.name === "Cindy";
});
document.writeln("Filter results:", theOne);

// for each
people.forEach( function(dude)
{
	dude.sayHello();
} )

// map 映射 对数组的每个元素进行一定操作（映射）后，会返回一个新的数组
// 手里拿一个盒子，一个一个叫他们把钱包扔进去。结束的时候你获得了一个新的数组，里面是大家的钱包，钱包的顺序和人的顺序一一对应
var wallets = people.map( function(dude)
{
	return dude.money;
} );
document.writeln("wallets ", wallets);

// reduce 累计 你拿着钱包，一个一个数过去看里面有多少钱啊？
//每检查一个，你就和前面的总和加一起来。这样结束的时候你就知道大家总共有多少钱了
var totalMoney = wallets.reduce( function(countedMoney, wallet)
{
	return countedMoney + wallet.money;
} );
document.writeln(totalMoney);