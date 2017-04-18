var testLocation = {
	test: function() {
		 testLocation.requestLocation();
  	},
  	requestLocation: function() {
		cordova.plugins.locationAccuracy.canRequest(function(canRequest){
			if(canRequest){
				cordova.plugins.locationAccuracy.request(function(){
					testLocation.onSuccess({msg:"Request successful"});
				}, function (error){
					var message = "Request failed";
						if(error){
						// Android only
							message += " :error code=" + error.code + "; error message=" + error.message;
						}
						testLocation.onError({msg:message});
					}, cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY // iOS will ignore this
				);
			}
		});
	},
	onError: function (info) {
		utils.onError(info.msg);
	},
	onSuccess: function (info) {
		utils.log(info.msg);
	}
};