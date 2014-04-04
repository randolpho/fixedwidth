(function (angular) {
    function FixedWidthController($scope, $document, $sce) {
        function px(val) {
            return val + "px";
        }
        var lineHeight = 20;
        var colWidth = 10;
        $scope.overlayHeight = px(0);
        $scope.$watchCollection("lines", function() {
            $scope.overlayHeight = px(($scope.lines.length * lineHeight) + lineHeight);
        });

        $scope.getLeft = function(col) {
            return col.
        };

//        $scope.displayColumns = [];
//        $scope.selectingColumn = false;
//        var editingColumn = false;
//        var lastDisplayedColumn = -1;
//        var columnBeingEdited = -1;
//
//        function maxItemLength(arr) {
//            var max = arr[0].length;
//            for (var i = 0; i < arr.length; i++) {
//                if (arr[i].length > max) {
//                    max = arr[i].length;
//                }
//            }
//            return max;
//        }
//
//        function addDisplayColumns(toLength) {
//            while ($scope.displayColumns.length < toLength) {
//                $scope.displayColumns.push({
//                    isColumnStop: false,
//                    displayDraggingColumn: false
//                });
//            }
//        }
//
//        function clearDisplayColumns() {
//            for (var i = 0; i < $scope.displayColumns.length; i++) {
//                $scope.displayColumns[i].isColumnStop = false;
//                $scope.displayColumns[i].displayDraggingColumn = false;
//            }
//        }
//
//        function windowMouseupListener(event) {
//            if (!$scope.selectingColumn) {
//                return;
//            }
//            if (event.which !== 1) { // left mouse button
//                return;
//            }
//            $scope.$apply(function () {
//                if (editingColumn) {
//                    $scope.columns[lastDisplayedColumn] = $scope.columns[columnBeingEdited];
//                    delete $scope.columns[columnBeingEdited];
////                    var columnIndex = $scope.columns.indexOf(columnBeingEdited);
////                    $scope.columns.splice(columnIndex, 1, lastDisplayedColumn);
//                }
//                else {
//                    var name = prompt("Please enter a name for this column");
//                    $scope.columns[lastDisplayedColumn] = name;
//                }
//                $scope.selectingColumn = false;
//                editingColumn = false;
//                lastDisplayedColumn = -1;
//                columnBeingEdited = -1;
//            });
//        }
//
//        $document.on("mouseup", windowMouseupListener);
//
//        $scope.$on("$destroy", function () {
//            $document.off("mouseup", windowMouseupListener);
//        });
//
//        $scope.$watch("columns", function () {
//            clearDisplayColumns();
//            var columns = Object.keys($scope.columns);
//            for (var i = 0; i < columns.length; i++) {
//                var index = parseInt(columns[i]);
//                if (index < 0) {
//                    continue;
//                }
//                if (index > $scope.displayColumns.length) {
//                    addDisplayColumns(index + 1);
//                }
//                $scope.displayColumns[index].isColumnStop = true;
//            }
//        }, true);
//
//        $scope.startEditingColumn = function (index, event) {
//            if (event.which !== 1) { //left mouse button
//                return;
//            }
//            if (columnBeingEdited === -1) {
//                $scope.startSelectingColumn(index, event);
//                return;
//            }
//            $scope.selectingColumn = true;
//            editingColumn = true;
//            lastDisplayedColumn = index;
//            columnBeingEdited = index;
//            $scope.displayColumns[index].displayDraggingColumn = true;
//        };
//
//        $scope.startSelectingColumn = function (index, event) {
//            if (event.which !== 1) { // left mouse button
//                return;
//            }
//            $scope.selectingColumn = true;
//            editingColumn = false;
//            lastDisplayedColumn = index;
//            $scope.displayColumns[index].displayDraggingColumn = true;
//        };
//
//        $scope.cellMouseOver = function (index) {
//            if (!$scope.selectingColumn) {
//                return;
//            }
//            $scope.displayColumns[lastDisplayedColumn].displayDraggingColumn = false;
//            $scope.displayColumns[index].displayDraggingColumn = true;
//            lastDisplayedColumn = index;
//        };
//
//        $scope.getValue = function (str, index) {
//            if (index > str.length) {
//                return $sce.trustAsHtml("&nbsp;");
//            }
//            var val = str[index];
//            if (val === " ") {
//                return $sce.trustAsHtml("&nbsp;");
//            }
//            return $sce.trustAsHtml(val);
//        }
//
//        if ($scope.lines.length > 0) {
//            addDisplayColumns(maxItemLength($scope.lines));
//        }
    }

    var module = angular.module("fwidth", []);
    module.directive("fixedWidthSelector", function () {
        return {
            restrict: "AE",
            templateUrl: "template.html",
            controller: FixedWidthController,
            scope: {
                lines: "=",
                columns: "="
            }
        };
    });

    module.directive("focusOnEvent", function () {
        return function (scope, elem, attr) {
            if (attr.focusOnEvent) {
                scope.$on(attr.focusOnEvent, function () {
                    elem[0].focus();
                });
            }
        };
    });

})(angular);