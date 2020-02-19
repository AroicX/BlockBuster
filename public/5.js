(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./resources/js/Pages/Single.js":
/*!**************************************!*\
  !*** ./resources/js/Pages/Single.js ***!
  \**************************************/
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




var Single =
/*#__PURE__*/
function (_Component) {
  _inherits(Single, _Component);

  function Single(props) {
    var _this;

    _classCallCheck(this, Single);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Single).call(this, props));
    _this.state = {
      loading: false,
      film: null,
      msg: null,
      disabled: false
    };
    _this.handleOnchange = _this.handleOnchange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Single, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var _this2 = this;

      var id = this.props.match.params.id;
      console.log(id);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/films/find/".concat(id)).then(function (res) {
        var result = res.data.data;

        _this2.setState({
          film: result
        });
      })["catch"](function (err) {
        return console.error;
      });
    }
  }, {
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
      var _this3 = this;

      var createComment = function createComment(e) {
        e.preventDefault();
        var cache = localStorage.staleState;

        if (cache && _typeof(JSON.parse(cache)) === 'object') {
          _this3.setState({
            loading: true
          });
        } else {
          return window.location.replace('/guest');
        }

        var data = {
          film_id: _this3.state.film.id,
          name: _this3.state.name,
          comment: _this3.state.comment
        };
        var storage = JSON.parse(localStorage.getItem('staleState'));
        var token = storage.token;
        console.log(storage);
        console.log(token);
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/comments/create", data, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer ".concat(token)
          }
        }).then(function (res) {
          console.log(res.data);

          _this3.state.film.comments.push(res.data.data);

          _this3.setState({
            msg: 'Comment has been added successfully',
            disabled: true
          });
        })["catch"](function (err) {
          return console.error(err);
        });
      };

      var film = this.state.film;

      if (film) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "hero sr-single-hero sr-single"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "container"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-md-12"
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "page-single movie-single movie_single"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "container"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row ipad-width2"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-md-4 col-sm-12 col-xs-12"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "movie-img sticky-sb"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: film.photo,
          alt: ""
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "movie-btn"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "btn-transform transform-vertical"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#",
          className: "item item-1 yellowbtn"
        }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "ion-card"
        }), " ", "\u20A6 ".concat(film.ticket_price))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#",
          className: "item item-2 yellowbtn"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "ion-card"
        }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-md-8 col-sm-12 col-xs-12"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "movie-single-ct main-content"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
          className: "bd-hd"
        }, film.name, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " ", film.release_date)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "social-btn"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#",
          className: "parent-btn"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "ion-heart"
        }), " Add to Favorite"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "hover-bnt"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#",
          className: "parent-btn"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "ion-android-share-alt"
        }), "share"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "hvr-item"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#",
          className: "hvr-grow"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "ion-social-facebook"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#",
          className: "hvr-grow"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "ion-social-twitter"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#",
          className: "hvr-grow"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "ion-social-googleplus"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#",
          className: "hvr-grow"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "ion-social-youtube"
        }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "movie-rate"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "rate"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "ion-android-star"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, film.rating), " /5", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "movie-tabs"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "tabs"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "tab-links tabs-mv tabs-series"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "active"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#overview"
        }, "Overview"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "tab-content"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: "overview",
          className: "tab active"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-md-8 col-sm-12 col-xs-12"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, film.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "title-hd-sm"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Comments"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#",
          className: "time"
        }, "Count ".concat(film.comments.length), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "ion-ios-arrow-right"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "mv-user-review-item"
        }, film.comments.length > 0 ? film.comments.map(function (index, key) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: key
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, index.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "time"
          }, index.created_at, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "#"
          }, " ", index.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, index.comment));
        }) : "No Comments")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-md-4 col-xs-12 col-sm-12"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
          className: "text-white"
        }, "New Comment:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), this.state.msg != null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "alert alert-success",
          role: "alert"
        }, this.state.msg) : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
          onSubmit: createComment
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-group"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "text-white"
        }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: "form-control",
          type: "text",
          name: "name",
          onChange: this.handleOnchange,
          required: true
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-group"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "text-white"
        }, "Comment"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
          className: "form-control",
          type: "text",
          name: "comment",
          onChange: this.handleOnchange,
          required: true
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-group"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "btn btn-info btn-lg",
          disabled: this.state.disabled
        }, "Submit")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: "moviesrelated",
          className: "tab"
        }))))))))));
      }

      console.log(this.state);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "eg");
    }
  }]);

  return Single;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Single);

/***/ })

}]);