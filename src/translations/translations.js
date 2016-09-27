angular.module("translations", []).config(["$translateProvider", function($translateProvider) {
$translateProvider.translations("en", {
	"app":{
		"title":"Title",
		"setToGo":"All set to go... "
	}
});
}]);
