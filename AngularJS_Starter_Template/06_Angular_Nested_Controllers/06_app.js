var app = angular.module('NestedCtrlApp',[]);

//parent controller
app.controller('ParentCtrl',function ($scope) {
    $scope.text = "";
});
//child controller
app.controller('ChildCtrl',function ($scope) {
    $scope.abc = "";
});
