var testCalendar = {
	test: function() {
		var startDate = new Date(2017,3,15,18,30,0,0,0); // beware: month 0 = january, 11 = december 
		var endDate = new Date(2017,3,15,19,30,0,0,0);
		var title = "Test event";
		var eventLocation = "FCEIA-UNR";
		var notes = "Some notes about this event.";
		testCalendar.createEvent(startDate, endDate, title, eventLocation, notes);
		testCalendar.findAllEvents(startDate, endDate, title, eventLocation, notes);
	},
	closeCalendar: function () {
		window.plugins.calendar.closeCalendar();
	},
	createEvent: function (startDate, endDate, title, eventLocation, notes) {
		window.plugins.calendar.createEvent(title, eventLocation, notes, startDate, endDate, testCalendar.onSuccess,
		 testCalendar.onError);
	},
	findAllEvents:function (startDate, endDate, title, eventLocation, notes) {
		var calOptions = window.plugins.calendar.getCalendarOptions();
		calOptions.calendarName = "MyCreatedCalendar"; // iOS only 
		calOptions.id = "D9B1D85E-1182-458D-B110-4425F17819F1"; // if not found, we try matching against title, etc 
		window.plugins.calendar.findEventWithOptions(title, eventLocation, notes, startDate, endDate, calOptions,
		testCalendar.onSuccess, testCalendar.onError);
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