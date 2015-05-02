/**
 * Created by davidliebman on 5/2/15.
 */
(function(){

    var app = angular.module('lRecruitApp', ['ngRoute']);

    app.config(function($routeProvider){
       $routeProvider
            .when('/', {
                controller: 'JobController',
                templateUrl: 'app/jobs/jobList.html'
           })
            .when('/job',{
                controller:'JobController',
                templateUrl:'jobs/jobList.html'
            })

            .otherwise({ redirectTo: '/'});
    });
}());
