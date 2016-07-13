angular.module('app.controllers', [])

.controller('newOrderCtrl', function($scope, MenuService, Utils, $timeout, $rootScope) {
    /*Utils.show();*/
    $scope.groups = MenuService.getMenu();
    /* fun that converts ionic list to accordian */
    $scope.toggleGroup = function(group) {
        if ($scope.isGroupShown(group)) {
            $scope.shownGroup = null;
        } else {
            $scope.shownGroup = group;
        }
    };
    $scope.isGroupShown = function(group) {
        return $scope.shownGroup === group;
    };
    /* check if the menu category is veg or non veg*/
    $scope.isVeg = function(val) {
        return val == "veg" ? true : false;
    };
    /*$timeout(function() {
        Utils.hide();
    }, 5000);*/

    $scope.addtoorder = function(item, index, group) {
        item.isordered = true;
        console.log(item);
        console.log(index);
        console.log(group);  
    };
})

.controller('loginCtrl', function($scope) {

})

.controller('allOrdersCtrl', function($scope) {

})

.controller('dashboardCtrl', function($scope) {

})

.controller('syncmenuCtrl', function($scope, Utils) {
    $scope.fileChanged = function() {

        Utils.show();

        // define reader
        var reader = new FileReader();

        // A handler for the load event (just defining it, not executing it right now)
        reader.onload = function(e) {
            $scope.$apply(function() {
                $scope.csvFile = reader.result;
                text = reader.result.replace(/\n/g, '').split('||');
                console.log(text);
                for (var i = 0; i < text.length; i++) {
                    if (text[i] != "") { 
                        console.log(text[i]); 
                    }; 
                };
                Utils.hide();
            });
        };

        // get <input> element and the selected file 
        var csvFileInput = document.getElementById('fileInput');
        var csvFile = csvFileInput.files[0];
        $scope.selectedfile = csvFile.name;

        // use reader to read the selected file
        // when read operation is successfully finished the load event is triggered
        // and handled by our reader.onload function
        reader.readAsText(csvFile);
    };
})

.controller('pageCtrl', function($scope) {

})
