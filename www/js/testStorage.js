var testStorage = {
	test: function() {
		testStorage.createFile("persistentFile.txt");
	},
	createFile: function(name) {
		var successfulRequest = function (fs) {
			var config = {create: true, exclusive: false};
			var callback = function (fileEntry) {
				testStorage.onSuccess("Successful file create: " + fileEntry.fullPath, true);
				testStorage.writeFile(fileEntry);
			};
    	fs.root.getFile(name, config, callback, testStorage.onError);
		};
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, successfulRequest, testStorage.onError);
	},
	readFile: function(fileEntry) {
		var successfulRequest = function (file) {
    	var reader = new FileReader();
      reader.onloadend = function() {
				var message = "Successful file read " + fileEntry.fullPath + ":\n" + this.result;
      	testStorage.onSuccess(message, true);
      };
      reader.readAsText(file);
    };
		fileEntry.file(successfulRequest, testStorage.onError);
	},
	writeFile: function(fileEntry) {
		var successfulRequest = function (fileWriter) {
    	fileWriter.onwriteend = function() {
				testStorage.onSuccess("Successful file write...", true);
				testStorage.readFile(fileEntry);
      };
			fileWriter.onerror = function (e) {
				testStorage.onError("Failed file write: " + e.toString());
      };
      var blob = new Blob(['Hello world! -.-'], { type: 'text/plain' });
      fileWriter.write(blob);
    };
		fileEntry.createWriter(successfulRequest, testStorage.onError);
	},
	onError: function (contactError) {
		utils.onError(contactError.message);
	},
	onSuccess: function (processMessage, preserve) {
		utils.onSuccess(processMessage, preserve);
	}
};
