/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 *
 */
;(function() {

  angular
    .module('boilerplate')
    .controller('MainController', MainController)
    .controller('AdminController',AdminController)
    .controller('HomeController',HomeController)
    .controller('StatsController',StatsController);




     MainController.$inject = ['LocalStorage', 'QueryService'];
     AdminController.$inject = ['LocalStorage', 'QueryService'];
     HomeController.$inject = ['$scope','LocalStorage', 'QueryService'];
     StatsController.$inject = ['$scope','LocalStorage','QueryService'];

      function MainController(LocalStorage, QueryService) {

    // 'controller as' syntax
    var self = this;


    ////////////  function definitions


    /**
     * Load some data
     * @return {Object} Returned object
     */
    // QueryService.query('GET', 'posts', {}, {})
    //   .then(function(ovocie) {
    //     self.ovocie = ovocie.data;
    //   });
  };

      function AdminController(LocalStorage,QueryService){
            alert('AdminController');
      };

      function StatsController($scope,LocalStorage,QueryService){
            alert('stats controller.');
      };

      function HomeController($scope,LocalStorage,QueryService){
          $scope.imgSrcs = [
            'http://images.all-free-download.com/images/graphiclarge/road_at_night_202281.jpg',
            'https://unsplash.imgix.net/photo-1426200830301-372615e4ac54?fit=crop&fm=jpg&h=725&q=75&w=1050',
            'https://ununsplash.imgix.net/photo-1421757295538-9c80958e75b0?fit=crop&fm=jpg&h=700&q=75&w=1050',
            'https://unsplash.imgix.net/photo-1420745981456-b95fe23f5753?fit=crop&fm=jpg&h=700&q=75&w=1050',
            'https://download.unsplash.com/photo-1415871989540-61fe9268d3c8'
          ];
          $scope.tasks = [
            'SASS support including sourceMaps',
            'Minimal CSS styling of the view',
            'Gulp watch, build and local server tasks',
            ' Responsive navigation',
            'Owl slider directive',
            'Responsive navigation',
            'localStorage service for set, get, remove data',
            'queryService $http wrapper to handle calls',
            'clear folder structure',
            'less than 10 request in build version',
            'minified CSS and JS build files',
            'google analytics snippet'
          ];
          $scope.$watch('imageData',function(newValue,oldValue){
              console.info('imageData changed! '+' newValue: '+newValue+' oldValue: '+oldValue);
          });
          $scope.processFileOnClick = function()
          {
              console.info('click on add image button.');
              var f = document.getElementById('file').files[0], r = new FileReader();
              r.onloadend = function(e){
                var data = e.target.result;
                  $scope.imageData = data;
                  $scope.imgSrcs.push()
              };
              r.readAsBinaryString(f);
          };

          $scope.$watch('imgSrcs',function(newValue,oldValue){

              //$scope.imgSrcs = $scope.imgSrcs.push(newValue);
          });

          $scope.$watch('defaultLink',function(newValue,oldValue){
            console.info('default link changed: '+' newValue: '+newValue+' oldValue: '+oldValue);
            $scope.imgSrcs.push()
          });

          $scope.defaultLink = 'https://backpackerlee.files.wordpress.com/2014/06/nscover.jpg';

          $scope.reloadCarousel = function()
          {
                $scope.imgSrcs=[]
          };


      }


})();
