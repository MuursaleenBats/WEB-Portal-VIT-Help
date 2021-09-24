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

  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect( /*#__PURE__*/Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
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
  })), []);

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
              console.log(postResponse.data);

            case 5:
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
      lineNumber: 60,
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
                lineNumber: 68,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
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
                    lineNumber: 73,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "Type"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "No Of Volunteers"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 76,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "Details"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "Control"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                children: orgData && orgData.map(function (orgdata, idx) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: orgdata.Id
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: orgdata.NameofOrg
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: "ORG TYPE"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 87,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: "0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 88,
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
                        lineNumber: 90,
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
                            lineNumber: 100,
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
                              lineNumber: 109,
                              columnNumber: 25
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 103,
                            columnNumber: 23
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 99,
                          columnNumber: 21
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: " modal-body",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 113,
                            columnNumber: 23
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                            children: ["Id: ", orgdata.Id, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 117,
                              columnNumber: 39
                            }, _this), "Name: ", orgdata.NameofOrg, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 118,
                              columnNumber: 48
                            }, _this), "Email: ", orgdata.Email, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 119,
                              columnNumber: 45
                            }, _this), "Phone Number: ", orgdata.phoneNumber, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 120,
                              columnNumber: 58
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 116,
                            columnNumber: 23
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 112,
                          columnNumber: 21
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: " modal-footer",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                            color: "primary",
                            type: "button",
                            children: "Document"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 125,
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
                            lineNumber: 128,
                            columnNumber: 23
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 124,
                          columnNumber: 21
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 95,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 89,
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
                        lineNumber: 145,
                        columnNumber: 21
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 144,
                      columnNumber: 21
                    }, _this)]
                  }, orgdata.Id, true, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 21
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vb3JnYW5pemF0aW9ucy5qcyJdLCJuYW1lcyI6WyJPcmdhbml6YXRpb25zIiwic2FtIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vZGFsRGVmYXVsdE9wZW4iLCJzZXRNb2RhbERlZmF1bHRPcGVuIiwidW5kZWZpbmVkIiwib3JnRGF0YSIsInNldE9yZ0RhdGEiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsIm9yZ0RhdGFHZXRSZXNwb25zZSIsImRhdGEiLCJkZWxldGVPcmdCeUluZGV4IiwiZXZlbnQiLCJpbmRleCIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsIklkIiwicG9zdFJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIm9yZ2RhdGEiLCJpZHgiLCJOYW1lb2ZPcmciLCJFbWFpbCIsInBob25lTnVtYmVyIiwibGF5b3V0IiwiQWRtaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FxQkE7O0NBRUE7O0FBQ0E7O0FBR0EsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFXO0FBQUE7O0FBQUEsTUFBVEMsR0FBUyxRQUFUQSxHQUFTOztBQUFBLHdCQUNpQkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FEakI7QUFBQTtBQUFBLE1BQ3hCQyxnQkFEd0I7QUFBQSxNQUNOQyxtQkFETTs7QUFBQSx5QkFHREgsNENBQUssQ0FBQ0MsUUFBTixDQUFlRyxTQUFmLENBSEM7QUFBQTtBQUFBLE1BR3hCQyxPQUh3QjtBQUFBLE1BR2ZDLFVBSGU7O0FBSS9CTiw4Q0FBSyxDQUFDTyxTQUFOLDhUQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNtQkMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLG9DQUFWLENBRG5COztBQUFBO0FBQ1JDLDhCQURRO0FBRWRKLHNCQUFV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QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBLGtCQURGO0FBMkdELENBbklEOztHQUFNbkIsYTs7S0FBQUEsYTtBQXFJTkEsYUFBYSxDQUFDNkIsTUFBZCxHQUF1QkMsd0RBQXZCO0FBRWU5Qiw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9vcmdhbml6YXRpb25zLmNmM2NmZDQzOTI3ZjRhMDUyMzliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IERhdGEgZnJvbSBcInZhcmlhYmxlcy92YXJpYWJsZS5qc1wiO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG4vLyByZWFjdHN0cmFwIGNvbXBvbmVudHNcclxuaW1wb3J0IHtcclxuICBCYWRnZSxcclxuICBDYXJkLFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgQ2FyZEZvb3RlcixcclxuICBEcm9wZG93bk1lbnUsXHJcbiAgRHJvcGRvd25JdGVtLFxyXG4gIFVuY29udHJvbGxlZERyb3Bkb3duLFxyXG4gIERyb3Bkb3duVG9nZ2xlLFxyXG4gIE1lZGlhLFxyXG4gIFBhZ2luYXRpb24sXHJcbiAgUGFnaW5hdGlvbkl0ZW0sXHJcbiAgUGFnaW5hdGlvbkxpbmssXHJcbiAgUHJvZ3Jlc3MsXHJcbiAgVGFibGUsXHJcbiAgQ29udGFpbmVyLFxyXG4gIFJvdyxcclxuICBNb2RhbCxcclxuICBVbmNvbnRyb2xsZWRUb29sdGlwLFxyXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbi8vIGxheW91dCBmb3IgdGhpcyBwYWdlXHJcbmltcG9ydCBBZG1pbiBmcm9tIFwibGF5b3V0cy9BZG1pbi5qc1wiO1xyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9IZWFkZXJzL0hlYWRlci5qc1wiO1xyXG5cclxuXHJcbmNvbnN0IE9yZ2FuaXphdGlvbnMgPSAoe3NhbX0pID0+IHtcclxuICBjb25zdCBbbW9kYWxEZWZhdWx0T3Blbiwgc2V0TW9kYWxEZWZhdWx0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtvcmdEYXRhLCBzZXRPcmdEYXRhXSA9IFJlYWN0LnVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgUmVhY3QudXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG9yZ0RhdGFHZXRSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9kYXRhL29yZ0RhdGFcIik7XHJcbiAgICBzZXRPcmdEYXRhKG9yZ0RhdGFHZXRSZXNwb25zZS5kYXRhKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGRlbGV0ZU9yZ0J5SW5kZXggPSBhc3luYyAoZXZlbnQsIGluZGV4KSA9PntcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBwb3N0UmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjMwMDEvZGF0YS9kZWxldGVPcmcvJHtvcmdEYXRhW2luZGV4XS5JZH1gKTtcclxuICAgIGNvbnNvbGUubG9nKHBvc3RSZXNwb25zZS5kYXRhKTtcclxuICB9XHJcblxyXG4gIC8vIGNvbnN0IFtvcmdWb2x1bnRjb3VudERhdGEsIHNldG9yZ1ZvbHVudENvdW50RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG5cclxuICAvLyBSZWFjdC51c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgdmFyIG9yZyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ2aC1vcmdcIikpO1xyXG4gIC8vICAgY29uc3Qgdm9sdW50Q291bnREYXRhR2V0UmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9kYXRhL29yZ1ZvbHVudENvdW50LyR7b3JnLk5hbWVvZk9yZ31gKTtcclxuICAvLyAgIHNldG9yZ1ZvbHVudENvdW50RGF0YSh2b2x1bnRDb3VudERhdGFHZXRSZXNwb25zZS5kYXRhKTtcclxuICAvLyAgIGNvbnNvbGUubG9nKHZvbHVudENvdW50RGF0YUdldFJlc3BvbnNlLmRhdGEpO1xyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgey8qIFBhZ2UgY29udGVudCAqL31cclxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJtdC0tN1wiIGZsdWlkPlxyXG4gICAgICAgIHsvKiBUYWJsZSAqL31cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwic2hhZG93XCI+XHJcbiAgICAgICAgICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwiYm9yZGVyLTBcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0wXCI+T3JnYW5pemF0aW9uczwvaDM+XHJcbiAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxUYWJsZSBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1jZW50ZXIgdGFibGUtZmx1c2hcIiByZXNwb25zaXZlPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInRoZWFkLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5JZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VHlwZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Tm8gT2YgVm9sdW50ZWVyczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+RGV0YWlsczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Q29udHJvbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7b3JnRGF0YSAmJiBvcmdEYXRhLm1hcCgob3JnZGF0YSwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17b3JnZGF0YS5JZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkID57b3JnZGF0YS5JZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCA+e29yZ2RhdGEuTmFtZW9mT3JnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkID57XCJPUkcgVFlQRVwifTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkID57XCIwXCJ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvdXRsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kYWxEZWZhdWx0T3Blbih0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG93IERldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBpc09wZW49e21vZGFsRGVmYXVsdE9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlPXsoKSA9PiBzZXRNb2RhbERlZmF1bHRPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiIG1vZGFsLXRpdGxlXCIgaWQ9XCJtb2RhbC10aXRsZS1kZWZhdWx0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7b3JnRGF0YS5OYW1lb2ZPcmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbERlZmF1bHRPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPXt0cnVlfT7Dlzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogXFxcXC0tLSAgT3JnYW5pemF0aW9ucyBEZXRhaWxzICAtLS0vLyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgSWQ6IHtvcmdkYXRhLklkfTxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICBOYW1lOiB7b3JnZGF0YS5OYW1lb2ZPcmd9PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgIEVtYWlsOiB7b3JnZGF0YS5FbWFpbH08YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUGhvbmUgTnVtYmVyOiB7b3JnZGF0YS5waG9uZU51bWJlcn08YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBtbC1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kYWxEZWZhdWx0T3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb3V0bGluZSBjb2xvcj1cImRhbmdlclwiIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7ZGVsZXRlT3JnQnlJbmRleChldmVudCwgaWR4KX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZSBPcmdhbml6YXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZT5cclxuXHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIHsvKiBEYXJrIHRhYmxlICovfVxyXG5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5Pcmdhbml6YXRpb25zLmxheW91dCA9IEFkbWluO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JnYW5pemF0aW9ucztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==