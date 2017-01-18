//1. add/delete object's members dynamically
function getAge() {
	return new Date().getFullYear() - this.birth;
}

var me = 
{
	name: "Bob",
	birth: 1990,
	age: getAge
};

document.writeln(me.age()); 
document.writeln(getAge.apply(me, []));

me.gender = 'male'; 
document.writeln(me.gender); 
delete me.gender;
document.writeln(me.gender); 


//2. instanceof返回指定对象是否是由某个类构造的实例
//constructor指向对象本身
var oStringObject = new String("hello world"); 
document.writeln(typeof oStringObject); 
document.writeln(oStringObject instanceof String); 
document.writeln(oStringObject.constructor.name);

// for function as well
function Foo(){} 
var foo = new Foo(); 
document.writeln(foo instanceof Foo)//true

//Returns the class name of the argument or undefined if it's not a valid JavaScript object.  
function getObjectClassName(obj) {
    if (obj && obj.constructor && obj.constructor.toString) {
        var arr = obj.constructor.toString().match(/function\s*(\w+)/);
        if (arr && arr.length == 2) {
            return arr[1];
        }
    }

    return undefined;
}	

