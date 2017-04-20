var testContacts = {
	test: function() {
		 testContacts.findAll();
		 testContacts.createContact('Conejo', 'Pepito');
		 testContacts.findAll();
  	},
	createContact: function (firstName, lastName) {
 		// create a new contact object 
		var contact = navigator.contacts.create();
		contact.displayName = firstName;
		contact.nickname = lastName;            // specify both to support all devices 
		// populate some fields 
		var name = new ContactName();
		name.givenName = firstName;
		name.familyName = lastName;
		contact.name = name;
		// save to device 
		contact.save(testContacts.onSuccess, testContacts.onError);
	},
	findAll: function () {
		var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
		navigator.contacts.find(fields, testContacts.onSuccess, testContacts.onError);
	},
	onError: function (contactError) {
		var messageError;
		switch(contactError){
			case ContactError.UNKNOWN_ERROR:
				messageError = "UNKNOWN_ERROR";
				break;
			case ContactError.INVALID_ARGUMENT_ERROR:
				messageError = "INVALID_ARGUMENT_ERROR";
				break;
			case ContactError.TIMEOUT_ERROR:
				messageError = "TIMEOUT_ERROR";
				break;
			case ContactError.PENDING_OPERATION_ERROR:
				messageError = "PENDING_OPERATION_ERROR";
				break;
			case ContactError.IO_ERROR:
				messageError = "IO_ERROR";
				break;
			case ContactError.NOT_SUPPORTED_ERROR:
				messageError = "NOT_SUPPORTED_ERROR";
				break;
			case ContactError.OPERATION_CANCELLED_ERROR:
				messageError = "OPERATION_CANCELLED_ERROR";
				break;
			case ContactError.PERMISSION_DENIED_ERROR:
				messageError = "PERMISSION_DENIED_ERROR";
				break;
		}
		utils.onError(messageError);
	},
	onSuccess: function (contacts) {
		var message = 'Found ' + contacts.length + ' contacts.\n';
		contacts.forEach(function (contact) {
			message += "Name: " + contact.displayName + "     LastName: " + contact.nickname + "\n";
		});
		utils.onSuccess(message);
	}
};