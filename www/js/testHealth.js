var testHealth = {
	test: function() {
		testHealth.requestAuthorization();
		testHealth.makeData();
		testHealth.readData();
	},
	requestAuthorization: function () {
    var supportedTypes = [
      'HKQuantityTypeIdentifierHeight',
      'HKQuantityTypeIdentifierStepCount',
      'HKQuantityTypeIdentifierDistanceWalkingRunning',
      'HKCategoryTypeIdentifierSleepAnalysis',
      'HKQuantityTypeIdentifierDietaryEnergyConsumed',
      'HKQuantityTypeIdentifierDietaryFatTotal'
    ];
    window.plugins.healthkit.requestAuthorization({
        readTypes: supportedTypes,
        writeTypes: supportedTypes
      },
			testHealth.onSuccess,
			testHealth.onError);
  },
	makeData: function () {
		window.plugins.healthkit.saveWeight({
				'requestReadPermission': false, // use if your app doesn't need to read
				'unit': 'kg',
				'amount': 78.5,
				'date': new Date()
			},
			testHealth.onSuccess,
			testHealth.onError);
		window.plugins.healthkit.saveHeight({
        'requestReadPermission': false,
        'unit': 'cm',
        'amount': 187
      },
			testHealth.onSuccess,
			testHealth.onError);
		window.plugins.healthkit.saveWorkout({
				'activityType': 'HKWorkoutActivityTypeCycling', // HKWorkoutActivityType constant (https://developer.apple.com/library/ios/documentation/HealthKit/Reference/HKWorkout_Class/#//apple_ref/c/tdef/HKWorkoutActivityType)
				'quantityType': 'HKQuantityTypeIdentifierDistanceCycling',
				'startDate': new Date(), // mandatory
				'endDate': null, // optional, use either this or duration
				'duration': 3600, // in seconds, optional, use either this or endDate
				'energy': 300, //
				'energyUnit': 'kcal', // J|cal|kcal
				'distance': 11, // optional
				'distanceUnit': 'km' // probably useful with the former param
			 },
			 testHealth.onSuccess,
 			 testHealth.onError);
	},
	readData: function () {
		window.plugins.healthkit.readWeight({
        'requestWritePermission': true,
        'unit': 'kg'
      },
			testHealth.onSuccess,
  		testHealth.onError);

		window.plugins.healthkit.readHeight({
				'requestWritePermission': false,
				'unit': 'cm'
			},
			testHealth.onSuccess,
			testHealth.onError);

		window.plugins.healthkit.findWorkouts({}, testHealth.onSuccess, testHealth.onError);
	},
	onError: function () {
		utils.onError("Cannot have permission!");
	},
	onSuccess: function (processMessage) {
		utils.onSuccess(processMessage, true);
	}
};
