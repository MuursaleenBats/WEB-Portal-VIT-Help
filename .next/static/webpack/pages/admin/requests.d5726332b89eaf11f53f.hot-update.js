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
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var variables_variable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! variables/variable.js */ "./variables/variable.js");
/* harmony import */ var variables_variable_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(variables_variable_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var layouts_Admin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! layouts/Admin.js */ "./layouts/Admin.js");
/* harmony import */ var components_Headers_Header_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Headers/Header.js */ "./components/Headers/Header.js");




var _jsxFileName = "C:\\Users\\Saad\\Desktop\\WebPortal\\WEB-Portal-VIT-Help\\pages\\admin\\requests.js",
    _this = undefined,
    _s = $RefreshSig$();







axios__WEBPACK_IMPORTED_MODULE_6___default.a.defaults.withCredentials = true; // reactstrap components

 // layout for this page

 // core components



var Requests = function Requests() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      modalDefaultOpen = _React$useState2[0],
      setModalDefaultOpen = _React$useState2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      countryCode = _useState[0],
      setCountryCode = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      className: "mt--7",
      fluid: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
            className: "shadow",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardHeader"], {
              className: "border-0",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "mb-0",
                children: "Requests"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Table"], {
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
                    lineNumber: 59,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "Name Of Organizations"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 60,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "Type"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col",
                    children: "Control"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    scope: "col"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                children: variables_variable_js__WEBPACK_IMPORTED_MODULE_5___default.a.adminPendingRequest.map(function (reqDataP) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: reqDataP.requestId
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: reqDataP.nameOfOrganization
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: reqDataP.typeOfOrganization
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 71,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                        outline: true,
                        onClick: function onClick() {
                          return setModalDefaultOpen(true);
                        },
                        color: "primary",
                        type: "button",
                        children: "Show Details"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 75,
                        columnNumber: 21
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
                        isOpen: modalDefaultOpen,
                        toggle: function toggle() {
                          return setModalDefaultOpen(false);
                        },
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: " modal-header",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                            className: " modal-title",
                            id: "modal-title-default",
                            children: "Organizations Name Here"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 85,
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
                              lineNumber: 94,
                              columnNumber: 25
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 88,
                            columnNumber: 23
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 84,
                          columnNumber: 21
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: " modal-body",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                            children: "\\\\---  Organizations Details  ---//"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 98,
                            columnNumber: 23
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                            children: "\\\\---  Organizations Details  ---//"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 101,
                            columnNumber: 23
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 97,
                          columnNumber: 21
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: " modal-footer",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                            color: "primary",
                            type: "button",
                            children: "Document"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 107,
                            columnNumber: 23
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                            className: " ml-auto",
                            color: "link",
                            onClick: function onClick() {
                              return setModalDefaultOpen(false);
                            },
                            type: "button",
                            children: "Close"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 110,
                            columnNumber: 23
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 106,
                          columnNumber: 21
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 80,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 73,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                        outline: true,
                        color: "success",
                        type: "button",
                        children: "Accept"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 125,
                        columnNumber: 21
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 124,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                        outline: true,
                        color: "danger",
                        type: "button",
                        children: "Reject"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 131,
                        columnNumber: 21
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 130,
                      columnNumber: 21
                    }, _this)]
                  }, reqDataP.requestId, true, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 19
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Requests, "QQxWVEZ5/hVdpVzUCoc7zM4Ynws=");

