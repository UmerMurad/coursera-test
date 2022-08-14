// //DOM manipulation

// console.log(document.getElementById("title"));

// console.log(document instanceof HTMLDocument);



//// First method

// function sayHello () {
// 	console.log(
// 		document.getElementById("name").value
// 	);
// }




//// Second method
// function sayHello () {
// 	var name = 
// 		document.getElementById("name").value;
// 		var message = "<h2>Hello " + name + "!</h2>";

// 	// document
// 	// 	.getElementById("content")
// 	// 	.textContent = message;



// 	document
// 		.getElementById("content")
// 		.innerHTML = message;




// 	if (name === "student") {
// 		var title = 
// 			document
// 				.querySelector("#title")
// 				.textContent;
// 			title += " & Lovein it!";
// 			document
// 				.querySelector("#title") // or we can use h1 instaed of #title
// 				.textContent = title;
// 	}		
// }

//Event handling

document.addEventListener("DOMContentLoaded",
	function (event) {

		function sayHello (event) {
			console.log(event);
			//console.log(this);
			this.textContent = "Said it!";
			var name = 
			 document.getElementById("name").value;
			 var message = "<h2>Hello " + name + "!</h2>";

			document
			 .getElementById("content")
			 .innerHTML = message;

			if (name === "student") {
				var title = 
				 document
					.querySelector("#title")
					.textContent;
				title += " & Lovein it!";
				document
					.querySelector("#title") // or we can use h1 instaed of #title
					.textContent = title;
			}		
		}


		// //Unobstrusive event binding
		document.querySelector("button")
			.addEventListener("click", sayHello);

		// document.querySelector("button")
		// 	.onclick = sayHello;
		document.querySelector("body")
			.addEventListener("mousemove", 
				function (event) {
					if (event.shiftKey === true) {
						console.log("x: " + event.clientX);
						console.log("y: " + event.clientY);
					}
				}

			);






	}
);





