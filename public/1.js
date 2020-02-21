(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/Pages/Films.js":
/*!*************************************!*\
  !*** ./resources/js/Pages/Films.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Films; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Films() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      auth = _useState2[0],
      setAuth = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      user = _useState4[0],
      setUser = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoading = _useState6[0],
      setIsLoading = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      films = _useState8[0],
      setFilms = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setIsLoading(true);
    var cache = localStorage.staleState;

    if (cache && _typeof(JSON.parse(cache)) === 'object') {
      setAuth(true);
      var userData = JSON.parse(cache);
      setUser(userData.user);
    }

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/films").then(function (res) {
      var result = res.data.data;
      setFilms(result.data);
    })["catch"](function (err) {
      return console.error;
    });
  }, []);
  var ShowFilms = films.map(function (index, key) {
    var genre = JSON.parse(index.genre);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-3 my-2",
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "movie-item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mv-img"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/films/".concat(index.id)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "img-fuild",
      src: index.photo,
      height: "100"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title-in"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cate"
    }, genre.length > 0 ? genre.map(function (item, key) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        key: key,
        className: "blue",
        style: {
          margin: 2
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/films/".concat(index.id)
      }, item));
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "blue"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/films/".concat(index.id)
    }, "Sci"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/films/".concat(index.id)
    }, index.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ion-android-star"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, index.rating), " /5"))));
  });
  {
    isLoading ? "Loading Films" : null;
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Films"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slider movie-items"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "social-link"
  }, !auth ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/login",
    className: "btn btn-danger btn-lg"
  }, "Login") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      localStorage.removeItem('staleState');
      window.location.replace('/login');
    },
    className: "btn btn-danger btn-lg"
  }, "Logout"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, auth ? "Welcome back ".concat(user.name) : 'Follow us:'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "ion-social-facebook"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "ion-social-twitter"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "ion-social-googleplus"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "ion-social-youtube"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/films/create",
    className: "btn btn-info btn-lg pull-right"
  }, "Add Film"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slick-multiItemSlider"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, ShowFilms))))));
}

/***/ }),

/***/ "./resources/js/components/layout/AdminLayout.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/layout/AdminLayout.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pages_Films__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Pages/Films */ "./resources/js/Pages/Films.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var AdminLayout =
/*#__PURE__*/
function (_Component) {
  _inherits(AdminLayout, _Component);

  function AdminLayout(props) {
    var _this;

    _classCallCheck(this, AdminLayout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AdminLayout).call(this, props));
    _this.state = {
      userIn: false
    };
    return _this;
  }

  _createClass(AdminLayout, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var cache = localStorage.staleState;

      if (cache && _typeof(JSON.parse(cache)) === 'object') {
        this.setState({
          userIn: true
        });
        window.location.replace('/films');
      } else {
        return window.location.replace('/films');
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_Films__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }]);

  return AdminLayout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AdminLayout);

/***/ })

}]);