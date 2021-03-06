var testInternet = {
	test: function() {
		testInternet.isConnected();
		testInternet.sendPost();
  	},
  	isConnected: function () {
		$.ajax({
			url: 'https://dcc.fceia.unr.edu.ar/sites/all/themes/birthofcool/images/logo-lcc.png',
			method: 'GET',
			success: testInternet.onSuccess,
			error: testInternet.onError,
			cache: false,
			mimeType: "text/plain; charset=x-user-defined"
		});
	},
	sendPost: function () {
		$.ajax({
			url: 'http://httpbin.org/post',
			method: 'POST',
			success: testInternet.onSuccess,
			error: testInternet.onError,
			cache: false,
			mimeType: "text/plain; charset=x-user-defined"
		});
	},
  onError: function () {
  		var message = 'Ouch!\n';
		utils.onError(message);
	},
	onSuccess: function (data) {
		function base64Encode(str) {
        var CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var out = "", i = 0, len = str.length, c1, c2, c3;
        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i == len) {
                out += CHARS.charAt(c1 >> 2);
                out += CHARS.charAt((c1 & 0x3) << 4);
                out += "==";
                break;
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                out += CHARS.charAt(c1 >> 2);
                out += CHARS.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
                out += CHARS.charAt((c2 & 0xF) << 2);
                out += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            out += CHARS.charAt(c1 >> 2);
            out += CHARS.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += CHARS.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
            out += CHARS.charAt(c3 & 0x3F);
        }
        return out;
    }
		if(data.indexOf('PNG') > 0) {	// is an image encode.
			var imgur = 'data:image/jpeg;base64,' + base64Encode(data);
			var img = "<img style='padding-top: 5px;' src='" + imgur + "'>";
			utils.onSuccess(img);
		} else { // is a POST response.
			utils.onSuccess(data, true);
		}
	}
};
