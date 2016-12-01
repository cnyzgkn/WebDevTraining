function foo() {
	var n = 1;

    return {
    set: function (x) { n = x; },
    get: function () { return n; }
  };
}

var calc = foo();
document.writeln("foo.n == " + calc.get());

calc.set(calc.get()+1);
document.writeln("foo.n == " + calc.get());