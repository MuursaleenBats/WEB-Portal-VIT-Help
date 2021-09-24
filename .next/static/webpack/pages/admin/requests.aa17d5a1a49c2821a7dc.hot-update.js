webpackHotUpdate_N_E("pages/admin/requests",{

/***/ "./pages/admin/requests.js":
/*!*********************************!*\
  !*** ./pages/admin/requests.js ***!
  \*********************************/
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
/* harmony import */ var layouts_Admin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! layouts/Admin.js */ "./layouts/Admin.js");
/* harmony import */ var components_Headers_Header_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Headers/Header.js */ "./components/Headers/Header.js");






var _jsxFileName = "C:\\Users\\Saad\\Desktop\\WebPortal\\WEB-Portal-VIT-Help\\pages\\admin\\requests.js",
    _this = undefined,
    _s = $RefreshSig$();







axios__WEBPACK_IMPORTED_MODULE_8___default.a.defaults.withCredentials = true; // reactstrap components

 // layout for this page

 // core components




var Requests = function Requests() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState2 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      modalDefaultOpen = _React$useState2[0],
      setModalDefaultOpen = _React$useState2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      countryCode = _useState[0],
      setCountryCode = _useState[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(undefined),
      _React$useState4 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      orgData = _React$useState4[0],
      setOrgData = _React$useState4[1];

  var loadOrgData = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var orgDataGetResponse;
      return C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("http://localhost:3001/data/orgData");

            case 2:
              orgDataGetResponse = _context.sent;
              setOrgData(orgDataGetResponse.data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loadOrgData() {
      return _ref.apply(this, arguments);
    };
  }();

  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(loadOrgData, []);

  var updateStatus = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(event, idx) {
      var postData, postResponse;
      return C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault(); //console.log(event);

              postData = {
                Status: "True"
              };
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.patch("http://localhost:3001/data/updateOrgStatus/".concat(orgData[idx].Id), postData);

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

    return function updateStatus(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var deleteOrgByIndex = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(event, index) {
      var postResponse;
      return C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              event.preventDefault();
              _context3.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a["delete"]("http://localhost:3001/data/deleteOrg/".concat(orgData[index].Id));

            case 3:
              postResponse = _context3.sent;
              _context3.next = 6;
              return loadOrgData();

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function deleteOrgByIndex(_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Headers_Header_js__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
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
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "mb-0",
                children: "Requests"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
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
                    lineNumber: 82,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "Name Of Organizations"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "Type"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "Control"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                children: orgData && orgData.map(function (orgdata, idx) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: orgdata.Id
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 92,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: orgdata.NameofOrg
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: "ORG TYPE"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 94,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: "0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 95,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                        outline: true,
                        onClick: function onClick() {
                          return setModalDefaultOpen(true);
                        },
                        color: "primary",
                        type: "button",
                        children: "Show Details"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 98,
                        columnNumber: 21
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
                        isOpen: modalDefaultOpen,
                        toggle: function toggle() {
                          return setModalDefaultOpen(false);
                        },
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: " modal-header",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                            className: " modal-title",
                            id: "modal-title-default",
                            children: orgData.NameofOrg
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 108,
                            columnNumber: 23
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                            "aria-label": "Close",
                            className: " close",
                            onClick: function onClick() {
                              return setModalDefaultOpen(false);
                            },
                            type: "button",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              "aria-hidden": true,
                              children: "\xD7"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 117,
                              columnNumber: 25
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 111,
                            columnNumber: 23
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 107,
                          columnNumber: 21
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: " modal-body",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 121,
                            columnNumber: 23
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                            children: ["Id: ", orgdata.Id, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 125,
                              columnNumber: 39
                            }, _this), "Name: ", orgdata.NameofOrg, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 126,
                              columnNumber: 48
                            }, _this), "Email: ", orgdata.Email, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 127,
                              columnNumber: 45
                            }, _this), "Phone Number: ", orgdata.phoneNumber, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 128,
                              columnNumber: 58
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 124,
                            columnNumber: 23
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 120,
                          columnNumber: 21
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: " modal-footer",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                            color: "primary",
                            type: "button",
                            children: "Document"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 133,
                            columnNumber: 23
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                            className: " ml-auto",
                            color: "link",
                            onClick: function onClick() {
                              return setModalDefaultOpen(false);
                            },
                            type: "button",
                            children: "Close"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 136,
                            columnNumber: 23
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 132,
                          columnNumber: 21
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 103,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 96,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                        outline: true,
                        color: "success",
                        type: "submit",
                        onClick: function onClick(event) {
                          return updateStatus(event, idx);
                        },
                        children: "Accept"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 151,
                        columnNumber: 21
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 150,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                        outline: true,
                        color: "danger",
                        type: "submit",
                        onClick: function onClick(event) {
                          deleteOrgByIndex(event, idx);
                        },
                        children: "Reject"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 158,
                        columnNumber: 21
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 157,
                      columnNumber: 21
                    }, _this)]
                  }, orgdata.Id, true, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 21
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Requests, "RXdAo9pzAlgdJ423j4NNw28oWLw=");

