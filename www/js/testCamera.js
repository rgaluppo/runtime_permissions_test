var testCamera = {
	test: function() {
		testCamera.getPicture();
  	},
  	getPicture: function() {
  		var options = {
			quality: 50,
			destinationType: Camera.DestinationType.FILE_URI,
			sourceType: Camera.PictureSourceType.CAMERA,
			encodingType: Camera.EncodingType.JPEG,
			mediaType: Camera.MediaType.PICTURE,
			allowEdit: false,
			correctOrientation: true
    	};
		navigator.camera.getPicture(testCamera.onSuccess, testCamera.onError, options);
	},
	onError: function (messageError) {
		utils.onError(messageError);
	},
	onSuccess: function (imageURI) {
		var message = "<img src='" + imageURI + "'>";
		utils.onSuccess(message);
	},
};