//SIMD Single Instruction/Multiple Data 单指令多数据 数据并行处理
//old
var a = [1, 2, 3, 4];
var b = [5, 6, 7, 8];
var c = [];

c[0] = a[0] + b[0];
c[1] = a[1] + b[1];
c[2] = a[2] + b[2];
c[3] = a[3] + b[3];
document.writeln("SISD c == " + c);  // Array[6, 8, 10, 12]

//new
var a = SIMD.Float32x4(1, 2, 3, 4);
var b = SIMD.Float32x4(5, 6, 7, 8);
var d = SIMD.Float32x4.add(a, b); 
document.writeln("SIMD d == " + d);  // Float32x4[6, 8, 10, 12]