angular.module('instaFeed')
.controller('instaFeedController', [
  '$scope',
  'Pictures',
  'Display',
  ($scope, Pictures, Display) => {

    $scope.display = Display;

    $scope.pictures = [];
    Pictures.getPictures().success((pictures) => {
      $scope.pictures = pictures;
      console.log(pictures);
    });

}]);