_c = Requests;
Requests.layout = layouts_Admin_js__WEBPACK_IMPORTED_MODULE_9__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Requests);

var _c;

$RefreshReg$(_c, "Requests");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcmVxdWVzdHMuanMiXSwibmFtZXMiOlsiQXhpb3MiLCJkZWZhdWx0cyIsIndpdGhDcmVkZW50aWFscyIsIlJlcXVlc3RzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vZGFsRGVmYXVsdE9wZW4iLCJzZXRNb2RhbERlZmF1bHRPcGVuIiwiY291bnRyeUNvZGUiLCJzZXRDb3VudHJ5Q29kZSIsInVuZGVmaW5lZCIsIm9yZ0RhdGEiLCJzZXRPcmdEYXRhIiwibG9hZE9yZ0RhdGEiLCJheGlvcyIsImdldCIsIm9yZ0RhdGFHZXRSZXNwb25zZSIsImRhdGEiLCJ1c2VFZmZlY3QiLCJ1cGRhdGVTdGF0dXMiLCJldmVudCIsImlkeCIsInByZXZlbnREZWZhdWx0IiwicG9zdERhdGEiLCJTdGF0dXMiLCJwYXRjaCIsIklkIiwicG9zdFJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZU9yZ0J5SW5kZXgiLCJpbmRleCIsIm1hcCIsIm9yZ2RhdGEiLCJOYW1lb2ZPcmciLCJFbWFpbCIsInBob25lTnVtYmVyIiwibGF5b3V0IiwiQWRtaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0FBLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsZUFBZixHQUFpQyxJQUFqQyxDLENBR0E7O0NBcUJBOztDQUVBOztBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLHdCQUMyQkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FEM0I7QUFBQTtBQUFBLE1BQ2RDLGdCQURjO0FBQUEsTUFDSUMsbUJBREo7O0FBQUEsa0JBRWVGLHNEQUFRLENBQUMsRUFBRCxDQUZ2QjtBQUFBLE1BRWhCRyxXQUZnQjtBQUFBLE1BRUhDLGNBRkc7O0FBQUEseUJBSU9MLDRDQUFLLENB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dC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IERhdGEgZnJvbSBcInZhcmlhYmxlcy92YXJpYWJsZS5qc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbkF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG5cclxuLy8gcmVhY3RzdHJhcCBjb21wb25lbnRzXHJcbmltcG9ydCB7XHJcbiAgQmFkZ2UsXHJcbiAgQ2FyZCxcclxuICBDYXJkSGVhZGVyLFxyXG4gIENhcmRGb290ZXIsXHJcbiAgRHJvcGRvd25NZW51LFxyXG4gIERyb3Bkb3duSXRlbSxcclxuICBVbmNvbnRyb2xsZWREcm9wZG93bixcclxuICBEcm9wZG93blRvZ2dsZSxcclxuICBNZWRpYSxcclxuICBQYWdpbmF0aW9uLFxyXG4gIFBhZ2luYXRpb25JdGVtLFxyXG4gIFBhZ2luYXRpb25MaW5rLFxyXG4gIFByb2dyZXNzLFxyXG4gIFRhYmxlLFxyXG4gIENvbnRhaW5lcixcclxuICBSb3csXHJcbiAgTW9kYWwsXHJcbiAgVW5jb250cm9sbGVkVG9vbHRpcCxcclxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG4vLyBsYXlvdXQgZm9yIHRoaXMgcGFnZVxyXG5pbXBvcnQgQWRtaW4gZnJvbSBcImxheW91dHMvQWRtaW4uanNcIjtcclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvSGVhZGVycy9IZWFkZXIuanNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgUmVxdWVzdHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21vZGFsRGVmYXVsdE9wZW4sIHNldE1vZGFsRGVmYXVsdE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5jb25zdCBbY291bnRyeUNvZGUsIHNldENvdW50cnlDb2RlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuY29uc3QgW29yZ0RhdGEsIHNldE9yZ0RhdGFdID0gUmVhY3QudXNlU3RhdGUodW5kZWZpbmVkKTtcclxuY29uc3QgbG9hZE9yZ0RhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3Qgb3JnRGF0YUdldFJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2RhdGEvb3JnRGF0YVwiKTtcclxuICBzZXRPcmdEYXRhKG9yZ0RhdGFHZXRSZXNwb25zZS5kYXRhKTtcclxufVxyXG5cclxuUmVhY3QudXNlRWZmZWN0KGxvYWRPcmdEYXRhLCBbXSk7XHJcblxyXG5jb25zdCB1cGRhdGVTdGF0dXMgPSBhc3luYyAoZXZlbnQsIGlkeCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgLy9jb25zb2xlLmxvZyhldmVudCk7XHJcbiAgY29uc3QgcG9zdERhdGEgPSB7XHJcbiAgICBTdGF0dXM6IFwiVHJ1ZVwiXHJcbiAgfVxyXG4gIGNvbnN0IHBvc3RSZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBhdGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvZGF0YS91cGRhdGVPcmdTdGF0dXMvJHtvcmdEYXRhW2lkeF0uSWR9YCwgcG9zdERhdGEpO1xyXG4gIGNvbnNvbGUubG9nKHBvc3RSZXNwb25zZS5kYXRhKTtcclxufVxyXG5cclxuY29uc3QgZGVsZXRlT3JnQnlJbmRleCA9IGFzeW5jIChldmVudCwgaW5kZXgpID0+e1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgcG9zdFJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvZGF0YS9kZWxldGVPcmcvJHtvcmdEYXRhW2luZGV4XS5JZH1gKTtcclxuICAvLyBjb25zb2xlLmxvZyhwb3N0UmVzcG9uc2UuZGF0YSk7XHJcbiAgYXdhaXQgbG9hZE9yZ0RhdGEoKTtcclxufVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIHsvKiBQYWdlIGNvbnRlbnQgKi99XHJcbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwibXQtLTdcIiBmbHVpZD5cclxuICAgICAgICB7LyogVGFibGUgKi99XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInNoYWRvd1wiPlxyXG4gICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cImJvcmRlci0wXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMFwiPlJlcXVlc3RzPC9oMz5cclxuICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlciB0YWJsZS1mbHVzaFwiIHJlc3BvbnNpdmU+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwidGhlYWQtbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPklkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5OYW1lIE9mIE9yZ2FuaXphdGlvbnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlR5cGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkNvbnRyb2w8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge29yZ0RhdGEgJiYgb3JnRGF0YS5tYXAoKG9yZ2RhdGEsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e29yZ2RhdGEuSWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCA+e29yZ2RhdGEuSWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgPntvcmdkYXRhLk5hbWVvZk9yZ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCA+e1wiT1JHIFRZUEVcIn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCA+e1wiMFwifTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmVcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbERlZmF1bHRPcGVuKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3cgRGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIGlzT3Blbj17bW9kYWxEZWZhdWx0T3Blbn1cclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGU9eygpID0+IHNldE1vZGFsRGVmYXVsdE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCIgbW9kYWwtdGl0bGVcIiBpZD1cIm1vZGFsLXRpdGxlLWRlZmF1bHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtvcmdEYXRhLk5hbWVvZk9yZ31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vZGFsRGVmYXVsdE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49e3RydWV9PsOXPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBcXFxcLS0tICBPcmdhbml6YXRpb25zIERldGFpbHMgIC0tLS8vICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBJZDoge29yZ2RhdGEuSWR9PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgIE5hbWU6IHtvcmdkYXRhLk5hbWVvZk9yZ308YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRW1haWw6IHtvcmdkYXRhLkVtYWlsfTxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQaG9uZSBOdW1iZXI6IHtvcmdkYXRhLnBob25lTnVtYmVyfTxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIG1sLWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbERlZmF1bHRPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb3V0bGluZSBjb2xvcj1cInN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB1cGRhdGVTdGF0dXMoZXZlbnQsIGlkeCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgY29sb3I9XCJkYW5nZXJcIiB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtkZWxldGVPcmdCeUluZGV4KGV2ZW50LCBpZHgpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWplY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZT5cclxuXHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIHsvKiBEYXJrIHRhYmxlICovfVxyXG5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5SZXF1ZXN0cy5sYXlvdXQgPSBBZG1pbjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9