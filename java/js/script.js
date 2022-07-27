//var x ="Hello World!";
// var message = "in global";
// console.log("global: message = " + message);

// var a = function () {
// 	var message = "inside a";
// 	console.log("a: message = "+ message);
// 	b();
// }
// function b () {
// 	console.log("b: message = " + message);
// }

// a();

// var x;
// console.log(x);

// if (x == undefined) {
// 	console.log("x is undefined");
// }

// x =5;
// if (x == undefined) {
// 	console.log("x is undefined");
// }

// else {
// 	console.log("x has been defined");
// }

//var string ="Hello";
//string += " World";
//console.log(string + "!");

//regular math operators : +, - ,*, /

// console.log(( 5+ 4)/3);
// console.log(undefined /5);
// function test1 (a) {
// 	console.log(a / 5);
// }
// test1();



//equality
// var x= 4, y = 4;
// if ( x==y ) {
// 	console.log(" x=4 is equal to y=4");
// }

// x = "4";
// if ( x==y ) {
// 	console.log(" x='4' is equal to y=4");
// }


// //strict equality

// if ( x===y ) {
// 	console.log("Strict: x='4' is equal to y=4")
// }
// else {
// 	console
// 	.log("Strict: x='4' is not equal to y=4")
// }

// if statement (all false)
// if ( false || null || undefined || "" || 0 || NaN) {
// 	console.log("This line won't ever execute");
// }

// else {
// 	console.log ("All false");
// }


// // if statement (all true)
// if (true && "hello" && 1 && -1 && "false") {
// 	console.log("All true");
// }

// Besy practice for {} style 
// CCurly brace on the same or next line ...
//is it just a style?

// function a()
// {
// 	return 
// 	{
// 		name : "Jawad"
// 	};
// }

// function b() {
// 	return {
// 		name : "Jawad"
// 	};
// }

// console.log(a());
// console.log(b());

//for loop
// var sum =0;
// for (var i = 0; i < 10; i++) {
// 	console.log(i);
// 	sum = sum + i;
// }
// console.log("Sum of 0 through 9 is : " + sum);


function orderChickenwith(sideDish) {
	sideDish = sideDish || "whatever!";
	console.log("Chicken with " + sideDish);
}

orderChickenwith("noodles");
orderChickenwith();


