'use strict'
var m = new Map(); // empty Map
m.set('Adam', 67); // add newkey-value
m.set('Bob', 59);
m.set('Randy', 52);
m.has('Adam'); // does key 'Adam' exist? true
document.writeln(m.get('Adam')); // 67
document.writeln(m.get('Bob')); // 59
m.delete('Adam'); // delete key 'Adam'
document.writeln(m.get('Adam'));// undefined

for(var key of m){
	document.writeln(key);
}

var m2 = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
for(var key of m2){
	document.writeln(key);
}

var s = new Set([1, 2, 3]);
for(var key of s){
	document.writeln(key);
}