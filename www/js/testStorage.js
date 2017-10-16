var testStorage = {
	test: function() {
		testStorage.makeShot();
	},
	makeShot: function () {
		navigator.screenshot.save( function(error,res) {
			if(error) {
				testStorage.onError(error);
			} else {
				testStorage.onSuccess(res.filePath);
				testStorage.onSuccess("<img style='padding-top: 5px; width:250px; height: 250px' src='" + res.filePath + "'>")
			}
		});
	},
	onError: function () {
		utils.onError("Cannot have permission!");
	},
	onSuccess: function (processMessage) {
		utils.onSuccess(processMessage, true);
	}
};
