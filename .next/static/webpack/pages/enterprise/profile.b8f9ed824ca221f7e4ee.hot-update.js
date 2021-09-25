webpackHotUpdate_N_E("pages/enterprise/profile",{

/***/ "./pages/enterprise/profile.js":
/*!*************************************!*\
  !*** ./pages/enterprise/profile.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var variables_variable_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! variables/variable.js */ "./variables/variable.js");
/* harmony import */ var variables_variable_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(variables_variable_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var layouts_Enterprise_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! layouts/Enterprise.js */ "./layouts/Enterprise.js");
/* harmony import */ var components_Headers_EnterpriseHeader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Headers/EnterpriseHeader.js */ "./components/Headers/EnterpriseHeader.js");







var _jsxFileName = "C:\\Users\\Saad\\Desktop\\WebPortal\\WEB-Portal-VIT-Help\\pages\\enterprise\\profile.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 // reactstrap components

 // layout for this page

 // core components



var Profile = function Profile(_ref) {
  _s();

  var sam = _ref.sam;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(false),
      _React$useState2 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState, 2),
      modalDefaultOpen = _React$useState2[0],
      setModalDefaultOpen = _React$useState2[1];

  var orgData = JSON.parse(window.localStorage.getItem("vh-org"));

  var updateOrg = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {
      var postData, postResponse;
      return C_Users_Saad_Desktop_WebPortal_WEB_Portal_VIT_Help_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              console.log(event);
              postData = _objectSpread(_objectSpread({}, event.target[0].value && {
                NameofOrg: event.target[0].value
              }), event.target[2].value && {
                Email: event.target[2].value
              });
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.patch("http://localhost:3001/data/enterprise/".concat(orgData.NameofOrg), postData);

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

    return function updateOrg(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Headers_EnterpriseHeader_js__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
      role: "form",
      onSubmit: updateOrg,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        form: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          md: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
              children: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
              type: "text",
              name: "name",
              id: "nameOfOrganization",
              placeholder: orgData.NameofOrg
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          md: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
              children: "Type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
              type: "text",
              name: "type",
              id: "typeOfOrganization",
              placeholder: "Type Of Organization"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          md: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
              "for": "exampleAddress",
              children: "Address"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
              type: "text",
              name: "address",
              id: "addressOfOrganization",
              placeholder: orgData.Email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "warning",
        type: "submit" //onClick={updateOrg}
        ,
        children: "Update Details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Profile, "2E3wR8RiQ3WH1+gvBzwodWcH6Uc=");

_c = Profile;
Profile.layout = layouts_Enterprise_js__WEBPACK_IMPORTED_MODULE_10__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW50ZXJwcmlzZS9wcm9maWxlLmpzIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJzYW0iLCJSZWFjdCIsInVzZVN0YXRlIiwibW9kYWxEZWZhdWx0T3BlbiIsInNldE1vZGFsRGVmYXVsdE9wZW4iLCJvcmdEYXRhIiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVwZGF0ZU9yZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicG9zdERhdGEiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk5hbWVvZk9yZyIsIkVtYWlsIiwiYXhpb3MiLCJwYXRjaCIsInBvc3RSZXNwb25zZSIsImRhdGEiLCJsYXlvdXQiLCJFbnRlcnByaXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0F5QkE7O0NBRUE7O0FBQ0E7O0FBR0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBVztBQUFBOztBQUFBLE1BQVRDLEdBQVMsUUFBVEEsR0FBUzs7QUFBQSx3QkFDdUJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRHZCO0FBQUE7QUFBQSxNQUNsQkMsZ0JBRGtCO0FBQUEsTUFDQUMsbUJBREE7O0FBR3pCLE1BQU1DLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsUUFBNUIsQ0FBWCxDQUFoQjs7QUFFQSxNQUFNQyxTQUFTO0FBQUEsK1RBQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCQSxtQkFBSyxDQUFDQyxjQUFOO0FBQ0FDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUNNSSxzQkFIVSxtQ0FJVkosS0FBSyxDQUFDSyxNQUFOLENB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akI7QUFFZTNCLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VudGVycHJpc2UvcHJvZmlsZS5iOGY5ZWQ4MjRjYTIyMWY3ZTRlZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb2wsIEZvcm0sIEZvcm1Hcm91cCwgTGFiZWwsIEZvcm1UZXh0IH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IERhdGEgZnJvbSBcInZhcmlhYmxlcy92YXJpYWJsZS5qc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG4vLyByZWFjdHN0cmFwIGNvbXBvbmVudHNcclxuaW1wb3J0IHtcclxuICBCYWRnZSxcclxuICBDYXJkLFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgQ2FyZEZvb3RlcixcclxuICBEcm9wZG93bk1lbnUsXHJcbiAgRHJvcGRvd25JdGVtLFxyXG4gIFVuY29udHJvbGxlZERyb3Bkb3duLFxyXG4gIERyb3Bkb3duVG9nZ2xlLFxyXG4gIE1lZGlhLFxyXG4gIFBhZ2luYXRpb24sXHJcbiAgUGFnaW5hdGlvbkl0ZW0sXHJcbiAgUGFnaW5hdGlvbkxpbmssXHJcbiAgUHJvZ3Jlc3MsXHJcbiAgVGFibGUsXHJcbiAgSW5wdXQsXHJcbiAgSW5wdXRHcm91cEFkZG9uLFxyXG4gIElucHV0R3JvdXBUZXh0LFxyXG4gIElucHV0R3JvdXAsXHJcbiAgQ29udGFpbmVyLFxyXG4gIFJvdyxcclxuICBNb2RhbCxcclxuICBVbmNvbnRyb2xsZWRUb29sdGlwLFxyXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbi8vIGxheW91dCBmb3IgdGhpcyBwYWdlXHJcbmltcG9ydCBFbnRlcnByaXNlIGZyb20gXCJsYXlvdXRzL0VudGVycHJpc2UuanNcIjtcclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvSGVhZGVycy9FbnRlcnByaXNlSGVhZGVyLmpzXCI7XHJcblxyXG5cclxuY29uc3QgUHJvZmlsZSA9ICh7c2FtfSkgPT4ge1xyXG4gIGNvbnN0IFttb2RhbERlZmF1bHRPcGVuLCBzZXRNb2RhbERlZmF1bHRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgb3JnRGF0YSA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidmgtb3JnXCIpKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlT3JnID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgY29uc3QgcG9zdERhdGEgPSB7XHJcbiAgICAgIC4uLihldmVudC50YXJnZXRbMF0udmFsdWUpICYmIHtOYW1lb2ZPcmc6IGV2ZW50LnRhcmdldFswXS52YWx1ZX0sXHJcbiAgICAgIC8vLi4uKGV2ZW50LnRhcmdldFsxXS52YWx1ZSkgJiYge3Bob25lTnVtYmVyOiBldmVudC50YXJnZXRbMV0udmFsdWV9LFxyXG4gICAgICAuLi4oZXZlbnQudGFyZ2V0WzJdLnZhbHVlKSAmJiB7RW1haWw6IGV2ZW50LnRhcmdldFsyXS52YWx1ZX0sXHJcbiAgICB9XHJcbiAgICBjb25zdCBwb3N0UmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2RhdGEvZW50ZXJwcmlzZS8ke29yZ0RhdGEuTmFtZW9mT3JnfWAsIHBvc3REYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKHBvc3RSZXNwb25zZS5kYXRhKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIHsvKiBQYWdlIGNvbnRlbnQgKi99XHJcblxyXG4gICAgICA8Rm9ybSByb2xlPVwiZm9ybVwiIG9uU3VibWl0PXt1cGRhdGVPcmd9PlxyXG4gICAgICAgICAgPFJvdyBmb3JtPlxyXG4gICAgICAgICAgICA8Q29sIG1kPXs2fT5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsID5OYW1lPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lT2ZPcmdhbml6YXRpb25cIiBwbGFjZWhvbGRlcj17b3JnRGF0YS5OYW1lb2ZPcmd9Lz5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgPlR5cGU8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInR5cGVcIiBpZD1cInR5cGVPZk9yZ2FuaXphdGlvblwiIHBsYWNlaG9sZGVyPVwiVHlwZSBPZiBPcmdhbml6YXRpb25cIiAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgbWQ9ezZ9PlxyXG4gICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgPExhYmVsIGZvcj1cImV4YW1wbGVBZGRyZXNzXCI+QWRkcmVzczwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRyZXNzXCIgaWQ9XCJhZGRyZXNzT2ZPcmdhbml6YXRpb25cIiBwbGFjZWhvbGRlcj17b3JnRGF0YS5FbWFpbH0vPlxyXG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjb2xvcj1cIndhcm5pbmdcIlxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgLy9vbkNsaWNrPXt1cGRhdGVPcmd9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFVwZGF0ZSBEZXRhaWxzXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5Qcm9maWxlLmxheW91dCA9IEVudGVycHJpc2U7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9