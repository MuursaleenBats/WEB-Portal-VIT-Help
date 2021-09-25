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

              if (getResponse.data == null && typeof getResponse.data === "undefined" && getResponse.data.length === null && getResponse.data.length < 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW50ZXJwcmlzZS9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwb3N0RGF0YSIsInBob25lTnVtYmVyIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiYXhpb3MiLCJnZXQiLCJnZXRSZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibGVuZ3RoIiwiYWxlcnQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImxheW91dCIsIkF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztDQWVBOztBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUVmLE1BQU1DLFlBQVk7QUFBQSw4VEFBRyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJBLG1CQUFLLENBQUNDLGNBQU47QUFDUUMsc0JBRlcsR0FFQTtBQUNqQkMsMkJBQVcsRUFBRUMsUUFBUSxDQUFDSixLQUFLLENBQUNLLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQyxLQUFqQixDQURKO0FBRWpCQyx3QkFBUSxFQUFFUCxLQUFLLENBQUNLLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQztBQUZULGVBRkE7QUFBQTtBQUFBLHFCQU1PRSw0Q0FBSyxDQUFDQyxHQUFOLGlEQUFtRFAsUUFBUSxDQUFDQyxXQUE1RCxFQU5QOztBQUFBO0FBTWJPLHlCQU5hO0FBT25CQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLFdBQVcsQ0FBQ0csSUFBeEI7O0FBRUEsa0JBQUdILFdBQVcsQ0FBQ0csSUFBWixJQUFvQixJQUFwQixJQUNELE9BQU9ILFdBQVcsQ0FBQ0csSUFBbkIsS0FBNEIsV0FEM0IsSUFDMENILFdBQVcsQ0FBQ0cs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QUFDRSx5QkFBUyxFQUFDLFlBRFo7QUFFRSxvQkFBSSxFQUFDLDJCQUZQLENBR0U7QUFIRjtBQUFBLHVDQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBN0JGLGVBdUNFO0FBQUssdUJBQVMsRUFBQyxhQUFmO0FBQUEscUNBQ0UscUVBQUMsaURBQUQsQ0FDQTtBQURBO0FBRUEseUJBQVMsRUFBQyxNQUZWO0FBRWlCLHFCQUFLLEVBQUMsU0FGdkI7QUFFaUMsb0JBQUksRUFBQyxRQUZ0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBdkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUEwREUscUVBQUMsOENBQUQ7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSxnQ0FDRSxxRUFBQyw4Q0FBRDtBQUFLLFlBQUUsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRSxxRUFBQyw4Q0FBRDtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUE0QixZQUFFLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUF1RUQ7O0tBMUdRRCxLO0FBNEdUQSxLQUFLLENBQUN5QixNQUFOLEdBQWVDLHVEQUFmO0FBRWUxQixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbnRlcnByaXNlL2xvZ2luLmFhN2NlODRlNDI1OTI3MjIxMjUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyByZWFjdHN0cmFwIGNvbXBvbmVudHNcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ2FyZCxcclxuICBDYXJkSGVhZGVyLFxyXG4gIENhcmRCb2R5LFxyXG4gIEZvcm1Hcm91cCxcclxuICBGb3JtLFxyXG4gIElucHV0LFxyXG4gIElucHV0R3JvdXBBZGRvbixcclxuICBJbnB1dEdyb3VwVGV4dCxcclxuICBJbnB1dEdyb3VwLFxyXG4gIFJvdyxcclxuICBDb2wsXHJcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuLy8gbGF5b3V0IGZvciB0aGlzIHBhZ2VcclxuaW1wb3J0IEF1dGggZnJvbSBcImxheW91dHMvQXV0aC5qc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5mdW5jdGlvbiBMb2dpbigpIHtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PntcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHBvc3REYXRhID0ge1xyXG4gICAgICBwaG9uZU51bWJlcjogcGFyc2VJbnQoZXZlbnQudGFyZ2V0WzBdLnZhbHVlKSxcclxuICAgICAgcGFzc3dvcmQ6IGV2ZW50LnRhcmdldFsxXS52YWx1ZVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0UmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9kYXRhL2VudGVycHJpc2UvJHtwb3N0RGF0YS5waG9uZU51bWJlcn1gKTtcclxuICAgIGNvbnNvbGUubG9nKGdldFJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgIGlmKGdldFJlc3BvbnNlLmRhdGEgPT0gbnVsbCAmJiBcclxuICAgICAgdHlwZW9mIGdldFJlc3BvbnNlLmRhdGEgPT09IFwidW5kZWZpbmVkXCIgJiYgZ2V0UmVzcG9uc2UuZGF0YS5sZW5ndGggPT09IG51bGwgXHJcbiAgICAgICYmIGdldFJlc3BvbnNlLmRhdGEubGVuZ3RoIDwgMCApe1xyXG4gICAgICBhbGVydChcIkVudGVycHJpc2UgZG9lcyBub3QgZXhpc3QuIFBsZWFzZSByZWdpc3RlciBcIik7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBpZihnZXRSZXNwb25zZS5kYXRhLnBhc3N3b3JkID09PSBcIm51bGxcIiAmJiBnZXRSZXNwb25zZS5kYXRhLnBhc3N3b3JkICE9IHBvc3REYXRhLnBhc3N3b3JkICApe1xyXG4gICAgICAgICAgYWxlcnQoXCJJbnZhbGlkIENyZWRlbnRpYWxzXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgLy8gYWxlcnQoXCJnb29kXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidmgtb3JnXCIsIEpTT04uc3RyaW5naWZ5KGdldFJlc3BvbnNlLmRhdGEpKTtcclxuXHJcbiAgICAgICAgLy8gdmFyIG9yZyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ2aC1vcmdcIikpO1xyXG4gICAgICAgIC8vIG9yZy5OYW1lXHJcblxyXG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidmgtb3JnXCIpO1xyXG5cclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1cIi9lbnRlcnByaXNlL2Rhc2hib2FyZFwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbCBsZz1cIjVcIiBtZD1cIjdcIj5cclxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJiZy1zZWNvbmRhcnkgc2hhZG93IGJvcmRlci0wXCI+XHJcbiAgICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCBwYi01XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiPkVudGVycHJpc2U8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwicHgtbGctNSBweS1sZy01XCI+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybSByb2xlPVwiZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYWx0ZXJuYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXBBZGRvbiBhZGRvblR5cGU9XCJwcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXBUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktbW9iaWxlLWJ1dHRvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwQWRkb24+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmUgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFsdGVybmF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwQWRkb24gYWRkb25UeXBlPVwicHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLWxvY2stY2lyY2xlLW9wZW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cEFkZG9uPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPGRpdiA+XHJcblxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCJcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIvZW50ZXJwcmlzZS9SZXNldFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIC8vICBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSAgLy8gTkVFRCBUTyBBU1NJR04gQVBQUk9QUklBVEUgRlVOQ1RJT05cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+Rm9yZ290IHBhc3N3b3JkPzwvc21hbGw+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIC8vaHJlZj1cIi9lbnRlcnByaXNlL2Rhc2hib2FyZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteS00XCIgY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICBTaWduIGluXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgICAgICA8Q29sIHhzPVwiNlwiPlxyXG5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCIgeHM9XCI2XCI+XHJcblxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuTG9naW4ubGF5b3V0ID0gQXV0aDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9