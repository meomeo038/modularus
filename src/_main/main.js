var exampleApp = {};

exampleApp.main = angular.module("exampleApp", [

	// Library modules
	"ngRoute",
	"ngResource",
	"ui.bootstrap",
	
	// Application modules
	"exampleApp.header",
	"exampleApp.login",
	"exampleApp.products",
	"exampleApp.product_detail",
	"exampleApp.home",
	"exampleApp.about",
	"exampleApp.contact"
]);
//Header module
exampleApp.header = angular.module("exampleApp.header", []);

//Products module
exampleApp.products = angular.module("exampleApp.products", []);

//Product Details module
exampleApp.product_detail = angular.module("exampleApp.product_detail", []);

//Login module
exampleApp.login = angular.module("exampleApp.login",[]);

// Home module
exampleApp.home = angular.module("exampleApp.home", []);

// About module
exampleApp.about = angular.module("exampleApp.about", []);

// Contact module
exampleApp.contact = angular.module("exampleApp.contact", []);

