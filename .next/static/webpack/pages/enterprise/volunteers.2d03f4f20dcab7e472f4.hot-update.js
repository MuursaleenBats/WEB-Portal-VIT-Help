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
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var variables_variable_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! variables/variable.js */ "./variables/variable.js");
/* harmony import */ var variables_variable_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(variables_variable_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var layouts_Enterprise_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! layouts/Enterprise.js */ "./layouts/Enterprise.js");
/* harmony import */ var components_Headers_EnterpriseHeader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Headers/EnterpriseHeader.js */ "./components/Headers/EnterpriseHeader.js");






var _jsxFileName = "C:\\Users\\Saad\\Desktop\\WebPortal\\WEB-Portal-VIT-Help\\pages\\enterprise\\volunteers.js",
    _this = undefined,
    _s = $RefreshSig$();





 // reactstrap components

 // layout for this page

 // core components



var Organizations = function Organizations(_ref) {
  _s();

  var sam = _ref.sam;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState2 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      modalDefaultOpen = _React$useState2[0],
      setModalDefaultOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState4 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      modalFormOpen = _React$useState4[0],
      setModalFormOpen = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState6 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState5, 2),
      modalUpdateOpen = _React$useState6[0],
      setModalUpdateOpen = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState8 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState7, 2),
      modalShowOpen = _React$useState8[0],
      setModalShowOpen = _React$useState8[1];

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {
      var org, postData, postResponse;
      return C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("http://localhost:3001/data/enterprise/orgvolunt", postData);

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

  var updateVol = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(event) {
      var postData, postResponse;
      return C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault(); //console.log(event);

              postData = {
                OrganizationName: org.NameofOrg,
                Name: event.target[0].value,
                phoneNumber: event.target[1].value,
                DOB: event.target[2].value,
                Address: event.target[3].value
              };
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.patch("http://localhost:3001/data//updateVolunt/".concat(3), postData);

            case 4:
              postResponse = _context2.sent;
              console.log(postResponse.data);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function updateVol(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(undefined),
      _React$useState10 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState9, 2),
      volunteerData = _React$useState10[0],
      setVolunteerData = _React$useState10[1];

  var loadOrgData = /*#__PURE__*/function () {
    var _ref4 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var org, volunteerDataGetResponse;
      return C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              org = JSON.parse(localStorage.getItem("vh-org"));
              _context3.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("http://localhost:3001/data/orgvolunt/".concat(org.NameofOrg));

            case 3:
              volunteerDataGetResponse = _context3.sent;
              setVolunteerData(volunteerDataGetResponse.data);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function loadOrgData() {
      return _ref4.apply(this, arguments);
    };
  }();

  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(loadOrgData, []);

  var deleteVolunteerByIndex = /*#__PURE__*/function () {
    var _ref5 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(event, index) {
      var postResponse;
      return C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              event.preventDefault();
              _context4.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a["delete"]("http://localhost:3001/data/deleteVolunt/".concat(volunteerData[index].Id));

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

    return function deleteVolunteerByIndex(_x3, _x4) {
      return _ref5.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Headers_EnterpriseHeader_js__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
      className: "mt--7",
      fluid: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
            className: "shadow",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardHeader"], {
              className: "border-0",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "mb-3",
                children: "Volunteers"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                color: "warning",
                onClick: function onClick() {
                  return setModalFormOpen(true);
                },
                type: "button",
                children: "Add Volunteer"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
                isOpen: modalFormOpen,
                toggle: function toggle() {
                  return setModalFormOpen(false);
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: " modal-body p-0",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
                    className: " bg-secondary shadow border-0",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardHeader"], {
                      className: " bg-white pb-5",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "text-center",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                          children: "Add Volunteer Details"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 116,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 115,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 114,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
                      className: " px-lg-5 py-lg-5",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
                        role: "form",
                        onSubmit: handleSubmit,
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
                          className: " mb-3",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
                            className: " input-group-alternative",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
                              addonType: "prepend",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], {
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: " ni ni-circle-08"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 127,
                                  columnNumber: 35
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 126,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 125,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
                              placeholder: "Name",
                              type: "text"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 130,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 124,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 123,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
                            className: " input-group-alternative",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
                              addonType: "prepend",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], {
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: " ni ni-mobile-button"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 137,
                                  columnNumber: 35
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 136,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 135,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
                              placeholder: "Phone Number",
                              type: "tel"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 140,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 134,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 133,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                            className: " form-control-label",
                            htmlFor: "example-date-input",
                            children: "Date of Birth"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 144,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
                            id: "example-date-input",
                            type: "date"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 147,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 143,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
                          className: " mb-3",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
                            className: " input-group-alternative",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
                              addonType: "prepend",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], {
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: " ni ni-square-pin"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 157,
                                  columnNumber: 35
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 156,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 155,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
                              placeholder: "Address",
                              type: "text"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 160,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 154,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 153,
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
                            lineNumber: 164,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                            className: " custom-file-label",
                            htmlFor: "customFileLang",
                            children: "File If Any"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 170,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 163,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: " text-center",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                            className: " my-4",
                            color: "warning",
                            type: "submit",
                            children: "ADD"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 175,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 174,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 122,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 120,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Table"], {
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
                    lineNumber: 188,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "Age"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "Cases Solved"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 191,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "Details"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 192,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "Control"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 193,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 194,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                children: volunteerData && volunteerData.map(function (volunteer, idx) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: volunteer.Id
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 200,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: volunteer.Name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 201,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: new Date().getYear() - new Date(volunteer.DOB).getYear()
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 202,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: volunteer.Address
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 203,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                        outline: true,
                        onClick: function onClick() {
                          return setModalShowOpen(true);
                        },
                        color: "primary",
                        type: "button",
                        children: "Show Details"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 208,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
                        isOpen: modalShowOpen,
                        toggle: function toggle() {
                          return setModalShowOpen(false);
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: " modal-body p-0",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
                            className: " bg-secondary shadow border-0",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardHeader"], {
                              className: " bg-white pb-5",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "text-center",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                                  children: "Volunteer Details"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 218,
                                  columnNumber: 35
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 217,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 216,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
                              className: " px-lg-5 py-lg-5",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
                                role: "form",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
                                  className: " mb-3",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
                                    className: " input-group-alternative",
                                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
                                      addonType: "prepend",
                                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], {
                                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                          className: " ni ni-circle-08"
                                        }, void 0, false, {
                                          fileName: _jsxFileName,
                                          lineNumber: 229,
                                          columnNumber: 43
                                        }, _this)
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 228,
                                        columnNumber: 41
                                      }, _this)
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 227,
                                      columnNumber: 39
                                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
                                      placeholder: volunteer.Name,
                                      type: "text"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 232,
                                      columnNumber: 39
                                    }, _this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 226,
                                    columnNumber: 37
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 225,
                                  columnNumber: 35
                                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
                                    className: " input-group-alternative",
                                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
                                      addonType: "prepend",
                                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], {
                                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                          className: " ni ni-mobile-button"
                                        }, void 0, false, {
                                          fileName: _jsxFileName,
                                          lineNumber: 240,
                                          columnNumber: 43
                                        }, _this)
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 239,
                                        columnNumber: 41
                                      }, _this)
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 238,
                                      columnNumber: 39
                                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
                                      placeholder: volunteer.phoneNumber,
                                      type: "tel"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 243,
                                      columnNumber: 39
                                    }, _this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 237,
                                    columnNumber: 37
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 236,
                                  columnNumber: 35
                                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
                                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                                    className: " form-control-label",
                                    htmlFor: "example-date-input",
                                    children: "Date of Birth"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 248,
                                    columnNumber: 37
                                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
                                    id: "example-date-input",
                                    placeholder: volunteer.DOB,
                                    type: "date"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 251,
                                    columnNumber: 37
                                  }, _this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 247,
                                  columnNumber: 35
                                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
                                  className: " mb-3",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
                                    className: " input-group-alternative",
                                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
                                      addonType: "prepend",
                                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], {
                                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                          className: " ni ni-square-pin"
                                        }, void 0, false, {
                                          fileName: _jsxFileName,
                                          lineNumber: 262,
                                          columnNumber: 43
                                        }, _this)
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 261,
                                        columnNumber: 41
                                      }, _this)
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 260,
                                      columnNumber: 39
                                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
                                      placeholder: volunteer.Address,
                                      type: "text"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 265,
                                      columnNumber: 39
                                    }, _this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 259,
                                    columnNumber: 37
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 258,
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
                                    lineNumber: 271,
                                    columnNumber: 37
                                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                                    className: " custom-file-label",
                                    htmlFor: "customFileLang",
                                    children: "File If Any"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 277,
                                    columnNumber: 37
                                  }, _this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 270,
                                  columnNumber: 35
                                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: " text-center"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 281,
                                  columnNumber: 35
                                }, _this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 224,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 222,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 215,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 214,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 213,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 204,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                        outline: true,
                        onClick: function onClick() {
                          return setModalUpdateOpen(true);
                        },
                        color: "success",
                        type: "button",
                        children: "Update Details"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 292,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
                        isOpen: modalUpdateOpen,
                        toggle: function toggle() {
                          return setModalUpdateOpen(false);
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: " modal-body p-0",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
                            className: " bg-secondary shadow border-0",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardHeader"], {
                              className: " bg-white pb-5",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "text-center",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                                  children: "Update Volunteer Details"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 302,
                                  columnNumber: 35
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 301,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 300,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
                              className: " px-lg-5 py-lg-5",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
                                role: "form",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
                                  className: " mb-3",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
                                    className: " input-group-alternative",
                                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
                                      addonType: "prepend",
                                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], {
                                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                          className: " ni ni-circle-08"
                                        }, void 0, false, {
                                          fileName: _jsxFileName,
                                          lineNumber: 313,
                                          columnNumber: 43
                                        }, _this)
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 312,
                                        columnNumber: 41
                                      }, _this)
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 311,
                                      columnNumber: 39
                                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
                                      placeholder: "Name",
                                      type: "text"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 316,
                                      columnNumber: 39
                                    }, _this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 310,
                                    columnNumber: 37
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 309,
                                  columnNumber: 35
                                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
                                    className: " input-group-alternative",
                                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
                                      addonType: "prepend",
                                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], {
                                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                          className: " ni ni-mobile-button"
                                        }, void 0, false, {
                                          fileName: _jsxFileName,
                                          lineNumber: 323,
                                          columnNumber: 43
                                        }, _this)
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 322,
                                        columnNumber: 41
                                      }, _this)
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 321,
                                      columnNumber: 39
                                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
                                      placeholder: "Phone Number",
                                      type: "tel"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 326,
                                      columnNumber: 39
                                    }, _this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 320,
                                    columnNumber: 37
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 319,
                                  columnNumber: 35
                                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
                                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                                    className: " form-control-label",
                                    htmlFor: "example-date-input",
                                    children: "Date of Birth"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 330,
                                    columnNumber: 37
                                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
                                    id: "example-date-input",
                                    type: "date"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 333,
                                    columnNumber: 37
                                  }, _this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 329,
                                  columnNumber: 35
                                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
                                  className: " mb-3",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
                                    className: " input-group-alternative",
                                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
                                      addonType: "prepend",
                                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], {
                                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                          className: " ni ni-square-pin"
                                        }, void 0, false, {
                                          fileName: _jsxFileName,
                                          lineNumber: 343,
                                          columnNumber: 43
                                        }, _this)
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 342,
                                        columnNumber: 41
                                      }, _this)
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 341,
                                      columnNumber: 39
                                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
                                      placeholder: "Address",
                                      type: "text"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 346,
                                      columnNumber: 39
                                    }, _this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 340,
                                    columnNumber: 37
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 339,
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
                                    lineNumber: 350,
                                    columnNumber: 37
                                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                                    className: " custom-file-label",
                                    htmlFor: "customFileLang",
                                    children: "File If Any"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 356,
                                    columnNumber: 37
                                  }, _this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 349,
                                  columnNumber: 35
                                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: " text-center",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                                    className: " my-4",
                                    color: "warning",
                                    type: "button",
                                    children: "Update"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 361,
                                    columnNumber: 37
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 360,
                                  columnNumber: 35
                                }, _this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 308,
                                columnNumber: 33
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 306,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 299,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 298,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 297,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 290,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                        outline: true,
                        color: "danger",
                        type: "submit",
                        onClick: function onClick(event) {
                          deleteVolunteerByIndex(event, idx);
                        },
                        children: "Remove"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 376,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 375,
                      columnNumber: 23
                    }, _this)]
                  }, volunteer.Id, true, {
                    fileName: _jsxFileName,
                    lineNumber: 199,
                    columnNumber: 21
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Organizations, "w64JP426OSARpsl6Yxpr0qskuCg=");

