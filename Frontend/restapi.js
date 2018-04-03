    var app=angular.module('Restapi',[]);
    app.constant('apiUrl', 'http://localhost:3001/');
    app.controller('login',['$scope','$http',function(scope,http){
    scope.User={}
   scope.Login=function(){
       console.log(JSON.stringify(scope.User))
       http.post('/login',scope.User).then(
           function(request,response){
console.log(request.status)
           },
           function(error){
               throw error;
           }
       )
   }

}]);
app.controller('register',['$scope','$http','apiUrl',function(scope,http,apiUrl){
    scope.User={}
   scope.Login=function(){
       console.log(JSON.stringify(scope.User))
       http.post(apiUrl+'registration',scope.User).then(
           function(request,response){
console.log(request.status)
           },
           function(error){
               throw error;
           }
       )
   }

}])

