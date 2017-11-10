var testDeviceInfo = {
	test: function() {
		testDeviceInfo.getInfo();
	},
	getInfo: function () {
		testDeviceInfo.onSuccess("model: " + device.model);
		testDeviceInfo.onSuccess("platform: " + device.platform + ", version: " + device.version);
		testDeviceInfo.onSuccess("manufacterer: " + device.manufacterer);
		testDeviceInfo.onSuccess("UUID: " + device.uuid);
		testDeviceInfo.onSuccess("serial: " + device.serial);
		testDeviceInfo.onSuccess("isVirtual: " + device.isVirtual);
	},
	onError: function () {
	},
	onSuccess: function (message) {
		utils.onSuccess(message);
	}
};
