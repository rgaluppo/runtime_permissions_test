var utils = {
	clear: function () {
		$('#results').empty();
	},
	exists: function(value) {
          return value !== undefined && value !== null;
     },
	log: function(message, isAnError){
		$('#results').html(message);
		$('#results').css('color', isAnError ? "red" : "green");
	},
	onError: function(error, notClean) {
		var _this = this;
		clearTimeout(this.failTO);
		if(!notClean) {
			this.failList = [];
		}
		this.failList.push(error);
		setTimeout(function () {
			_this.log(_this.failList.join("<br>"), true);
		}, 2000);
     },
	onSuccess: function (message, notClean) {
		var _this = this;
		clearTimeout(this.successTO);
		if(!notClean) {
			this.successList = [];
		}
		this.successList.push(message);
		setTimeout(function () {
			_this.log(_this.successList.join("<br>"), false);
		}, 1000);
	},
	failList: [],
	successList: []
};
