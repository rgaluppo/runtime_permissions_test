Comparative Framework of Runtime Permissions
==========================================

The repository contains a degree thesis, which performs a detailed analysis of the security features in Android and iOS, for its more advanced versions, with the aim of preserving the user's privacy. In particular, considering permissions that can be modified at runtime.

In addition to the analysis, a comparative framework is presented. It is a hybrid mobile application, which can be run on both Android and iOS. It has two main functions: to determine empirically the scope of the permit systems; and establish a relationship between the permits presented on both platforms. The framework, which can be extended, places special emphasis on the relationship between the user's privacy and the permit system.

## Contents
* [Overview](#overview)
* [Downloading](#downloading)
* [Installation](#installation)
* [Building and running](#building-and-running)
* [Pre-built app](#pre-built-app)
* [Thesis Report](#thesis-report)
* [Screenshots](#screenshots)
* [License](#license)

# Overview
Android and iOS allow to change certain permissions of an application after having installed it on the device. In this context, a framework has been developed to empirically determine the scope of these changes in the permit systems of both platforms.

The framework is a mobile application and is composed of several tests. Each test tests a component of the device, allowing to know the scope of the permissions corresponding to that component. In this way, it seeks to expose possible vulnerabilities present in the security models. Additionally, special emphasis is placed on the relationship between user privacy and the permit system, analyzing the system's coverage of sensitive data for privacy.

# Downloading

To download the project, clone it using git:

    $ git clone https://github.com/rgaluppo/runtime_permissions_test.git

# Installation

## Using the Cordova Client
Add the following Apache Cordova plugins:

    $ cordova plugin add cordova.plugins.diagnostic@3.0
    $ cordova plugin add cordova-plugin-calendar
    $ cordova plugin add cordova-plugin-contacts
    $ cordova plugin add cordova-plugin-geolocation
    $ cordova plugin add cordova-sms-plugin
    $ cordova plugin add https://github.com/gitawego/cordova-screenshot.git
    $ cordova plugin add cordova-plugin-device
    $ cordova plugin add cordova-plugin-device-motion
    $ cordova plugin add cordova-plugin-gyroscope@0.1.4

**NOTE**: Make sure your Cordova Client version is 5.0.0+ (check with `cordova -v`).

# Building and running

The plugin currently supports the Android and iOS platforms.

## Building for iOS
For example, to run on the ios platform, execute the following commands from the project root:

- Install the iOS platform into the project: `$ cordova platform add ios`
- Build and emulate the project: `$ cordova emulate ios`
- Build and run the project: `$ cordova run ios`

## Building for Android

For example, to run on the Android platform, execute the following commands from the project root:

- Install the Android platform into the project, using version 5.0.0 or above: `$ cordova platform add android@5.0.0`
- Build and emulate the project: `$ cordova emulate android`
- Build and run the project: `$ cordova run android`

### Building for Android runtime permissions

In order to support Android 6 (API 23) [runtime permissions](http://developer.android.com/training/permissions/requesting.html), this plugin must depend on libraries only present in API 23+, so you __must build using Android SDK Platform v23 or above__. To do this you must have [Cordova Android platform](https://github.com/apache/cordova-android)@5.0.0 or above installed in your project. You can check the currently installed platform versions with the following command:

    cordova platform ls

__Note:__ Attempting to build with API 22 or below will result in a build error.

# Pre-built app
If you're unable to build the project or just want to try it out, here is the project as a pre-built app installer:

- [Android (APK)](build/cordova-diagnostic-plugin-android-runtime-example.apk)

# Thesis Report

If you want to read the report of the thesis, you can [get the PDF](https://github.com/rgaluppo/runtime_permissions_test/blob/master/informe/informe.pdf) directly.

# Screenshots
<p align="center">
  <img src="https://raw.githubusercontent.com/rgaluppo/runtime_permissions_test/master/informe/imgs/chapter5/app_main_view.png" width="256" title="Framework Main View">
  <img src="https://raw.githubusercontent.com/rgaluppo/runtime_permissions_test/master/informe/imgs/chapter5/allow_calendar.png" width="256" title="Example of runtime permission on Android">
  <img src="https://raw.githubusercontent.com/rgaluppo/runtime_permissions_test/master/informe/imgs/chapter3/calendar_request_ios.png" width="256" title="Example of runtime permission on iOS">
</p>

# License
================

The MIT License

Copyright (c) 2015 Dave Alden / Working Edge Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
