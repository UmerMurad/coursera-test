//Object creation

// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.fiirstName = "Mark";
// company.ceo.favColor = "blue";

// console.log(company);
// console.log("Company CEO name is :" + company.ceo.fiirstName);
// console.log(company["name"]);


//one method
// company.$stock = 110;

// console.log(company);


//2nd method
// company["stock of company"] = 110;

// console.log("Stock price is :" + company["stock of company"]);

//3rd method
// var stockPropName = "stock of company";
// company[stockPropName] = 110;

// console.log("Stock price is :" + company[stockPropName]);

////Better ways : object literal
// var facebook = {
// 	name: "Facebook",
// 	ceo: {
// 		fiirstName: "Mark",
// 		favColor:"blue"
// 	},
// 	$stock: 110,
// 	"stock of company" : 110
// };

// console.log(facebook);
// console.log(facebook.ceo.fiirstName);



// Functions are First-class Data Types
// Functions are objects

function multiply( x,y ) {
	return x * y;
}
// console.log(multiply(5,3));

multiply.version = "v.1.0.0";
console.log(multiply.version);


//Function factory
function makeMultiplier(multiplier) {
	var myFunc = function (x) {
		return multiplier * x;
	};

	return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));


// Passing functions as arguments
function doOperationOn(x, operation) {
	return operation(x);
}

var result = doOperationOn(5 , multiplyBy3);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);