_c = Organizations;
Organizations.layout = layouts_Enterprise_js__WEBPACK_IMPORTED_MODULE_9__["default"];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW50ZXJwcmlzZS92b2x1bnRlZXJzLmpzIl0sIm5hbWVzIjpbIk9yZ2FuaXphdGlvbnMiLCJzYW0iLCJSZWFjdCIsInVzZVN0YXRlIiwibW9kYWxEZWZhdWx0T3BlbiIsInNldE1vZGFsRGVmYXVsdE9wZW4iLCJtb2RhbEZvcm1PcGVuIiwic2V0TW9kYWxGb3JtT3BlbiIsIm1vZGFsVXBkYXRlT3BlbiIsInNldE1vZGFsVXBkYXRlT3BlbiIsIm1vZGFsU2hvd09wZW4iLCJzZXRNb2RhbFNob3dPcGVuIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJvcmciLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHJldmVudERlZmF1bHQiLCJwb3N0RGF0YSIsIk9yZ2FuaXphdGlvbk5hbWUiLCJOYW1lb2ZPcmciLCJOYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJwaG9uZU51bWJlciIsIkRPQiIsIkFkZHJlc3MiLCJheGlvcyIsInBvc3QiLCJwb3N0UmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInVwZGF0ZVZvbCIsInBhdGNoIiwidW5kZWZpbmVkIiwidm9sdW50ZWVyRGF0YSIsInNldFZvbHVudGVlckRhdGEiLCJsb2FkT3JnRGF0YSIsImdldCIsInZvbHVudGVlckRhdGFHZXRSZXNwb25zZSIsInVzZUVmZmVjdCIsImRlbGV0ZVZvbHVudGVlckJ5SW5kZXgiLCJpbmRleCIsIklkIiwibWFwIiwidm9sdW50ZWVyIiwiaWR4IiwiRGF0ZSIsImdldFllYXIiLCJsYXlvdXQiLCJFbnRlcnByaXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0NBNEJBOztDQUVBOztBQUNBOztBQUdBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBYTtBQUFBOztBQUFBLE1BQVZDLEdBQVUsUUFBVkEs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QUFBQTtBQUFBO0FBQUEsNkJBM0ZGLGVBZ0xFO0FBQUEsNkNBQ0UscUVBQUMsaURBQUQ7QUFBUSwrQkFBTyxNQUFmO0FBQWdCLDZCQUFLLEVBQUMsUUFBdEI7QUFBK0IsNEJBQUksRUFBQyxRQUFwQztBQUNBLCtCQUFPLEVBQUUsaUJBQUNJLEtBQUQsRUFBVztBQUFDK0IsZ0RBQXNCLENBQUMvQixLQUFELEVBQVFvQyxHQUFSLENBQXRCO0FBQW1DLHlCQUR4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBaExGO0FBQUEscUJBQVNELFNBQVMsQ0FBQ0YsRUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEa0M7QUFBQSxpQkFBbEI7QUFEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBcEZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUEsa0JBREY7QUErU0QsQ0FsV0Q7O0dBQU05QyxhOztLQUFBQSxhO0FBb1dOQSxhQUFhLENBQUNvRCxNQUFkLEdBQXVCQyw2REFBdkI7QUFFZXJELDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VudGVycHJpc2Uvdm9sdW50ZWVycy4yZDAzZjRmMjBkY2FiN2U0NzJmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBEYXRhIGZyb20gXCJ2YXJpYWJsZXMvdmFyaWFibGUuanNcIjtcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbi8vIHJlYWN0c3RyYXAgY29tcG9uZW50c1xyXG5pbXBvcnQge1xyXG4gIEJhZGdlLFxyXG4gIENhcmQsXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDYXJkRm9vdGVyLFxyXG4gIENhcmRCb2R5LFxyXG4gIERyb3Bkb3duTWVudSxcclxuICBEcm9wZG93bkl0ZW0sXHJcbiAgVW5jb250cm9sbGVkRHJvcGRvd24sXHJcbiAgRHJvcGRvd25Ub2dnbGUsXHJcbiAgRm9ybUdyb3VwLFxyXG4gIEZvcm0sXHJcbiAgSW5wdXQsXHJcbiAgSW5wdXRHcm91cEFkZG9uLFxyXG4gIElucHV0R3JvdXBUZXh0LFxyXG4gIElucHV0R3JvdXAsXHJcbiAgTWVkaWEsXHJcbiAgUGFnaW5hdGlvbixcclxuICBQYWdpbmF0aW9uSXRlbSxcclxuICBQYWdpbmF0aW9uTGluayxcclxuICBQcm9ncmVzcyxcclxuICBUYWJsZSxcclxuICBDb250YWluZXIsXHJcbiAgUm93LFxyXG4gIE1vZGFsLFxyXG4gIFVuY29udHJvbGxlZFRvb2x0aXAsXHJcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuLy8gbGF5b3V0IGZvciB0aGlzIHBhZ2VcclxuaW1wb3J0IEVudGVycHJpc2UgZnJvbSBcImxheW91dHMvRW50ZXJwcmlzZS5qc1wiO1xyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9IZWFkZXJzL0VudGVycHJpc2VIZWFkZXIuanNcIjtcclxuXHJcblxyXG5jb25zdCBPcmdhbml6YXRpb25zID0gKHsgc2FtIH0pID0+IHtcclxuICBjb25zdCBbbW9kYWxEZWZhdWx0T3Blbiwgc2V0TW9kYWxEZWZhdWx0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21vZGFsRm9ybU9wZW4sIHNldE1vZGFsRm9ybU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb2RhbFVwZGF0ZU9wZW4sIHNldE1vZGFsVXBkYXRlT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21vZGFsU2hvd09wZW4sIHNldE1vZGFsU2hvd09wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIHZhciBvcmcgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidmgtb3JnXCIpKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIGNvbnN0IHBvc3REYXRhID0ge1xyXG4gICAgICBPcmdhbml6YXRpb25OYW1lOiBvcmcuTmFtZW9mT3JnLFxyXG4gICAgICBOYW1lOiBldmVudC50YXJnZXRbMF0udmFsdWUsXHJcbiAgICAgIHBob25lTnVtYmVyOiBldmVudC50YXJnZXRbMV0udmFsdWUsXHJcbiAgICAgIERPQjogZXZlbnQudGFyZ2V0WzJdLnZhbHVlLFxyXG4gICAgICBBZGRyZXNzOiBldmVudC50YXJnZXRbM10udmFsdWUsXHJcbiAgICB9XHJcbiAgICBjb25zdCBwb3N0UmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2RhdGEvZW50ZXJwcmlzZS9vcmd2b2x1bnRcIiwgcG9zdERhdGEpO1xyXG4gICAgY29uc29sZS5sb2cocG9zdFJlc3BvbnNlLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdXBkYXRlVm9sID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICBjb25zdCBwb3N0RGF0YSA9IHtcclxuICAgICAgT3JnYW5pemF0aW9uTmFtZTogb3JnLk5hbWVvZk9yZyxcclxuICAgICAgTmFtZTogZXZlbnQudGFyZ2V0WzBdLnZhbHVlLFxyXG4gICAgICBwaG9uZU51bWJlcjogZXZlbnQudGFyZ2V0WzFdLnZhbHVlLFxyXG4gICAgICBET0I6IGV2ZW50LnRhcmdldFsyXS52YWx1ZSxcclxuICAgICAgQWRkcmVzczogZXZlbnQudGFyZ2V0WzNdLnZhbHVlLFxyXG4gICAgfVxyXG4gICAgY29uc3QgcG9zdFJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9kYXRhLy91cGRhdGVWb2x1bnQvJHszfWAsIHBvc3REYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKHBvc3RSZXNwb25zZS5kYXRhKTtcclxuICB9XHJcblxyXG4gIFxyXG4gIGNvbnN0IFt2b2x1bnRlZXJEYXRhLCBzZXRWb2x1bnRlZXJEYXRhXSA9IFJlYWN0LnVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgbG9hZE9yZ0RhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB2YXIgb3JnID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInZoLW9yZ1wiKSk7XHJcbiAgICBjb25zdCB2b2x1bnRlZXJEYXRhR2V0UmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9kYXRhL29yZ3ZvbHVudC8ke29yZy5OYW1lb2ZPcmd9YCk7XHJcbiAgICBzZXRWb2x1bnRlZXJEYXRhKHZvbHVudGVlckRhdGFHZXRSZXNwb25zZS5kYXRhKTtcclxuICB9XHJcbiAgUmVhY3QudXNlRWZmZWN0KGxvYWRPcmdEYXRhLCBbXSk7XHJcbiAgXHJcbiAgY29uc3QgZGVsZXRlVm9sdW50ZWVyQnlJbmRleCA9IGFzeW5jIChldmVudCwgaW5kZXgpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBwb3N0UmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9kYXRhL2RlbGV0ZVZvbHVudC8ke3ZvbHVudGVlckRhdGFbaW5kZXhdLklkfWApO1xyXG4gICAgLy8gY29uc29sZS5sb2cocG9zdFJlc3BvbnNlLmRhdGEpO1xyXG4gICAgYXdhaXQgbG9hZE9yZ0RhdGEoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIHsvKiBQYWdlIGNvbnRlbnQgKi99XHJcbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwibXQtLTdcIiBmbHVpZD5cclxuICAgICAgICB7LyogVGFibGUgKi99XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInNoYWRvd1wiPlxyXG4gICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cImJvcmRlci0wXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItM1wiPlZvbHVudGVlcnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cIndhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbEZvcm1PcGVuKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQWRkIFZvbHVudGVlclxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgaXNPcGVuPXttb2RhbEZvcm1PcGVufSB0b2dnbGU9eygpID0+IHNldE1vZGFsRm9ybU9wZW4oZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbW9kYWwtYm9keSBwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCIgYmctc2Vjb25kYXJ5IHNoYWRvdyBib3JkZXItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwiIGJnLXdoaXRlIHBiLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5BZGQgVm9sdW50ZWVyIERldGFpbHM8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwiIHB4LWxnLTUgcHktbGctNVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gcm9sZT1cImZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIiBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9XCIgaW5wdXQtZ3JvdXAtYWx0ZXJuYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXBBZGRvbiBhZGRvblR5cGU9XCJwcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXBUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLWNpcmNsZS0wOFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXBUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXBBZGRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiTmFtZVwiIHR5cGU9XCJ0ZXh0XCI+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwiIGlucHV0LWdyb3VwLWFsdGVybmF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwQWRkb24gYWRkb25UeXBlPVwicHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1tb2JpbGUtYnV0dG9uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cEFkZG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJQaG9uZSBOdW1iZXJcIiB0eXBlPVwidGVsXCI+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIiBmb3JtLWNvbnRyb2wtbGFiZWxcIiBodG1sRm9yPVwiZXhhbXBsZS1kYXRlLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGUgb2YgQmlydGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZS1kYXRlLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCIgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwiIGlucHV0LWdyb3VwLWFsdGVybmF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwQWRkb24gYWRkb25UeXBlPVwicHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1zcXVhcmUtcGluXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cEFkZG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJBZGRyZXNzXCIgdHlwZT1cInRleHRcIj48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGN1c3RvbS1maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGN1c3RvbS1maWxlLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjdXN0b21GaWxlTGFuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9XCJlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIiBjdXN0b20tZmlsZS1sYWJlbFwiIGh0bWxGb3I9XCJjdXN0b21GaWxlTGFuZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWxlIElmIEFueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCIgbXktNFwiIGNvbG9yPVwid2FybmluZ1wiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQUREXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlciB0YWJsZS1mbHVzaFwiIHJlc3BvbnNpdmU+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwidGhlYWQtbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPklkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5OYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5BZ2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkNhc2VzIFNvbHZlZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+RGV0YWlsczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Q29udHJvbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIHt2b2x1bnRlZXJEYXRhICYmIHZvbHVudGVlckRhdGEubWFwKCh2b2x1bnRlZXIsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3ZvbHVudGVlci5JZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgPnt2b2x1bnRlZXIuSWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+e3ZvbHVudGVlci5OYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgPntuZXcgRGF0ZSgpLmdldFllYXIoKSAtIG5ldyBEYXRlKHZvbHVudGVlci5ET0IpLmdldFllYXIoKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkID57dm9sdW50ZWVyLkFkZHJlc3N9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvdXRsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kYWxTaG93T3Blbih0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvdyBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwgaXNPcGVuPXttb2RhbFNob3dPcGVufSB0b2dnbGU9eygpID0+IHNldE1vZGFsU2hvd09wZW4oZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtb2RhbC1ib2R5IHAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiIGJnLXNlY29uZGFyeSBzaGFkb3cgYm9yZGVyLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwiIGJnLXdoaXRlIHBiLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+Vm9sdW50ZWVyIERldGFpbHM8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwiIHB4LWxnLTUgcHktbGctNVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSByb2xlPVwiZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCIgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9XCIgaW5wdXQtZ3JvdXAtYWx0ZXJuYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cEFkZG9uIGFkZG9uVHlwZT1cInByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLWNpcmNsZS0wOFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwQWRkb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPXt2b2x1bnRlZXIuTmFtZX0gdHlwZT1cInRleHRcIj48L0lucHV0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9XCIgaW5wdXQtZ3JvdXAtYWx0ZXJuYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cEFkZG9uIGFkZG9uVHlwZT1cInByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLW1vYmlsZS1idXR0b25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXBUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cEFkZG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj17dm9sdW50ZWVyLnBob25lTnVtYmVyfSB0eXBlPVwidGVsXCI+PC9JbnB1dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIiBmb3JtLWNvbnRyb2wtbGFiZWxcIiBodG1sRm9yPVwiZXhhbXBsZS1kYXRlLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZSBvZiBCaXJ0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlLWRhdGUtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt2b2x1bnRlZXIuRE9CfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwiIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwiIGlucHV0LWdyb3VwLWFsdGVybmF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXBBZGRvbiBhZGRvblR5cGU9XCJwcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIiBuaSBuaS1zcXVhcmUtcGluXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXBBZGRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9e3ZvbHVudGVlci5BZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGN1c3RvbS1maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBjdXN0b20tZmlsZS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjdXN0b21GaWxlTGFuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz1cImVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiIGN1c3RvbS1maWxlLWxhYmVsXCIgaHRtbEZvcj1cImN1c3RvbUZpbGVMYW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZSBJZiBBbnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC1jZW50ZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvdXRsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kYWxVcGRhdGVPcGVuKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGUgRGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsIGlzT3Blbj17bW9kYWxVcGRhdGVPcGVufSB0b2dnbGU9eygpID0+IHNldE1vZGFsVXBkYXRlT3BlbihmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1vZGFsLWJvZHkgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCIgYmctc2Vjb25kYXJ5IHNoYWRvdyBib3JkZXItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCIgYmctd2hpdGUgcGItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5VcGRhdGUgVm9sdW50ZWVyIERldGFpbHM8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwiIHB4LWxnLTUgcHktbGctNVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSByb2xlPVwiZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCIgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9XCIgaW5wdXQtZ3JvdXAtYWx0ZXJuYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cEFkZG9uIGFkZG9uVHlwZT1cInByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLWNpcmNsZS0wOFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwQWRkb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiTmFtZVwiIHR5cGU9XCJ0ZXh0XCI+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9XCIgaW5wdXQtZ3JvdXAtYWx0ZXJuYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cEFkZG9uIGFkZG9uVHlwZT1cInByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG5pIG5pLW1vYmlsZS1idXR0b25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXBUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cEFkZG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlBob25lIE51bWJlclwiIHR5cGU9XCJ0ZWxcIj48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCIgZm9ybS1jb250cm9sLWxhYmVsXCIgaHRtbEZvcj1cImV4YW1wbGUtZGF0ZS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGUgb2YgQmlydGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZS1kYXRlLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIiBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIiBpbnB1dC1ncm91cC1hbHRlcm5hdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwQWRkb24gYWRkb25UeXBlPVwicHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXBUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgbmkgbmktc3F1YXJlLXBpblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwQWRkb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiQWRkcmVzc1wiIHR5cGU9XCJ0ZXh0XCI+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjdXN0b20tZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgY3VzdG9tLWZpbGUtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY3VzdG9tRmlsZUxhbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9XCJlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIiBjdXN0b20tZmlsZS1sYWJlbFwiIGh0bWxGb3I9XCJjdXN0b21GaWxlTGFuZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGUgSWYgQW55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiIG15LTRcIiBjb2xvcj1cIndhcm5pbmdcIiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb3V0bGluZSBjb2xvcj1cImRhbmdlclwiIHR5cGU9XCJzdWJtaXRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7ZGVsZXRlVm9sdW50ZWVyQnlJbmRleChldmVudCwgaWR4KX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZT5cclxuXHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIHsvKiBEYXJrIHRhYmxlICovfVxyXG5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5Pcmdhbml6YXRpb25zLmxheW91dCA9IEVudGVycHJpc2U7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmdhbml6YXRpb25zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9