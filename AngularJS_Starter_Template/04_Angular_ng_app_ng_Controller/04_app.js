//to createe a module
var app = angular.module("LikesApp",[]);
app.controller("LikesCtrl", function ($scope) {
    $scope.likes = 0;
    $scope.dislikes = 0;
    $scope.total = 0;
    $scope.liked = function () {
        $scope.likes++;
        $Scope.total++;
    };
    $scope.disliked = function () {
        $scope.dislikes++;
        $scope.total++;
    };

});
