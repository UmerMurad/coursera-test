$(function () { //same as document.addEventListener("DOMContentLoaded")


	//same as document.querySelector("#navbarToggle").addEventListener("blur")
	$(".navbar-toggle").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth < 764) {
			$("#collapsable-nav").collapse('hide');
		}
	});
});


(function (global) {

	var dc = {};

	var homeHTML = "Users/farhinakiran/coursera-test/china/snippets/home-snippet.html";
	var allCategoriesUrl =
		"http://davids-restaurant.herokuapp.com/categories.json";
	var categoriesTitleHtml = "snippets/categories-title-snippet.html";
	var categoryHtml = "snippets/category-snippet.html";



	// Convinience function for inserting innerHTML for "selector"

	var insertHTML = function (selector, html) {
		var targetElem = document.querySelector(selector);
		targetElem.innerHTML = html;
	};

	// Show loading icon inside element identified by 'selector'.
	var showLoading = function (selector) {
		var html = "<div class = 'text-center'>";
		html +="<img src='/Users/farhinakiran/coursera-test/china/IMAGES/ajax-loader.gif'></div>";
		insertHTML(selector, html);
	};

	// Return substitute of '{{propName}}'
	// with propValue is given 'string'
	var insertProperty = function (string, propName, propValue) {
		var propToReplace = "{{" + prropName +"}}";
		string = string
			.replace(new RegExp(propToReplace, "g"), propValue);
		return string;
	}

	// On page load (before images or CSS)
	document.addEventListener("DOMContentLoaded",function (event){



		// On first load, show home view
		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(
			homeHTML,
			function (responseText) {
				document.querySelector("#main-content")
					.innerHTML = responseText;
			},
			false);
	});

	// Load the menu categories view
	dc.loaadMenuCategories = function () {
		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(
			allCategoriesUrl,
			buildAndShowCategoriesHTML);
	};

	// Builds HTML for the categories page based on the data 
	// from the server
	function buildAndShowCategoriesHTML (categories) {
		// Load title snippet of categories page
		$ajaxUtils.sendGetRequest(
			categoriesTitleHtml,
			function (categoriesTitleHtml) {
				// Retrieve single category snippet
				$ajaxUtils.sendGetRequest(
					categoryHtml,
					function (categoryHtml) {
						var categoriesViewHtml =
							buildCategoriesViewHtml(categories,
								categoriesTitleHtml,
								categoryHtml):
						insertHtml("main-content", categoriesViewHtml);
					},
					false);

			},
			false);
	}

	// Using categories data and snippets html
	// build categories view HTML to be inserted into page

	function buildCategoriesViewHtml(categories,
		categoriesTitleHtml,
		categoryHtml) {
		var finalHtml = categoriesTitleHtml;
		finalHtml += "<section class='row'>";

		//Loop over categories
		for (var i = 0; i <categories.length; i++) {
			// Insert category values
			var html = categoryHtml;
			var name = "" + categories[i].name;
			var short_name = categories[i].short_name;
			html = 
				insertProperty(html, "name", name);
			html =
				insertProperty(html, "short_name", short_name);
			finalHtml += html;

		}
		finalHtml += "</section>";
		return finalHtml;
	}





	global.$dc = dc;
})(window);







