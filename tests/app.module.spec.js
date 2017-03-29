describe('selectUsers controllers', function() {
    var $rootScope,
        $scope,
        controller,
        $httpBackend;

    beforeEach( function(){
        module('selectUsers');

        inject(function($injector){
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')
            ('UsersTableController',{'$scope':$scope});

            inject(function(_$httpBackend_){
                $httpBackend = _$httpBackend_;
            });
        });


    describe('crtl test',function(){

    it('defined', function() {
        expect(controller).toBeDefined();
     });

     it('test HTTP ', function(){

         });
         $httpBackend.expect('GET', 'users.json').respond(200, [{id:1,foo:'bar'},
                                                                {id:2,foo:'bar'}]);

         expect($httpBackend.flush).not.toThrow();

     })

    it('true will be true', function() {
      expect(true).toBe(true);
    });


    });


});
