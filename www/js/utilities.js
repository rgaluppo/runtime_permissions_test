var utils = {
	clear: function () {
		$('#results').empty();
	},
	exists: function(value) {
          return value !== undefined && value !== null;
     },
	log: function(message){
		var startWidthLT = message.indexOf('<') === 0;
		if(startWidthLT) {
			$('#results').html(message);
		} else {
			document.getElementById("results").innerText = message;
		}
	},
	onError: function(error) {
		var msg = "An error occurred: " + error + "\n";
		console.warn(msg);
		this.log(msg);
     },
	onSuccess: function (argument) {
	}
};