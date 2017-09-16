var testCalendar = {
	test: function() {
		var startDate = new Date(2017,3,15,18,30,0,0,0); // beware: month 0 = january, 11 = december 
		var endDate = new Date(2017,3,15,19,30,0,0,0);
		var title = "Test event";
		var eventLocation = "FCEIA-UNR";
		var notes = "Some notes about this event.";
		testCalendar.createEvent(startDate, endDate, title, eventLocation, notes);
		testCalendar.findAllEvents(startDate, endDate);
	},
	closeCalendar: function () {
		window.plugins.calendar.closeCalendar();
	},
	createEvent: function (startDate, endDate, title, eventLocation, notes) {
		window.plugins.calendar.createEvent(title, eventLocation, notes, startDate, endDate, testCalendar.onSuccess,
		 testCalendar.onError);
	},
	findAllEvents:function (startDate, endDate) {		
		window.plugins.calendar.listEventsInRange(startDate, endDate, testCalendar.onSuccess, testCalendar.onError);
	},
	onError: function (contactError) {
		utils.onError(contactError);
	},
	openCalendar: function () {
		window.plugins.calendar.openCalendar();
	},
	onSuccess: function (message) {
		var processMessage = message;
		if(Array.isArray(message)){
			processMessage = 'Found ' + message.length + ' events.\n';
			message.forEach(function (ev) {
				processMessage += "\n Title: " + ev.title + "\n Start: " + ev.startDate + "\n End: " + ev.endDate + "\n Location: "
				 + ev.location + "\n Notes: " + ev.notes + " \n";
			});
		}
		utils.onSuccess(processMessage);
	}
};	
