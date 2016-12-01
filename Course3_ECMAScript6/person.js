// export variables
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;

// or
//var firstName = 'Michael';
//var lastName = 'Jackson';
//var year = 1958;
//export {firstName, lastName, year};

//export输出的值是动态绑定关系，即通过该接口可以取到模块内部实时的值
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500); //输出变量foo，值为bar，500毫秒之后变成baz。

