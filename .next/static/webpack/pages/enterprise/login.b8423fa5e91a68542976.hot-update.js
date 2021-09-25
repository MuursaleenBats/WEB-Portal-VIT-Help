webpackHotUpdate_N_E("pages/enterprise/login",{

/***/ "./pages/enterprise/login.js":
/*!***********************************!*\
  !*** ./pages/enterprise/login.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var layouts_Auth_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! layouts/Auth.js */ "./layouts/Auth.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "C:\\Users\\Saad\\Desktop\\WebPortal\\WEB-Portal-VIT-Help\\pages\\enterprise\\login.js";
 // reactstrap components

 // layout for this page




function Login() {
  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {
      var postData, getResponse;
      return C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              postData = {
                phoneNumber: parseInt(event.target[0].value),
                password: event.target[1].value
              };
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("http://localhost:3001/data/enterprise/".concat(postData.phoneNumber));

            case 4:
              getResponse = _context.sent;
              console.log(getResponse.data);

              if (getResponse.data === null && !getResponse.data && typeof getResponse.data === "undefined" && getResponse.data.length === null && getResponse.data.length < 0) {
                alert("Enterprise does not exist. Please register ");
              } else {
                if (getResponse.data.password === "null" && getResponse.data.password != postData.password) {
                  alert("Invalid Credentials");
                } else {
                  // alert("good");
                  localStorage.setItem("vh-org", JSON.stringify(getResponse.data)); // var org = JSON.parse(localStorage.getItem("vh-org"));
                  // org.Name
                  // localStorage.removeItem("vh-org");

                  window.location.href = "/enterprise/dashboard";
                }
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      lg: "5",
      md: "7",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
        className: "bg-secondary shadow border-0",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardHeader"], {
          className: "bg-transparent pb-5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "text-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "text-black",
              children: "Enterprise"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
          className: "px-lg-5 py-lg-5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
            role: "form",
            onSubmit: handleSubmit,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
              className: "mb-3",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
                className: "input-group-alternative",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupAddon"], {
                  addonType: "prepend",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupText"], {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                      className: "ni ni-mobile-button"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 73,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
                  placeholder: "Phone Number",
                  type: "tel"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
                className: "input-group-alternative",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupAddon"], {
                  addonType: "prepend",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupText"], {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                      className: "ni ni-lock-circle-open"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 87,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
                  placeholder: "Password",
                  type: "password",
                  autoComplete: "new-password"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "text-black",
                href: "/enterprise/ResetPassword" //  onClick={(e) => e.preventDefault()}  // NEED TO ASSIGN APPROPRIATE FUNCTION
                ,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                  children: "Forgot password?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "text-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"] //href="/enterprise/dashboard"
              , {
                className: "my-4",
                color: "primary",
                type: "submit",
                children: "Sign in"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
        className: "mt-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          xs: "6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          className: "text-right",
          xs: "6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_c = Login;
Login.layout = layouts_Auth_js__WEBPACK_IMPORTED_MODULE_5__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW50ZXJwcmlzZS9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwb3N0RGF0YSIsInBob25lTnVtYmVyIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiYXhpb3MiLCJnZXQiLCJnZXRSZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibGVuZ3RoIiwiYWxlcnQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImxheW91dCIsIkF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztDQWVBOztBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUVmLE1BQU1DLFlBQVk7QUFBQSw4VEFBRyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJBLG1CQUFLLENBQUNDLGNBQU47QUFDUUMsc0JBRlcsR0FFQTtBQUNqQkMsMkJBQVcsRUFBRUMsUUFBUSxDQUFDSixLQUFLLENBQUNLLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQyxLQUFqQixDQURKO0FBRWpCQyx3QkFBUSxFQUFFUCxLQUFLLENBQUNLLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQztBQUZULGVBRkE7QUFBQTtBQUFBLHFCQU1PRSw0Q0FBSyxDQUFDQyxHQUFOLGlEQUFtRFAsUUFBUSxDQUFDQyxXQUE1RCxFQU5QOztBQUFBO0FBTWJPLHlCQU5hO0FBT25CQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLFdBQVcsQ0FBQ0csSUFBeEI7O0FBQ0Esa0JBQUdILFdBQVcsQ0FBQ0csSUFBWixLQUFxQixJQUFyQixJQUE2QixDQUFDSCxXQUFXLENBQUNHLElBQTFDLElBQ0QsT0FBT0gsV0FBVyxDQUFDRyxJQUFuQixL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O0FBQUEsb0JBZkYsZUE2QkU7QUFBQSxxQ0FFQTtBQUNFLHlCQUFTLEVBQUMsWUFEWjtBQUVFLG9CQUFJLEVBQUMsMkJBRlAsQ0FHRTtBQUhGO0FBQUEsdUNBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkE3QkYsZUF1Q0U7QUFBSyx1QkFBUyxFQUFDLGFBQWY7QUFBQSxxQ0FDRSxxRUFBQyxpREFBRCxDQUNBO0FBREE7QUFFQSx5QkFBUyxFQUFDLE1BRlY7QUFFaUIscUJBQUssRUFBQyxTQUZ2QjtBQUVpQyxvQkFBSSxFQUFDLFFBRnRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkF2Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQTBERSxxRUFBQyw4Q0FBRDtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGdDQUNFLHFFQUFDLDhDQUFEO0FBQUssWUFBRSxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFLHFFQUFDLDhDQUFEO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQTRCLFlBQUUsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXVFRDs7S0ExR1FELEs7QUE0R1RBLEtBQUssQ0FBQ3lCLE1BQU4sR0FBZUMsdURBQWY7QUFFZTFCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VudGVycHJpc2UvbG9naW4uYjg0MjNmYTVlOTFhNjg1NDI5NzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIHJlYWN0c3RyYXAgY29tcG9uZW50c1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBDYXJkLFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgQ2FyZEJvZHksXHJcbiAgRm9ybUdyb3VwLFxyXG4gIEZvcm0sXHJcbiAgSW5wdXQsXHJcbiAgSW5wdXRHcm91cEFkZG9uLFxyXG4gIElucHV0R3JvdXBUZXh0LFxyXG4gIElucHV0R3JvdXAsXHJcbiAgUm93LFxyXG4gIENvbCxcclxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG4vLyBsYXlvdXQgZm9yIHRoaXMgcGFnZVxyXG5pbXBvcnQgQXV0aCBmcm9tIFwibGF5b3V0cy9BdXRoLmpzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmZ1bmN0aW9uIExvZ2luKCkge1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+e1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgcG9zdERhdGEgPSB7XHJcbiAgICAgIHBob25lTnVtYmVyOiBwYXJzZUludChldmVudC50YXJnZXRbMF0udmFsdWUpLFxyXG4gICAgICBwYXNzd29yZDogZXZlbnQudGFyZ2V0WzFdLnZhbHVlXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2RhdGEvZW50ZXJwcmlzZS8ke3Bvc3REYXRhLnBob25lTnVtYmVyfWApO1xyXG4gICAgY29uc29sZS5sb2coZ2V0UmVzcG9uc2UuZGF0YSk7XHJcbiAgICBpZihnZXRSZXNwb25zZS5kYXRhID09PSBudWxsICYmICFnZXRSZXNwb25zZS5kYXRhICYmIFxyXG4gICAgICB0eXBlb2YgZ2V0UmVzcG9uc2UuZGF0YSA9PT0gXCJ1bmRlZmluZWRcIiAmJiBnZXRSZXNwb25zZS5kYXRhLmxlbmd0aCA9PT0gbnVsbCBcclxuICAgICAgJiYgZ2V0UmVzcG9uc2UuZGF0YS5sZW5ndGggPCAwICl7XHJcbiAgICAgIGFsZXJ0KFwiRW50ZXJwcmlzZSBkb2VzIG5vdCBleGlzdC4gUGxlYXNlIHJlZ2lzdGVyIFwiKTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGlmKGdldFJlc3BvbnNlLmRhdGEucGFzc3dvcmQgPT09IFwibnVsbFwiICYmIGdldFJlc3BvbnNlLmRhdGEucGFzc3dvcmQgIT0gcG9zdERhdGEucGFzc3dvcmQgICl7XHJcbiAgICAgICAgICBhbGVydChcIkludmFsaWQgQ3JlZGVudGlhbHNcIik7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAvLyBhbGVydChcImdvb2RcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ2aC1vcmdcIiwgSlNPTi5zdHJpbmdpZnkoZ2V0UmVzcG9uc2UuZGF0YSkpO1xyXG5cclxuICAgICAgICAvLyB2YXIgb3JnID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInZoLW9yZ1wiKSk7XHJcbiAgICAgICAgLy8gb3JnLk5hbWVcclxuXHJcbiAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ2aC1vcmdcIik7XHJcblxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiL2VudGVycHJpc2UvZGFzaGJvYXJkXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q29sIGxnPVwiNVwiIG1kPVwiN1wiPlxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImJnLXNlY29uZGFyeSBzaGFkb3cgYm9yZGVyLTBcIj5cclxuICAgICAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IHBiLTVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCI+RW50ZXJwcmlzZTwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJweC1sZy01IHB5LWxnLTVcIj5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtIHJvbGU9XCJmb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hbHRlcm5hdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cEFkZG9uIGFkZG9uVHlwZT1cInByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1tb2JpbGUtYnV0dG9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXBUZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXBBZGRvbj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaG9uZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYWx0ZXJuYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXBBZGRvbiBhZGRvblR5cGU9XCJwcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXBUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktbG9jay1jaXJjbGUtb3BlblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwQWRkb24+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8ZGl2ID5cclxuXHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9lbnRlcnByaXNlL1Jlc2V0UGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgLy8gIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9ICAvLyBORUVEIFRPIEFTU0lHTiBBUFBST1BSSUFURSBGVU5DVElPTlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzbWFsbD5Gb3Jnb3QgcGFzc3dvcmQ/PC9zbWFsbD5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgLy9ocmVmPVwiL2VudGVycHJpc2UvZGFzaGJvYXJkXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTRcIiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgIFNpZ24gaW5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm10LTNcIj5cclxuICAgICAgICAgIDxDb2wgeHM9XCI2XCI+XHJcblxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIiB4cz1cIjZcIj5cclxuXHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Db2w+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5Mb2dpbi5sYXlvdXQgPSBBdXRoO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=