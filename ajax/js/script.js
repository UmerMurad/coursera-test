// Event Handling
document.addEventListener("DOMContentLoaded",
	function (event) {

		// Unobstrusive event binding
		document.querySelector("button")
			.addEventListener("click", function () {
				var self = this;
				var name = "";

				// call server to get the name
				$ajaxUtils
					.sendGetRequest("/data/name.text", 
						function(request) {
							var name = request.responseText;
							document.querySelector("#content")
								.innerHTML = "<h2>Hello " + name + "!";

						});
				
			});
	}
);