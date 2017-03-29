
//main app module (powinienem zmienić nazwę pliku...)
var app = angular.module('selectUsers', ['ngRoute', 'services']);

//route config
app.config(function($routeProvider){
    $routeProvider.when('/',{
        template : '<users-table></users-table>'
    })
    .when('/edit',{
        template : '<edit-users></edit-users>',
        controller: 'EditUsersController'
    })
});


//controller for main view (tabelka)
app.controller('UsersTableController',
function ($filter, $http, $scope, toBeEdited, remove){
    var request = {
        "method" : "GET",
        "url"    : "users.json"
    };
    $http(request).then(function(response){
    $scope.users = response.data;
    });

    //setting toBeEdited to initial state
    toBeEdited.tBE = [];

    //handling checkboxes
    $scope.userSelected = function(){
        toBeEdited.tBE = $filter('filter')($scope.users, {checked: true});


    };

    $scope.editButton = function(id){
        var f = {id : 0};
        f.id = id;
        toBeEdited.tBE = $filter('filter')($scope.users, f);
        window.location.href = '#/edit';
    };

    $scope.deleteButton = function(id){
        $scope.users[id].hide = true;
        alert(remove.talk);

    };

});

//controller for edit view
app.controller ('EditUsersController',
function EditUsersController($scope, toBeEdited, edit){
    $scope.users = toBeEdited.tBE;
    $scope.updateButton = function updateButton (user){
        alert(edit.talk);
    };
});


app.directive('usersTable',function(){
    return{
            restrict: 'E',
            templateUrl: 'html/tabelka.html',
            controller: 'UsersTableController'
    };
});



app.directive('editUsers',function(){
    return{
            restrict: 'E',
            templateUrl: 'html/edit.html',
            controller: 'EditUsersController'
    };
});
