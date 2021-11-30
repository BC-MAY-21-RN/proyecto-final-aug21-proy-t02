"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = exports.login = void 0;

var _auth = _interopRequireDefault(require("@react-native-firebase/auth"));

var _firestore = _interopRequireDefault(require("@react-native-firebase/firestore"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var login = function login(email, password, navigation, setStatus) {
  return regeneratorRuntime.async(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _auth["default"])().signInWithEmailAndPassword(email, password).then(function (_ref) {
            var user = _ref.user;
            console.log('Ingresó');
            setStatus(true);
            setTimeout(function () {
              setStatus(false);
              navigation.navigate("Home");
            }, 2000);
          })["catch"](function (error) {
            if (error.code === 'auth/wrong-password') {
              _reactNative.Alert.alert("wrong password");
            }

            if (error.code === 'auth/user-not-found') {
              _reactNative.Alert.alert('wrong email');
            }
          }));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.login = login;

var register = function register(email, password, username, latitude, length) {
  return regeneratorRuntime.async(function register$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap((0, _auth["default"])().createUserWithEmailAndPassword(email, password).then(function (_ref2) {
            var user = _ref2.user;
            user.updateProfile({
              displayName: username
            }).then(function () {
              return createAditionalData(latitude, length);
            });
          })["catch"](function (error) {
            console.log(error);
          }));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.register = register;

var createAditionalData = function createAditionalData(latitude, length) {
  (0, _firestore["default"])().collection('users').doc((0, _auth["default"])().currentUser.uid).get().then(function (response) {
    if (!response.exists) {
      (0, _firestore["default"])().collection('users').doc((0, _auth["default"])().currentUser.uid).set({
        name: (0, _auth["default"])().currentUser.displayName,
        latitudeLocation: latitude,
        lengthLocation: length,
        privacityAccepted: false
      });
    }
  });
};