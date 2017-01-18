'use strict'
//map
var m = new Map(); // empty Map
m.set('Adam', 67); // add newkey-value
m.set('Bob', 59);
m.set('Randy', 52);
m.has('Adam'); // does key 'Adam' exist? true
document.writeln(m.get('Adam')); // 67
document.writeln(m.get('Bob')); // 59
m.delete('Adam'); // delete key 'Adam'
document.writeln(m.get('Adam'));// undefined

m["Lily"] = 23; //unlike C++ std::map, it will NOT add new element
//disordered output
for(var element of m){
	document.writeln(element);
}

//set
var s = new Set([1, 2, 3]);
for(var element of s){
	document.writeln(element);
}