/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
 	// Application Constructor
	initialize: function() {
		document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
		document.addEventListener('resume', this.onResume.bind(this), false);
		},

	// deviceready Event Handler
	//
	// Bind any cordova events here. Common events are:
	// 'pause', 'resume', etc.
	onDeviceReady: function() {
		this.receivedEvent('deviceready');
	},
	onResume: function() {
	},
     
	// Update DOM on a Received Event
	receivedEvent: function() {
		//Settings buttons.
		$('#settings').on("click", function(){
			cordova.plugins.diagnostic.switchToSettings(
				function(){
					utils.onSucess("Successfully opened settings");
				},
			utils.onError
        	);
      });
		$('#locationSettings').on("click", function(){
			cordova.plugins.diagnostic.switchToLocationSettings();
		});
		$('#wifiSettings').on("click", function(){
			cordova.plugins.diagnostic.switchToWifiSettings();
		});
		$('#bluetoothSettings').on("click", function(){
			cordova.plugins.diagnostic.switchToBluetoothSettings();
		});
		$('#mobileDataSettings').on("click", function(){
			cordova.plugins.diagnostic.switchToMobileDataSettings();
		});
		//Request radio button
		$("#requestPermission").on("click", function(event){
			var value = $('input:radio[name=permission]:checked').val();
				if(utils.exists(value)) {
					app.requestPermission(value);
				}
		});
		//Tests buttons.
		$('#testCalendar').on("click", function (event) {
			testCalendar.test();			
		});
		$('#testContacts').on("click", function (event) {
			testContacts.test();			
		});
		$('#testLocation').on("click", function (event) {
			testLocation.test();			
		});
		$('#testCamera').on("click", function (event) {
			testCamera.test();			
		});
		$('#testMicrophone').on("click", function (event) {
			testMicro.test();			
		});
		$('#testInternet').on("click", function (event) {
			testInternet.test();			
		});
		//Clear console button.
		$('#clearResults').on("click", function (event) {
			utils.clear();			
		});
	},
	requestPermission: function(permission) {
		switch(permission) {
			case "calendar":
				cordova.plugins.diagnostic.requestCalendarAuthorization(
					function(status){
						console.log("Successfully requested calendar authorization: authorization was " + status);
					},
					utils.onError
				);
				return;
			case "camera":
				cordova.plugins.diagnostic.requestCameraAuthorization(
					function(status){
						console.log("Successfully requested camera authorization: authorization was " + status);
					},
					utils.onError
				);
				return;
			case "contacts":
				cordova.plugins.diagnostic.requestContactsAuthorization(function(status){
						console.log("Successfully requested contacts authorization: authorization was " + status);
					},
					utils.onError
				);
				return;
			case "diagnostic":
				break;
			case "location":
				cordova.plugins.diagnostic.requestLocationAuthorization(
					function(status){
						console.log("Successfully requested location authorization: authorization was " + status);
					},
					utils.onError
				);
				return;
			case "microphone":
				break;
			case "phone":
				break;
			case "sensors":
				break;
			case "sms":
				break;
			case "socialmedia":
				break;
			case "storage":
				break;
			case "homekit":
				break;
			default:
				utils.onError('RequestPermission fails: Unknown permission ' + permission);
		}
		alert("RequestPermission Name= " + permission);
	}
};

app.initialize();
