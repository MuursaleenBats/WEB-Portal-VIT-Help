webpackHotUpdate_N_E("pages/admin/login",{

/***/ "./pages/admin/login.js":
/*!******************************!*\
  !*** ./pages/admin/login.js ***!
  \******************************/
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




var _jsxFileName = "C:\\Users\\Saad\\Desktop\\WebPortal\\WEB-Portal-VIT-Help\\pages\\admin\\login.js";
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
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("http://localhost:3001/data/admin/".concat(postData.phoneNumber));

            case 4:
              getResponse = _context.sent;
              console.log(getResponse.data);

              if (getResponse.data === null) {
                alert("Please enter data");
              } else {
                if (getResponse.data[0] === undefined) {
                  alert("Admin Phone Number is not valid ");
                } else {
                  if (getResponse.data[0].pass != postData.password) {
                    alert("Invalid Credentials");
                  } else {
                    window.location.href = "/admin/dashboard";
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
              children: "ADMIN"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
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
                      lineNumber: 64,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
                  placeholder: "Phone Number",
                  type: "tel"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
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
                      lineNumber: 78,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
                  placeholder: "Password",
                  type: "password",
                  autoComplete: "new-password"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
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
                  lineNumber: 95,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "text-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"] //href="/admin/dashboard"
              , {
                className: "my-4",
                color: "primary",
                type: "submit",
                children: "Sign in"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
        className: "mt-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          xs: "6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          className: "text-right",
          xs: "6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicG9zdERhdGEiLCJwaG9uZU51bWJlciIsInBhcnNlSW50IiwidGFyZ2V0IiwidmFsdWUiLCJwYXNzd29yZCIsImF4aW9zIiwiZ2V0IiwiZ2V0UmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImFsZXJ0IiwidW5kZWZpbmVkIiwicGFzcyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImxheW91dCIsIkF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztDQWVBOztBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUNmLE1BQU1DLFlBQVk7QUFBQSw4VEFBRyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJBLG1CQUFLLENBQUNDLGNBQU47QUFDUUMsc0JBRlcsR0FFQTtBQUNqQkMsMkJBQVcsRUFBRUMsUUFBUSxDQUFDSixLQUFLLENBQUNLLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQyxLQUFqQixDQURKO0FBRWpCQyx3QkFBUSxFQUFFUCxLQUFLLENBQUNLLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQztBQUZULGVBRkE7QUFBQTtBQUFBLHFCQU1PRSw0Q0FBSyxDQUFDQyxHQUFOLDRDQUE4Q1AsUUFBUSxDQUFDQyxXQUF2RCxFQU5QOztBQUFBO0FBTWJPLHlCQU5hO0FBT25CQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLFdBQVcsQ0FBQ0csSUFBeEI7O0FBQ0Esa0JBQUdILFdBQVcsQ0FBQ0csSUFBWixLQUFxQixJQUF4QixFQUE2QjtBQUMzQkMscUJBQUssQ0FBQyxtQkFBRCxDQUFMO0FBQ0QsZUFGRCxNQUVLO0FBQ0gsb0JBQUdKLFdBQVcsQ0FBQ0csSUFBWixDQUFpQixDQUFqQixNQUF3QkUs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QSx5QkFBUyxFQUFDLE1BRlY7QUFFaUIscUJBQUssRUFBQyxTQUZ2QjtBQUVpQyxvQkFBSSxFQUFDLFFBRnRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkF2Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQTBERSxxRUFBQyw4Q0FBRDtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGdDQUNFLHFFQUFDLDhDQUFEO0FBQUssWUFBRSxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFLHFFQUFDLDhDQUFEO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQTRCLFlBQUUsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXVFRDs7S0FqR1FELEs7QUFtR1RBLEtBQUssQ0FBQ3NCLE1BQU4sR0FBZUMsdURBQWY7QUFFZXZCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2xvZ2luLjg5ZjQ0YzljZTk2ZWJhYTE4NTE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyByZWFjdHN0cmFwIGNvbXBvbmVudHNcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ2FyZCxcclxuICBDYXJkSGVhZGVyLFxyXG4gIENhcmRCb2R5LFxyXG4gIEZvcm1Hcm91cCxcclxuICBGb3JtLFxyXG4gIElucHV0LFxyXG4gIElucHV0R3JvdXBBZGRvbixcclxuICBJbnB1dEdyb3VwVGV4dCxcclxuICBJbnB1dEdyb3VwLFxyXG4gIFJvdyxcclxuICBDb2wsXHJcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuLy8gbGF5b3V0IGZvciB0aGlzIHBhZ2VcclxuaW1wb3J0IEF1dGggZnJvbSBcImxheW91dHMvQXV0aC5qc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5mdW5jdGlvbiBMb2dpbigpIHtcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+e1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgcG9zdERhdGEgPSB7XHJcbiAgICAgIHBob25lTnVtYmVyOiBwYXJzZUludChldmVudC50YXJnZXRbMF0udmFsdWUpLFxyXG4gICAgICBwYXNzd29yZDogZXZlbnQudGFyZ2V0WzFdLnZhbHVlXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2RhdGEvYWRtaW4vJHtwb3N0RGF0YS5waG9uZU51bWJlcn1gKTtcclxuICAgIGNvbnNvbGUubG9nKGdldFJlc3BvbnNlLmRhdGEpO1xyXG4gICAgaWYoZ2V0UmVzcG9uc2UuZGF0YSA9PT0gbnVsbCl7XHJcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGRhdGFcIik7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgaWYoZ2V0UmVzcG9uc2UuZGF0YVswXSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBhbGVydChcIkFkbWluIFBob25lIE51bWJlciBpcyBub3QgdmFsaWQgXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgaWYoZ2V0UmVzcG9uc2UuZGF0YVswXS5wYXNzICE9IHBvc3REYXRhLnBhc3N3b3JkKXtcclxuICAgICAgICAgICAgYWxlcnQoXCJJbnZhbGlkIENyZWRlbnRpYWxzXCIpO1xyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCIvYWRtaW4vZGFzaGJvYXJkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgIH1cclxuICAgfVxyXG4gfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q29sIGxnPVwiNVwiIG1kPVwiN1wiPlxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImJnLXNlY29uZGFyeSBzaGFkb3cgYm9yZGVyLTBcIj5cclxuICAgICAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IHBiLTVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCI+QURNSU48L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwicHgtbGctNSBweS1sZy01XCI+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybSByb2xlPVwiZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYWx0ZXJuYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXBBZGRvbiBhZGRvblR5cGU9XCJwcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXBUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktbW9iaWxlLWJ1dHRvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwQWRkb24+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmUgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFsdGVybmF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwQWRkb24gYWRkb25UeXBlPVwicHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLWxvY2stY2lyY2xlLW9wZW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cEFkZG9uPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPGRpdiA+XHJcblxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCJcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIvZW50ZXJwcmlzZS9SZXNldFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAvLyAgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0gIC8vIE5FRUQgVE8gQVNTSUdOIEFQUFJPUFJJQVRFIEZVTkNUSU9OXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsPkZvcmdvdCBwYXNzd29yZD88L3NtYWxsPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAvL2hyZWY9XCIvYWRtaW4vZGFzaGJvYXJkXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTRcIiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgIFNpZ24gaW5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm10LTNcIj5cclxuICAgICAgICAgIDxDb2wgeHM9XCI2XCI+XHJcblxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIiB4cz1cIjZcIj5cclxuXHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Db2w+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5Mb2dpbi5sYXlvdXQgPSBBdXRoO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=