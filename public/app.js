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

        $scope.columnStops = [
            { index:12, name:"something"}
        ];
        $scope.currentStop = null;
        $scope.currentName = null;
        $scope.addStop = function () {
            if (!$scope.currentStop) {
                return;
            }
            if (!$scope.currentName) {
                return;
            }
            $scope.columnStops.push({index:$scope.currentStop, name:$scope.currentName});
            $scope.currentStop = null;
            $scope.currentName = null;
            $scope.stopForm.$setPristine();
            $scope.$broadcast("currentNameFocus");
        }
    });
})(angular);