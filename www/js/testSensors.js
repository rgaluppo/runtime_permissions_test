var testSensores = {
	test: function() {
		setTimeout(function(){
			testSensores.clearWatch();
			testSensores.onSuccess('Finish sense.\n', true);
		}, 5000);
		testSensores.watchAcceleration();
		testSensores.watchSpeed();

	},
	watchAID: 0,
	watchGID: 0,
	watchAcceleration: function() {
		var options = { frequency: 1000 };  // Update every 1 second
		this.watchAID = navigator.accelerometer.watchAcceleration(testSensores.onAccelerometerSuccess, testSensores.onError, options);
	},
	watchSpeed : function () {
		var options = { frequency: 1000 };  // Update every 1 second
		this.watchGID = navigator.gyroscope.watch(testSensores.onGyroscopeSuccess, testSensores.onError, options);
	},
	clearWatch: function () {
		navigator.accelerometer.clearWatch(this.watchAID);
		navigator.gyroscope.clearWatch(this.watchGID);
	},
	onError: function (contactError) {
		utils.onError(contactError.message);
	},
	onAccelerometerSuccess: function (acceleration) {
		var timestamp = new Date(acceleration.timestamp);
		var processMessage = 'Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + timestamp.toLocaleDateString() + ' ' + timestamp.toLocaleTimeString() + '\n';
		testSensores.onSuccess(processMessage);
	},
	onGyroscopeSuccess: function (speed) {
		var timestamp = new Date(speed.timestamp);
		var processMessage = 'AngularSpeed:\n'
          'x: ' + speed.x + '\n' +
          'y: ' + speed.y + '\n' +
          'z: ' + speed.z + '\n' +
          'Timestamp: '      + timestamp.toLocaleDateString() + ' ' + timestamp.toLocaleTimeString() + '\n';
	  testSensores.onSucess(processMessage);
	},
	onSuccess: function (processMessage, preserve) {
		utils.onSuccess(processMessage, preserve);
	}
};
