angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  
  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu.newOrder', {
    url: '/neworder',
    views: {
      'side-menu21': {
        templateUrl: 'templates/newOrder.html',
        controller: 'newOrderCtrl'
      }
    }
  })

  .state('menu.allOrders', {
    url: '/allorders',
    views: {
      'side-menu21': {
        templateUrl: 'templates/allOrders.html',
        controller: 'allOrdersCtrl'
      }
    }
  })

  .state('menu.dashboard', {
    url: '/dashboard',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dashboard.html',
        controller: 'dashboardCtrl'
      }
    }
  })

  .state('menu.syncmenu', {
    url: '/syncmenu',
    views: {
      'side-menu21': {
        templateUrl: 'templates/syncmenu.html',
        controller: 'syncmenuCtrl'
      }
    }
  })

  .state('page', {
    url: '/page7',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});