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
var person4 = new Person('Dtrump', 40);

var people = [person1, person2, person3, person4];

// for each
people.forEach( function(dude)
{
	dude.sayHello();
} )

// map
var wallets = people.map( function(dude)
{
	return dude.money;
} )
document.writeln(wallets);

// reduce
var totalMoney = wallets.reduce( function(countedMoney, wallet)
{
	return countedMoney + wallet.money;
} )
document.writeln(totalMoney);