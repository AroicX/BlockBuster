(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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

/***/ })

}]);