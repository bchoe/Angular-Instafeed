angular.module('instaFeed')
.provider('Pictures', function(){

  this.endpoint = 'https://api.instagram.com/v1/users/34135365/media/recent/?count=99&&callback=JSON_CALLBACK&access_token=34135365.7638a6b.8b960a81cab2471480deb7854e85ac40';

  this.setEndpoint = (endpoint) => {
    this.endpoint = endpoint;
  };

  this.$get = ['$http', function($http){
    const configuredEndpoint = this.endpoint;

    return {
      getPictures : () => {
        return $http.jsonp( configuredEndpoint );
      }
    };
  }];

});