"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadImage = void 0;

var _storage = _interopRequireDefault(require("@react-native-firebase/storage"));

var _firestore = _interopRequireDefault(require("@react-native-firebase/firestore"));

var _reactNative = require("react-native");

var _reactIdGenerator = _interopRequireDefault(require("react-id-generator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var saveFirebaseUrl = [];
var counterUris = 0;
var counter = 0;
var newUuid = '';

var uploadImage = function uploadImage(images, uuid, spiner) {
  newUuid = uuid;

  var _loop = function _loop(index) {
    if (images[index]) {
      if (counter === 0) {
        uploadImagesFirebase(images[index], (0, _reactIdGenerator["default"])("".concat(uuid)), spiner);
      } else {
        setTimeout(function () {
          uploadImagesFirebase(images[index], (0, _reactIdGenerator["default"])("".concat(uuid)), spiner);
        }, 5010);
      }

      counter++;
    }
  };

  for (var index in images) {
    _loop(index);
  }
};

exports.uploadImage = uploadImage;

var uploadImagesFirebase = function uploadImagesFirebase(uri, filename, spiner) {
  var reference, task;
  return regeneratorRuntime.async(function uploadImagesFirebase$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          reference = (0, _storage["default"])().ref(filename);
          task = reference.putFile(uri);
          task.then(function () {
            getUrlFirebase(filename, spiner);
          });
          task["catch"](function (err) {
            return _reactNative.Alert.alert('Sorry an error occurred ', err);
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

var getUrlFirebase = function getUrlFirebase(uri, spiner) {
  var url;
  return regeneratorRuntime.async(function getUrlFirebase$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap((0, _storage["default"])().ref(uri).getDownloadURL());

        case 2:
          url = _context2.sent;
          saveFirebaseUrl[counterUris++] = url;
          counterUris === counter ? addUriFirebase(saveFirebaseUrl, newUuid, spiner) : null;

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var addUriFirebase = function addUriFirebase(saveFirebaseUrl, uuid, spiner) {
  try {
    (0, _firestore["default"])().collection('images').add({
      id: 0,
      id_site: uuid,
      name_imageFive: saveFirebaseUrl[4] ? saveFirebaseUrl[4] : false,
      name_imageFourt: saveFirebaseUrl[3] ? saveFirebaseUrl[3] : false,
      name_imageOne: saveFirebaseUrl[0],
      name_imageThree: saveFirebaseUrl[2] ? saveFirebaseUrl[2] : false,
      name_imageTwo: saveFirebaseUrl[1] ? saveFirebaseUrl[1] : false
    }).then(function () {
      return spiner(1);
    });
  } catch (error) {
    console.log(error);

    _reactNative.Alert.alert('Sorry something went wrong :', error);
  }
};