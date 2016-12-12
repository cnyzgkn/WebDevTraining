import {firstName, lastName, year} from './person';
//整体加载模块
//import * as circle from './circle';

document.writeln("hello!"); 


function addElement(element) {
  return firstName + lastName + element;
}

document.writeln(addElement("Super Star")); 

//document.writeln('圆面积：' + area(4));
//document.writeln('圆周长：' + circumference(14));