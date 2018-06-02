var app = angular.module('ClockCtrlApp',[]);

//parent controller
app.controller('ParentCtrl',function () {
    $scope.text = "";
});
//child controller
app.controller('ChildCtrl',function () {
    $scope.abc = "";
});
