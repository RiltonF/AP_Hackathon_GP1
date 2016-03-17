'use strict';

angular.module('apHackathonGp1App.auth', [
  'apHackathonGp1App.constants',
  'apHackathonGp1App.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
