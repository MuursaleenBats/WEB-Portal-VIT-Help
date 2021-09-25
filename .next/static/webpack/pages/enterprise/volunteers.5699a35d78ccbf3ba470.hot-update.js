webpackHotUpdate_N_E("pages/enterprise/volunteers",{

/***/ "./pages/enterprise/volunteers.js":
/*!****************************************!*\
  !*** ./pages/enterprise/volunteers.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var variables_variable_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! variables/variable.js */ "./variables/variable.js");
/* harmony import */ var variables_variable_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(variables_variable_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var layouts_Enterprise_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! layouts/Enterprise.js */ "./layouts/Enterprise.js");
/* harmony import */ var components_Headers_EnterpriseHeader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Headers/EnterpriseHeader.js */ "./components/Headers/EnterpriseHeader.js");







var _jsxFileName = "C:\\Users\\Saad\\Desktop\\WebPortal\\WEB-Portal-VIT-Help\\pages\\enterprise\\volunteers.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 // reactstrap components

 // layout for this page

 // core components



var Organizations = function Organizations(_ref) {
  _s();

  var sam = _ref.sam;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(false),
      _React$useState2 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState, 2),
      modalDefaultOpen = _React$useState2[0],
      setModalDefaultOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(false),
      _React$useState4 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState3, 2),
      modalFormOpen = _React$useState4[0],
      setModalFormOpen = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(false),
      _React$useState6 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState5, 2),
      modalUpdateOpen = _React$useState6[0],
      setModalUpdateOpen = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(false),
      _React$useState8 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState7, 2),
      modalShowOpen = _React$useState8[0],
      setModalShowOpen = _React$useState8[1];

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(event) {
      var org, postData, postResponse;
      return C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              org = JSON.parse(localStorage.getItem("vh-org"));
              event.preventDefault(); //console.log(event);

              postData = {
                OrganizationName: org.NameofOrg,
                Name: event.target[0].value,
                phoneNumber: event.target[1].value,
                DOB: event.target[2].value,
                Address: event.target[3].value
              };
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("http://localhost:3001/data/enterprise/orgvolunt", postData);

            case 5:
              postResponse = _context.sent;
              console.log(postResponse.data);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(undefined),
      _React$useState10 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState9, 2),
      volunteerData = _React$useState10[0],
      setVolunteerData = _React$useState10[1];

  var loadOrgData = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
      var org, volunteerDataGetResponse;
      return C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              org = JSON.parse(localStorage.getItem("vh-org"));
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("http://localhost:3001/data/orgvolunt/".concat(org.NameofOrg));

            case 3:
              volunteerDataGetResponse = _context2.sent;
              setVolunteerData(volunteerDataGetResponse.data);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function loadOrgData() {
      return _ref3.apply(this, arguments);
    };
  }();

  react__WEBPACK_IMPORTED_MODULE_5___default.a.useEffect(loadOrgData, []);

  var updateVol = /*#__PURE__*/function () {
    var _ref4 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(event, idx) {
      var postData, postResponse;
      return C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              event.preventDefault(); //console.log(event);

              postData = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, event.target[0].value && {
                Name: event.target[0].value
              }), event.target[1].value && {
                phoneNumber: event.target[1].value
              }), event.target[2].value && {
                DOB: event.target[2].value
              }), event.target[3].value && {
                Address: event.target[3].value
              });
              _context3.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.patch("http://localhost:3001/data/updateVolunt/".concat(volunteerData[idx].Id), postData);

            case 4:
              postResponse = _context3.sent;
              console.log(postResponse.data);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function updateVol(_x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  var deleteVolunteerByIndex = /*#__PURE__*/function () {
    var _ref5 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(event, index) {
      var postResponse;
      return C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              event.preventDefault();
              _context4.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a["delete"]("http://localhost:3001/data/deleteVolunt/".concat(volunteerData[index].Id));

            case 3:
              postResponse = _context4.sent;
              _context4.next = 6;
              return loadOrgData();

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function deleteVolunteerByIndex(_x4, _x5) {
      return _ref5.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Headers_EnterpriseHeader_js__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], {
      className: "mt--7",
      fluid: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
            className: "shadow",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
              className: "border-0",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "mb-3",
                children: "Volunteers"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
                color: "warning",
                onClick: function onClick() {
                  return setModalFormOpen(true);
                },
                type: "button",
                children: "Add Volunteer"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Modal"], {
                isOpen: modalFormOpen,
                toggle: function toggle() {
                  return setModalFormOpen(false);
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: " modal-body p-0",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
                    className: " bg-secondary shadow border-0",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
                      className: " bg-white pb-5",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "text-center",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                          children: "Add Volunteer Details"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 114,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 113,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 112,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
                      className: " px-lg-5 py-lg-5",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Form"], {
                        role: "form",
                        onSubmit: handleSubmit,
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
                          className: " mb-3",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroup"], {
                            className: " input-group-alternative",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupAddon"], {
                              addonType: "prepend",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupText"], {
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: " ni ni-circle-08"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 125,
                                  columnNumber: 35
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 124,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 123,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
                              placeholder: "Name",
                              type: "text"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 128,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 122,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 121,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroup"], {
                            className: " input-group-alternative",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupAddon"], {
                              addonType: "prepend",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupText"], {
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: " ni ni-mobile-button"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 135,
                                  columnNumber: 35
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 134,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 133,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
                              placeholder: "Phone Number",
                              type: "tel"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 138,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 132,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 131,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                            className: " form-control-label",
                            htmlFor: "example-date-input",
                            children: "Date of Birth"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 142,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
                            id: "example-date-input",
                            type: "date"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 145,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 141,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
                          className: " mb-3",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroup"], {
                            className: " input-group-alternative",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupAddon"], {
                              addonType: "prepend",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupText"], {
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: " ni ni-square-pin"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 155,
                                  columnNumber: 35
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 154,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 153,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
                              placeholder: "Address",
                              type: "text"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 158,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 152,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 151,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: " custom-file",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                            className: " custom-file-input",
                            id: "customFileLang",
                            lang: "en",
                            type: "file"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 162,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                            className: " custom-file-label",
                            htmlFor: "customFileLang",
                            children: "File If Any"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 168,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 161,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: " text-center",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
                            className: " my-4",
                            color: "warning",
                            type: "submit",
                            children: "ADD"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 173,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 172,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 120,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 118,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Table"], {
              className: "align-items-center table-flush",
              responsive: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
                className: "thead-light",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "Id"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 186,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "Age"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "Cases Solved"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "Details"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "Control"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 191,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 192,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                children: volunteerData && volunteerData.map(function (volunteer, idx) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: volunteer.Id
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 198,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: volunteer.Name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 199,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: new Date().getYear() - new Date(volunteer.DOB).getYear()
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 200,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: 0
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 201,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
                        outline: true,
                        onClick: function onClick() {
                          return setModalShowOpen(true);
                        },
                        color: "primary",
                        type: "button",
                        children: "Show Details"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 206,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Modal"], {
                        isOpen: modalShowOpen,
                        toggle: function toggle() {
                          return setModalShowOpen(false);
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: " modal-body p-0",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
                            className: " bg-secondary shadow border-0",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
                              className: " bg-white pb-5",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "text-center",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                                  children: "Volunteer Details"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 216,
                                  columnNumber: 35
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 215,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 214,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
                              className: " px-lg-5 py-lg-5",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Form"], {
                                role: "form",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
                                  className: " mb-3",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroup"], {
                                    className: " input-group-alternative",
                                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupAddon"], {
                                      addonType: "prepend",
                                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupText"], {
                                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                          className: " ni ni-circle-08"
                                        }, void 0, false, {
                                          fileName: _jsxFileName,
                                          lineNumber: 227,
                                          columnNumber: 43
                                        }, _this)
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 226,
                                        columnNumber: 41
                                      }, _this)
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 225,
                                      columnNumber: 39
                                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
                                      placeholder: volunteer.Name,
                                      type: "text"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 230,
                                      columnNumber: 39
                                    }, _this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 224,
                                    columnNumber: 37
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 223,
                                  columnNumber: 35
                                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroup"], {
                                    className: " input-group-alternative",
                                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupAddon"], {
                                      addonType: "prepend",
                                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupText"], {
                                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                          className: " ni ni-mobile-button"
                                        }, void 0, false, {
                                          fileName: _jsxFileName,
                                          lineNumber: 238,
                                          columnNumber: 43
                                        }, _this)
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 237,
                                        columnNumber: 41
                                      }, _this)
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 236,
                                      columnNumber: 39
                                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
                                      placeholder: volunteer.phoneNumber,
                                      type: "tel"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 241,
                                      columnNumber: 39
                                    }, _this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 235,
                                    columnNumber: 37
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 234,
                                  columnNumber: 35
                                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
                                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                                    className: " form-control-label",
                                    htmlFor: "example-date-input",
                                    children: "Date of Birth"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 246,
                                    columnNumber: 37
                                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
                                    id: "example-date-input",
                                    placeholder: volunteer.DOB,
                                    type: "date"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 249,
                                    columnNumber: 37
                                  }, _this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 245,
                                  columnNumber: 35
                                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
                                  className: " mb-3",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroup"], {
                                    className: " input-group-alternative",
                                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupAddon"], {
                                      addonType: "prepend",
                                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupText"], {
                                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                          className: " ni ni-square-pin"
                                        }, void 0, false, {
                                          fileName: _jsxFileName,
                                          lineNumber: 260,
                                          columnNumber: 43
                                        }, _this)
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 259,
                                        columnNumber: 41
                                      }, _this)
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 258,
                                      columnNumber: 39
                                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
                                      placeholder: volunteer.Address,
                                      type: "text"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 263,
                                      columnNumber: 39
                                    }, _this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 257,
                                    columnNumber: 37
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 256,
                                  columnNumber: 35
                                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: " custom-file",
                                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                                    className: " custom-file-input",
                                    id: "customFileLang",
                                    lang: "en",
                                    type: "file"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 269,
                                    columnNumber: 37
                                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                                    className: " custom-file-label",
                                    htmlFor: "customFileLang",
                                    children: "File If Any"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 275,
                                    columnNumber: 37
                                  }, _this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 268,
                                  columnNumber: 35
                                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: " text-center"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 279,
                                  columnNumber: 35
                                }, _this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 222,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 220,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 213,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 212,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 211,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 202,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
                        outline: true,
                        onClick: function onClick() {
                          return setModalUpdateOpen(true);
                        },
                        color: "success",
                        type: "button",
                        children: "Update Details"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 290,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Modal"], {
                        isOpen: modalUpdateOpen,
                        toggle: function toggle() {
                          return setModalUpdateOpen(false);
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: " modal-body p-0",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
                            className: " bg-secondary shadow border-0",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
                              className: " bg-white pb-5",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "text-center",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                                  children: "Update Volunteer Details"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 300,
                                  columnNumber: 35
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 299,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 298,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
                              className: " px-lg-5 py-lg-5",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Form"], {
                                role: "form",
                                onSubmit: function onSubmit(event) {
                                  return updateVol(event, idx);
                                },
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
                                  className: " mb-3",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroup"], {
                                    className: " input-group-alternative",
                                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupAddon"], {
                                      addonType: "prepend",
                                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupText"], {
                                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                          className: " ni ni-circle-08"
                                        }, void 0, false, {
                                          fileName: _jsxFileName,
                                          lineNumber: 311,
                                          columnNumber: 43
                                        }, _this)
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 310,
                                        columnNumber: 41
                                      }, _this)
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 309,
                                      columnNumber: 39
                                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
                                      placeholder: "Name",
                                      type: "text"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 314,
                                      columnNumber: 39
                                    }, _this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 308,
                                    columnNumber: 37
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 307,
                                  columnNumber: 35
                                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroup"], {
                                    className: " input-group-alternative",
                                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupAddon"], {
                                      addonType: "prepend",
                                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupText"], {
                                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                          className: " ni ni-mobile-button"
                                        }, void 0, false, {
                                          fileName: _jsxFileName,
                                          lineNumber: 321,
                                          columnNumber: 43
                                        }, _this)
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 320,
                                        columnNumber: 41
                                      }, _this)
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 319,
                                      columnNumber: 39
                                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
                                      placeholder: "Phone Number",
                                      type: "tel"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 324,
                                      columnNumber: 39
                                    }, _this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 318,
                                    columnNumber: 37
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 317,
                                  columnNumber: 35
                                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
                                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                                    className: " form-control-label",
                                    htmlFor: "example-date-input",
                                    children: "Date of Birth"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 328,
                                    columnNumber: 37
                                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
                                    id: "example-date-input",
                                    type: "date"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 331,
                                    columnNumber: 37
                                  }, _this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 327,
                                  columnNumber: 35
                                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
                                  className: " mb-3",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroup"], {
                                    className: " input-group-alternative",
                                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupAddon"], {
                                      addonType: "prepend",
                                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupText"], {
                                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                          className: " ni ni-square-pin"
                                        }, void 0, false, {
                                          fileName: _jsxFileName,
                                          lineNumber: 341,
                                          columnNumber: 43
                                        }, _this)
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 340,
                                        columnNumber: 41
                                      }, _this)
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 339,
                                      columnNumber: 39
                                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
                                      placeholder: "Address",
                                      type: "text"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 344,
                                      columnNumber: 39
                                    }, _this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 338,
                                    columnNumber: 37
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 337,
                                  columnNumber: 35
                                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: " custom-file",
                                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                                    className: " custom-file-input",
                                    id: "customFileLang",
                                    lang: "en",
                                    type: "file"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 348,
                                    columnNumber: 37
                                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                                    className: " custom-file-label",
                                    htmlFor: "customFileLang",
                                    children: "File If Any"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 354,
                                    columnNumber: 37
                                  }, _this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 347,
                                  columnNumber: 35
                                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: " text-center",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
                                    className: " my-4",
                                    color: "warning",
                                    type: "submit",
                                    children: "Update"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 359,
                                    columnNumber: 37
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 358,
                                  columnNumber: 35
                                }, _this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 306,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 304,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 297,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 296,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 295,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 288,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
                        outline: true,
                        color: "danger",
                        type: "submit",
                        onClick: function onClick(event) {
                          deleteVolunteerByIndex(event, idx);
                        },
                        children: "Remove"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 374,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 373,
                      columnNumber: 23
                    }, _this)]
                  }, volunteer.Id, true, {
                    fileName: _jsxFileName,
                    lineNumber: 197,
                    columnNumber: 21
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Organizations, "w64JP426OSARpsl6Yxpr0qskuCg=");

