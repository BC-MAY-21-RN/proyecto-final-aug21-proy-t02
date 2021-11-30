"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSite = void 0;

var _firestore = _interopRequireDefault(require("@react-native-firebase/firestore"));

var _reactNative = require("react-native");

var _firebaseUploadImage = require("./firebaseUploadImage.");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createSite = function createSite(data, images, spiner) {
  spiner(true);
  var latitude = data.latitude,
      length = data.length,
      siteDescription = data.siteDescription;
  var _data$dataInfo = data.dataInfo,
      costs = _data$dataInfo.costs,
      workingDays = _data$dataInfo.workingDays;
  var _data$dataInfo$dataWo = data.dataInfo.dataWork,
      categories = _data$dataInfo$dataWo.categories,
      phone = _data$dataInfo$dataWo.phone,
      siteName = _data$dataInfo$dataWo.siteName;

  try {
    (0, _firestore["default"])().collection('sites').add({
      category: categories,
      coust: costs,
      description: siteDescription,
      hearts: 500,
      id: 52,
      location: "".concat((latitude, length)),
      phone: phone,
      schedules_close: '09:25:00 .am',
      schedules_open: '10:02:05 .pm',
      stars: 5,
      title: siteName,
      views: '100',
      wirking_days: workingDays
    }).then(function (response) {
      var uuid = response._documentPath._parts[1];
      (0, _firebaseUploadImage.uploadImage)(images, uuid, spiner);
    });
  } catch (error) {
    _reactNative.Alert.alert('Sorry something went wrong :', error);
  }
};

exports.createSite = createSite;