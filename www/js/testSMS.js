var testSMS = {
   interceptEnabled: false,
	test: function() {
		testSMS.init();
		var to = "123456789";
		var message = "This is an SMS message test";
		testSMS.sendSMS(to, message);
	},
	init: function(){
		document.addEventListener('onSMSArrive', function(e){
			var data = e.data;
			testSMS.smsList.push( data );
			testSMS.onSuccess('SMS arrived, count: ' + smsList.length );
			testSMS.onSuccess(JSON.stringify(data));
		});
	},
	sendSMS: function(number, message) {
		var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                //intent: 'INTENT'  // send SMS with the native android SMS messaging
                intent: '' // send SMS without open any other app
            }
          };

		sms.send(number, message, options, testSMS.onSuccess, testSMS.onError);
   },
     checkSMSPermission: function() {
        var success = function (hasPermission) { 
            if (hasPermission) {
                testSMS.onSuccess("Have permission to send a SMS!\n");
            } else
               testSMS.onError("Have not permission!!\n");
        };
        sms.hasPermission(testSMS.onSuccess, testSMS.onError);
    },
	onError: function (messageError) {
		utils.onError(messageError);
	},
	onSuccess: function (message) {
		utils.onSuccess(message);
	},
}