_c = Requests;
Requests.layout = layouts_Admin_js__WEBPACK_IMPORTED_MODULE_7__["default"];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcmVxdWVzdHMuanMiXSwibmFtZXMiOlsiQXhpb3MiLCJkZWZhdWx0cyIsIndpdGhDcmVkZW50aWFscyIsIlJlcXVlc3RzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vZGFsRGVmYXVsdE9wZW4iLCJzZXRNb2RhbERlZmF1bHRPcGVuIiwiY291bnRyeUNvZGUiLCJzZXRDb3VudHJ5Q29kZSIsIkRhdGEiLCJhZG1pblBlbmRpbmdSZXF1ZXN0IiwibWFwIiwicmVxRGF0YVAiLCJyZXF1ZXN0SWQiLCJuYW1lT2ZPcmdhbml6YXRpb24iLCJ0eXBlT2ZPcmdhbml6YXRpb24iLCJsYXlvdXQiLCJBZG1pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0FBLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsZUFBZixHQUFpQyxJQUFqQyxDLENBR0E7O0NBcUJBOztDQUVBOztBQUNBOztBQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSx3QkFDMkJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRDNCO0FBQUE7QUFBQSxNQUNkQyxnQkFEYztBQUFBLE1BQ0lDLG1CQURKOztBQUFBLGtCQUVlRixzREFBUSxDQUFDLEVBQUQsQ0FGdkI7QUFBQSxNQUVoQkcsV0FGZ0I7QUFBQSxNQUVIQyxjQUZHOztBQU1yQixzQkFDRTtBQUFBLDJCQUdFLHFFQUFDLG9EQUFEO0FBQVcsZUFBUyxFQUFDLE9BQXJCO0FBQTZCLFdBQUssTUFBbEM7QUFBQSw2QkFFRSxxRUFBQyw4Q0FBRDtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsaUNBQ0UscUVBQUMsK0NBQUQ7QUFBTSxxQkFBUyxFQUFDLFFBQWhCO0FBQUEsb0NBQ0UscUVBQUMscURBQUQ7QUFBWSx1QkFBUyxFQUFDLFVBQXRCO0FB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Yjg5ZWFmMTFmNTNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IERhdGEgZnJvbSBcInZhcmlhYmxlcy92YXJpYWJsZS5qc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbkF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG5cclxuLy8gcmVhY3RzdHJhcCBjb21wb25lbnRzXHJcbmltcG9ydCB7XHJcbiAgQmFkZ2UsXHJcbiAgQ2FyZCxcclxuICBDYXJkSGVhZGVyLFxyXG4gIENhcmRGb290ZXIsXHJcbiAgRHJvcGRvd25NZW51LFxyXG4gIERyb3Bkb3duSXRlbSxcclxuICBVbmNvbnRyb2xsZWREcm9wZG93bixcclxuICBEcm9wZG93blRvZ2dsZSxcclxuICBNZWRpYSxcclxuICBQYWdpbmF0aW9uLFxyXG4gIFBhZ2luYXRpb25JdGVtLFxyXG4gIFBhZ2luYXRpb25MaW5rLFxyXG4gIFByb2dyZXNzLFxyXG4gIFRhYmxlLFxyXG4gIENvbnRhaW5lcixcclxuICBSb3csXHJcbiAgTW9kYWwsXHJcbiAgVW5jb250cm9sbGVkVG9vbHRpcCxcclxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG4vLyBsYXlvdXQgZm9yIHRoaXMgcGFnZVxyXG5pbXBvcnQgQWRtaW4gZnJvbSBcImxheW91dHMvQWRtaW4uanNcIjtcclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvSGVhZGVycy9IZWFkZXIuanNcIjtcclxuXHJcbmNvbnN0IFJlcXVlc3RzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttb2RhbERlZmF1bHRPcGVuLCBzZXRNb2RhbERlZmF1bHRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuY29uc3QgW2NvdW50cnlDb2RlLCBzZXRDb3VudHJ5Q29kZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIDxIZWFkZXIgLz4gKi99XHJcbiAgICAgIHsvKiBQYWdlIGNvbnRlbnQgKi99XHJcbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwibXQtLTdcIiBmbHVpZD5cclxuICAgICAgICB7LyogVGFibGUgKi99XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInNoYWRvd1wiPlxyXG4gICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cImJvcmRlci0wXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMFwiPlJlcXVlc3RzPC9oMz5cclxuICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlciB0YWJsZS1mbHVzaFwiIHJlc3BvbnNpdmU+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwidGhlYWQtbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPklkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5OYW1lIE9mIE9yZ2FuaXphdGlvbnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlR5cGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkNvbnRyb2w8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge0RhdGEuYWRtaW5QZW5kaW5nUmVxdWVzdC5tYXAocmVxRGF0YVAgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8dHIga2V5PXtyZXFEYXRhUC5yZXF1ZXN0SWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCA+e3JlcURhdGFQLnJlcXVlc3RJZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCA+e3JlcURhdGFQLm5hbWVPZk9yZ2FuaXphdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCA+e3JlcURhdGFQLnR5cGVPZk9yZ2FuaXphdGlvbn08L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb3V0bGluZVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vZGFsRGVmYXVsdE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvdyBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXttb2RhbERlZmF1bHRPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZT17KCkgPT4gc2V0TW9kYWxEZWZhdWx0T3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIiBtb2RhbC10aXRsZVwiIGlkPVwibW9kYWwtdGl0bGUtZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgT3JnYW5pemF0aW9ucyBOYW1lIEhlcmVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vZGFsRGVmYXVsdE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49e3RydWV9PsOXPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXFwtLS0gIE9yZ2FuaXphdGlvbnMgRGV0YWlscyAgLS0tLy9cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXFxcXC0tLSAgT3JnYW5pemF0aW9ucyBEZXRhaWxzICAtLS0vL1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBtbC1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kYWxEZWZhdWx0T3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgY29sb3I9XCJzdWNjZXNzXCIgdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgY29sb3I9XCJkYW5nZXJcIiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWplY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZT5cclxuXHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIHsvKiBEYXJrIHRhYmxlICovfVxyXG5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5SZXF1ZXN0cy5sYXlvdXQgPSBBZG1pbjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9