var app = angular.module("dataAy", []);
app.directive("menu", function() {
    return {
    	restrict : "AECM",
        template : "<h1>自定义指令!</h1>"
    };
});