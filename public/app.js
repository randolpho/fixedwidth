(function (angular) {
    var app = angular.module("MainApp", ["fwidth"]);
    app.controller("IndexController", function ($scope) {
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

        $scope.columnStops = {};
        $scope.currentStop = null;
        $scope.currentName = null;
        $scope.addStop = function () {
            if (!$scope.currentStop) {
                return;
            }
            if (!$scope.currentName) {
                return;
            }
            $scope.columnStops[$scope.currentStop] = $scope.currentName;
            $scope.currentStop = null;
            $scope.currentName = null;
            $scope.stopForm.$setPristine();
            $scope.$broadcast("currentNameFocus");
        }
    });
})(angular);