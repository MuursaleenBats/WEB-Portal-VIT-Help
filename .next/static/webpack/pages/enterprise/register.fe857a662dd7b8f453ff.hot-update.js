webpackHotUpdate_N_E("pages/enterprise/register",{

/***/ "./pages/enterprise/register.js":
/*!**************************************!*\
  !*** ./pages/enterprise/register.js ***!
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var layouts_Auth_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! layouts/Auth.js */ "./layouts/Auth.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "C:\\Users\\Saad\\Desktop\\WebPortal\\WEB-Portal-VIT-Help\\pages\\enterprise\\register.js";
 // reactstrap components

 // layout for this page




function Register() {
  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {
      var postData, postResponse;
      return C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault(); //console.log(event);

              postData = {
                NameofOrg: event.target[0].value,
                Email: event.target[1].value,
                phoneNumber: parseInt(event.target[2].value),
                password: event.target[3].value
              };
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("http://localhost:3001/data/enterprise", postData);

            case 4:
              postResponse = _context.sent;
              console.log(postResponse.data);

            case 6:
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
      lg: "6",
      md: "8",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
        className: "bg-secondary shadow border-0",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardHeader"], {
          className: "bg-transparent pb-5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "text-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
              children: "Enterprise Sign Up"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
          className: "px-lg-5 py-lg-5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
            role: "form",
            onSubmit: handleSubmit,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
                className: "input-group-alternative mb-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupAddon"], {
                  addonType: "prepend",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupText"], {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                      className: "ni ni-hat-3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
                  placeholder: "Name Of Organization",
                  type: "text"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
                className: "input-group-alternative mb-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupAddon"], {
                  addonType: "prepend",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupText"], {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                      className: "ni ni-email-83"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
                  placeholder: "Email",
                  type: "email",
                  autoComplete: "new-email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
                className: "input-group-alternative mb-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupAddon"], {
                  addonType: "prepend",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupText"], {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                      className: "ni ni-mobile-button"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
                  placeholder: "Phone Number",
                  type: "tel"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
              className: "my-4",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
                xs: "12",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "text-muted",
                    children: ["By Clicking Create Account You will be agree with the", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#pablo",
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      },
                      children: "Terms and Conditions"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "text-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                className: "mt-4",
                color: "primary",
                type: "submit",
                children: "Create account"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_c = Register;
Register.layout = layouts_Auth_js__WEBPACK_IMPORTED_MODULE_5__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW50ZXJwcmlzZS9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJSZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwb3N0RGF0YSIsIk5hbWVvZk9yZyIsInRhcmdldCIsInZhbHVlIiwiRW1haWwiLCJwaG9uZU51bWJlciIsInBhcnNlSW50IiwicGFzc3dvcmQiLCJheGlvcyIsInBvc3QiLCJwb3N0UmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImUiLCJsYXlvdXQiLCJBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7Q0FlQTs7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFDbEIsTUFBTUMsWUFBWTtBQUFBLDhUQUFHLGlCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQkEsbUJBQUssQ0FBQ0MsY0FBTixHQURtQixDQUVuQjs7QUFDTUMsc0JBSGEsR0FHRjtBQUNmQyx5QkFBUyxFQUFHSCxLQUFLLENBQUNJLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQyxLQURiO0FBRWZDLHFCQUFLLEVBQUVOLEtBQUssQ0FBQ0ksTUFBTixDQUFhLENBQWIsRUFBZ0JDLEtBRlI7QUFHZkUsMkJBQVcsRUFBRUMsUUFBUSxDQUFDUixLQUFLLENBQUNJLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQyxLQUFqQixDQUhOO0FBSWZJLHdCQUFRLEVBQUVULEtBQUssQ0FBQ0ksTUFBTixDQUFhLENBQWIsRUFBZ0JDO0FBSlgsZUFIRTtBQUFBO0FBQUEscUJBU1FLLDRDQUFLLENBQUNDLElBQU4sQ0FBVyx1Q0FBWCxFQUFvRFQsUUFBcEQsQ0FUUjs7QUFBQTtBQVNiVSwwQkFUYTtBQVVuQkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixZQUFZLENBQUNHLElBQXpCOztBQVZtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QUFBO0FBQUE7QUFERixtQkFERjtBQTBGRDs7S0F2R1FILFE7QUF5R1RBLFFBQVEsQ0FBQ21CLE1BQVQsR0FBa0JDLHVEQUFsQjtBQUVlcEIsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZW50ZXJwcmlzZS9yZWdpc3Rlci5mZTg1N2E2NjJkZDdiOGY0NTNmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gcmVhY3RzdHJhcCBjb21wb25lbnRzXHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDYXJkQm9keSxcclxuICBGb3JtR3JvdXAsXHJcbiAgRm9ybSxcclxuICBJbnB1dCxcclxuICBJbnB1dEdyb3VwQWRkb24sXHJcbiAgSW5wdXRHcm91cFRleHQsXHJcbiAgSW5wdXRHcm91cCxcclxuICBSb3csXHJcbiAgQ29sLFxyXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbi8vIGxheW91dCBmb3IgdGhpcyBwYWdlXHJcbmltcG9ydCBBdXRoIGZyb20gXCJsYXlvdXRzL0F1dGguanNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZnVuY3Rpb24gUmVnaXN0ZXIoKSB7XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PntcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIGNvbnN0IHBvc3REYXRhID0ge1xyXG4gICAgICBOYW1lb2ZPcmc6ICBldmVudC50YXJnZXRbMF0udmFsdWUsXHJcbiAgICAgIEVtYWlsOiBldmVudC50YXJnZXRbMV0udmFsdWUsXHJcbiAgICAgIHBob25lTnVtYmVyOiBwYXJzZUludChldmVudC50YXJnZXRbMl0udmFsdWUpLFxyXG4gICAgICBwYXNzd29yZDogZXZlbnQudGFyZ2V0WzNdLnZhbHVlXHJcbiAgICB9IFxyXG4gICAgY29uc3QgcG9zdFJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9kYXRhL2VudGVycHJpc2VcIiwgcG9zdERhdGEpO1xyXG4gICAgY29uc29sZS5sb2cocG9zdFJlc3BvbnNlLmRhdGEpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbCBsZz1cIjZcIiBtZD1cIjhcIj5cclxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJiZy1zZWNvbmRhcnkgc2hhZG93IGJvcmRlci0wXCI+XHJcbiAgICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCBwYi01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8c21hbGw+RW50ZXJwcmlzZSBTaWduIFVwPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cInB4LWxnLTUgcHktbGctNVwiPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0gcm9sZT1cImZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYWx0ZXJuYXRpdmUgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cEFkZG9uIGFkZG9uVHlwZT1cInByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1oYXQtM1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwQWRkb24+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIk5hbWUgT2YgT3JnYW5pemF0aW9uXCIgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hbHRlcm5hdGl2ZSBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwQWRkb24gYWRkb25UeXBlPVwicHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLWVtYWlsLTgzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXBUZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXBBZGRvbj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuZXctZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hbHRlcm5hdGl2ZSBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwQWRkb24gYWRkb25UeXBlPVwicHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLW1vYmlsZS1idXR0b25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cEFkZG9uPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBob25lIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFsdGVybmF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwQWRkb24gYWRkb25UeXBlPVwicHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLWxvY2stY2lyY2xlLW9wZW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cEFkZG9uPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXktNFwiPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQnkgQ2xpY2tpbmcgQ3JlYXRlIEFjY291bnQgWW91IHdpbGwgYmUgYWdyZWUgd2l0aCB0aGV7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcGFibG9cIiBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBUZXJtcyBhbmQgQ29uZGl0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtdC00XCIgY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICBDcmVhdGUgYWNjb3VudFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L0NvbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcblJlZ2lzdGVyLmxheW91dCA9IEF1dGg7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==