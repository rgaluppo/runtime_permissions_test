var testLocation = {
	test: function() {
		testLocation.requestLocation();
  	},
	requestLocation: function() {
		var options = { timeout: 3000, enableHighAccuracy: true };
		navigator.geolocation.getCurrentPosition(testLocation.onSuccess, testLocation.onError, options);
	},
	onError: function (error) {
		var message = 'code: ' + error.code + '\n' + 'message: ' + error.message + '\n';
		utils.onError(message);
	},
	onSuccess: function (position) {
		var date = new Date(position.timestamp);
		var msg = 'Latitude: ' + position.coords.latitude + '\n'
			+ 'Longitude: ' + position.coords.longitude + '\n'
			+ 'Altitude: ' + position.coords.altitude + '\n'
			+ 'Accuracy: ' + position.coords.accuracy + '\n'
			+ 'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n'
			+ 'Heading: ' + position.coords.heading + '\n'
			+ 'Speed: ' + position.coords.speed + '\n'
			+ 'Timestamp: ' + date + '\n';
		utils.onSuccess(msg);
	}
};