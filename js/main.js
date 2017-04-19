// Hoisting

console.log(a); // a is hoisted (appears) but doesn't have any value yet
b();

function b(){
	console.log("This is b");
}

var a = 'Hello world from a!'
 
