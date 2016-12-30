'use strict';
(function(module){
  var Coffee = {};

  Coffee.coffeeInfo = [];

  function CoffeeObj(opts){
  }

  Coffee.requestData = function(callback){
    $.ajax({
      type: 'GET',
      url:
      'http://platform.fatsecret.com/rest/server.api/oauth_consumer_key=bd6a74a2c6a14345964f58b9ac950f18&oauth_nonce=abc&oauth_signature_method=HMAC-SHA1&oauth_timestamp=12345678&oauth_version=1.0',
      success: function(data){
        console.log(data);
        if (callback){
          callback();
        }
      },
      error: function(){
        console.log('error making request');
      },
    });
  };


  Coffee.requestData(function(){});

  module.Coffee = Coffee;
})(window);
