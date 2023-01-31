var a = Number(prompt("a:"));
var b = Number(prompt("b:"));
 
console.log(a, b);
 
b = [a, a = b][0];
 
console.log(a, b);
