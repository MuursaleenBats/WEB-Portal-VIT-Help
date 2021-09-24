webpackHotUpdate_N_E("pages/admin/organizations",{

/***/ "./pages/admin/organizations.js":
/*!**************************************!*\
  !*** ./pages/admin/organizations.js ***!
  \**************************************/
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






var _jsxFileName = "C:\\Users\\Saad\\Desktop\\WebPortal\\WEB-Portal-VIT-Help\\pages\\admin\\organizations.js",
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

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(undefined),
      _React$useState4 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      orgData = _React$useState4[0],
      setOrgData = _React$useState4[1];

  var loadOrgData = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
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
      return _ref2.apply(this, arguments);
    };
  }();

  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(loadOrgData, []);

  var deleteOrgByIndex = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(event, index) {
      var postResponse;
      return C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("http://localhost:3001/data/deleteOrg/".concat(orgData[index].Id));

            case 3:
              postResponse = _context2.sent;
              _context2.next = 6;
              return loadOrgData();

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function deleteOrgByIndex(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }(); // const [orgVoluntcountData, setorgVoluntCountData] = React.useState(undefined);
  // React.useEffect(async () => {
  //   var org = JSON.parse(localStorage.getItem("vh-org"));
  //   const voluntCountDataGetResponse = await axios.get(`http://localhost:3001/data/orgVoluntCount/${org.NameofOrg}`);
  //   setorgVoluntCountData(voluntCountDataGetResponse.data);
  //   console.log(voluntCountDataGetResponse.data);
  // }, []);


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Headers_Header_js__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
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
                children: "Organizations"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
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
                    lineNumber: 77,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "Type"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "No Of Volunteers"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "Details"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "Control"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                children: orgData && orgData.map(function (orgdata, idx) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: orgdata.Id
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 89,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: orgdata.NameofOrg
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 90,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: "ORG TYPE"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 91,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: "0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 92,
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
                        lineNumber: 94,
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
                            lineNumber: 104,
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
                              lineNumber: 113,
                              columnNumber: 25
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 107,
                            columnNumber: 23
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 103,
                          columnNumber: 21
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: " modal-body",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 117,
                            columnNumber: 23
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                            children: ["Id: ", orgdata.Id, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 121,
                              columnNumber: 39
                            }, _this), "Name: ", orgdata.NameofOrg, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 122,
                              columnNumber: 48
                            }, _this), "Email: ", orgdata.Email, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 123,
                              columnNumber: 45
                            }, _this), "Phone Number: ", orgdata.phoneNumber, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 124,
                              columnNumber: 58
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 120,
                            columnNumber: 23
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 116,
                          columnNumber: 21
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: " modal-footer",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                            color: "primary",
                            type: "button",
                            children: "Document"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 129,
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
                            lineNumber: 132,
                            columnNumber: 23
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 128,
                          columnNumber: 21
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 99,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                        outline: true,
                        color: "danger",
                        type: "submit",
                        onClick: function onClick(event) {
                          deleteOrgByIndex(event, idx);
                        },
                        children: "Remove Organization"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 149,
                        columnNumber: 21
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 148,
                      columnNumber: 21
                    }, _this)]
                  }, orgdata.Id, true, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 21
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Organizations, "J0vYQUi4AeqMvKXQlyo0wT8y4+Y=");

