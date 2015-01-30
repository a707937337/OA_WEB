/**
 * Created by lvchenyang on 2015/1/20.
 */

var oa=angular.module('oa',['ngRoute']);
oa.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'views/main/login.html'
    }).when("/index",{
        templateUrl:'views/main/index.html'
    }).when('/news',{
        templateUrl:'views/news/index.html'
    }).when('/notice',{
        templateUrl:'views/notice/index.html'
    }).when('/danlu',{
        templateUrl:'views/danlu/index.html'
    }).otherwise({
        redirectTo:'/'
    });
}]);