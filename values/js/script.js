
// Primitive passed by value and object passed by reference

// Copy by Refernces vs by Value
// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b=5;
// console.log("after b update:");
// console.log("a: " + a);
// console.log("b: " + b);



// var a = { x : 7};
// var b =a;
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("after b.x update:");
// console.log(a);
// console.log(b);

// //Passing by reference vs by value
// function changePrimitive(primValue) {
// 	console.log("in changePrimitive....");
// 	console.log("before");
// 	console.log(primValue);

// 	primValue = 5;
// 	console.log("after:");
// 	console.log(primValue);
// }

// var value = 7;
// changePrimitive(value);
// console.log("after changePrimitive, orig value:");
// console.log(value);



// //second example
// function changeObject(objValue) {
// 	console.log("in changeObject....");
// 	console.log("before");
// 	console.log(objValue);

// 	objValue.x = 5
// 	console.log("after:");
// 	console.log(objValue);
// }  

// value = { x: 7};
// changeObject(value); //objValue = value
// console.log("after changeObject, orig value:");
// console.log(value);


// //constructors

// function test() {
// 	//console.log("Hello coursera!");
// 	console.log(this);
// 	this.myName = "jawad";
// }
// test();

// console.log(window.myName);


// //Function constructors

// function Circle(radius) {
// 	//console.log(this);
// 	this.radius = radius;

// 	this.getArea = 
// 	function () {
// 		return Math.PI * Math.pow(this.radius, 2);
// 	};
// }

// var myCircle = new Circle(10);
// //console.log(myCircle);
// console.log(myCircle.getArea());


// //prototype

// function Circle(radius) {
// 	this.radius = radius;
// }

// Circle.prototype.getArea = 
//  function (){
//  	return Math.PI * Math.pow(this.radius, 2);
//  }

// var myCircle = new Circle(10);
// console.log(myCircle.getArea());

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle);

//Object literal
var literalCircle = {
	radius : 10,

	getArea: function() {
		var self = this;
		console.log(this);

		var increaseRadius = function() {
			self.radius = 20;
		};
		increaseRadius();
		console.log(this.radius);

		return Math.PI * Math.pow(this.radius, 2);
	}
};
//literalCircle.getArea();
console.log(literalCircle.getArea());



