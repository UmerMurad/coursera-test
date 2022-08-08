////Simple
// var  umerGreeter = {};
// umerGreeter.name = "Umer";
// var greeting = "Hi ";
// umerGreeter.sayHi = function () {
// 	console.log(greeting + umerGreeter.name);
// }



(function (window) {
	var umerGreeter = {};
	umerGreeter.name = "Umer";
	var greeting = "Hi ";
	umerGreeter.sayHi = function() {
		console.log(greeting + umerGreeter.name);
	}

	window.umerGreeter = umerGreeter;
})(window);