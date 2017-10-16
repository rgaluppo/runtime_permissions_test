var testAppAvailability = {
	test: function() {
		testAppAvailability.check();
	},
	check: function () {
		var schemes = [];
		if(cordova.platformId.toLowerCase() === 'ios') {
    	schemes.push('twitter://');
			schemes.push('fb://');
			schemes.push('whatsapp://');
		}
		else if(cordova.platformId.toLowerCase() === 'android') {
			schemes.push('com.twitter.android');
			schemes.push('com.facebook.katana');
			schemes.push('com.whatsapp');
		}
		schemes.forEach(function(scheme) {
			appAvailability.check(
	    	scheme,       // URI Scheme or Package Name
	    	testAppAvailability.onSuccess,
		    testAppAvailability.onError
			);
		});
	},
	onError: function (message) {
		utils.onError(message + ' is not available :(', true);
	},
	onSuccess: function (message) {
		utils.onSuccess(message + ' is available :)');
	}
};
