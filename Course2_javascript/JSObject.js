function getAge() {
	return new Date().getFullYear() - this.birth;
}

var me = 
{
	name: "Randy",
	birth: 1983,
	age: getAge
};

document.writeln(me.age()); 
document.writeln(getAge.apply(me, []));

me.gender = 'male'; 
document.writeln(me.gender); 
delete me.gender;
document.writeln(me.gender); 

