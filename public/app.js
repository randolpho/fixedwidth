(function(angular){
    var app = angular.module("MainApp", ["fwidth"]);
    app.controller("IndexController", function($scope) {
       $scope.fileData = [
           "this is the first line of the file",
           "this is the second line of the file",
           "this is a line of the file",
           "this is a line of the file",
           "this is a line of the file",
           "this is a line of the file",
           "this is a line of the file",
           "this is a line of the file",
           "this is a line of the file",
           "this is a line of the file",
           "this is a line of the file",
           "this is a line of the file",
           "this is a line of the file",
           "this is a line of the file",
           "this is a line of the file",
           "this is a line of the file",
           "this is a line of the file",
           "this is a line of the file",
           "this is a line of the file",
       ];

        $scope.columnStops = [];
        $scope.currentStop = "";
        $scope.addStop = function() {
            $scope.columnStops.push($scope.currentStop);
            $scope.currentStop = "";
        }
    });
})(angular);