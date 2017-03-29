(function(){

var serv = angular.module ('services',[]);

//gathers objects that should be edited
serv.service('toBeEdited',function toBeEdited() {
    this.tBE = [];
});

serv.service('edit',function edit() {
    this.talk = 'edit';
    this.user = function(u){
        var request = {
            method: 'POST',
            url: '',
            data:null
        };
    var url = 'http://users.impaqgroup.com/edit/'+user.id;
    request.url = url;
    request.data = u;
    var promise = $http(request);
    return promise;
    };
});

serv.service('remove',function edit() {
    this.talk = 'remove';
    this.user = function(u){
        var request = {
            method: 'POST',
            url: '',
            data:null
        };
    var url = 'http://users.impaqgroup.com/remove/'+user.id;
    request.url = url;
    request.data = u;
    var promise = $http(request);
    return promise;
    };
});

serv.service('find',function find() {
    this.talk = 'find';
    this.user = function(u){
        var request = {
            method: 'GET',
            url: '',
            data:null
        };
    var url = 'http://users.impaqgroup.com/find';
    request.url = url;
    request.data = u;
    var promise = $http(request);
    return promise;
    };
});

serv.service('findAll',function find() {
    this.talk = 'findAll';
    this.user = function(u){
        var request = {
            method: 'GET',
            url: '',
            data:null
        };
    var url = 'http://users.impaqgroup.com/find';
    request.url = url;
    request.data = u;
    var promise = $http(request);
    return promise;
    };
});

})();
