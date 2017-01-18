document.writeln(1+"2" == 12);

//== will do type conversion automatically
document.writeln("1"==1);
document.writeln(0==false);
document.writeln(1==1);
document.writeln('\r\n');

document.writeln("" == 0); //true - 空字符串会被强制转换为数字0.
document.writeln(0 == "0"); //true - 数字0会被强制转换成字符串"0"
document.writeln("" == "0"); //false - 两操作数都是字符串所以不执行强制转换

//strict equal
document.writeln("1"===1);
document.writeln(0===false);
document.writeln(1===1);
document.writeln('\r\n');
document.writeln(+0 == -0);