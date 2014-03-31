(function (angular) {

    function px(val) {
        return val + "px";
    }

    function FixedWidthController($scope, $document) {
        $scope.columns = [];
        for (var i = 0; i < $scope.numColumns; i++) {
            $scope.columns.push({
                isColumnStop: false,
                displayDraggingColumn: false
            });
        }

        var selectingColumn = false;
        var lastDisplayedColumn = -1;

        function windowMouseupListener(event) {
            if (!selectingColumn) {
                return;
            }
            if (event.which !== 1) { // left mouse button
                return;
            }
            selectingColumn = false;
            $scope.columns[lastDisplayedColumn].isColumnStop = true;
            $scope.columns[lastDisplayedColumn].displayDraggingColumn = false;
        }

        $document.on("mouseup", windowMouseupListener);

        $scope.$on("$destroy", function () {
            $window.off("mouseup", windowMouseupListener);
        });

        $scope.startSelectingColumn = function (index, event) {
            if (event.which !== 1) { // left mouse button
                return;
            }
            selectingColumn = true;
            lastDisplayedColumn = index;
            $scope.columns[index].displayDraggingColumn = true;
        };

        $scope.cellMouseOver = function (index) {
            if (!selectingColumn) {
                return;
            }
            $scope.columns[lastDisplayedColumn].displayDraggingColumn = false;
            $scope.columns[index].displayDraggingColumn = true;
            lastDisplayedColumn = index;
        };
    }

    function DomLinker(scope, element, attrs) {

    }

    var module = angular.module("fwidth", []);
    module.directive("fixedWidthSelector", function () {
        return {
            restrict: "AE",
            templateUrl: "template.html",
//            link: DomLinker,
            controller: FixedWidthController,
            scope: {
                lines: "=",
                numColumns: "="

            }
        };
    })

})(angular);