_c = Organizations;
Organizations.layout = layouts_Admin_js__WEBPACK_IMPORTED_MODULE_9__["default"];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vb3JnYW5pemF0aW9ucy5qcyJdLCJuYW1lcyI6WyJPcmdhbml6YXRpb25zIiwic2FtIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vZGFsRGVmYXVsdE9wZW4iLCJzZXRNb2RhbERlZmF1bHRPcGVuIiwidW5kZWZpbmVkIiwib3JnRGF0YSIsInNldE9yZ0RhdGEiLCJsb2FkT3JnRGF0YSIsImF4aW9zIiwiZ2V0Iiwib3JnRGF0YUdldFJlc3BvbnNlIiwiZGF0YSIsInVzZUVmZmVjdCIsImRlbGV0ZU9yZ0J5SW5kZXgiLCJldmVudCIsImluZGV4IiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwiSWQiLCJwb3N0UmVzcG9uc2UiLCJtYXAiLCJvcmdkYXRhIiwiaWR4IiwiTmFtZW9mT3JnIiwiRW1haWwiLCJwaG9uZU51bWJlciIsImxheW91dCIsIkFkbWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0NBcUJBOztDQUVBOztBQUNBOztBQUdBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBVztBQUFBOztBQUFBLE1BQVRDLEdBQVMsUUFBVEEsR0FBUzs7QUFBQSx3QkFDaUJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRGpCO0FBQUE7QUFBQSxNQUN4QkMsZ0JBRHdCO0FBQUEsTUFDTkMsbUJBRE07O0FBQUEseUJBR0RILDRDQUFLLENBQUNDLFFBQU4sQ0FBZUcsU0FBZixDQUhDO0FBQUE7QUFBQSxNQUd4QkMsT0FId0I7QUFBQSxNQUdmQyxVQUhlOztBQUsvQixNQUFNQyxXQUFXO0FBQUEsK1RBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDZUMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLG9DQUFWLENBRGY7O0FBQUE7QUFDWkMsZ0NBRFk7QUFFbEJKLHdCQUFVLENBQUNJ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QTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQSxrQkFERjtBQTJHRCxDQXZJRDs7R0FBTXBCLGE7O0tBQUFBLGE7QUF5SU5BLGFBQWEsQ0FBQzRCLE1BQWQsR0FBdUJDLHdEQUF2QjtBQUVlN0IsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vb3JnYW5pemF0aW9ucy42OGJlYmExYTMyYzI2ZGJhYWRkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBEYXRhIGZyb20gXCJ2YXJpYWJsZXMvdmFyaWFibGUuanNcIjtcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuLy8gcmVhY3RzdHJhcCBjb21wb25lbnRzXHJcbmltcG9ydCB7XHJcbiAgQmFkZ2UsXHJcbiAgQ2FyZCxcclxuICBDYXJkSGVhZGVyLFxyXG4gIENhcmRGb290ZXIsXHJcbiAgRHJvcGRvd25NZW51LFxyXG4gIERyb3Bkb3duSXRlbSxcclxuICBVbmNvbnRyb2xsZWREcm9wZG93bixcclxuICBEcm9wZG93blRvZ2dsZSxcclxuICBNZWRpYSxcclxuICBQYWdpbmF0aW9uLFxyXG4gIFBhZ2luYXRpb25JdGVtLFxyXG4gIFBhZ2luYXRpb25MaW5rLFxyXG4gIFByb2dyZXNzLFxyXG4gIFRhYmxlLFxyXG4gIENvbnRhaW5lcixcclxuICBSb3csXHJcbiAgTW9kYWwsXHJcbiAgVW5jb250cm9sbGVkVG9vbHRpcCxcclxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG4vLyBsYXlvdXQgZm9yIHRoaXMgcGFnZVxyXG5pbXBvcnQgQWRtaW4gZnJvbSBcImxheW91dHMvQWRtaW4uanNcIjtcclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvSGVhZGVycy9IZWFkZXIuanNcIjtcclxuXHJcblxyXG5jb25zdCBPcmdhbml6YXRpb25zID0gKHtzYW19KSA9PiB7XHJcbiAgY29uc3QgW21vZGFsRGVmYXVsdE9wZW4sIHNldE1vZGFsRGVmYXVsdE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbb3JnRGF0YSwgc2V0T3JnRGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG5cclxuICBjb25zdCBsb2FkT3JnRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG9yZ0RhdGFHZXRSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9kYXRhL29yZ0RhdGFcIik7XHJcbiAgICBzZXRPcmdEYXRhKG9yZ0RhdGFHZXRSZXNwb25zZS5kYXRhKTtcclxuICB9XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdChsb2FkT3JnRGF0YSwgW10pO1xyXG5cclxuICBjb25zdCBkZWxldGVPcmdCeUluZGV4ID0gYXN5bmMgKGV2ZW50LCBpbmRleCkgPT57XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgcG9zdFJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2RhdGEvZGVsZXRlT3JnLyR7b3JnRGF0YVtpbmRleF0uSWR9YCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwb3N0UmVzcG9uc2UuZGF0YSk7XHJcbiAgICBhd2FpdCBsb2FkT3JnRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gY29uc3QgW29yZ1ZvbHVudGNvdW50RGF0YSwgc2V0b3JnVm9sdW50Q291bnREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcblxyXG4gIC8vIFJlYWN0LnVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgLy8gICB2YXIgb3JnID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInZoLW9yZ1wiKSk7XHJcbiAgLy8gICBjb25zdCB2b2x1bnRDb3VudERhdGFHZXRSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2RhdGEvb3JnVm9sdW50Q291bnQvJHtvcmcuTmFtZW9mT3JnfWApO1xyXG4gIC8vICAgc2V0b3JnVm9sdW50Q291bnREYXRhKHZvbHVudENvdW50RGF0YUdldFJlc3BvbnNlLmRhdGEpO1xyXG4gIC8vICAgY29uc29sZS5sb2codm9sdW50Q291bnREYXRhR2V0UmVzcG9uc2UuZGF0YSk7XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICB7LyogUGFnZSBjb250ZW50ICovfVxyXG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm10LS03XCIgZmx1aWQ+XHJcbiAgICAgICAgey8qIFRhYmxlICovfVxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJzaGFkb3dcIj5cclxuICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJib3JkZXItMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTBcIj5Pcmdhbml6YXRpb25zPC9oMz5cclxuICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlciB0YWJsZS1mbHVzaFwiIHJlc3BvbnNpdmU+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwidGhlYWQtbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPklkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5OYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5UeXBlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5ObyBPZiBWb2x1bnRlZXJzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5EZXRhaWxzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Db250cm9sPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHtvcmdEYXRhICYmIG9yZ0RhdGEubWFwKChvcmdkYXRhLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtvcmdkYXRhLklkfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgPntvcmdkYXRhLklkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkID57b3JnZGF0YS5OYW1lb2ZPcmd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgPntcIk9SRyBUWVBFXCJ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgPntcIjBcIn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmVcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbERlZmF1bHRPcGVuKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3cgRGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIGlzT3Blbj17bW9kYWxEZWZhdWx0T3Blbn1cclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGU9eygpID0+IHNldE1vZGFsRGVmYXVsdE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCIgbW9kYWwtdGl0bGVcIiBpZD1cIm1vZGFsLXRpdGxlLWRlZmF1bHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtvcmdEYXRhLk5hbWVvZk9yZ31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vZGFsRGVmYXVsdE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49e3RydWV9PsOXPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBcXFxcLS0tICBPcmdhbml6YXRpb25zIERldGFpbHMgIC0tLS8vICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBJZDoge29yZ2RhdGEuSWR9PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgIE5hbWU6IHtvcmdkYXRhLk5hbWVvZk9yZ308YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRW1haWw6IHtvcmdkYXRhLkVtYWlsfTxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQaG9uZSBOdW1iZXI6IHtvcmdkYXRhLnBob25lTnVtYmVyfTxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIG1sLWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbERlZmF1bHRPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvdXRsaW5lIGNvbG9yPVwiZGFuZ2VyXCIgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtkZWxldGVPcmdCeUluZGV4KGV2ZW50LCBpZHgpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlIE9yZ2FuaXphdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L1RhYmxlPlxyXG5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgey8qIERhcmsgdGFibGUgKi99XHJcblxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbk9yZ2FuaXphdGlvbnMubGF5b3V0ID0gQWRtaW47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmdhbml6YXRpb25zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9