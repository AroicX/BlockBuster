(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./resources/js/Pages/Auth/Login.js":
/*!******************************************!*\
  !*** ./resources/js/Pages/Auth/Login.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Login =
/*#__PURE__*/
function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    var _this;

    _classCallCheck(this, Login);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this, props));
    _this.state = {
      isLoading: false,
      error: null
    };
    _this.handleOnchange = _this.handleOnchange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Login, [{
    key: "handleOnchange",
    value: function handleOnchange(event) {
      var target = event.target;
      var value = target.type === "checkbox" ? target.checked : target.value;
      var name = target.name;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var login = function login(e) {
        console.log('fired...');
        e.preventDefault();
        var data = {
          email: _this2.state.email,
          password: _this2.state.password
        };
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/auth/login", data).then(function (res) {
          console.log(res);
          console.log(res.data.status);

          if (res.data.status === 'ok') {
            var userData = JSON.stringify({
              token: res.data.token,
              user: res.data.user
            });
            localStorage.setItem('staleState', userData);
            window.location.replace('/films');
          }
        })["catch"](function (err) {
          _this2.setState({
            error: 'Email or Password not vaild'
          });

          console.error(err);
        });
      };

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Login"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container mt--8 pb-5 push-down"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-5 col-md-7"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body px-lg-5 py-lg-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-center text-muted mb-4"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: login
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "text-center my-5"
      }, " Please Signin "), this.state.error != null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "alert alert-danger",
        role: "alert"
      }, this.state.error) : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group input-group-alternative"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group-prepend"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "input-group-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "ni ni-email-83"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control",
        placeholder: "Email",
        type: "email",
        name: "email",
        onChange: this.handleOnchange,
        required: true
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group input-group-alternative"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group-prepend"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "input-group-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "ni ni-lock-circle-open"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control",
        placeholder: "Password",
        name: "password",
        type: "password",
        onChange: this.handleOnchange,
        required: true
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "custom-control custom-control-alternative custom-checkbox"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "custom-control-input",
        id: " customCheckLogin",
        type: "checkbox"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "custom-control-label",
        htmlFor: " customCheckLogin"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-muted"
      }, "Remember me"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary py-3 my-4 btn-lg"
      }, "Sign in"))))))))));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

}]);