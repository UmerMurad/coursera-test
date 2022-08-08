// //Simple
// var jawadGreeter = {};
// jawadGreeter.name = "Jawad";
// var greeting = "Hello ";
// jawadGreeter.sayHello = function() {
// 	console.log(greeting + jawadGreeter.name);
// }

(function (window) {
	var jawadGreeter = {};
	jawadGreeter.name = "Jawad";
	var greeting = "Hello ";
	jawadGreeter.sayHello = function() {
	console.log(greeting + jawadGreeter.name);
	}

	window.jawadGreeter = jawadGreeter;
})(window);