_c = Organizations;
Organizations.layout = layouts_Enterprise_js__WEBPACK_IMPORTED_MODULE_10__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Organizations);

var _c;

$RefreshReg$(_c, "Organizations");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW50ZXJwcmlzZS92b2x1bnRlZXJzLmpzIl0sIm5hbWVzIjpbIk9yZ2FuaXphdGlvbnMiLCJzYW0iLCJSZWFjdCIsInVzZVN0YXRlIiwibW9kYWxEZWZhdWx0T3BlbiIsInNldE1vZGFsRGVmYXVsdE9wZW4iLCJtb2RhbEZvcm1PcGVuIiwic2V0TW9kYWxGb3JtT3BlbiIsIm1vZGFsVXBkYXRlT3BlbiIsInNldE1vZGFsVXBkYXRlT3BlbiIsIm1vZGFsU2hvd09wZW4iLCJzZXRNb2RhbFNob3dPcGVuIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJvcmciLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHJldmVudERlZmF1bHQiLCJwb3N0RGF0YSIsIk9yZ2FuaXphdGlvbk5hbWUiLCJOYW1lb2ZPcmciLCJOYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJwaG9uZU51bWJlciIsIkRPQiIsIkFkZHJlc3MiLCJheGlvcyIsInBvc3QiLCJwb3N0UmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInVuZGVmaW5lZCIsInZvbHVudGVlckRhdGEiLCJzZXRWb2x1bnRlZXJEYXRhIiwibG9hZE9yZ0RhdGEiLCJnZXQiLCJ2b2x1bnRlZXJEYXRhR2V0UmVzcG9uc2UiLCJ1c2VFZmZlY3QiLCJ1cGRhdGVWb2wiLCJpZHgiLCJwYXRjaCIsIklkIiwiZGVsZXRlVm9sdW50ZWVyQnlJbmRleCIsImluZGV4IiwibWFwIiwidm9sdW50ZWVyIiwiRGF0ZSIsImdldFllYXIiLCJsYXlvdXQiLCJFbnRlcnByaXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0NBNEJBOztDQUVBOztBQUNBOztBQUdBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBYTtBQUFBOztBQUFBLE1BQVZDLEdBQVUs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QUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VudGVycHJpc2Uvdm9sdW50ZWVycy41Njk5YTM1ZDc4Y2NiZjNiYTQ3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBEYXRhIGZyb20gXCJ2YXJpYWJsZXMvdmFyaWFibGUuanNcIjtcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbi8vIHJlYWN0c3RyYXAgY29tcG9uZW50c1xyXG5pbXBvcnQge1xyXG4gIEJhZGdlLFxyXG4gIENhcmQsXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDYXJkRm9vdGVyLFxyXG4gIENhcmRCb2R5LFxyXG4gIERyb3Bkb3duTWVudSxcclxuICBEcm9wZG93bkl0ZW0sXHJcbiAgVW5jb250cm9sbGVkRHJvcGRvd24sXHJcbiAgRHJvcGRvd25Ub2dnbGUsXHJcbiAgRm9ybUdyb3VwLFxyXG4gIEZvcm0sXHJcbiAgSW5wdXQsXHJcbiAgSW5wdXRHcm91cEFkZG9uLFxyXG4gIElucHV0R3JvdXBUZXh0LFxyXG4gIElucHV0R3JvdXAsXHJcbiAgTWVkaWEsXHJcbiAgUGFnaW5hdGlvbixcclxuICBQYWdpbmF0aW9uSXRlbSxcclxuICBQYWdpbmF0aW9uTGluayxcclxuICBQcm9ncmVzcyxcclxuICBUYWJsZSxcclxuICBDb250YWluZXIsXHJcbiAgUm93LFxyXG4gIE1vZGFsLFxyXG4gIFVuY29udHJvbGxlZFRvb2x0aXAsXHJcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuLy8gbGF5b3V0IGZvciB0aGlzIHBhZ2VcclxuaW1wb3J0IEVudGVycHJpc2UgZnJvbSBcImxheW91dHMvRW50ZXJwcmlzZS5qc1wiO1xyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9IZWFkZXJzL0VudGVycHJpc2VIZWFkZXIuanNcIjtcclxuXHJcblxyXG5jb25zdCBPcmdhbml6YXRpb25zID0gKHsgc2FtIH0pID0+IHtcclxuICBjb25zdCBbbW9kYWxEZWZhdWx0T3Blbiwgc2V0TW9kYWxEZWZhdWx0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21vZGFsRm9ybU9wZW4sIHNldE1vZGFsRm9ybU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb2RhbFVwZGF0ZU9wZW4sIHNldE1vZGFsVXBkYXRlT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21vZGFsU2hvd09wZW4sIHNldE1vZGFsU2hvd09wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIHZhciBvcmcgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidmgtb3JnXCIpKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIGNvbnN0IHBvc3REYXRhID0ge1xyXG4gICAgICBPcmdhbml6YXRpb25OYW1lOiBvcmcuTmFtZW9mT3JnLFxyXG4gICAgICBOYW1lOiBldmVudC50YXJnZXRbMF0udmFsdWUsXHJcbiAgICAgIHBob25lTnVtYmVyOiBldmVudC50YXJnZXRbMV0udmFsdWUsXHJcbiAgICAgIERPQjogZXZlbnQudGFyZ2V0WzJdLnZhbHVlLFxyXG4gICAgICBBZGRyZXNzOiBldmVudC50YXJnZXRbM10udmFsdWUsXHJcbiAgICB9XHJcbiAgICBjb25zdCBwb3N0UmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2RhdGEvZW50ZXJwcmlzZS9vcmd2b2x1bnRcIiwgcG9zdERhdGEpO1xyXG4gICAgY29uc29sZS5sb2cocG9zdFJlc3BvbnNlLmRhdGEpO1xyXG4gIH1cclxuICBcclxuICBjb25zdCBbdm9sdW50ZWVyRGF0YSwgc2V0Vm9sdW50ZWVyRGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gIGNvbnN0IGxvYWRPcmdEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdmFyIG9yZyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ2aC1vcmdcIikpO1xyXG4gICAgY29uc3Qgdm9sdW50ZWVyRGF0YUdldFJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDEvZGF0YS9vcmd2b2x1bnQvJHtvcmcuTmFtZW9mT3JnfWApO1xyXG4gICAgc2V0Vm9sdW50ZWVyRGF0YSh2b2x1bnRlZXJEYXRhR2V0UmVzcG9uc2UuZGF0YSk7XHJcbiAgfVxyXG4gIFJlYWN0LnVzZUVmZmVjdChsb2FkT3JnRGF0YSwgW10pO1xyXG5cclxuICBjb25zdCB1cGRhdGVWb2wgPSBhc3luYyAoZXZlbnQsIGlkeCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgY29uc3QgcG9zdERhdGEgPSB7XHJcbiAgICAgIC4uLihldmVudC50YXJnZXRbMF0udmFsdWUpICYmIHtOYW1lOiBldmVudC50YXJnZXRbMF0udmFsdWV9LFxyXG4gICAgICAuLi4oZXZlbnQudGFyZ2V0WzFdLnZhbHVlKSAmJiB7cGhvbmVOdW1iZXI6IGV2ZW50LnRhcmdldFsxXS52YWx1ZX0sXHJcbiAgICAgIC4uLihldmVudC50YXJnZXRbMl0udmFsdWUpICYmIHtET0I6IGV2ZW50LnRhcmdldFsyXS52YWx1ZX0sXHJcbiAgICAgIC4uLihldmVudC50YXJnZXRbM10udmFsdWUpICYmIHtBZGRyZXNzOiBldmVudC50YXJnZXRbM10udmFsdWV9LFxyXG4gICAgfVxyXG4gICAgY29uc3QgcG9zdFJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9kYXRhL3VwZGF0ZVZvbHVudC8ke3ZvbHVudGVlckRhdGFbaWR4XS5JZH1gLCBwb3N0RGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhwb3N0UmVzcG9uc2UuZGF0YSk7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IGRlbGV0ZVZvbHVudGVlckJ5SW5kZXggPSBhc3luYyAoZXZlbnQsIGluZGV4KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgcG9zdFJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvZGF0YS9kZWxldGVWb2x1bnQvJHt2b2x1bnRlZXJEYXRhW2luZGV4XS5JZH1gKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHBvc3RSZXNwb25zZS5kYXRhKTtcclxuICAgIGF3YWl0IGxvYWRPcmdEYXRhKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICB7LyogUGFnZSBjb250ZW50ICovfVxyXG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm10LS03XCIgZmx1aWQ+XHJcbiAgICAgICAgey8qIFRhYmxlICovfVxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJzaGFkb3dcIj5cclxuICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJib3JkZXItMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTNcIj5Wb2x1bnRlZXJzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kYWxGb3JtT3Blbih0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEFkZCBWb2x1bnRlZXJcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsIGlzT3Blbj17bW9kYWxGb3JtT3Blbn0gdG9nZ2xlPXsoKSA9PiBzZXRNb2RhbEZvcm1PcGVuKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1vZGFsLWJvZHkgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiIGJnLXNlY29uZGFyeSBzaGFkb3cgYm9yZGVyLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cIiBiZy13aGl0ZSBwYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+QWRkIFZvbHVudGVlciBEZXRhaWxzPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cIiBweC1sZy01IHB5LWxnLTVcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIHJvbGU9XCJmb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCIgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwiIGlucHV0LWdyb3VwLWFsdGVybmF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwQWRkb24gYWRkb25UeXBlPVwicHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1jaXJjbGUtMDhcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwQWRkb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIk5hbWVcIiB0eXBlPVwidGV4dFwiPjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIiBpbnB1dC1ncm91cC1hbHRlcm5hdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cEFkZG9uIGFkZG9uVHlwZT1cInByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktbW9iaWxlLWJ1dHRvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXBUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXBBZGRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiUGhvbmUgTnVtYmVyXCIgdHlwZT1cInRlbFwiPjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCIgZm9ybS1jb250cm9sLWxhYmVsXCIgaHRtbEZvcj1cImV4YW1wbGUtZGF0ZS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlIG9mIEJpcnRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImV4YW1wbGUtZGF0ZS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwiIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIiBpbnB1dC1ncm91cC1hbHRlcm5hdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cEFkZG9uIGFkZG9uVHlwZT1cInByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktc3F1YXJlLXBpblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXBUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXBBZGRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiQWRkcmVzc1wiIHR5cGU9XCJ0ZXh0XCI+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjdXN0b20tZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBjdXN0b20tZmlsZS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY3VzdG9tRmlsZUxhbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPVwiZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCIgY3VzdG9tLWZpbGUtbGFiZWxcIiBodG1sRm9yPVwiY3VzdG9tRmlsZUxhbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZSBJZiBBbnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiIG15LTRcIiBjb2xvcj1cIndhcm5pbmdcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFERFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxUYWJsZSBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1jZW50ZXIgdGFibGUtZmx1c2hcIiByZXNwb25zaXZlPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInRoZWFkLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5JZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+QWdlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5DYXNlcyBTb2x2ZWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkRldGFpbHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkNvbnRyb2w8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICB7dm9sdW50ZWVyRGF0YSAmJiB2b2x1bnRlZXJEYXRhLm1hcCgodm9sdW50ZWVyLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXt2b2x1bnRlZXIuSWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkID57dm9sdW50ZWVyLklkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgPnt2b2x1bnRlZXIuTmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkID57bmV3IERhdGUoKS5nZXRZZWFyKCkgLSBuZXcgRGF0ZSh2b2x1bnRlZXIuRE9CKS5nZXRZZWFyKCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+ezB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvdXRsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kYWxTaG93T3Blbih0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvdyBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwgaXNPcGVuPXttb2RhbFNob3dPcGVufSB0b2dnbGU9eygpID0+IHNldE1vZGFsU2hvd09wZW4oZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtb2RhbC1ib2R5IHAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiIGJnLXNlY29uZGFyeSBzaGFkb3cgYm9yZGVyLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwiIGJnLXdoaXRlIHBiLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+Vm9sdW50ZWVyIERldGFpbHM8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwiIHB4LWxnLTUgcHktbGctNVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSByb2xlPVwiZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCIgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9XCIgaW5wdXQtZ3JvdXAtYWx0ZXJuYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cEFkZG9uIGFkZG9uVHlwZT1cInByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLWNpcmNsZS0wOFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwQWRkb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPXt2b2x1bnRlZXIuTmFtZX0gdHlwZT1cInRleHRcIj48L0lucHV0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9XCIgaW5wdXQtZ3JvdXAtYWx0ZXJuYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cEFkZG9uIGFkZG9uVHlwZT1cInByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLW1vYmlsZS1idXR0b25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXBUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cEFkZG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj17dm9sdW50ZWVyLnBob25lTnVtYmVyfSB0eXBlPVwidGVsXCI+PC9JbnB1dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIiBmb3JtLWNvbnRyb2wtbGFiZWxcIiBodG1sRm9yPVwiZXhhbXBsZS1kYXRlLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZSBvZiBCaXJ0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlLWRhdGUtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt2b2x1bnRlZXIuRE9CfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwiIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwiIGlucHV0LWdyb3VwLWFsdGVybmF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXBBZGRvbiBhZGRvblR5cGU9XCJwcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1zcXVhcmUtcGluXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXBBZGRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9e3ZvbHVudGVlci5BZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGN1c3RvbS1maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBjdXN0b20tZmlsZS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjdXN0b21GaWxlTGFuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz1cImVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiIGN1c3RvbS1maWxlLWxhYmVsXCIgaHRtbEZvcj1cImN1c3RvbUZpbGVMYW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZSBJZiBBbnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC1jZW50ZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvdXRsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kYWxVcGRhdGVPcGVuKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGUgRGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsIGlzT3Blbj17bW9kYWxVcGRhdGVPcGVufSB0b2dnbGU9eygpID0+IHNldE1vZGFsVXBkYXRlT3BlbihmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1vZGFsLWJvZHkgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCIgYmctc2Vjb25kYXJ5IHNoYWRvdyBib3JkZXItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCIgYmctd2hpdGUgcGItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5VcGRhdGUgVm9sdW50ZWVyIERldGFpbHM8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwiIHB4LWxnLTUgcHktbGctNVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSByb2xlPVwiZm9ybVwiIG9uU3VibWl0PXsoZXZlbnQpID0+IHVwZGF0ZVZvbChldmVudCwgaWR4KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIiBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIiBpbnB1dC1ncm91cC1hbHRlcm5hdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwQWRkb24gYWRkb25UeXBlPVwicHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXBUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktY2lyY2xlLTA4XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXBBZGRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdHlwZT1cInRleHRcIj48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIiBpbnB1dC1ncm91cC1hbHRlcm5hdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwQWRkb24gYWRkb25UeXBlPVwicHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXBUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktbW9iaWxlLWJ1dHRvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwQWRkb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiUGhvbmUgTnVtYmVyXCIgdHlwZT1cInRlbFwiPjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIiBmb3JtLWNvbnRyb2wtbGFiZWxcIiBodG1sRm9yPVwiZXhhbXBsZS1kYXRlLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZSBvZiBCaXJ0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlLWRhdGUtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwiIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwiIGlucHV0LWdyb3VwLWFsdGVybmF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXBBZGRvbiBhZGRvblR5cGU9XCJwcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1zcXVhcmUtcGluXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXBBZGRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJBZGRyZXNzXCIgdHlwZT1cInRleHRcIj48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGN1c3RvbS1maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBjdXN0b20tZmlsZS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjdXN0b21GaWxlTGFuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz1cImVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiIGN1c3RvbS1maWxlLWxhYmVsXCIgaHRtbEZvcj1cImN1c3RvbUZpbGVMYW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZSBJZiBBbnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCIgbXktNFwiIGNvbG9yPVwid2FybmluZ1wiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvdXRsaW5lIGNvbG9yPVwiZGFuZ2VyXCIgdHlwZT1cInN1Ym1pdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtkZWxldGVWb2x1bnRlZXJCeUluZGV4KGV2ZW50LCBpZHgpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L1RhYmxlPlxyXG5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgey8qIERhcmsgdGFibGUgKi99XHJcblxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbk9yZ2FuaXphdGlvbnMubGF5b3V0ID0gRW50ZXJwcmlzZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9yZ2FuaXphdGlvbnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=