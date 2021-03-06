'use strict';

/* App Module */

var BaselineApp = angular.module('BaselineApp', [
  'ngRoute'
]);

BaselineApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html'
      }).
      when('/form', {
        templateUrl: 'partials/form.html'
      }).
      when('/component', {
        templateUrl: 'partials/component.html'
      }).
      when('/select', {
        templateUrl: 'partials/select.html'
      }).
      when('/button', {
        templateUrl: 'partials/button.html'
      }).
      when('/function', {
        templateUrl: 'partials/function.html'
      }).
      when('/animation', {
        templateUrl: 'partials/animation.html'
      }).
      when('/imggallery', {
        templateUrl: 'partials/imggallery.html'
      }).
      when('/gridalicious', {
        templateUrl: 'partials/gridalicious.html'
      }).
      when('/content', {
        templateUrl: 'partials/content.html'
      }).
      when('/list', {
        templateUrl: 'partials/list.html'
      }).
      when('/shape', {
        templateUrl: 'partials/shape.html'
      }).
      when('/theme', {
        templateUrl: 'partials/theme.html'
      }).
      when('/layout', {
        templateUrl: 'partials/layout.html'
      }).
      when('/menu', {
        templateUrl: 'partials/menu.html'
      }).
      when('/result', {
        templateUrl: 'partials/result.html'
      }).
      when('/sitemap', {
        templateUrl: 'partials/sitemap.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);