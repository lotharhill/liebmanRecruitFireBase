/**
 * Created by davidliebman on 5/2/15.
 */
(function(){
    var LRecruitController = function($scope, $firebaseObject){

        var ref = new Firebase("https://recruitdashboard.firebaseio.com/");

        // download the data into a local object
        $scope.data = $firebaseObject(ref);

        // download the data into a local object
        var syncObject = $firebaseObject(ref);
        // synchronize the object with a three-way data binding
        // click on `index.html` above to see it used in the DOM!
        syncObject.$bindTo($scope, "data");


        JobController.$inject = ['$scope', '$firebaseObject'];

        angular.module('lRecruitApp')
            .controller('LRecruitController', LRecruitController);
    }
}()
);


