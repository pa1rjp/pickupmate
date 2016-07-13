angular.module('app.services', [])

.factory('Utils', function($ionicLoading, $ionicPopup) {
    var Utils = {
        show: function() {
            $ionicLoading.show({
                animation: 'fade-in',
                showBackdrop: false,
                maxWidth: 200,
                showDelay: 500,
                template: '<ion-spinner icon="android"></ion-spinner>'
            });
        },

        hide: function() {
            $ionicLoading.hide();
        },

        alertshow: function(tit, msg) {
            var alertPopup = $ionicPopup.alert({
                title: tit,
                template: msg
            });
            alertPopup.then(function(res) {
                console.log('Registrado correctamente.');
            });
        },

        errMessage: function(err) {

            var msg = "Unknown Error...";
            console.log("in service");
            console.log(err);

            if (err && err.code) {
                switch (err.code) {
                    case "auth/argument-error":
                        msg = "Email and Password are required.";
                        break;
                    case "auth/invalid-email":
                        msg = "Invalid Email.";
                        break;
                    case "auth/wrong-password":
                        msg = "Invalid Password.";
                        break;
                    case "auth/user-not-found":
                        msg = "Invalid User.";
                        break;
                }
            }
            Utils.alertshow("Error", msg);
        }
    };
    return Utils;
})

.service('MenuService', [function() {
    menu = [{
        "description": "",
        "id": 1,
        "items": [{
            "id": 1,
            "name": "paneer 65",
            "price": 160,
            "isordered": true
        }, {
            "id": 2,
            "name": "mashroom 65",
            "price": 180,
            "isordered": true
        }, {
            "id": 3,
            "name": "baby corn 65",
            "price": 190,
            "isordered": false
        }, {
            "id": 4,
            "name": "gobi 65",
            "price": 120,
            "isordered": false
        }],
        "name": "veg starter",
        "type": "veg"
    }, {
        "description": "",
        "id": 2,
        "items": [{
            "id": 1,
            "name": "chilly chicken",
            "price": 205,
            "isordered": false
        }, {
            "id": 1,
            "name": "chicken pakoda",
            "price": 215,
            "isordered": false
        }, {
            "id": 1,
            "name": "chicken fry",
            "price": 190,
            "isordered": false
        }, {
            "id": 1,
            "name": "mutton peper fry",
            "price": 220,
            "isordered": false
        }],
        "name": "nonveg starter",
        "type": "nonveg"
    }, {
        "description": "",
        "id": 3,
        "items": [{
            "id": 1,
            "name": "phulka",
            "price": 15,
            "isordered": false
        }, {
            "id": 1,
            "name": "butter phulka",
            "price": 30,
            "isordered": false
        }, {
            "id": 1,
            "name": "chapathi",
            "price": 35,
            "isordered": false
        }],
        "name": "roti",
        "type": "veg"
    }, {
        "description": "",
        "id": 3,
        "items": [{
            "id": 1,
            "name": "veg kadai",
            "price": 145,
            "isordered": false
        }, {
            "id": 1,
            "name": "dal fry",
            "price": 120,
            "isordered": false
        }, {
            "id": 1,
            "name": "tomato curry",
            "price": 135,
            "isordered": false
        }],
        "name": "veg curry",
        "type": "veg"
    }, {
        "description": "",
        "id": 3,
        "items": [{
            "id": 1,
            "name": "butter chicken",
            "price": 225,
            "isordered": false
        }, {
            "id": 1,
            "name": "egg fry",
            "price": 140,
            "isordered": false
        }, {
            "id": 1,
            "name": "fish curry",
            "price": 250,
            "isordered": false
        }],
        "name": "nonveg curry",
        "type": "nonveg"
    }];

    this.getMenu = function() {
        return menu;
    };
}])

/*  ToDo
1. add tax while calculating price
 */
.service('OrderService', [function() {
    order = {
        "id": Math.random().toString(36).substr(2, 9),
        "items": [],
        "datetime": new Date(),
        "total": 0,
        "tax": [],
        "totalqty": 0
    };

    this.reset = function(_order) {
        order = {
            "id": Math.random().toString(36).substr(2, 9),
            "items": [],
            "datetime": new Date(),
            "total": 0,
            "tax": [],
            "totalqty": 0
        };
        return true;
    };

    this.updatePrice = function() {
        var _total = 0;
        for (var i = 0; i < order.items.length; i++) {
            _total = _total + (order.items[i] * order.items[i].qty);
        };
        order.total = _total;
        return order.total;
    };

    this.updateQty = function() {
        var _totalqty = 0;
        for (var i = 0; i < order.items.length; i++) {
            _totalqty = _totalqty + order.items[i].qty;
        };
        order.totalqty = _totalqty;
        return order.totalqty;
    };

    this.addItem = function(newitem) {
        var _item = {};
        _item.name = newitem.name;
        _item.price = newitem.price;
        _item.qty = 1;
        order.items.push(_item);
        this.updatePrice();
        this.updateQty();
        return order;
    };
}]);
