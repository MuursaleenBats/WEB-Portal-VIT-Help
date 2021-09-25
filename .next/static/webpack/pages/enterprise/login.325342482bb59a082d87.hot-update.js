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

              if (getResponse.data === null) {
                alert("Please enter data");
              } else {
                if (getResponse.data === undefined) {
                  alert("Enterprise does not exist. Please register ");
                } else {
                  if (getResponse.data.password != postData.password) {
                    alert("Invalid Credentials");
                  } else {
                    // alert("good");
                    localStorage.setItem("vh-org", JSON.stringify(getResponse.data)); // var org = JSON.parse(localStorage.getItem("vh-org"));
                    // org.Name
                    // localStorage.removeItem("vh-org");

                    window.location.href = "/enterprise/dashboard";
                  }
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
              lineNumber: 65,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
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
                      lineNumber: 75,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
                  placeholder: "Phone Number",
                  type: "tel"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
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
                      lineNumber: 89,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
                  placeholder: "Password",
                  type: "password",
                  autoComplete: "new-password"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
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
                  lineNumber: 106,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
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
                lineNumber: 110,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
        className: "mt-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          xs: "6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          className: "text-right",
          xs: "6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW50ZXJwcmlzZS9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwb3N0RGF0YSIsInBob25lTnVtYmVyIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiYXhpb3MiLCJnZXQiLCJnZXRSZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiYWxlcnQiLCJ1bmRlZmluZWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImxheW91dCIsIkF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztDQWVBOztBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUVmLE1BQU1DLFlBQVk7QUFBQSw4VEFBRyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJBLG1CQUFLLENBQUNDLGNBQU47QUFDUUMsc0JBRlcsR0FFQTtBQUNqQkMsMkJBQVcsRUFBRUMsUUFBUSxDQUFDSixLQUFLLENBQUNLLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQyxLQUFqQixDQURKO0FBRWpCQyx3QkFBUSxFQUFFUCxLQUFLLENBQUNLLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQztBQUZULGVBRkE7QUFBQTtBQUFBLHFCQU1PRSw0Q0FBSyxDQUFDQyxHQUFOLGlEQUFtRFAsUUFBUSxDQUFDQyxXQUE1RCxFQU5QOztBQUFBO0FBTWJPLHlCQU5hO0FBT25CQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLFdBQVcsQ0FBQ0csSUFBeEI7O0FBRUEsa0JBQUdILFdBQVcsQ0FBQ0csSUFBWixLQUFxQixJQUF4QixFQUE2QjtBQUMzQkMscUJBQUssQ0FBQyxtQkFBRCxDQUFMO0FBQ0QsZUFGRCxNQUVLO0FBQ0os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O0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTdCRixlQXVDRTtBQUFLLHVCQUFTLEVBQUMsYUFBZjtBQUFBLHFDQUNFLHFFQUFDLGlEQUFELENBQ0E7QUFEQTtBQUVBLHlCQUFTLEVBQUMsTUFGVjtBQUVpQixxQkFBSyxFQUFDLFNBRnZCO0FBRWlDLG9CQUFJLEVBQUMsUUFGdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXZDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBMERFLHFFQUFDLDhDQUFEO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsZ0NBQ0UscUVBQUMsOENBQUQ7QUFBSyxZQUFFLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUUscUVBQUMsOENBQUQ7QUFBSyxtQkFBUyxFQUFDLFlBQWY7QUFBNEIsWUFBRSxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBdUVEOztLQTVHUUQsSztBQThHVEEsS0FBSyxDQUFDeUIsTUFBTixHQUFlQyx1REFBZjtBQUVlMUIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZW50ZXJwcmlzZS9sb2dpbi4zMjUzNDI0ODJiYjU5YTA4MmQ4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gcmVhY3RzdHJhcCBjb21wb25lbnRzXHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDYXJkQm9keSxcclxuICBGb3JtR3JvdXAsXHJcbiAgRm9ybSxcclxuICBJbnB1dCxcclxuICBJbnB1dEdyb3VwQWRkb24sXHJcbiAgSW5wdXRHcm91cFRleHQsXHJcbiAgSW5wdXRHcm91cCxcclxuICBSb3csXHJcbiAgQ29sLFxyXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbi8vIGxheW91dCBmb3IgdGhpcyBwYWdlXHJcbmltcG9ydCBBdXRoIGZyb20gXCJsYXlvdXRzL0F1dGguanNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZnVuY3Rpb24gTG9naW4oKSB7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT57XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBwb3N0RGF0YSA9IHtcclxuICAgICAgcGhvbmVOdW1iZXI6IHBhcnNlSW50KGV2ZW50LnRhcmdldFswXS52YWx1ZSksXHJcbiAgICAgIHBhc3N3b3JkOiBldmVudC50YXJnZXRbMV0udmFsdWVcclxuICAgIH1cclxuICAgIGNvbnN0IGdldFJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDEvZGF0YS9lbnRlcnByaXNlLyR7cG9zdERhdGEucGhvbmVOdW1iZXJ9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhnZXRSZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICBpZihnZXRSZXNwb25zZS5kYXRhID09PSBudWxsKXtcclxuICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgZGF0YVwiKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgaWYoZ2V0UmVzcG9uc2UuZGF0YSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgYWxlcnQoXCJFbnRlcnByaXNlIGRvZXMgbm90IGV4aXN0LiBQbGVhc2UgcmVnaXN0ZXIgXCIpO1xyXG4gICAgIH1cclxuICAgICBlbHNle1xyXG4gICAgICBpZihnZXRSZXNwb25zZS5kYXRhLnBhc3N3b3JkICE9IHBvc3REYXRhLnBhc3N3b3JkKXtcclxuICAgICAgICAgIGFsZXJ0KFwiSW52YWxpZCBDcmVkZW50aWFsc1wiKTtcclxuICAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAvLyBhbGVydChcImdvb2RcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ2aC1vcmdcIiwgSlNPTi5zdHJpbmdpZnkoZ2V0UmVzcG9uc2UuZGF0YSkpO1xyXG5cclxuICAgICAgICAvLyB2YXIgb3JnID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInZoLW9yZ1wiKSk7XHJcbiAgICAgICAgLy8gb3JnLk5hbWVcclxuXHJcbiAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ2aC1vcmdcIik7XHJcblxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiL2VudGVycHJpc2UvZGFzaGJvYXJkXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb2wgbGc9XCI1XCIgbWQ9XCI3XCI+XHJcbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5IHNoYWRvdyBib3JkZXItMFwiPlxyXG4gICAgICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgcGItNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIj5FbnRlcnByaXNlPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cInB4LWxnLTUgcHktbGctNVwiPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0gcm9sZT1cImZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFsdGVybmF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwQWRkb24gYWRkb25UeXBlPVwicHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLW1vYmlsZS1idXR0b25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cEFkZG9uPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBob25lIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hbHRlcm5hdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cEFkZG9uIGFkZG9uVHlwZT1cInByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1sb2NrLWNpcmNsZS1vcGVuXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXBUZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXBBZGRvbj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuZXctcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxkaXYgPlxyXG5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiL2VudGVycHJpc2UvUmVzZXRQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAvLyAgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0gIC8vIE5FRUQgVE8gQVNTSUdOIEFQUFJPUFJJQVRFIEZVTkNUSU9OXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsPkZvcmdvdCBwYXNzd29yZD88L3NtYWxsPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAvL2hyZWY9XCIvZW50ZXJwcmlzZS9kYXNoYm9hcmRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktNFwiIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgU2lnbiBpblxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXQtM1wiPlxyXG4gICAgICAgICAgPENvbCB4cz1cIjZcIj5cclxuXHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiIHhzPVwiNlwiPlxyXG5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L0NvbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbkxvZ2luLmxheW91dCA9IEF1dGg7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==