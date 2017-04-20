var testSMS = {
	smsList: [],
   interceptEnabled: false,
	test: function() {
		testSMS.init();
		var to = "123456789";
		var message = "This is an SMS message test";
		testSMS.sendSMS(to, message);
		testSMS.listSMS();
	},
	init: function(){
		document.addEventListener('onSMSArrive', function(e){
			var data = e.data;
			testSMS.smsList.push( data );
			testSMS.onSuccess('SMS arrived, count: ' + smsList.length );
			testSMS.onSuccess(JSON.stringify(data));
		});
	},
	sendSMS: function(sendto, textmsg) {
		if(sendto.indexOf(";") >=0) {
			sendto = sendto.split(";");
			for(i in sendto) {
				sendto[i] = sendto[i].trim();
			}
		}
		var error = function(err) {
			testSMS.onError(err);
      };
      var success = function (msg) {
      	testSMS.onSuccess('successfully message send!\n');
      };
		SMS.sendSMS(sendto, textmsg, success, error);
	},
	listSMS: function() {
		var filter = {};
		var success = function(data) {
			var text = "";
      	if(Array.isArray(data)) {
      		for(var i=0; i < data.length; i++) {
        			var sms = data[i];
        			testSMS.smsList.push(sms);
        			testSMS.smsList.push(sms);
        			text += "number: " + sms.address +
        				"\n msg: " + sms.body +
        				"\n date send: " + new Date(sms.date_sent) + "\n";
        		}
        	}
        	testSMS.onSuccess( text );
     	};
     	var error = function(err) {
			testSMS.onError('error list sms: ' + err);
      }; 
		SMS.listSMS(filter, success, error);
   },
	onError: function (messageError) {
		utils.onError(messageError);
	},
	onSuccess: function (message) {
		utils.onSuccess(message);
	},
}