/**
 * Created by lvchenyang on 2015/1/20.
 */
oa.controller('testCtrl',['$scope','$http',function($scope,$http){
    $scope.newslist=[];
    $http.get(domain+'/news').success(function(data){
        $scope.newslist=data;
    });
}]);