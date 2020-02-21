(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/js/Pages/Create.js":
/*!**************************************!*\
  !*** ./resources/js/Pages/Create.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
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




var options = [{
  value: 'Action',
  label: 'Action'
}, {
  value: 'Thriller',
  label: 'Thriller'
}, {
  value: 'Comdey',
  label: 'Comdey'
}, {
  value: 'Ficition',
  label: 'Ficition'
}, {
  value: 'Sci-fi',
  label: 'Sci-fi'
}];

var Create =
/*#__PURE__*/
function (_Component) {
  _inherits(Create, _Component);

  function Create(props) {
    var _this;

    _classCallCheck(this, Create);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Create).call(this, props));
    _this.state = {
      isLoading: false,
      error: null,
      selectedOption: null
    };
    _this.handleOnchange = _this.handleOnchange.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Create, [{
    key: "handleOnchange",
    value: function handleOnchange(event) {
      var target = event.target;
      var value = target.type === "checkbox" ? target.checked : target.value;
      var name = target.name;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "handleChange",
    value: function handleChange(selectedOption) {
      this.setState({
        selectedOption: selectedOption
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var selectedOption = this.state.selectedOption;

      var create = function create(e) {
        e.preventDefault();
        var sort = [];

        _this2.state.selectedOption.map(function (item) {
          sort.push(item.value);
        });

        var data = {
          name: _this2.state.name,
          description: _this2.state.description,
          release_date: _this2.state.release,
          rating: _this2.state.rating,
          ticket_price: _this2.state.ticket,
          country: _this2.state.country,
          genre: sort,
          photo: _this2.state.photo
        };
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/films/create", data).then(function (res) {
          console.log(res);
          console.log(res.data.status);

          if (res.data.status === 200) {
            window.location.replace("/films");
          }
        })["catch"](function (err) {
          console.error(err);
        });
      };

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "register"
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
        onSubmit: create
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "text-center my-5"
      }, " Add Film "), this.state.error != null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "alert alert-danger",
        role: "alert"
      }, this.state.error) : "", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "name",
        onChange: this.handleOnchange,
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        className: "form-control",
        type: "text",
        name: "description",
        onChange: this.handleOnchange,
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Release Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control",
        type: "date",
        name: "release",
        onChange: this.handleOnchange,
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Rating "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control",
        type: "number",
        name: "rating",
        maxLength: "5",
        onChange: this.handleOnchange,
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Ticket Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control",
        type: "number",
        name: "ticket",
        onChange: this.handleOnchange,
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Country "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "country",
        onChange: this.handleOnchange,
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Genre "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
        isMulti: true,
        value: selectedOption,
        onChange: this.handleChange,
        options: options
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Photo "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control",
        type: "link",
        name: "photo",
        onChange: this.handleOnchange,
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary btn-lg"
      }, "Add"))))))))));
    }
  }]);

  return Create;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Create);

/***/ })

}]);