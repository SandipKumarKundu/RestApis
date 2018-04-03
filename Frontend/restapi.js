    var app=angular.module('Restapi',[]);
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
app.controller('register',['$scope','$http',function(scope,http){
    scope.User={}
   scope.Login=function(){
       console.log(JSON.stringify(scope.User))
       http.post('/registration',scope.User).then(
           function(request,response){
console.log(request.status)
           },
           function(error){
               throw error;
           }
       )
   }

}])

