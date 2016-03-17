'use strict';

angular.module('apHackathonGp1App', [
  'apHackathonGp1App.auth',
  'apHackathonGp1App.admin',
  'apHackathonGp1App.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
