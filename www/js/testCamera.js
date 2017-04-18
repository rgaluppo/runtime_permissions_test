var testCamera = {
	test: function() {
		testCamera.getPicture();
  	},
  	getPicture: function() {
		var options = { limit: 1 };
		navigator.device.capture.captureImage(testCamera.onSuccess, testCamera.onError, options);
	},
	onError: function (messageError) {
		utils.onError(JSON.parse(messageError));
	},
	onSuccess: function (mediaFiles) {
		var message = "<img src='" + msg + "'>";
		var path;
		var len = mediaFiles.length;
		for (var i = 0; i < len; i += 1) {
			path = mediaFiles[i].fullPath;
			console.log(mediaFiles);
		}
		//utils.log(message);
	},
};