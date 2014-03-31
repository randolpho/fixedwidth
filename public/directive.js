(function (angular) {
    function FixedWidthController($scope, $document, $sce) {
        $scope.displayColumns = [];
        $scope.selectingColumn = false;
        var editingColumn = false;
        var lastDisplayedColumn = -1;
        var columnBeingEdited = -1;

        function maxItemLength(arr) {
            var max = arr[0].length;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].length > max) {
                    max = arr[i].length;
                }
            }
            return max;
        }

        function addDisplayColumns(toLength) {
            while($scope.displayColumns.length < toLength) {
                $scope.displayColumns.push({
                    isColumnStop : false,
                    displayDraggingColumn : false
                });
            }
        }

        function clearDisplayColumns() {
            for (var i = 0; i < $scope.displayColumns.length; i++) {
                $scope.displayColumns[i].isColumnStop = false;
                $scope.displayColumns[i].displayDraggingColumn = false;
            }
        }

        function windowMouseupListener(event) {
            if (!$scope.selectingColumn) {
                return;
            }
            if (event.which !== 1) { // left mouse button
                return;
            }
            $scope.$apply(function () {
                if (editingColumn) {
                    var columnIndex = $scope.columns.indexOf(columnBeingEdited);
                    $scope.columns.splice(columnIndex, 1, lastDisplayedColumn);
                }
                else {
                    $scope.columns.push(lastDisplayedColumn)
                }
                $scope.selectingColumn = false;
                editingColumn = false;
                lastDisplayedColumn = -1;
                columnBeingEdited = -1;
            });
        }

        $document.on("mouseup", windowMouseupListener);

        $scope.$on("$destroy", function () {
            $document.off("mouseup", windowMouseupListener);
        });

        $scope.$watchCollection("columns", function (newValues, oldValues) {
            clearDisplayColumns();
            for (var i = 0; i < $scope.columns.length; i++) {
                var index = $scope.columns[i];
                if(index > $scope.displayColumns.length) {
                    addDisplayColumns(index +1);
                }
                $scope.displayColumns[index].isColumnStop = true;
            }
        });

        $scope.startEditingColumn = function (index, event) {
            if (event.which !== 1) { //left mouse button
                return;
            }
            if(columnBeingEdited === -1) {
                $scope.startSelectingColumn(index, event);
                return;
            }
            $scope.selectingColumn = true;
            editingColumn = true;
            lastDisplayedColumn = index;
            columnBeingEdited = index;
            $scope.displayColumns[index].displayDraggingColumn = true;
        };

        $scope.startSelectingColumn = function (index, event) {
            if (event.which !== 1) { // left mouse button
                return;
            }
            $scope.selectingColumn = true;
            editingColumn = false;
            lastDisplayedColumn = index;
            $scope.displayColumns[index].displayDraggingColumn = true;
        };

        $scope.cellMouseOver = function (index) {
            if (!$scope.selectingColumn) {
                return;
            }
            $scope.displayColumns[lastDisplayedColumn].displayDraggingColumn = false;
            $scope.displayColumns[index].displayDraggingColumn = true;
            lastDisplayedColumn = index;
        };

        $scope.getValue = function(str, index) {
            if(index > str.length ) {
                return $sce.trustAsHtml("&nbsp;");
            }
            var val = str[index];
            if(val === " ") {
                return $sce.trustAsHtml("&nbsp;");
            }
            return $sce.trustAsHtml(val);
        }

        if ($scope.lines.length > 0) {
            addDisplayColumns(maxItemLength($scope.lines));
        }
    }

    var module = angular.module("fwidth", []);
    module.directive("fixedWidthSelector", function () {
        return {
            restrict : "AE",
            templateUrl : "template.html",
            controller : FixedWidthController,
            scope : {
                lines : "=",
                columns : "="
            }
        };
    })

})(angular);