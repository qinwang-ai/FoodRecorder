angular.module('app.controllers', [])
  
.controller('page2Ctrl', ['$scope', '$stateParams','$cordovaCamera', '$location','$http',
function ($scope, $stateParams,$cordovaCamera,$location, $http) {

          var image = document.getElementById('asd');
          $scope.log = 'none';
          $scope.takePicture = function(){
            $scope.log = 'takePicture';
            
var options = {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
    correctOrientation:true
    };
    
    

 		     $cordovaCamera.getPicture(options).then(function(imageData) {
      		  var image = document.getElementById('asd');
            image.src = "data:image/jpeg;base64," + imageData;
            var newURL = image.src.split(',')[1];
            var data = atob(imageData);
            var ia = new Uint8Array(data.length);
            for (var i = 0; i < data.length; i++) {
              ia[i] = data.charCodeAt(i);
              $scope.log = String(i);
            };
            // canvas.toDataURL 返回的默认格式就是 image/png
            var blob = new Blob([ia], {
              type: "image/jpg"
            });
            var fd = new FormData();
            fd.append('file', blob);
            
            $http.post('http://139.198.189.238/reco', fd, {
              transformRequest: angular.identity,
              headers: {'Content-Type': undefined}
            }).then(function (res) {
              alert(res['data']['name']);
            }, function (res) {
              alert("failed");
            });
    			});
       }
    

}])
   
.controller('page3Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
.controller('IndexCtrl',['$scope','$location',function($scope,$location){
  this.location = $location;
}])
   
.controller('page4Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('page5Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('page6Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('page7Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 
